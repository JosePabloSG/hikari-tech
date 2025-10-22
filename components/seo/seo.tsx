import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export function generateSEOMetadata({
  title = "HIKARI Tech - Soluciones Tecnológicas para Empresas en Costa Rica",
  description = "Transformamos empresas costarricenses con soluciones tecnológicas innovadoras. Desarrollo web, aplicaciones móviles, automatización y consultoría IT para empresas.",
  keywords = [
    "desarrollo web Costa Rica",
    "soluciones tecnológicas",
    "aplicaciones móviles",
    "automatización empresarial",
    "consultoría IT",
    "transformación digital",
    "HIKARI Tech"
  ],
  image = "/og-image.jpg",
  url = "https://hikaricr.tech",
  type = "website" as const,
  noIndex = false
}: SEOProps = {}): Metadata {
  const siteTitle = title.includes("HIKARI Tech") 
    ? title 
    : `${title} | HIKARI Tech`

  return {
    title: siteTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "HIKARI Tech", url: "https://hikaricr.tech" }],
    creator: "HIKARI Tech",
    publisher: "HIKARI Tech",
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    
    // Open Graph
    openGraph: {
      title: siteTitle,
      description,
      url,
      siteName: "HIKARI Tech",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: "es_CR",
      type,
    },
    
    // Twitter
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description,
      images: [image],
      creator: "@hikaritech_cr",
    },
    
    // Additional meta tags
    alternates: {
      canonical: url,
    },
    
    // Verification tags (add when you have them)
    verification: {
      // google: "your-google-verification-code",
      // bing: "your-bing-verification-code",
    },
  }
}

// Predefined SEO configurations for different pages
export const SEOConfigs = {
  home: {
    title: "HIKARI Tech - Soluciones Tecnológicas para Empresas en Costa Rica",
    description: "Transformamos empresas costarricenses con soluciones tecnológicas innovadoras. Desarrollo web, aplicaciones móviles, automatización y consultoría IT.",
    url: "https://hikaricr.tech",
  },
  
  problems: {
    title: "Problemas Empresariales que Resolvemos",
    description: "Identificamos y solucionamos los principales desafíos tecnológicos que enfrentan las empresas en Costa Rica. Procesos manuales, falta de automatización y más.",
    url: "https://hikaricr.tech#issues",
  },
  
  solutions: {
    title: "Nuestras Soluciones Tecnológicas",
    description: "Desarrollo web profesional, aplicaciones móviles, automatización de procesos y consultoría IT especializada para empresas costarricenses.",
    url: "https://hikaricr.tech#solutions",
  },
  
  process: {
    title: "Nuestro Proceso de Trabajo",
    description: "Metodología comprobada en 4 etapas: Análisis, Diseño, Desarrollo e Implementación. Garantizamos resultados efectivos y entregas puntuales.",
    url: "https://hikaricr.tech#workflow",
  },
  
  about: {
    title: "Acerca de HIKARI Tech - Empresa Tecnológica Costarricense",
    description: "Conoce nuestra historia, misión y valores. Empresa costarricense especializada en transformación digital para empresas.",
    url: "https://hikaricr.tech#about",
  },
  
  contact: {
    title: "Contacto - Comenzar tu Proyecto Tecnológico",
    description: "¿Listo para transformar tu empresa? Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte a crecer.",
    url: "https://hikaricr.tech#contacto",
  }
} as const
