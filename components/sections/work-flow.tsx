import { Code, Ear, HeadphonesIcon, PenTool } from "lucide-react";
import { SectionHeader } from "./shared";

export default function WorkFlow() {
  return (
    <section id="workflow" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <SectionHeader
          title="Cómo trabajamos"
          description="Un proceso simple y transparente que te da seguridad y orden desde el primer día."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-border via-border to-border transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="group animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {/* Mobile Layout */}
              <div className="md:hidden space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                    <Ear className="w-7 h-7 text-foreground group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-0.5 bg-border"></div>
                    <span className="text-sm font-inter font-medium">Diagnóstico inicial</span>
                  </div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-border group-hover:border-primary/30">
                  <h3 className="text-2xl font-bold font-poppins text-foreground mb-3 group-hover:text-primary transition-colors">
                    Escuchamos tu necesidad
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    Entendemos tu proceso actual, identificamos puntos de dolor y definimos objetivos claros. Una
                    conversación profunda para conocer tu realidad.
                  </p>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-8">
                  <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-border group-hover:border-primary/30">
                    <h3 className="text-2xl font-bold font-poppins text-foreground mb-3 group-hover:text-primary transition-colors">
                      Escuchamos tu necesidad
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      Entendemos tu proceso actual, identificamos puntos de dolor y definimos objetivos claros. Una
                      conversación profunda para conocer tu realidad.
                    </p>
                  </div>
                </div>

                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden z-10">
                    <Ear className="w-7 h-7 text-foreground group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-8">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-0.5 bg-border"></div>
                    <span className="text-sm font-inter font-medium">Diagnóstico inicial</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {/* Mobile Layout */}
              <div className="md:hidden space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                    <PenTool className="w-7 h-7 text-foreground group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-0.5 bg-border"></div>
                    <span className="text-sm font-inter font-medium">Propuesta detallada</span>
                  </div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-border group-hover:border-primary/30">
                  <h3 className="text-2xl font-bold font-poppins text-foreground mb-3 group-hover:text-primary transition-colors">
                    Diseñamos una propuesta clara
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    Creamos un plan detallado con alcance, tiempos y costos transparentes. Sin sorpresas, todo por
                    escrito y fácil de entender.
                  </p>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-8 md:order-1">
                  <div className="flex items-center justify-end gap-3 text-muted-foreground">
                    <span className="text-sm font-inter font-medium">Propuesta detallada</span>
                    <div className="w-8 h-0.5 bg-border"></div>
                  </div>
                </div>

                <div className="relative flex-shrink-0 md:order-2">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden z-10">
                    <PenTool className="w-7 h-7 text-foreground group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-8 md:order-3">
                  <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-border group-hover:border-primary/30">
                    <h3 className="text-2xl font-bold font-poppins text-foreground mb-3 group-hover:text-primary transition-colors">
                      Diseñamos una propuesta clara
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      Creamos un plan detallado con alcance, tiempos y costos transparentes. Sin sorpresas, todo por
                      escrito y fácil de entender.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {/* Mobile Layout */}
              <div className="md:hidden space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                    <Code className="w-7 h-7 text-foreground group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-0.5 bg-border"></div>
                    <span className="text-sm font-inter font-medium">Desarrollo iterativo</span>
                  </div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-border group-hover:border-primary/30">
                  <h3 className="text-2xl font-bold font-poppins text-foreground mb-3 group-hover:text-primary transition-colors">
                    Desarrollamos con calidad y velocidad
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    Construimos la solución con entregas parciales para que veas el progreso y puedas ajustar sobre la
                    marcha.
                  </p>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-8">
                  <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-border group-hover:border-primary/30">
                    <h3 className="text-2xl font-bold font-poppins text-foreground mb-3 group-hover:text-primary transition-colors">
                      Desarrollamos con calidad y velocidad
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      Construimos la solución con entregas parciales para que veas el progreso y puedas ajustar sobre la
                      marcha.
                    </p>
                  </div>
                </div>

                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden z-10">
                    <Code className="w-7 h-7 text-foreground group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-8">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-0.5 bg-border"></div>
                    <span className="text-sm font-inter font-medium">Desarrollo iterativo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {/* Mobile Layout */}
              <div className="md:hidden space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                    <HeadphonesIcon className="w-7 h-7 text-foreground group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-0.5 bg-border"></div>
                    <span className="text-sm font-inter font-medium">Soporte continuo</span>
                  </div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-border group-hover:border-primary/30">
                  <h3 className="text-2xl font-bold font-poppins text-foreground mb-3 group-hover:text-primary transition-colors">
                    Acompañamos con soporte continuo
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    Mantenimiento, actualizaciones y evolución de tu solución para que siempre esté al día y funcione
                    perfectamente.
                  </p>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-8 md:order-1">
                  <div className="flex items-center justify-end gap-3 text-muted-foreground">
                    <span className="text-sm font-inter font-medium">Soporte continuo</span>
                    <div className="w-8 h-0.5 bg-border"></div>
                  </div>
                </div>

                <div className="relative flex-shrink-0 md:order-2">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden z-10">
                    <HeadphonesIcon className="w-7 h-7 text-foreground group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-8 md:order-3">
                  <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-border group-hover:border-primary/30">
                    <h3 className="text-2xl font-bold font-poppins text-foreground mb-3 group-hover:text-primary transition-colors">
                      Acompañamos con soporte continuo
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      Mantenimiento, actualizaciones y evolución de tu solución para que siempre esté al día y funcione
                      perfectamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}