import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, poppins } from "@/fonts/fonts";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { generateSEOMetadata } from "@/components/seo/seo";
import { OrganizationStructuredData, WebsiteStructuredData, ServiceStructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = generateSEOMetadata({
  title: "HIKARI Tech - Soluciones Tecnológicas para Empresas en Costa Rica",
  description: "Transformamos empresas costarricenses con soluciones tecnológicas innovadoras. Desarrollo web, aplicaciones móviles, automatización y consultoría IT para empresas medianas.",
  keywords: [
    "desarrollo web Costa Rica",
    "soluciones tecnológicas Costa Rica", 
    "aplicaciones móviles Costa Rica",
    "automatización empresarial",
    "consultoría IT Costa Rica",
    "transformación digital",
    "HIKARI Tech",
    "desarrollo software Costa Rica",
    "empresa tecnológica costarricense"
  ],
  url: "https://hikaricr.tech",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/poppins-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body suppressHydrationWarning={true}>
        {/* Structured Data */}
        <OrganizationStructuredData />
        <WebsiteStructuredData />
        <ServiceStructuredData />
        
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

