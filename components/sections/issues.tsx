import { BarChart3, Clock, Globe, Wrench } from "lucide-react";
import { SectionHeader, FeatureCard, GridPattern } from "./shared";

const problems = [
  {
    icon: Clock,
    title: "Procesos manuales que consumen tiempo",
    description: "Horas en Excel/WhatsApp, doble digitación y errores que encarecen la operación.",
  },
  {
    icon: Globe,
    title: "Webs lentas o desactualizadas",
    description: "Páginas que cargan lento, no convierten y pierden oportunidades de venta.",
  },
  {
    icon: Wrench,
    title: "Aplicaciones internas ineficientes",
    description: "Herramientas que no se ajustan al proceso real y obligan a &quot;parches&quot; diarios.",
  },
  {
    icon: BarChart3,
    title: "Falta de automatización y control",
    description: "Datos dispersos, poca trazabilidad y decisiones a ciegas.",
  },
];

export default function Issues() {
  return (
    <section className="py-16 lg:py-24 pb-32 bg-muted/30 relative overflow-hidden">
      <GridPattern size={60} opacity={0.4} />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Problemas que resolvemos"
          description="Estos son los frenos más comunes que vemos en empresas de Costa Rica. Si te identificás con alguno, podemos ayudar."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => (
            <FeatureCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              hoverEffect={true}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
            Sabemos que estos problemas frenan el crecimiento. Por eso fundamos HIKARI TECH: para resolverlos con
            tecnología moderna.
          </p>
        </div>
      </div>
    </section>
  );
}