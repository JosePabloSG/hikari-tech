"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Settings, Rocket } from "lucide-react"

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
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length)
        setIsTyping(true)
      }
    }
  }, [displayText, isTyping, currentTextIndex])

  return (
    <section id="hero" className="container mx-auto px-4 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium font-inter">
              <Rocket className="w-4 h-4 text-muted-foreground mr-2" />
               Innovación Tecnológica en Costa Rica
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold font-poppins text-foreground leading-tight">
              <span className="block">HIKARI</span>
              <span className="block text-primary">TECH</span>
            </h1>

            <div className="h-16 flex items-center">
              <p className="text-xl lg:text-2xl font-medium font-poppins text-muted-foreground">
                {displayText}
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse"></span>
              </p>
            </div>

            <p className="text-lg font-inter text-muted-foreground leading-relaxed max-w-lg">
              Ayudamos a empresas medianas de Costa Rica a superar la ineficiencia de sus procesos manuales mediante
              soluciones tecnológicas confiables.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-primary cursor-pointer text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
              onClick={() => {
                const ctaSection = document.getElementById('contacto');
                if (ctaSection) {
                  ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Conversemos sobre tus Necesidades
            </Button>
          </div>


          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-bold font-poppins text-foreground">100%</div>
              <div className="text-sm font-inter text-muted-foreground">Compromiso</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-poppins text-foreground">0</div>
              <div className="text-sm font-inter text-muted-foreground">Días de Espera</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-poppins text-foreground">24/7</div>
              <div className="text-sm font-inter text-muted-foreground">Disponibilidad</div>
            </div>
          </div>
        </div>

        {/* Right Side - Animated Asset */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md mx-auto">
            {/* Main Development Illustration */}
            <div className="relative bg-card rounded-2xl p-8 shadow-lg float-animation">
              {/* Code Editor Mockup */}
              <div className="bg-foreground rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-primary/60 rounded w-3/4 code-flow"></div>
                  <div className="h-2 bg-secondary/60 rounded w-1/2" style={{ animationDelay: "1s" }}></div>
                  <div className="h-2 bg-primary/40 rounded w-5/6" style={{ animationDelay: "2s" }}></div>
                  <div className="h-2 bg-secondary/40 rounded w-2/3" style={{ animationDelay: "3s" }}></div>
                </div>
              </div>

              {/* Dashboard Elements */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-primary/10 rounded-lg p-3 pulse-glow">
                  <div className="w-8 h-8 bg-primary rounded-lg mb-2 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="h-2 bg-primary/30 rounded w-full"></div>
                </div>
                <div className="bg-secondary/10 rounded-lg p-3" style={{ animationDelay: "0.5s" }}>
                  <div className="w-8 h-8 bg-secondary rounded-lg mb-2 flex items-center justify-center">
                    <Users className="w-4 h-4 text-foreground" />
                  </div>
                  <div className="h-2 bg-secondary/30 rounded w-3/4"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div
              className="absolute -top-4 -right-4 w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center float-animation"
              style={{ animationDelay: "1s" }}
            >
              <Settings className="w-8 h-8 text-muted-foreground" />
            </div>

            <div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center float-animation"
              style={{ animationDelay: "2s" }}
            >
              <Rocket className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
