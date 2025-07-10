"use client";

import { useI18n, languages } from "@/app/providers";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { memo, useRef, useState, useEffect } from "react";
import { toast } from "sonner";

const LanguageSwitcher = memo(function LanguageSwitcher() {
  const { t, language, setLanguage, isLoading } = useI18n();
  const [pendingLanguage, setPendingLanguage] = useState<string | null>(null);

  useEffect(() => {
    if (pendingLanguage && language === pendingLanguage) {
      const lang = languages.find((l) => l.code === language);
      if (lang) {
        toast.success(
          t("toast.languageSet").replace("{language}", t(lang.name))
        );
      }
      setPendingLanguage(null);
    }
  }, [language, pendingLanguage, t]);

  if (isLoading) {
    return (
      <Button
        variant="outline"
        size="icon"
        aria-label="Select language"
        disabled
      >
        <Globe size={16} aria-hidden="true" />
      </Button>
    );
  }

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          aria-label="Select language"
          className="cursor-pointer"
        >
          <span className="text-lg">
            {currentLanguage?.flag || <Globe size={16} aria-hidden="true" />}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-32 border-border" align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code);
              setPendingLanguage(lang.code);
            }}
            className={`cursor-pointer ${
              language === lang.code ? "bg-accent" : ""
            }`}
          >
            <span className="mr-2 text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

export { LanguageSwitcher };
