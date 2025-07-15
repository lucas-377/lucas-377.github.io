"use client";

import { memo } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/contexts/languageContext";

const ProjectsSection = memo(function ProjectsSection() {
  const { t, isLoading } = useI18n();

  if (isLoading) {
    return (
      <section id="projects" className="py-24">
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

  const projects = [
    {
      title: t("projects.projectsList.leme.title"),
      description: t("projects.projectsList.leme.description"),
      image: "/projects/leme.jpg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Yii2",
        "Styled Components",
        "JWT",
      ],
      liveUrl: "https://lemeforense.com.br/",
      githubUrl: null,
      featured: true,
    },
    {
      title: t("projects.projectsList.central.title"),
      description: t("projects.projectsList.central.description"),
      image: "/projects/central.jpg",
      technologies: [
        "Yii2",
        "HTML 5",
        "CSS3",
        "Bootstrap",
        "jQuery",
        "PostgreSQL",
      ],
      liveUrl: "https://centraldascertidoes.com.br/",
      githubUrl: null,
      featured: true,
    },
    {
      title: t("projects.projectsList.innove.title"),
      description: t("projects.projectsList.innove.description"),
      image: "/projects/innove.jpg",
      technologies: [
        "Laravel",
        "HTML 5",
        "CSS3",
        "Bootstrap",
        "jQuery",
        "MySQL",
      ],
      liveUrl: "https://www.innoveconsultores.com.br/",
      githubUrl: null,
      featured: true,
    },
    {
      title: t("projects.projectsList.mapa.title"),
      description: t("projects.projectsList.mapa.description"),
      image: "/projects/mapa.jpg",
      technologies: [
        "React",
        "D3.js",
        "Styled Components",
        "React Hook Forms",
        "Zod",
        "Vite",
        "ReactQuery",
      ],
      liveUrl: null,
      githubUrl: null,
      featured: true,
    },
    {
      title: t("projects.projectsList.centralBlog.title"),
      description: t("projects.projectsList.centralBlog.description"),
      image: "/projects/central-blog.jpg",
      technologies: ["Wordpress", "CSS3", "HTML5", "jQuery"],
      liveUrl: "https://blog.centraldascertidoes.com.br/",
      githubUrl: null,
      featured: true,
    },
    {
      title: t("projects.projectsList.ofni.title"),
      description: t("projects.projectsList.ofni.description"),
      image: "/projects/ofni.jpg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Styled Components",
        "Shadcn/UI",
        "Yii2",
        "JWT",
      ],
      liveUrl: "https://ondeficarnailha.com.br/",
      githubUrl: null,
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            {t("projects.badge")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t("projects.title")}{" "}
            <span className="gradient-text">
              {t("projects.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("projects.description")}
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`py-0 overflow-hidden modern-card glass ${
                  project.featured ? "border-primary/20 animated-border" : ""
                }`}
              >
                <div
                  className={`grid ${
                    project.featured ? "lg:grid-cols-2" : "md:grid-cols-2"
                  } gap-0`}
                >
                  <div className="relative overflow-hidden group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-primary text-white border-0">
                        {t("projects.featured")}
                      </Badge>
                    )}
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 glass pulse-on-hover group bg-transparent"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            {t("projects.code")}
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="flex-1 pulse-on-hover group bg-gradient-primary border-0"
                        >
                          <a
                            className="flex"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {t("projects.liveDemo")}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="glass pulse-on-hover bg-transparent"
            asChild
          >
            <a
              href="https://github.com/lucas-377?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              {t("projects.viewAllProjects")}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
});

export { ProjectsSection };
