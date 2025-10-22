// Central SEO configuration for HIKARI Tech
export const SEO_CONFIG = {
  // Site information
  siteName: "HIKARI Tech",
  siteUrl: "https://hikaricr.tech",
  defaultTitle: "HIKARI Tech - Soluciones Tecnológicas para Empresas en Costa Rica",
  defaultDescription: "Transformamos empresas costarricenses con soluciones tecnológicas innovadoras. Desarrollo web, aplicaciones móviles, automatización y consultoría IT para empresas.",
  
  // Company information
  company: {
    name: "HIKARI Tech",
    legalName: "HIKARI Tech SRL",
    email: "info@hikaricr.tech",
    phone: "+506-XXXX-XXXX", // Update with real phone
    address: {
      country: "Costa Rica",
      region: "San José",
      city: "San José"
    },
    founded: "2024",
    industry: "Technology Services"
  },

  // Social media
  social: {
    twitter: "@hikaritech_cr",
    linkedin: "https://linkedin.com/company/hikari-tech",
    github: "https://github.com/hikari-tech",
    instagram: "@hikaritech_cr"
  },

  // Default keywords
  keywords: [
    "desarrollo web Costa Rica",
    "soluciones tecnológicas Costa Rica",
    "aplicaciones móviles Costa Rica", 
    "automatización empresarial",
    "consultoría IT Costa Rica",
    "transformación digital",
    "HIKARI Tech",
    "desarrollo software Costa Rica",
    "empresa tecnológica costarricense",
    "desarrollo frontend Costa Rica",
    "desarrollo backend Costa Rica",
    "diseño UX UI Costa Rica"
  ],

  // Services offered
  services: [
    {
      name: "Desarrollo Web",
      description: "Desarrollo de sitios web profesionales y aplicaciones web modernas con tecnologías actuales como React, Next.js y TypeScript.",
      keywords: ["desarrollo web", "sitios web", "aplicaciones web", "React", "Next.js"]
    },
    {
      name: "Aplicaciones Móviles",
      description: "Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android con tecnologías modernas.",
      keywords: ["aplicaciones móviles", "apps", "iOS", "Android", "React Native"]
    },
    {
      name: "Automatización de Procesos",
      description: "Automatización de procesos empresariales para mejorar la eficiencia y reducir costos operativos.",
      keywords: ["automatización", "procesos empresariales", "eficiencia", "workflow"]
    },
    {
      name: "Consultoría IT",
      description: "Consultoría especializada en tecnología para la transformación digital empresarial.",
      keywords: ["consultoría IT", "transformación digital", "estrategia tecnológica"]
    }
  ],

  // Analytics configuration
  analytics: {
    // googleAnalyticsId: "G-XXXXXXXXXX", // Add when available
    // googleTagManagerId: "GTM-XXXXXXX", // Add when available  
    // facebookPixelId: "XXXXXXXXXXXXX", // Add when available
  },

  // Verification codes for search engines
  verification: {
    // google: "your-google-verification-code", // Add when available
    // bing: "your-bing-verification-code", // Add when available
  },

  // Open Graph default image
  ogImage: {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "HIKARI Tech - Soluciones Tecnológicas"
  },

  // Robots.txt rules
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1
  }
} as const;

// Export common SEO utilities
export const getSEOTitle = (pageTitle?: string) => {
  if (!pageTitle) return SEO_CONFIG.defaultTitle;
  return pageTitle.includes(SEO_CONFIG.siteName) 
    ? pageTitle 
    : `${pageTitle} | ${SEO_CONFIG.siteName}`;
};

export const getSEOUrl = (path: string = "") => {
  return `${SEO_CONFIG.siteUrl}${path}`;
};

export const getServiceKeywords = (serviceName: string) => {
  const service = SEO_CONFIG.services.find(s => s.name === serviceName);
  return service ? [...SEO_CONFIG.keywords, ...service.keywords] : SEO_CONFIG.keywords;
};
