"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Cog, Shield, TrendingUp, Zap } from "lucide-react";
import { SectionHeader, FeatureCard } from "./shared";

const StarsBackground = dynamic(() => import("@/components/ui/stars-background"), {
  ssr: false,
});

const solutions = [
  {
    icon: Zap,
    title: "Automatización de procesos internos",
    description: "Digitalizamos y conectamos tus flujos críticos (ventas, compras, inventario, cobros) para reducir tiempos y errores.",
  },
  {
    icon: Cog,
    title: "Sistemas web a la medida",
    description: "Aplicaciones y paneles hechos a tu proceso, integrados con tus herramientas actuales.",
  },
  {
    icon: Shield,
    title: "Velocidad y seguridad en tu sitio",
    description: "Mejoramos desempeño (Core Web Vitals) y buenas prácticas de seguridad para más conversión y menos caídas.",
  },
  {
    icon: TrendingUp,
    title: "Continuidad y escalabilidad",
    description: "Planes de continuidad (BCP/DR) y arquitectura lista para crecer sin fricciones.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-32 relative bg-muted/30 overflow-hidden">
      <Suspense fallback={null}>
        <StarsBackground />
      </Suspense>
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Nuestra propuesta"
          description="Diseñamos y construimos soluciones a la medida para que tu operación sea más rápida, clara y confiable."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              hoverEffect={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
