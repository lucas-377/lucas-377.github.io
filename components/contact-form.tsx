"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send } from "lucide-react";
import { useI18n } from "@/contexts/languageContext";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbjzpbnv";

const ContactForm = () => {
  const { t } = useI18n();

  const contactSchema = z.object({
    firstName: z.string().min(2, t("formHelpers.firstName.min")),
    lastName: z.string().min(2, t("formHelpers.lastName.min")),
    email: z.string().email(t("formHelpers.email.invalid")),
    subject: z.string().min(5, t("formHelpers.subject.min")),
    message: z.string().min(10, t("formHelpers.message.min")),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        toast.success(t("formHelpers.toast.success"));
      } else {
        toast.error(t("formHelpers.toast.error"));
      }
    } catch (error) {
      toast.error(t("formHelpers.toast.networkError"));
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Card className="glass modern-card lg:sticky lg:top-17">
      <CardHeader>
        <CardTitle className="text-2xl">{t("contact.form.title")}</CardTitle>
        <CardDescription className="text-base">
          {t("contact.form.description")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">{t("contact.form.firstName")}</Label>
              <Input
                id="firstName"
                {...register("firstName")}
                placeholder={t("contact.form.placeholders.firstName")}
                className={`${
                  errors.firstName ? "border-destructive" : "glass"
                }`}
              />
              {errors.firstName && (
                <div className="flex items-center gap-1 text-sm text-destructive">
                  {errors.firstName.message}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">{t("contact.form.lastName")}</Label>
              <Input
                id="lastName"
                {...register("lastName")}
                placeholder={t("contact.form.placeholders.lastName")}
                className={`${
                  errors.lastName ? "border-destructive" : "glass"
                }`}
              />
              {errors.lastName && (
                <div className="flex items-center gap-1 text-sm text-destructive">
                  {errors.lastName.message}
                </div>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t("contact.form.email")}</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder={t("contact.form.placeholders.email")}
              className={`${errors.email ? "border-destructive" : "glass"}`}
            />
            {errors.email && (
              <div className="flex items-center gap-1 text-sm text-destructive">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">{t("contact.form.subject")}</Label>
            <Input
              id="subject"
              {...register("subject")}
              placeholder={t("contact.form.placeholders.subject")}
              className={`${errors.subject ? "border-destructive" : "glass"}`}
            />
            {errors.subject && (
              <div className="flex items-center gap-1 text-sm text-destructive">
                {errors.subject.message}
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t("contact.form.message")}</Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder={t("contact.form.messagePlaceholder")}
              className={`min-h-[120px] ${
                errors.message ? "border-destructive" : "glass"
              }`}
            />
            {errors.message && (
              <div className="flex items-center gap-1 text-sm text-destructive">
                {errors.message.message}
              </div>
            )}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full pulse-on-hover group bg-gradient-primary border-0"
          >
            <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            {isSubmitting ? "Enviando..." : t("contact.form.send")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export { ContactForm };
