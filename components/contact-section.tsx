"use client";

import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, FileDownIcon } from "lucide-react";
import { motion } from "framer-motion";
import { languages, useI18n } from "@/contexts/languageContext";
import { ContactForm } from "@/components/contact-form";
import { Button } from "./ui/button";

const ContactSection = memo(function ContactSection() {
  const { t, isLoading } = useI18n();

  if (isLoading) {
    return (
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="h-8 w-32 bg-muted rounded-full animate-pulse mb-6 mx-auto" />
            <div className="h-12 w-96 bg-muted rounded-lg animate-pulse mx-auto mb-6" />
            <div className="h-6 w-[600px] bg-muted rounded-lg animate-pulse mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: "lucas_377@hotmail.com",
      href: "mailto:lucas_377@hotmail.com",
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: "+55 (41) 99102-1157",
      href: "tel:+5541991021157",
    },
    {
      icon: FileDownIcon,
      title: t("hero.downloadCV"),
      value: (
        <div className="mt-1 flex flex-col sm:flex-row gap-4">
          {languages.map((lang) => (
            <Button
              variant="outline"
              asChild
              key={lang.code}
              className="glass pulse-on-hover group"
            >
              <a href={`/files/cv-lucas-santana-${lang.code}.pdf`} download>
                {lang.flag} {lang.name}
              </a>
            </Button>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section id="contact" className="pt-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            {t("contact.badge")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t("contact.title")}{" "}
            <span className="gradient-text">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="relative grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-semibold mb-6">
                {t("contact.info.title")}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("contact.info.description")}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass modern-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">
                            {info.title}
                          </h4>
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors text-base"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="bg-gradient-primary text-white glass border-0">
              <CardContent className="p-8">
                <h4 className="font-semibold text-xl mb-3">
                  {t("contact.availability.title")}
                </h4>
                <p className="text-white/90 text-base leading-relaxed">
                  {t("contact.availability.description")}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="overflow-hidden shadow-lg mt-8">
          <iframe
            title="Pinhais, PR Location"
            src="https://www.google.com/maps?q=Pinhais,+PR&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
});

export { ContactSection };
