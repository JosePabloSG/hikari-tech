"use client"

import { useState } from "react"
import { useMounted } from "@/hooks/use-mounted"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Monitor, ChevronDown } from "lucide-react"

interface ThemeToggleProps {
  showDropdown?: boolean
}

export default function ThemeToggle({ showDropdown = false }: ThemeToggleProps) {
  const mounted = useMounted()
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  if (!mounted) {
    return null
  }

  const themes = [
    { value: "light", icon: Sun, label: "Claro" },
    { value: "dark", icon: Moon, label: "Oscuro" },
    { value: "system", icon: Monitor, label: "Sistema" }
  ]

  const currentTheme = themes.find(t => t.value === theme) || themes[2]
  const nextTheme = themes[(themes.findIndex(t => t.value === theme) + 1) % themes.length]

  if (showDropdown) {
    return (
      <div className="relative">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-card transition-colors duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            key={theme}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors"
          >
            <currentTheme.icon className="w-5 h-5" />
          </motion.div>
          <ChevronDown className={`w-4 h-4 text-muted-foreground group-hover:text-foreground transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsOpen(false)}
              />
              
              {/* Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 right-0 bg-card border border-border rounded-lg shadow-lg z-50 min-w-[140px] py-2"
              >
                {themes.map((themeOption, index) => (
                  <motion.button
                    key={themeOption.value}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      setTheme(themeOption.value)
                      setIsOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-muted transition-colors ${
                      theme === themeOption.value ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                    }`}
                  >
                    <themeOption.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{themeOption.label}</span>
                  </motion.button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // Simple toggle for mobile
  return (
    <motion.button
      onClick={() => setTheme(nextTheme.value)}
      className="relative p-2 rounded-lg hover:bg-card transition-colors duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={`Cambiar a ${nextTheme.label}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors"
      >
        <currentTheme.icon className="w-5 h-5" />
      </motion.div>
      
      {/* Indicator */}
      <motion.div
        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  )
}
