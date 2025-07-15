import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  description: string;
  achievements: string[];
  technologies: string[];
  projects: { name: string; url: string }[];
  current: boolean;
}

interface ExperienceCardProps {
  exp: Experience;
  t: (key: string) => string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, t }) => {
  return (
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
          <h4 className="font-semibold mb-3">{t("experience.achievements")}</h4>
          <ul className="space-y-2">
            {exp.achievements.map((achievement: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">{t("experience.technologies")}</h4>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech: string) => (
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
            <h4 className="font-semibold mb-3">{t("experience.projects")}</h4>
            <div className="flex flex-wrap gap-3">
              {exp.projects.map(
                (project: { name: string; url: string }, i: number) => (
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
                )
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
