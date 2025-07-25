"use client";

import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useI18n } from "@/contexts/languageContext";
import Image from "next/image";

const Footer = memo(function Footer() {
  const { t, isLoading } = useI18n();

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
    );
  }

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Image
              src="/logo.svg"
              alt="LS Logo"
              width={250}
              height={55}
              className="dark:[filter:invert(1)_brightness(2)] mb-4"
              priority
            />
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full glass hover:bg-primary/10 pulse-on-hover"
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
                asChild
              >
                <a href="mailto:lucas_377@hotmail.com">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">
                {t("footer.servicesList.frontend")}
              </li>
              <li className="text-muted-foreground">
                {t("footer.servicesList.react")}
              </li>
              <li className="text-muted-foreground">
                {t("footer.servicesList.uiux")}
              </li>
              <li className="text-muted-foreground">
                {t("footer.servicesList.performance")}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="flex flex-col sm:flex-row items-center">
            &copy; {new Date().getFullYear()} Lucas Santana.{" "}
            {t("footer.madeWith")}{" "}
            <Heart className="w-4 h-4 mx-1 text-red-500" /> {t("footer.using")}
          </p>
          <p className="mt-8 sm:mt-0">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
});

export { Footer };
