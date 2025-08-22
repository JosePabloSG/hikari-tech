import { CheckCircle, Globe, Rocket, Shield, TrendingUp, Zap } from "lucide-react";
import { SectionHeader } from "./shared";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-5">
          <div className="grid grid-cols-12 grid-rows-8 gap-3 h-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.05}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <SectionHeader
          title="Nuestra Identidad"
          description="Conoce la historia, valores y visión que nos impulsa a transformar empresas costarricenses."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto h-[800px] lg:h-[600px]">
          {/* Logo and Company Info - Large Square */}
          <div
            className="col-span-4 lg:col-span-2 row-span-2 group bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 border border-border hover:border-primary/30 animate-fade-in-up relative overflow-hidden flex flex-col justify-center"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Logo Placeholder */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                <Image src="/icons/logo.svg" alt="HIKARI TECH" width={100} height={100}  className="p-2"/>
              </div>
            </div>

            <div className="text-center space-y-3">
              <h3 className="text-xl font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                HIKARI TECH
              </h3>
              <p className="text-base text-muted-foreground font-inter leading-relaxed group-hover:text-foreground/80 transition-colors">
                Empresa costarricense especializada en soluciones tecnológicas para empresas medianas.
              </p>
            </div>

            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors duration-500"></div>
          </div>

          {/* Mission - Wide Rectangle */}
          <div
            className="col-span-4 row-span-1 group bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-border hover:border-primary/30 animate-fade-in-up relative overflow-hidden"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-start gap-4 h-full">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                  Misión
                </h3>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed group-hover:text-foreground/80 transition-colors">
                  Ayudamos a empresas medianas de Costa Rica a superar la ineficiencia mediante soluciones
                  tecnológicas confiables.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </div>

          {/* Vision - Wide Rectangle */}
          <div
            className="col-span-4 row-span-1 group bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-border hover:border-primary/30 animate-fade-in-up relative overflow-hidden"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-start gap-4 h-full">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                  Visión
                </h3>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed group-hover:text-foreground/80 transition-colors">
                  Convertirnos en el referente en innovación tecnológica en Costa Rica, liderando la implementación de
                  IA y tecnologías modernas.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </div>

          {/* Values - Proper Bento Boxes */}
          {/* Excellence - Square */}
          <div
            className="col-span-2 lg:col-span-2 row-span-1 group bg-gradient-to-br from-card/70 to-card/40 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-500 border border-border hover:border-primary/30 animate-fade-in-up hover:-rotate-1"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex flex-col h-full justify-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-3 h-3 text-primary" />
                </div>
                <h4 className="text-base font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                  Excelencia
                </h4>
              </div>
              <p className="text-sm font-inter text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                Altos estándares técnicos y de diseño.
              </p>
            </div>
          </div>

          {/* Transparency - Square */}
          <div
            className="col-span-2 lg:col-span-2 row-span-1 group bg-gradient-to-br from-card/70 to-card/40 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-500 border border-border hover:border-primary/30 animate-fade-in-up hover:rotate-1"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex flex-col h-full justify-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-3 h-3 text-primary" />
                </div>
                <h4 className="text-base font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                  Transparencia
                </h4>
              </div>
              <p className="text-sm font-inter text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                Comunicación abierta y honesta.
              </p>
            </div>
          </div>

          {/* Innovation - Wide Rectangle */}
          <div
            className="col-span-4 lg:col-span-2 row-span-1 group bg-gradient-to-br from-card/70 to-card/40 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-500 border border-border hover:border-primary/30 animate-fade-in-up hover:rotate-1"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex flex-col h-full justify-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-3 h-3 text-primary" />
                </div>
                <h4 className="text-base font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                  Innovación continua
                </h4>
              </div>
              <p className="text-sm font-inter text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                Exploramos nuevas tecnologías y metodologías constantemente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}