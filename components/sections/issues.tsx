"use client";

import { BarChart3, Clock, Globe, Wrench } from "lucide-react";
import { ListRow } from "./shared";

const problems = [
  {
    icon: Clock,
    title: "Procesos manuales que consumen tiempo",
    description: "Horas en Excel y WhatsApp, doble digitación y errores que encarecen la operación.",
  },
  {
    icon: Globe,
    title: "Webs lentas o desactualizadas",
    description: "Páginas que cargan lento o no reflejan la oferta real, perdiendo clientes potenciales.",
  },
  {
    icon: Wrench,
    title: "Aplicaciones internas ineficientes",
    description: "Herramientas que no se ajustan al proceso real y obligan a soluciones temporales.",
  },
  {
    icon: BarChart3,
    title: "Falta de automatización y control",
    description: "Datos dispersos, poca trazabilidad y decisiones a ciegas.",
  },
];

export default function Issues() {
  return (
    <section id="issues" className="relative overflow-hidden py-24 lg:py-32">
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start space-y-5">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-foreground tracking-[-0.025em] text-balance">
              Lo que vemos una y otra vez en empresas costarricenses
            </h2>
            <p className="text-muted-foreground font-inter leading-relaxed max-w-sm">
              Si te identificás con alguno de estos puntos, no estás solo — y tiene arreglo.
            </p>
          </div>

          <div className="divide-y divide-border">
            {problems.map((problem) => (
              <ListRow key={problem.title} icon={problem.icon} title={problem.title} description={problem.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
