"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  MapPin, 
  Mail, 
  ArrowRight
} from "lucide-react";

const footerSections = {
  empresa: {
    title: "Empresa",
    links: [
      { name: "Inicio", href: "#hero" },
      { name: "Problemas", href: "#issues" },
      { name: "Soluciones", href: "#solutions" },
      { name: "Proceso", href: "#workflow" },
      { name: "Acerca de", href: "#about" },
      { name: "Contacto", href: "#contacto" }
    ]
  }
};

const heroTexts = [
  {
    main: "CONSTRUIMOS",
    sub: "JUNTOS",
    description: "Transformamos ideas en soluciones tecnológicas que impulsan el crecimiento de tu empresa."
  },
  {
    main: "INNOVAMOS",
    sub: "JUNTOS",
    description: "Colaboramos contigo para crear experiencias digitales excepcionales y duraderas."
  },
  {
    main: "CRECEMOS",
    sub: "JUNTOS",
    description: "Tu éxito es nuestro éxito. Desarrollamos tecnología que escala con tu negocio."
  }
];

export default function Footer() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [currentText, setCurrentText] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [rotationMs, setRotationMs] = useState(() => {
    if (typeof window === "undefined") return 8000;
    return window.innerWidth < 640 ? 9000 : 8000;
  });

  // Auto-rotate carousel based on rotationMs (slower). Update on resize.
  useEffect(() => {
    const handleResize = () => {
      setRotationMs(window.innerWidth < 640 ? 9000 : 8000);
    };

    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, rotationMs);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [rotationMs]);

  // Glitch effect every 5 seconds
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 600); // Glitch duration
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-background via-card to-background border-t border-border/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNDY1MzAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Hero Section with Simple Text */}
        <div className="py-16 lg:py-24 border-b border-border/30">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-4"
            >
              <h2 className="text-5xl lg:text-7xl font-bold font-poppins">
                <span className="text-primary block">HIKARI</span>
                <motion.span 
                  className="text-foreground block relative"
                  animate={isGlitching ? {
                    x: [0, -2, 2, -1, 1, 0],
                    y: [0, 1, -1, 2, -2, 0],
                    scaleX: [1, 1.02, 0.98, 1.01, 0.99, 1],
                    scaleY: [1, 0.98, 1.02, 0.99, 1.01, 1],
                    filter: [
                      "hue-rotate(0deg)",
                      "hue-rotate(90deg)",
                      "hue-rotate(-90deg)",
                      "hue-rotate(180deg)",
                      "hue-rotate(-180deg)",
                      "hue-rotate(0deg)"
                    ]
                  } : {}}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                  }}
                  style={{
                    textShadow: isGlitching 
                      ? "2px 0 #ff0000, -2px 0 #00ffff, 0 2px #ffff00, 0 -2px #ff00ff"
                      : "none"
                  }}
                >
                  TECH
                  {/* Glitch overlay effects */}
                  <motion.span
                    className="absolute inset-0 text-primary opacity-70"
                    animate={isGlitching ? {
                      x: [0, 3, -2, 1, -3, 0],
                      opacity: [0, 0.7, 0.3, 0.8, 0.2, 0]
                    } : { opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    TECH
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 text-destructive opacity-50"
                    animate={isGlitching ? {
                      x: [0, -3, 2, -1, 3, 0],
                      y: [0, 2, -1, 1, -2, 0],
                      opacity: [0, 0.5, 0.8, 0.3, 0.6, 0]
                    } : { opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
                  >
                    TECH
                  </motion.span>
                </motion.span>
              </h2>
              <p className="text-xl text-muted-foreground font-inter">
                Soluciones tecnológicas que transforman el futuro de tu empresa
              </p>
            </motion.div>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
            {/* Left: Empresa Links - Completely to the left */}
            <div className="lg:col-span-1">
              <div className="max-w-xs">
                {Object.entries(footerSections).map(([key, section]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                    onHoverStart={() => setHoveredSection(key)}
                    onHoverEnd={() => setHoveredSection(null)}
                  >
                    <h3 className="font-bold font-poppins text-lg text-foreground mb-6 relative">
                      {section.title}
                      <motion.div
                        className="absolute -bottom-2 left-0 h-0.5 bg-primary"
                        initial={{ width: '20px' }}
                        animate={{ width: hoveredSection === key ? '100%' : '20px' }}
                        transition={{ duration: 0.3 }}
                      />
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, index) => (
                        <motion.li
                          key={link.name}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <a
                            href={link.href}
                            className="text-muted-foreground hover:text-primary font-inter transition-all duration-300 inline-flex items-center gap-2 group"
                          >
                            <span>{link.name}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300" />
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Center: Hero Text Carousel */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-start">
              <div className="max-w-2xl text-center lg:text-left space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentText}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 1.0, ease: "easeInOut" }}
                    className="space-y-6"
                  >
                    <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-poppins leading-tight">
                      <span className="text-primary block sm:inline">{heroTexts[currentText].main}</span>
                      <span className="text-foreground block sm:inline sm:ml-2">{heroTexts[currentText].sub}</span>
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-inter leading-relaxed max-w-xl mx-auto lg:mx-0">
                      {heroTexts[currentText].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                  {heroTexts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentText(index)}
                      className="group focus:outline-none"
                    >
                      <motion.div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentText === index 
                            ? 'bg-primary w-8' 
                            : 'bg-border w-2 group-hover:bg-primary/50'
                        }`}
                        layoutId="carousel-indicator"
                      />
                    </button>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-xs mx-auto h-0.5 bg-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    key={currentText}
                    transition={{ duration: rotationMs / 1000, ease: "linear" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border/30">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Logo and Company Info */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                  <Image src="/icons/logo.svg" alt="HIKARI Tech" width={40} height={40} />
                </div>
                <div>
                  <h4 className="font-bold font-poppins text-foreground">HIKARI Tech</h4>
                  <p className="text-sm text-muted-foreground">Soluciones Tecnológicas</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Costa Rica</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:info@hikaricr.tech" 
                  className="hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  info@hikaricr.tech
                </a>
              </div>
            </div>
          </div>

          {/* Copyright and Legal */}
          <div className="mt-8 pt-6 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 HIKARI Tech. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-primary transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#terms" className="hover:text-primary transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#cookies" className="hover:text-primary transition-colors duration-300">
                Configuración de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
