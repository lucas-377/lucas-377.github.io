"use client";

import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/languageContext";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = memo(function TestimonialsSection() {
  const { t, isLoading } = useI18n();

  const testimonials = [
    {
      name: "William Brepohl",
      role: t("testimonials.testimonialsList.williamBrepohl.role"),
      company: "LEME Inteligência Forense",
      image: "/testimonials/william-brepohl.jpg",
      quote: t("testimonials.testimonialsList.williamBrepohl.quote"),
      rating: 5,
    },
    {
      name: "Leonardo Damigo",
      role: t("testimonials.testimonialsList.leonardoDamigo.role"),
      company: "LEME Inteligência Forense",
      image: "/testimonials/leonardo-damigo.jpg",
      quote: t("testimonials.testimonialsList.leonardoDamigo.quote"),
      rating: 5,
    },
  ];

  if (isLoading) {
    return (
      <section id="testimonials" className="py-24">
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

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            {t("testimonials.badge")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t("testimonials.title")}{" "}
            <span className="gradient-text">
              {t("testimonials.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("testimonials.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/1"
                >
                  <Card className="glass h-full relative">
                    <CardContent className="p-8 md:p-12 flex flex-col justify-between h-full">
                      <div className="absolute top-6 right-6">
                        <Quote className="h-10 w-10 md:h-12 md:w-12 text-primary/20" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-center gap-1 mb-6">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary"
                              />
                            )
                          )}
                        </div>

                        <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic font-light text-center">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>

                      <div className="flex flex-col items-center gap-4">
                        <Avatar className="h-14 w-14 md:h-16 md:w-16 border-2 border-primary/20">
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback className="bg-gradient-primary text-white text-lg">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                          <div className="font-semibold text-lg text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm md:text-base text-muted-foreground">
                            {testimonial.role} • {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass pulse-on-hover bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:text-primary -left-4 md:-left-12" />
            <CarouselNext className="glass pulse-on-hover bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:text-primary -right-4 md:-right-12" />
          </Carousel>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            {t("testimonials.autoplayNote") ||
              "Testimonials auto-advance every 5 seconds"}
          </p>
        </motion.div>
      </div>
    </section>
  );
});

export { TestimonialsSection };
