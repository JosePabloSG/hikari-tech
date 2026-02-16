"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useMounted } from "@/hooks/use-mounted";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  MapPin,
  Mail,
  ArrowRight,
} from "lucide-react";

const StarsBackground = dynamic(() => import("@/components/ui/stars-background"), {
  ssr: false,
});

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
  const [currentText, setCurrentText] = useState(0);
  const { theme, resolvedTheme } = useTheme();
  const mounted = useMounted();
  const [rotationMs, setRotationMs] = useState(() => {
    if (typeof window === "undefined") return 8000;
    return window.innerWidth < 640 ? 9000 : 8000;
  });

  const getLogoSrc = () => {
    if (!mounted) return "/icons/hikari_dark.svg";
    const currentTheme = resolvedTheme || theme;
    return currentTheme === "dark" ? "/icons/hikari_dark.svg" : "/icons/hikari_light.svg";
  };

  const getTikTokIconSrc = () => {
    if (!mounted) return "/icons/TikTok_dark.svg";
    const currentTheme = resolvedTheme || theme;
    return currentTheme === "dark" ? "/icons/TikTok_dark.svg" : "/icons/TikTok_light.svg";
  };

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

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      <Suspense fallback={null}>
        <StarsBackground />
      </Suspense>
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="py-16 lg:py-24 border-b border-border/50">
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-7xl font-bold font-poppins tracking-tight">
                <span className="text-primary block">HIKARI</span>
                <span className="text-foreground block">TECH</span>
              </h2>
              <p className="text-lg text-muted-foreground font-inter">
                Soluciones tecnológicas que transforman el futuro de tu empresa
              </p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
            {/* Left: Empresa Links */}
            <div className="lg:col-span-1">
              <div className="max-w-xs">
                {Object.entries(footerSections).map(([key, section]) => (
                  <div key={key} className="space-y-4">
                    <h3 className="font-semibold font-poppins text-lg text-foreground mb-6 tracking-tight">
                      {section.title}
                      <div className="w-5 h-0.5 bg-primary rounded-full mt-2" />
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-muted-foreground hover:text-primary font-inter text-sm transition-colors duration-200 inline-flex items-center gap-2 group"
                          >
                            <span>{link.name}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Center: Hero Text Carousel */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-start">
              <div className="max-w-2xl text-center lg:text-left space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="space-y-4"
                  >
                    <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-poppins leading-tight tracking-tight">
                      <span className="text-primary block sm:inline">{heroTexts[currentText].main}</span>
                      <span className="text-foreground block sm:inline sm:ml-3">{heroTexts[currentText].sub}</span>
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-inter leading-relaxed max-w-xl mx-auto lg:mx-0">
                      {heroTexts[currentText].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Indicators */}
                <div className="flex justify-center lg:justify-start gap-2 mt-8">
                  {heroTexts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentText(index)}
                      className="group focus:outline-none"
                    >
                      <div
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentText === index
                            ? 'bg-primary w-8'
                            : 'bg-border w-1.5 group-hover:bg-primary/40'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-xs mx-auto lg:mx-0 h-px bg-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary/60"
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
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Logo and Company Info */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <Image src={getLogoSrc()} alt="HIKARI Tech" width={40} height={40} />
                </div>
                <div>
                  <h4 className="font-semibold font-poppins text-foreground tracking-tight">HIKARI Tech</h4>
                  <p className="text-xs text-muted-foreground">Soluciones Tecnológicas</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-end gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Costa Rica</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:info@hikaricr.tech"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    info@hikaricr.tech
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-1">
                <a href="https://www.linkedin.com/company/hikari-tech-cr/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-200">
                  <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                </a>
                <a href="https://www.instagram.com/hikaritech.cr?igsh=MTUzOXNpMHRyMXZibA==" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-200">
                  <Image src="/icons/instagram-icon.svg" alt="Instagram" width={20} height={20} />
                </a>
                <a href="https://www.tiktok.com/@hikaritech.cr?_t=ZS-8zX4Tsr1OnB&_r=1" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-200">
                  <Image src={getTikTokIconSrc()} alt="TikTok" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
