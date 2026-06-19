"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Compass } from "lucide-react"

const BeaconBot = dynamic(() => import("@/components/ui/beacon-bot"), {
  ssr: false,
})

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-28 lg:py-0 lg:min-h-[88vh] flex items-center">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl space-y-8">
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl font-bold font-poppins text-foreground leading-[1.08] tracking-[-0.03em] text-balance">
              Tu negocio no debería depender de Excel y WhatsApp para funcionar.
            </h1>

            <p className="text-lg lg:text-xl font-inter text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Construimos los sistemas, sitios y automatizaciones que tu operación necesita,
              explicado en español simple, sin tecnicismos ni promesas vacías.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 group"
                onClick={() => scrollToSection("contacto")}
              >
                Contanos tu problema
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium px-8 py-3 rounded-lg transition-all duration-200 bg-transparent group"
                onClick={() => scrollToSection("workflow")}
              >
                Así trabajamos
              </Button>
            </div>

            <p className="flex items-center gap-2 text-sm font-inter text-muted-foreground pt-1">
              <Compass className="w-4 h-4 text-primary" />
              Hablamos claro, en español tico, sin letra pequeña.
            </p>
          </div>

          <div className="relative hidden lg:block h-[480px]">
            <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-primary/25 blur-[90px]" />
            <Suspense fallback={<div className="absolute inset-0 m-auto w-40 h-40 rounded-full bg-muted/40 animate-pulse" />}>
              <BeaconBot />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
