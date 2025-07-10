"use client";

import { useTheme } from "next-themes";
import { useI18n } from "@/contexts/languageContext";
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
  const { t, isLoading } = useI18n();

  const themeOptions = [
    {
      value: "light",
      icon: <Sun size={16} className="opacity-60 mr-2" aria-hidden="true" />,
      label: t("theme.light"),
    },
    {
      value: "dark",
      icon: <Moon size={16} className="opacity-60 mr-2" aria-hidden="true" />,
      label: t("theme.dark"),
    },
    {
      value: "system",
      icon: (
        <Monitor size={16} className="opacity-60 mr-2" aria-hidden="true" />
      ),
      label: t("theme.system"),
    },
  ];

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

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
    toast.success(t("toast.themeSet").replace("{theme}", t(`theme.${theme}`)));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          aria-label={t("theme.system") || "Select theme"}
          className="cursor-pointer"
          disabled={isLoading}
        >
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-32 border-border" align="end">
        {themeOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => handleThemeChange(option.value)}
            className={`cursor-pointer ${
              currentTheme === option.value ? "bg-accent" : ""
            }`}
          >
            {option.icon}
            <span>{option.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
