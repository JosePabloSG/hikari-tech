"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import useStore from "@/store"
import type { StoreState } from "@/store/use-store"

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar el botón cuando el usuario haya scrolleado más de 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Agregar el event listener
    window.addEventListener("scroll", toggleVisibility)

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const isMobileMenuOpen = useStore((s: StoreState) => s.isMobileMenuOpen)

  if (!isVisible || isMobileMenuOpen) {
    return null
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed cursor-pointer bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground"
      size="icon"
      aria-label="Volver al inicio"
    >
      <ChevronUp className="w-6 h-6" />
    </Button>
  )
}
