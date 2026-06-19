"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Gauge, Cog, Shield, Zap } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Automatización de tus procesos",
    description: "Conectamos ventas, compras, inventario y cobros para que dejes de hacer todo a mano.",
  },
  {
    icon: Shield,
    title: "Sitios rápidos y seguros",
    description: "Mejoramos velocidad y buenas prácticas de seguridad para convertir más visitas en clientes.",
  },
  {
    icon: Cog,
    title: "Sistemas hechos a tu medida",
    description: "Construimos paneles y aplicaciones que se ajustan a tu proceso real, no al revés.",
  },
  {
    icon: Gauge,
    title: "Visibilidad real de tu negocio",
    description: "Centralizamos tus datos en un panel claro para decidir con información, no a ciegas.",
  },
];

export default function Solutions() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current;
    const child = scroller?.children[index] as HTMLElement | undefined;
    if (scroller && child) {
      scroller.scrollTo({ left: child.offsetLeft - scroller.offsetLeft, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let closest = 0;
    let smallestDiff = Infinity;
    Array.from(scroller.children).forEach((child, index) => {
      const diff = Math.abs((child as HTMLElement).offsetLeft - scroller.offsetLeft - scroller.scrollLeft);
      if (diff < smallestDiff) {
        smallestDiff = diff;
        closest = index;
      }
    });
    setActive(closest);
  };

  return (
    <section id="solutions" className="relative overflow-hidden py-24 lg:py-32">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-3">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-foreground tracking-[-0.025em] text-balance">
              Así lo resolvemos
            </h2>
            <p className="text-muted-foreground font-inter leading-relaxed">
              Una solución concreta para cada problema — sin vueltas ni jerga técnica.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(0, active - 1))}
              aria-label="Solución anterior"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(Math.min(solutions.length - 1, active + 1))}
              aria-label="Siguiente solución"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-none"
        >
          {solutions.map((solution) => (
            <div key={solution.title} className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[31%] border-t-2 border-primary/40 pt-6">
              <solution.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="text-lg font-semibold font-poppins text-foreground tracking-tight mb-2">{solution.title}</h3>
              <p className="text-muted-foreground font-inter leading-relaxed text-[0.938rem]">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-2">
          {solutions.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Ir a la solución ${index + 1}`}
              className="group py-2 cursor-pointer"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  active === index ? "bg-primary w-8" : "bg-border w-1.5 group-hover:bg-primary/40"
                }`}
              />
            </button>
          ))}
        </div>

        <p className="text-muted-foreground font-inter leading-relaxed mt-10 max-w-lg">
          Por eso existe HIKARI Tech: para que la tecnología trabaje para vos, no al revés.
        </p>
      </div>
    </section>
  );
}
