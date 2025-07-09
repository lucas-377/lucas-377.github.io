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
import { toast } from "sonner";

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
          className="cursor-pointer"
        >
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-32 border-border" align="end">
        <DropdownMenuItem
          onClick={() => {
            setTheme("light");
            toast.success("Theme changed", {
              description: `Theme set to ${currentTheme}`,
            });
          }}
          className={`cursor-pointer ${
            currentTheme === "light" ? "bg-accent" : ""
          }`}
        >
          <Sun size={16} className="opacity-60 mr-2" aria-hidden="true" />
          <span>{t("theme.light")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("dark");
            toast.success("Theme changed", {
              description: `Theme set to ${currentTheme}`,
            });
          }}
          className={`cursor-pointer ${
            currentTheme === "dark" ? "bg-accent" : ""
          }`}
        >
          <Moon size={16} className="opacity-60 mr-2" aria-hidden="true" />
          <span>{t("theme.dark")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("system");
            toast.success("Theme changed", {
              description: `Theme set to ${currentTheme}`,
            });
          }}
          className={`cursor-pointer ${
            currentTheme === "system" ? "bg-accent" : ""
          }`}
        >
          <Monitor size={16} className="opacity-60 mr-2" aria-hidden="true" />
          <span>{t("theme.system")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
