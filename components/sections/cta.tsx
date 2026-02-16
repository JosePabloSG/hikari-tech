"use client"

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { CheckCircle, Clock, MessageCircle, Shield } from "lucide-react";
import { Button } from "../ui/button";
import { FormField } from "../ui/form-field";
import { SubmitStatus } from "../ui/submit-status";
import { SectionHeader } from "./shared";
import { useContactForm } from "@/hooks/use-contact-form";

const StarsBackground = dynamic(() => import("@/components/ui/stars-background"), {
  ssr: false,
});

export default function CTA() {
  const { form, isSubmitting, submitStatus, handleSubmit, formState } = useContactForm();
  const { register, formState: { errors } } = form;

  return (
    <section id="contacto" className="py-20 lg:py-32 relative overflow-hidden">
      <Suspense fallback={null}>
        <StarsBackground />
      </Suspense>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <SectionHeader title="Contacto" description="Contanos sobre tu situación actual y te ayudamos a encontrar la mejor solución tecnológica." />

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

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

                <SubmitStatus
                  status={submitStatus}
                  isSubmitting={isSubmitting}
                />
              </form>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold font-poppins text-foreground text-sm tracking-tight mb-0.5">Sin compromiso</h3>
                <p className="text-sm text-muted-foreground font-inter">Diagnóstico completamente gratuito</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <Clock className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold font-poppins text-foreground text-sm tracking-tight mb-0.5">Respuesta rápida</h3>
                <p className="text-sm text-muted-foreground font-inter">Te contactamos en menos de 24 horas</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <Shield className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold font-poppins text-foreground text-sm tracking-tight mb-0.5">100% Costarricense</h3>
                <p className="text-sm text-muted-foreground font-inter">Entendemos tu mercado y necesidades</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
