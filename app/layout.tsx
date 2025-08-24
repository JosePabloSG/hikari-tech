import type { Metadata } from "next";
import "./globals.css";
import { inter, poppins } from "@/fonts/fonts";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "HIKARI Tech - Soluciones Tecnológicas Innovadoras",
  description:
    "Ayudamos a empresas medianas de Costa Rica a superar la ineficiencia de sus procesos manuales mediante soluciones tecnológicas confiables.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <body suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

