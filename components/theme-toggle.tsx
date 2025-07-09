"use client";

import { useTheme } from "next-themes";
import { useI18n } from "@/app/providers";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme: currentTheme, resolvedTheme } = useTheme();
  const { t } = useI18n();

  let icon = <Monitor size={16} aria-hidden="true" />;
  if (currentTheme === "light") {
    icon = <Sun size={16} aria-hidden="true" />;
  } else if (currentTheme === "dark") {
    icon = <Moon size={16} aria-hidden="true" />;
  } else if (currentTheme === "system") {
    if (resolvedTheme === "dark") {
      icon = <Moon size={16} aria-hidden="true" />;
    } else if (resolvedTheme === "light") {
      icon = <Sun size={16} aria-hidden="true" />;
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          aria-label={t("theme.system") || "Select theme"}
        >
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-32">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={currentTheme === "light" ? "bg-accent" : ""}
        >
          <Sun size={16} className="opacity-60 mr-2" aria-hidden="true" />
          <span>{t("theme.light")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={currentTheme === "dark" ? "bg-accent" : ""}
        >
          <Moon size={16} className="opacity-60 mr-2" aria-hidden="true" />
          <span>{t("theme.dark")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={currentTheme === "system" ? "bg-accent" : ""}
        >
          <Monitor size={16} className="opacity-60 mr-2" aria-hidden="true" />
          <span>{t("theme.system")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
