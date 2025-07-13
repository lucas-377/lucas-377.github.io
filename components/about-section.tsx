"use client";

import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Zap, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/languageContext";
import Image from "next/image";

const AboutSection = memo(function AboutSection() {
  const { t, isLoading } = useI18n();

  if (isLoading) {
    return (
      <section id="about" className="py-24 bg-muted/30">
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

  const features = [
    {
      icon: Code2,
      title: t("about.features.cleanCode.title"),
      description: t("about.features.cleanCode.description"),
    },
    {
      icon: Zap,
      title: t("about.features.performance.title"),
      description: t("about.features.performance.description"),
    },
    {
      icon: Rocket,
      title: t("about.features.modernStack.title"),
      description: t("about.features.modernStack.description"),
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "PHP",
    "Tailwind CSS",
    "Prime React",
    "Bootstrap",
    "Styled Components",
    "Sass/SCSS",
    "Framer Motion",
    "React Query",
    "React Hook Form",
    "Zod",
    "Vite",
    "Git",
    "Github",
    "Figma",
    "Adobe XD",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            {t("about.badge")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t("about.title")}{" "}
            <span className="gradient-text">{t("about.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("about.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.paragraph1")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.paragraph2")}
              </p>
            </div>

            <div className="relative" style={{ maxWidth: "400px" }}>
              <Image
                src="/me2.jpg"
                alt="Me"
                width={400}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                {t("about.technologiesTitle")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="modern-card glass">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center">
                            <feature.icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export { AboutSection };
