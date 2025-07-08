"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"
import { useI18n, languages } from "@/app/providers"

const LanguageSwitcher = memo(function LanguageSwitcher() {
  const { language, setLanguage, isLoading } = useI18n()

  if (isLoading) {
    return (
      <Button variant="ghost" size="sm" className="h-9 px-3" disabled>
        <Languages className="h-4 w-4 mr-2" />
        <span className="text-sm">🇧🇷</span>
      </Button>
    )
  }

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 px-3">
          <Languages className="h-4 w-4 mr-2" />
          <span className="text-sm">{currentLanguage?.flag}</span>
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-accent" : ""}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
})

export { LanguageSwitcher }
