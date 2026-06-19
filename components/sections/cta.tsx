"use client"

import { CheckCircle, Mail, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { FormField } from "../ui/form-field";
import { SubmitStatus } from "../ui/submit-status";
import { SectionHeader } from "./shared";
import { useContactForm } from "@/hooks/use-contact-form";

const reassurances = [
  "Diagnóstico gratuito, sin compromiso",
  "Te respondemos en menos de 24 horas",
  "Trato directo, sin intermediarios",
];

export default function CTA() {
  const { form, isSubmitting, submitStatus, handleSubmit, formState } = useContactForm();
  const { register, formState: { errors } } = form;

  return (
    <section id="contacto" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Contacto"
          description="Contanos sobre tu situación actual y te ayudamos a encontrar la mejor solución tecnológica."
          className="text-center max-w-2xl mx-auto"
        />

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
          {/* Direct contact — at least as prominent as the form */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border flex flex-col h-full">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold font-poppins text-foreground tracking-tight">
                ¿Prefería escribirnos directo?
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed text-[0.938rem]">
                Mandanos un correo contándonos tu situación. Lo lee una persona, no un formulario automático.
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="cursor-pointer h-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium text-base mt-6 px-6 py-4 rounded-xl transition-all duration-200 w-full"
            >
              <a href="mailto:info@hikaricr.tech">
                <Mail className="w-4.5 h-4.5" />
                info@hikaricr.tech
              </a>
            </Button>

            <ul className="space-y-3 mt-8 pt-8 border-t border-border">
              {reassurances.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-inter text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact form */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <FormField
                {...register("name")}
                id="name"
                label="Nombre completo"
                placeholder="Tu nombre"
                error={errors.name?.message}
                disabled={isSubmitting}
              />

              <FormField
                {...register("email")}
                id="email"
                type="email"
                label="Correo electrónico"
                placeholder="tu@empresa.com"
                error={errors.email?.message}
                disabled={isSubmitting}
              />

              <FormField
                {...register("description")}
                id="description"
                variant="textarea"
                rows={4}
                label="Descripción de la consulta"
                placeholder="Contanos sobre tu situación actual, qué procesos querés mejorar o qué problemas tecnológicos tenés..."
                error={errors.description?.message}
                disabled={isSubmitting}
              />

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || !formState.isValid}
                className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium py-4 text-base rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                <span className="flex items-center justify-center gap-2.5">
                  <MessageCircle className="w-4.5 h-4.5" />
                  {isSubmitting ? "Enviando..." : "Enviar consulta"}
                </span>
              </Button>

              <SubmitStatus status={submitStatus} isSubmitting={isSubmitting} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
