"use client";

import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/languageContext";

const SkillsSection = memo(function SkillsSection() {
  const { t, isLoading } = useI18n();

  if (isLoading) {
    return (
      <section id="skills" className="py-24 bg-muted/30">
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

  const skillCategories = [
    {
      title: t("skills.categories.frontend"),
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Vue.js",
        "Yii2",
        "Wordpress",
      ],
    },
    {
      title: t("skills.categories.styling"),
      skills: [
        "Tailwind CSS",
        "CSS3",
        "Sass/SCSS",
        "Framer Motion",
        "Bootstrap",
        "PrimeReact",
        "Styled Components",
        "Shadcn/UI",
      ],
    },
    {
      title: t("skills.categories.tools"),
      skills: ["Git", "GitHub", "Vite", "Adobe XD", "Figma", "Jest", "Cypress"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            {t("skills.badge")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t("skills.title")}{" "}
            <span className="gradient-text">{t("skills.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("skills.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass modern-card h-full">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-primary"></div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-3 py-1 text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export { SkillsSection };
