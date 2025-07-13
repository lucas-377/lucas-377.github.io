"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";

interface Donut {
  id: number;
  x: number;
  y: number;
  type: "chocolate" | "other";
  speed: number;
}

interface Player {
  x: number;
  y: number;
}

const DonutMinigame = ({ onClose }: { onClose: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [donuts, setDonuts] = useState<Donut[]>([]);
  const [player, setPlayer] = useState<Player>({ x: 50, y: 80 });
  const [gameOver, setGameOver] = useState(false);
  const [keys, setKeys] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute timer

  const playerRef = useRef(player);
  const donutsRef = useRef<Donut[]>([]);
  const isPlayingRef = useRef(isPlaying);
  const livesRef = useRef(lives);
  const scoreRef = useRef(score);

  // Keep refs in sync
  useEffect(() => {
    playerRef.current = player;
  }, [player]);
  useEffect(() => {
    donutsRef.current = donuts;
  }, [donuts]);
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);
  useEffect(() => {
    livesRef.current = lives;
  }, [lives]);
  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;
  const PLAYER_SIZE = 40;
  const DONUT_SIZE = 30;
  const PLAYER_Y = GAME_HEIGHT - PLAYER_SIZE - 10; // 10px margin from bottom

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlayingRef.current) return;

      setKeys((prev) => new Set([...prev, e.key]));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeys((prev) => {
        const newKeys = new Set(prev);
        newKeys.delete(e.key);
        return newKeys;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Update player position (left/right only, fixed y)
  useEffect(() => {
    if (!isPlaying) return;

    const moveSpeed = 15;
    setPlayer((prev) => {
      let newX = prev.x;
      // Only allow left/right movement
      if (keys.has("ArrowLeft") || keys.has("a")) {
        newX = Math.max(0, prev.x - moveSpeed);
      }
      if (keys.has("ArrowRight") || keys.has("d")) {
        newX = Math.min(GAME_WIDTH - PLAYER_SIZE, prev.x + moveSpeed);
      }
      // y is always fixed
      return { x: newX, y: PLAYER_Y };
    });
  }, [keys, isPlaying]);

  // Spawn donuts (interval)
  useEffect(() => {
    if (!isPlaying) return;

    const spawnDonut = () => {
      const newDonut: Donut = {
        id: Date.now() + Math.random(),
        x: Math.random() * (GAME_WIDTH - DONUT_SIZE),
        y: -DONUT_SIZE,
        type: Math.random() < 0.3 ? "chocolate" : "other",
        speed: 2 + Math.random() * 3,
      };
      setDonuts((prev) => [...prev, newDonut]);
    };

    const spawnInterval = setInterval(spawnDonut, 1500);
    return () => clearInterval(spawnInterval);
  }, [isPlaying]);

  // Game loop with requestAnimationFrame
  useEffect(() => {
    if (!isPlaying) return;
    let animationFrame: number;
    const loop = () => {
      setDonuts((prevDonuts) => {
        const updated: Donut[] = [];
        let scoreDelta = 0;
        let livesDelta = 0;
        for (const donut of prevDonuts) {
          const newY = donut.y + donut.speed;
          // Check collision
          const collision =
            donut.x < playerRef.current.x + PLAYER_SIZE &&
            donut.x + DONUT_SIZE > playerRef.current.x &&
            newY < playerRef.current.y + PLAYER_SIZE &&
            newY + DONUT_SIZE > playerRef.current.y;
          if (collision) {
            if (donut.type === "chocolate") {
              scoreDelta += 10;
            } else {
              livesDelta -= 1;
            }
            continue; // Remove this donut
          }
          // Remove donuts that fall off screen
          if (newY < GAME_HEIGHT + DONUT_SIZE) {
            updated.push({ ...donut, y: newY });
          }
        }
        if (scoreDelta) setScore((s) => s + scoreDelta);
        if (livesDelta) setLives((l) => l + livesDelta);
        return updated;
      });
      animationFrame = requestAnimationFrame(loop);
    };
    animationFrame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPlaying]);

  // Timer effect
  useEffect(() => {
    if (!isPlaying) return;
    if (gameOver) return;
    if (timeLeft <= 0) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, gameOver, timeLeft]);

  // Check game over (by lives)
  useEffect(() => {
    if (lives <= 0) {
      setGameOver(true);
      setIsPlaying(false);
    }
  }, [lives]);

  const startGame = useCallback(() => {
    setScore(0);
    setLives(3);
    setDonuts([]);
    setPlayer({ x: 50, y: PLAYER_Y });
    setGameOver(false);
    setTimeLeft(60);
    setIsPlaying(true);
  }, []);

  const handleClose = () => {
    setIsPlaying(false);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative bg-background border border-border rounded-lg shadow-2xl p-6 max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-primary">🍩 Tânia Donuts</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="hover:bg-destructive/10"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Game Stats */}
        <div className="flex justify-between items-center mb-4 text-sm">
          <div className="flex items-center gap-4">
            <span className="text-green-500">Score: {score}</span>
            <span
              className="flex items-center text-red-500"
              aria-label={`Lives: ${lives}`}
            >
              Lives:
              {Array.from({ length: lives }).map((_, i) => (
                <span key={i} className="text-xl">
                  ❤️
                </span>
              ))}
            </span>
            <span className="text-blue-500">Time: {timeLeft}s</span>
          </div>
          <div className="text-muted-foreground">
            Use arrow keys or A/D to move
          </div>
        </div>

        {/* Game Area */}
        <div className="relative bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-border rounded-lg overflow-hidden">
          <div
            className="relative w-full h-[600px]"
            style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
          >
            {/* Player */}
            <motion.div
              className="absolute rounded-full shadow-lg"
              style={{
                width: PLAYER_SIZE,
                height: PLAYER_SIZE,
                left: player.x,
                top: PLAYER_Y,
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/taninha.png"
                  width={PLAYER_SIZE}
                  height={PLAYER_SIZE}
                  alt="Tânia d'Arc"
                />
              </div>
            </motion.div>

            {/* Donuts */}
            <AnimatePresence>
              {donuts.map((donut) => (
                <motion.div
                  key={donut.id}
                  className="absolute"
                  style={{
                    width: DONUT_SIZE,
                    height: DONUT_SIZE,
                    left: donut.x,
                    top: donut.y,
                  }}
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  exit={{ scale: 0, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full flex items-center justify-center text-2xl">
                    {donut.type === "chocolate" ? "🍩" : "🥯"}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Game Over Overlay */}
            {gameOver && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center"
              >
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Game Over!</h3>
                  <p className="text-xl mb-6">Final Score: {score}</p>
                  <Button onClick={startGame} className="bg-primary">
                    Play Again
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Start Screen */}
            {!isPlaying && !gameOver && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center"
              >
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    🍩 Tânia Donuts v2
                  </h3>
                  <p className="text-lg mb-6 max-w-md">
                    Catch the chocolate donuts (🍩) and avoid the other donuts
                    (🥯)! Use arrow keys or A/D to move. You have 1 minute!
                  </p>
                  <Button onClick={startGame} className="bg-primary">
                    Start Game
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-4 text-sm text-muted-foreground text-center">
          <p>🍩 = +10 points | 🥯 = -1 life</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export { DonutMinigame };
