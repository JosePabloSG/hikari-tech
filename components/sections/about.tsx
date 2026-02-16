"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { CheckCircle, Globe, Shield, TrendingUp, Zap } from "lucide-react";
import { SectionHeader } from "./shared";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";

const StarsBackground = dynamic(() => import("@/components/ui/stars-background"), {
  ssr: false,
});

export default function About() {
  const { theme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  const getLogoSrc = () => {
    if (!mounted) return "/icons/hikari_dark.svg";
    const currentTheme = resolvedTheme || theme;
    return currentTheme === "dark" ? "/icons/hikari_dark.svg" : "/icons/hikari_light.svg";
  };

  return (
    <section id="about" className="py-20 lg:py-32 relative bg-muted/30 overflow-hidden">
      <Suspense fallback={null}>
        <StarsBackground />
      </Suspense>
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Nuestra Identidad"
          description="Conoce la historia, valores y visión que nos impulsa a transformar empresas costarricenses."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto h-auto lg:h-[600px]">
          {/* Logo and Company Info - Large Square */}
          <div className="col-span-4 lg:col-span-2 row-span-2 group bg-card rounded-2xl p-8 lg:p-8 border border-border hover:border-primary/30 transition-colors duration-300 flex flex-col justify-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Image src={getLogoSrc()} alt="HIKARI TECH" width={100} height={100} className="p-2" />
              </div>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold font-poppins text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                HIKARI TECH
              </h3>
              <p className="text-[0.938rem] text-muted-foreground font-inter leading-relaxed">
                Empresa costarricense especializada en soluciones tecnológicas para empresas.
              </p>
            </div>
          </div>

          {/* Mission - Wide Rectangle */}
          <div className="col-span-4 row-span-1 group bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors duration-300 relative">
            <div className="flex items-start gap-4 h-full">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                <Globe className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold font-poppins text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                  Misión
                </h3>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                  Ayudamos a empresas de Costa Rica a superar la ineficiencia mediante soluciones
                  tecnológicas confiables.
                </p>
              </div>
            </div>
          </div>

          {/* Vision - Wide Rectangle */}
          <div className="col-span-4 row-span-1 group bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors duration-300 relative">
            <div className="flex items-start gap-4 h-full">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                <TrendingUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold font-poppins text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                  Visión
                </h3>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                  Convertirnos en el referente en innovación tecnológica en Costa Rica, liderando la implementación de
                  IA y tecnologías modernas.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          {/* Excellence */}
          <div className="col-span-2 lg:col-span-2 row-span-1 group bg-card rounded-xl p-6 lg:p-5 border border-border hover:border-primary/30 transition-colors duration-300">
            <div className="flex flex-col h-full justify-start pt-2">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <CheckCircle className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h4 className="text-base font-semibold font-poppins text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                  Excelencia
                </h4>
              </div>
              <p className="text-sm font-inter text-muted-foreground leading-relaxed">
                Altos estándares técnicos y de diseño.
              </p>
            </div>
          </div>

          {/* Transparency */}
          <div className="col-span-2 lg:col-span-2 row-span-1 group bg-card rounded-xl p-6 lg:p-5 border border-border hover:border-primary/30 transition-colors duration-300">
            <div className="flex flex-col h-full justify-start pt-2">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <Shield className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h4 className="text-base font-semibold font-poppins text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                  Transparencia
                </h4>
              </div>
              <p className="text-sm font-inter text-muted-foreground leading-relaxed">
                Comunicación abierta y honesta.
              </p>
            </div>
          </div>

          {/* Innovation */}
          <div className="col-span-4 lg:col-span-2 row-span-1 group bg-card rounded-xl p-6 lg:p-5 border border-border hover:border-primary/30 transition-colors duration-300">
            <div className="flex flex-col h-full justify-start pt-2">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <Zap className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h4 className="text-base font-semibold font-poppins text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                  Innovación continua
                </h4>
              </div>
              <p className="text-sm font-inter text-muted-foreground leading-relaxed">
                Exploramos nuevas tecnologías y metodologías constantemente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
