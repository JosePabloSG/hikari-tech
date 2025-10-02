"use client"

import { CheckCircle, Clock, MessageCircle, Shield } from "lucide-react";
import { Button } from "../ui/button";
import { FormField } from "../ui/form-field";
import { SubmitStatus } from "../ui/submit-status";
import { SectionHeader, GridPattern } from "./shared";
import { useContactForm } from "@/hooks/use-contact-form";

export default function CTA() {
  const { form, isSubmitting, submitStatus, handleSubmit, formState } = useContactForm();
  const { register, formState: { errors } } = form;

  return (
    <section id="contacto" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Removed orange blur circles for cleaner look */}
      </div>

      {/* Grid Pattern Background */}
      <GridPattern size={60} opacity={0.25} />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">

          <SectionHeader title="Contacto" description="Contanos sobre tu situación actual y te ayudamos a encontrar la mejor solución tecnológica." />

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border">
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
                  className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-semibold py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl pulse-glow group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <MessageCircle className="w-5 h-5" />
                    {isSubmitting ? "Enviando..." : "Enviar consulta"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
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
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-muted/80 group-hover:scale-110 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-foreground" />
              </div>
              <div className="text-center">
                <h3 className="font-bold font-poppins text-foreground mb-1">Sin compromiso</h3>
                <p className="text-sm text-muted-foreground font-inter">Diagnóstico completamente gratuito</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-muted/80 group-hover:scale-110 transition-all duration-300">
                <Clock className="w-8 h-8 text-foreground" />
              </div>
              <div className="text-center">
                <h3 className="font-bold font-poppins text-foreground mb-1">Respuesta rápida</h3>
                <p className="text-sm text-muted-foreground font-inter">Te contactamos en menos de 24 horas</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-muted/80 group-hover:scale-110 transition-all duration-300">
                <Shield className="w-8 h-8 text-foreground" />
              </div>
              <div className="text-center">
                <h3 className="font-bold font-poppins text-foreground mb-1">100% Costarricense</h3>
                <p className="text-sm text-muted-foreground font-inter">Entendemos tu mercado y necesidades</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}