import type { Metadata } from 'next'
import Link from 'next/link'
import { Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Página no encontrada - HIKARI Tech',
  description: 'La página que buscas no existe. Descubre nuestras soluciones tecnológicas para empresas costarricenses.',
  robots: 'noindex, nofollow',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Página no encontrada
          </h2>
          <p className="text-muted-foreground">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Volver al inicio
          </Link>
          
          <div className="text-sm text-muted-foreground">
            <p>¿Necesitas ayuda? Contáctanos:</p>
            <a 
              href="mailto:info@hikaricr.tech"
              className="text-primary hover:underline"
            >
              info@hikaricr.tech
            </a>
          </div>
        </div>

        {/* SEO-friendly navigation */}
        <nav className="mt-8 pt-8 border-t border-border">
          <h3 className="text-sm font-medium text-foreground mb-4">
            Páginas principales:
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#solutions" className="text-muted-foreground hover:text-primary">
                Nuestras soluciones
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-muted-foreground hover:text-primary">
                Acerca de nosotros
              </Link>
            </li>
            <li>
              <Link href="/#contacto" className="text-muted-foreground hover:text-primary">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
