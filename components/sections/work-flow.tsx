"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Code, Ear, HeadphonesIcon, PenTool } from "lucide-react";
import { SectionHeader } from "./shared";

const StarsBackground = dynamic(() => import("@/components/ui/stars-background"), {
  ssr: false,
});

const steps = [
  {
    icon: Ear,
    number: "01",
    label: "Diagnóstico inicial",
    title: "Escuchamos tu necesidad",
    description: "Entendemos tu proceso actual, identificamos áreas de mejora y definimos objetivos claros. Una conversación profunda para conocer tu realidad.",
  },
  {
    icon: PenTool,
    number: "02",
    label: "Propuesta detallada",
    title: "Diseñamos una propuesta clara",
    description: "Creamos un plan detallado con alcance, tiempos y costos transparentes. Sin sorpresas, todo por escrito y fácil de entender.",
  },
  {
    icon: Code,
    number: "03",
    label: "Desarrollo iterativo",
    title: "Desarrollamos con calidad y velocidad",
    description: "Construimos la solución con entregas parciales para que veas el progreso y puedas ajustar sobre la marcha.",
  },
  {
    icon: HeadphonesIcon,
    number: "04",
    label: "Soporte continuo",
    title: "Acompañamos con soporte continuo",
    description: "Mantenimiento, actualizaciones y evolución de tu solución para que siempre esté al día y funcione perfectamente.",
  },
];

export default function WorkFlow() {
  return (
    <section id="workflow" className="py-20 lg:py-32 relative overflow-hidden">
      <Suspense fallback={null}>
        <StarsBackground />
      </Suspense>
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Cómo trabajamos"
          description="Un proceso simple y transparente que te da seguridad y orden desde el primer día."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connection Line — dashed */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-border transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 1;

              return (
                <div key={index} className="group">
                  {/* Mobile Layout */}
                  <div className="md:hidden space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 bg-card rounded-xl flex items-center justify-center border border-border group-hover:border-primary/30 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                        <span className="absolute -top-2 -right-2 text-[10px] font-bold font-poppins text-primary bg-card border border-border rounded-full w-6 h-6 flex items-center justify-center">
                          {step.number}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-6 h-px bg-border" />
                        <span className="text-xs font-inter font-medium uppercase tracking-wider">{step.label}</span>
                      </div>
                    </div>
                    <div className="bg-card rounded-xl p-6 border border-border group-hover:border-primary/30 transition-colors duration-300">
                      <h3 className="text-xl font-semibold font-poppins text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-inter leading-relaxed text-[0.938rem]">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden md:flex flex-row items-center gap-8 ${isEven ? "" : ""}`}>
                    {/* Left side */}
                    <div className={`md:w-1/2 ${isEven ? "md:order-3 md:pl-8" : "md:text-right md:pr-8"}`}>
                      {isEven ? (
                        <div className="bg-card rounded-xl p-6 border border-border group-hover:border-primary/30 transition-colors duration-300">
                          <h3 className="text-xl font-semibold font-poppins text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground font-inter leading-relaxed text-[0.938rem]">
                            {step.description}
                          </p>
                        </div>
                      ) : (
                        <div className="bg-card rounded-xl p-6 border border-border group-hover:border-primary/30 transition-colors duration-300">
                          <h3 className="text-xl font-semibold font-poppins text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground font-inter leading-relaxed text-[0.938rem]">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center icon */}
                    <div className={`relative flex-shrink-0 ${isEven ? "md:order-2" : ""}`}>
                      <div className="relative w-14 h-14 bg-card rounded-xl flex items-center justify-center border border-border group-hover:border-primary/30 transition-colors duration-300 z-10">
                        <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                        <span className="absolute -top-2 -right-2 text-[10px] font-bold font-poppins text-primary bg-card border border-border rounded-full w-6 h-6 flex items-center justify-center">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Right side */}
                    <div className={`md:w-1/2 ${isEven ? "md:order-1 md:text-right md:pr-8" : "md:pl-8"}`}>
                      <div className={`flex items-center gap-3 text-muted-foreground ${isEven ? "justify-end" : ""}`}>
                        {isEven && <span className="text-xs font-inter font-medium uppercase tracking-wider">{step.label}</span>}
                        <div className="w-6 h-px bg-border" />
                        {!isEven && <span className="text-xs font-inter font-medium uppercase tracking-wider">{step.label}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
