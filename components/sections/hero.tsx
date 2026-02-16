"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Rocket, ArrowRight } from "lucide-react"

const CodeNodes = dynamic(() => import("@/components/ui/code-nodes"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 rounded-full bg-muted/50 animate-pulse" />
    </div>
  ),
})

const StarsBackground = dynamic(() => import("@/components/ui/stars-background"), {
  ssr: false,
})

const typewriterTexts = [
  "Transformamos procesos manuales",
  "Creamos soluciones tecnológicas",
  "Optimizamos tu productividad",
  "Impulsamos tu crecimiento",
]

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentText = typewriterTexts[currentTextIndex]

    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length)
          setIsTyping(true)
        }, 0)
        return () => clearTimeout(timeout)
      }
    }
  }, [displayText, isTyping, currentTextIndex])

  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden">
      <Suspense fallback={null}>
        <StarsBackground />
      </Suspense>

      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 h-full items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-border bg-card/80 text-muted-foreground text-sm font-medium font-inter">
                <Rocket className="w-3.5 h-3.5 text-primary mr-2" />
                Innovación Tecnológica en Costa Rica
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold font-poppins text-foreground leading-[1.05] tracking-tight">
                <span className="block">HIKARI</span>
                <span className="block text-primary">TECH</span>
              </h1>

              <div className="h-16 flex items-center">
                <p className="text-xl lg:text-2xl font-medium font-poppins text-muted-foreground">
                  {displayText}
                  <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse"></span>
                </p>
              </div>

              <p className="text-base lg:text-lg font-inter text-muted-foreground leading-relaxed max-w-lg">
                Ayudamos a empresas de Costa Rica a superar la ineficiencia de sus procesos manuales mediante
                soluciones tecnológicas confiables.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-primary cursor-pointer text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium px-8 py-3 rounded-lg transition-all duration-200 bg-transparent group"
                onClick={() => {
                  const ctaSection = document.getElementById('contacto');
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Conversemos sobre tus Necesidades
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold font-poppins text-primary tracking-tight">100%</div>
                <div className="text-sm font-inter text-muted-foreground mt-1">Compromiso</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-poppins text-primary tracking-tight">0</div>
                <div className="text-sm font-inter text-muted-foreground mt-1">Días de Espera</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-poppins text-primary tracking-tight">24/7</div>
                <div className="text-sm font-inter text-muted-foreground mt-1">Disponibilidad</div>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Nodes Network */}
          <div className="relative w-full h-full hidden md:block">
            <Suspense fallback={null}>
              <CodeNodes />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
