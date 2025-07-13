"use client";

import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/contexts/languageContext";

const ExperienceSection = memo(function ExperienceSection() {
  const { t, isLoading } = useI18n();

  if (isLoading) {
    return (
      <section id="experience" className="py-24 bg-muted/30">
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

  const experiences = [
    {
      company: "LEME Inteligência Forense",
      role: t("experience.experienceList.leme.role"),
      period: t("experience.experienceList.leme.period"),
      location: "Pinhais, PR",
      logo: "/companies/leme.jpg",
      description: t("experience.experienceList.leme.description"),
      achievements: [
        t("experience.experienceList.leme.achievements.0"),
        t("experience.experienceList.leme.achievements.1"),
        t("experience.experienceList.leme.achievements.2"),
        t("experience.experienceList.leme.achievements.3"),
        t("experience.experienceList.leme.achievements.4"),
        t("experience.experienceList.leme.achievements.5"),
      ],
      technologies: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "D3.js",
        "Yii2",
        "Bootstrap",
        "PostgreSQL",
        "Wordpress",
      ],
      projects: [
        {
          name: "Website LEME",
          url: "https://lemeforense.com.br/",
        },
        {
          name: "Blog LEME",
          url: "https://blog.lemeforense.com.br/",
        },
        {
          name: "Website Central das Certidões",
          url: "https://centraldascertidoes.com.br/",
        },
        {
          name: "Blog Central das Certidões",
          url: "https://blog.centraldascertidoes.com.br/",
        },
        {
          name: "Brand Guide Central das Certidões",
          url: "https://marca.centraldascertidoes.com.br/",
        },
      ],
      current: true,
    },
    {
      company: "Agência RED",
      role: t("experience.experienceList.red.role"),
      period: t("experience.experienceList.red.period"),
      location: "Curitiba, PR",
      logo: "/companies/red.jpg",
      description: t("experience.experienceList.red.description"),
      achievements: [
        t("experience.experienceList.red.achievements.0"),
        t("experience.experienceList.red.achievements.1"),
        t("experience.experienceList.red.achievements.2"),
        t("experience.experienceList.red.achievements.3"),
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Sass", "PHP"],
      projects: [],
      current: false,
    },
    {
      company: "Freelance",
      role: t("experience.experienceList.freelance.role"),
      period: t("experience.experienceList.freelance.period"),
      location: t("experience.experienceList.freelance.location"),
      logo: "/companies/freela.jpg",
      description: t("experience.experienceList.freelance.description"),
      achievements: [
        t("experience.experienceList.freelance.achievements.0"),
        t("experience.experienceList.freelance.achievements.1"),
        t("experience.experienceList.freelance.achievements.2"),
      ],
      technologies: [
        "React",
        "WordPress",
        "Vue.js",
        "Next.js",
        "Tailwind CSS",
        "PHP",
      ],
      projects: [
        {
          name: "Innove",
          url: "https://www.innoveconsultores.com.br/",
        },
        {
          name: "Onde Ficar na Ilha",
          url: "https://ondeficarnailha.com.br/",
        },
        {
          name: "Blog Onde Ficar na Ilha",
          url: "https://blog.ondeficarnailha.com.br/",
        },
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            {t("experience.badge")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t("experience.title")}{" "}
            <span className="gradient-text">
              {t("experience.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("experience.description")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`glass modern-card ${
                  exp.current ? "border-primary/20 animated-border" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Image
                          src={exp.logo || "/placeholder.svg"}
                          alt={`${exp.company} logo`}
                          width={60}
                          height={60}
                          className="rounded-lg border border-border"
                        />
                        {exp.current && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-2xl flex items-center gap-2">
                          {exp.company}
                          {exp.current && (
                            <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                              {t("experience.current")}
                            </Badge>
                          )}
                        </CardTitle>
                        <div className="text-lg font-semibold text-primary mt-1">
                          {exp.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 md:ml-auto">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3">
                      {t("experience.achievements")}:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      {t("experience.technologies")}:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {exp.projects.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3">
                        {t("experience.projects")}:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.projects.map((project, i) => (
                          <Button
                            key={i}
                            variant="outline"
                            size="sm"
                            className="glass pulse-on-hover group bg-transparent"
                            asChild
                          >
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                              {project.name}
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export { ExperienceSection };
