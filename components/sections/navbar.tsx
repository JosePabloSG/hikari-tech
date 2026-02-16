"use client";

import { useState, useEffect } from "react";
import { useMounted } from "@/hooks/use-mounted";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import useStore from "@/store";
import type { StoreState } from "@/store/use-store";
import ThemeToggle from "@/components/ui/theme-toggle";

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Problemas", href: "#issues" },
  { name: "Soluciones", href: "#solutions" },
  { name: "Proceso", href: "#workflow" },
  { name: "Nosotros", href: "#about" },
  { name: "Contacto", href: "#contacto" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, resolvedTheme } = useTheme();
  const mounted = useMounted();
  const setMobileMenuOpen = useStore((s: StoreState) => s.setMobileMenuOpen);
  const isMobileMenuOpen = useStore((s: StoreState) => s.isMobileMenuOpen);
  const toggleMobileMenu = useStore((s: StoreState) => s.toggleMobileMenu);

  const getLogoSrc = () => {
    if (!mounted) return "/icons/hikari_dark.svg";
    const currentTheme = resolvedTheme || theme;
    return currentTheme === "dark" ? "/icons/hikari_dark.svg" : "/icons/hikari_light.svg";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18 lg:h-22">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection("#hero")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
                <Image src={getLogoSrc()} alt="HIKARI TECH" width={40} height={40} className="p-2" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-semibold font-poppins text-foreground text-lg lg:text-xl tracking-tight">
                  HIKARI Tech
                </h1>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative cursor-pointer px-4 py-2 font-inter text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{item.name}</span>

                  {/* Clean underline indicator */}
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle showDropdown={true} />
              <button
                onClick={() => scrollToSection("#contacto")}
                className="cursor-pointer bg-primary text-primary-foreground px-5 py-2 rounded-lg font-inter text-sm font-medium transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2"
              >
                Comenzar Proyecto
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle showDropdown={false} />
              <motion.button
                className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
                onClick={() => toggleMobileMenu()}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6 text-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6 text-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-card border-l border-border z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span className="font-bold text-primary-foreground text-lg">H</span>
                    </div>
                    <div>
                      <h2 className="font-semibold font-poppins text-foreground tracking-tight">HIKARI Tech</h2>
                      <p className="text-xs text-muted-foreground">Soluciones Tecnológicas</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 py-6">
                  <div className="space-y-1 px-4">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.08 }}
                        onClick={() => {
                          scrollToSection(item.href);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full text-left cursor-pointer px-4 py-3 rounded-lg font-inter text-sm font-medium transition-all duration-200 group flex items-center justify-between ${
                          activeSection === item.href.replace("#", "")
                            ? "bg-primary/8 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-border">
                  <motion.button
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => scrollToSection("#contacto")}
                    className="w-full cursor-pointer bg-primary text-primary-foreground px-6 py-3 rounded-lg font-inter text-sm font-medium transition-all duration-200 hover:bg-primary/90 flex items-center justify-center gap-2"
                  >
                    Comenzar Proyecto
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-18 lg:h-22" />
    </>
  );
}
