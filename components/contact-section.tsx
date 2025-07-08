"use client"

import { memo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useI18n } from "@/app/providers"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const contactSchema = z.object({
  firstName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  lastName: z.string().min(2, "Sobrenome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
})

type ContactFormData = z.infer<typeof contactSchema>

const ContactSection = memo(function ContactSection() {
  const { t, isLoading } = useI18n()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Form submitted:", data)
      reset()
      // You can add toast notification here
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

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
    )
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
      icon: MapPin,
      title: t("contact.info.location"),
      value: "Pinhas, PR",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-muted/30">
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
            {t("contact.title")} <span className="gradient-text">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("contact.description")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass modern-card">
              <CardHeader>
                <CardTitle className="text-2xl">{t("contact.form.title")}</CardTitle>
                <CardDescription className="text-base">{t("contact.form.description")}</CardDescription>
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
                        className={`glass ${errors.firstName ? "border-destructive" : ""}`}
                      />
                      {errors.firstName && (
                        <div className="flex items-center gap-1 text-sm text-destructive">
                          <AlertCircle className="h-4 w-4" />
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
                        className={`glass ${errors.lastName ? "border-destructive" : ""}`}
                      />
                      {errors.lastName && (
                        <div className="flex items-center gap-1 text-sm text-destructive">
                          <AlertCircle className="h-4 w-4" />
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
                      className={`glass ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 text-sm text-destructive">
                        <AlertCircle className="h-4 w-4" />
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
                      className={`glass ${errors.subject ? "border-destructive" : ""}`}
                    />
                    {errors.subject && (
                      <div className="flex items-center gap-1 text-sm text-destructive">
                        <AlertCircle className="h-4 w-4" />
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
                      className={`min-h-[120px] glass ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && (
                      <div className="flex items-center gap-1 text-sm text-destructive">
                        <AlertCircle className="h-4 w-4" />
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-semibold mb-6">{t("contact.info.title")}</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t("contact.info.description")}</p>
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
                          <h4 className="font-semibold text-lg">{info.title}</h4>
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
                <h4 className="font-semibold text-xl mb-3">{t("contact.availability.title")}</h4>
                <p className="text-white/90 text-base leading-relaxed">{t("contact.availability.description")}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export { ContactSection }
