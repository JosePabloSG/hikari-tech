"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Code, Ear, HeadphonesIcon, LucideIcon, PenTool } from "lucide-react";
import { SectionHeader } from "./shared";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Ear,
    number: "01",
    label: "Diagnóstico inicial",
    title: "Escuchamos tu necesidad",
    description: "Entendemos tu proceso actual, identificamos áreas de mejora y definimos objetivos claros.",
  },
  {
    icon: PenTool,
    number: "02",
    label: "Propuesta detallada",
    title: "Diseñamos una propuesta clara",
    description: "Creamos un plan con alcance, tiempos y costos transparentes. Sin sorpresas, todo por escrito.",
  },
  {
    icon: Code,
    number: "03",
    label: "Desarrollo iterativo",
    title: "Desarrollamos con calidad y velocidad",
    description: "Construimos la solución con entregas parciales para que veas el progreso y ajustes sobre la marcha.",
  },
  {
    icon: HeadphonesIcon,
    number: "04",
    label: "Soporte continuo",
    title: "Acompañamos con soporte continuo",
    description: "Mantenimiento y evolución de tu solución para que siempre esté al día y funcione perfectamente.",
  },
];

function StepNode({ icon: Icon, number }: { icon: LucideIcon; number: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isLit = useInView(ref, { once: true, margin: "-30% 0px -30% 0px" });

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-14 h-14 rounded-xl flex items-center justify-center border bg-card z-10 transition-colors duration-500",
        isLit ? "border-primary/40" : "border-border"
      )}
    >
      <Icon className={cn("w-6 h-6 transition-colors duration-500", isLit ? "text-primary" : "text-muted-foreground")} />
      <span
        className={cn(
          "absolute -top-2 -right-2 text-[10px] font-bold font-poppins border rounded-full w-6 h-6 flex items-center justify-center bg-card transition-colors duration-500",
          isLit ? "text-primary border-primary/40" : "text-muted-foreground border-border"
        )}
      >
        {number}
      </span>
    </div>
  );
}

export default function WorkFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="workflow" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <SectionHeader
          title="Cómo trabajamos"
          description="Un proceso simple y transparente que te da seguridad y orden desde el primer día."
        />

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Track */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          {/* Beacon fill, lights up as you scroll */}
          <motion.div
            style={{ height: beamHeight }}
            className="absolute left-1/2 top-0 w-px bg-primary shadow-[0_0_8px_var(--color-primary)] -translate-x-1/2 hidden md:block"
          />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              const Content = (
                <div className="bg-card rounded-xl p-6 border border-border transition-colors duration-300">
                  <h3 className="text-xl font-semibold font-poppins text-foreground mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed text-[0.938rem]">
                    {step.description}
                  </p>
                </div>
              );

              return (
                <div key={step.number} className="group">
                  {/* Mobile Layout */}
                  <div className="md:hidden space-y-4">
                    <div className="flex items-center gap-4">
                      <StepNode icon={step.icon} number={step.number} />
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-6 h-px bg-border" />
                        <span className="text-xs font-inter font-medium uppercase tracking-wider">{step.label}</span>
                      </div>
                    </div>
                    {Content}
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex flex-row items-center gap-8">
                    <div className={`md:w-1/2 ${isEven ? "md:order-3 md:pl-8" : "md:pr-8"}`}>{Content}</div>

                    <div className={`relative flex-shrink-0 ${isEven ? "md:order-2" : ""}`}>
                      <StepNode icon={step.icon} number={step.number} />
                    </div>

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
