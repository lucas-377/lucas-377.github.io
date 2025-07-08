"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"
import { useI18n } from "@/app/providers"

const Footer = memo(function Footer() {
  const { t, isLoading } = useI18n()

  if (isLoading) {
    return (
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="h-8 w-48 bg-muted rounded animate-pulse mb-4" />
              <div className="h-20 w-full bg-muted rounded animate-pulse mb-6" />
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Lucas Santana</h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full glass hover:bg-primary/10 pulse-on-hover">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full glass hover:bg-primary/10 pulse-on-hover">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full glass hover:bg-primary/10 pulse-on-hover">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full glass hover:bg-primary/10 pulse-on-hover">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">{t("footer.services")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">{t("footer.servicesList.frontend")}</li>
              <li className="text-muted-foreground">{t("footer.servicesList.react")}</li>
              <li className="text-muted-foreground">{t("footer.servicesList.uiux")}</li>
              <li className="text-muted-foreground">{t("footer.servicesList.performance")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="flex items-center">
            &copy; 2024 Lucas Santana. {t("footer.madeWith")} <Heart className="w-4 h-4 mx-1 text-red-500" />{" "}
            {t("footer.using")}
          </p>
          <p className="mt-2 sm:mt-0">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
})

export { Footer }
