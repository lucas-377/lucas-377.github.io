"use client";

import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "@/contexts/languageContext";
import { ExperienceCard } from "./experience-card";

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

  // Timeline animation setup
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
        {/* Mobile: only show full width cards */}
        <div className="md:hidden space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ExperienceCard exp={exp} t={t} />
            </motion.div>
          ))}
        </div>
        {/* Desktop: timeline layout */}
        <div ref={timelineRef} className="relative hidden md:block">
          {/* Timeline vertical bar (centered on desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 z-0 flex flex-col">
            {/* Animated fill bar */}
            <motion.div
              className="timeline-element w-full bg-gradient-to-b from-primary/20 via-primary/80 to-primary rounded-full origin-top absolute"
              style={{
                height: "100%",
                scaleY: scaleY,
              }}
            />
          </div>
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 1;
              return (
                <div
                  key={index}
                  className="relative grid grid-cols-[1fr_64px_1fr] items-center"
                >
                  {/* Left card (odd indices) */}
                  <div className={isLeft ? "flex justify-end" : ""}>
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.7,
                          ease: "easeOut",
                          delay: index * 0.15,
                        }}
                        viewport={{ amount: 0.3, once: true }}
                      >
                        <ExperienceCard exp={exp} t={t} />
                      </motion.div>
                    )}
                  </div>
                  {/* Timeline dot (center column) */}
                  <div className="flex justify-center items-center relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: index * 0.15,
                      }}
                      viewport={{ amount: 0.3, once: true }}
                      className={`timeline-element w-6 h-6 rounded-full border-4 ${
                        exp.current
                          ? "border-green-500 bg-green-500"
                          : "border-primary bg-background"
                      } flex items-center justify-center`}
                    ></motion.div>
                  </div>
                  {/* Right card (even indices) */}
                  <div className={!isLeft ? "flex justify-start" : ""}>
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.7,
                          ease: "easeOut",
                          delay: index * 0.15,
                        }}
                        viewport={{ amount: 0.3, once: true }}
                      >
                        <ExperienceCard exp={exp} t={t} />
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

export { ExperienceSection };
