"use client";

import { CheckCircle, Rocket, Shield } from "lucide-react";
import { SectionHeader } from "./shared";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";

const values = [
  {
    icon: CheckCircle,
    title: "Excelencia",
    description: "Altos estándares técnicos y de diseño en cada entrega.",
  },
  {
    icon: Shield,
    title: "Transparencia",
    description: "Comunicación abierta y honesta, sin letra pequeña.",
  },
  {
    icon: Rocket,
    title: "Innovación continua",
    description: "Exploramos nuevas tecnologías y metodologías constantemente.",
  },
];

export default function About() {
  const { theme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  const getLogoSrc = () => {
    if (!mounted) return "/icons/hikari_dark.svg";
    const currentTheme = resolvedTheme || theme;
    return currentTheme === "dark" ? "/icons/hikari_dark.svg" : "/icons/hikari_light.svg";
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Quiénes somos"
          description="Conocé la historia y los valores que nos impulsan a transformar empresas costarricenses."
        />

        <div className="max-w-4xl mx-auto space-y-14">
          <p className="text-2xl lg:text-3xl font-poppins font-semibold text-foreground leading-snug tracking-tight text-balance text-center">
            Ayudamos a empresas costarricenses a dejar atrás la ineficiencia con tecnología en la que pueden confiar.
          </p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 border-t border-border pt-12">
            <div className="flex items-center gap-4">
              <Image src={getLogoSrc()} alt="HIKARI TECH" width={48} height={48} />
              <div>
                <h3 className="font-semibold font-poppins text-foreground tracking-tight">HIKARI TECH</h3>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                  Empresa costarricense especializada en soluciones tecnológicas para empresas.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold font-poppins text-foreground tracking-tight mb-2">Visión</h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                Ser el referente en innovación tecnológica en Costa Rica, liderando la adopción de IA y herramientas
                modernas sin perder el trato cercano de un equipo local.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border border-t border-border pt-12">
            {values.map((value) => (
              <div key={value.title} className="sm:px-8 first:sm:pl-0 last:sm:pr-0 py-6 sm:py-0 space-y-2">
                <value.icon className="w-5 h-5 text-primary" />
                <h4 className="font-semibold font-poppins text-foreground tracking-tight">{value.title}</h4>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
