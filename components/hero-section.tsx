"use client";

import { memo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/contexts/languageContext";
import Image from "next/image";
import Link from "next/link";
import { DonutMinigame } from "@/components/donut-minigame";

const HeroSection = memo(function HeroSection() {
  const { t, language, isLoading } = useI18n();
  const [showMinigame, setShowMinigame] = useState(false);

  const handleImageDoubleClick = () => {
    setShowMinigame(true);
  };

  if (isLoading) {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="h-8 w-64 bg-muted rounded-full animate-pulse mb-8 mx-auto" />
            <div className="h-20 w-full bg-muted rounded-lg animate-pulse mb-6" />
            <div className="h-12 w-3/4 bg-muted rounded-lg animate-pulse mb-4 mx-auto" />
            <div className="h-6 w-full bg-muted rounded-lg animate-pulse mb-16 mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Optimized background elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse [animation-duration:10s]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-orange-300/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-400/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
              >
                <span className="relative flex size-2 mr-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
                </span>
                {t("hero.badge")}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                {t("hero.title")}{" "}
                <span className="gradient-text">Lucas Santana</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-4">
                  {t("hero.subtitle")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  {t("hero.description")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="pulse-on-hover group bg-gradient-primary border-0"
                >
                  <Link href="#projects">{t("hero.viewWork")}</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="glass pulse-on-hover group bg-transparent"
                  asChild
                >
                  <Link
                    href={`/files/curriculo-lucas-santana-${language}.pdf`}
                    download
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {t("hero.downloadCV")}
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center lg:justify-start space-x-6"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full glass hover:bg-primary/10 pulse-on-hover"
                  aria-label="GitHub"
                  asChild
                >
                  <a
                    href="https://github.com/lucas-377"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full glass hover:bg-primary/10 pulse-on-hover"
                  aria-label="LinkedIn"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/lucas377/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full glass hover:bg-primary/10 pulse-on-hover"
                  aria-label="Email"
                  asChild
                >
                  <a href="mailto:lucas_377@hotmail.com">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse [animation-duration:10s]"></div>
                <Image
                  src="/me.jpg"
                  alt="Lucas Santana - Front-End Engineer"
                  width={500}
                  height={500}
                  className="relative z-10 w-full h-auto rounded-full border-4 border-primary/20 shadow-2xl"
                  priority
                  onDoubleClick={handleImageDoubleClick}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to explore */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-muted-foreground">
            {t("hero.scrollToExplore")}
          </span>
          <ArrowDown className="h-6 w-6 animate-bounce text-primary" />
        </div>
      </motion.div>

      <AnimatePresence>
        {showMinigame && (
          <DonutMinigame onClose={() => setShowMinigame(false)} />
        )}
      </AnimatePresence>
    </section>
  );
});

export { HeroSection };
