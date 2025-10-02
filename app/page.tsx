import { Hero, Issues, Solutions, About, WorkFlow, CTA, Footer } from "@/components/sections";
import Navbar from "@/components/sections/navbar";
import BackToTopButton from "@/components/sections/back-to-top-button";

export default function Home() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Saltar al contenido principal
      </a>

      <Navbar />
      
      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero Section */}
        <Hero />
        
        {/* Problems Section */}
        <Issues />
        
        {/* Solutions Section */}
        <Solutions />
        
        {/* Process Section */}
        <WorkFlow />
        
        {/* About Section */}
        <About />
        
        {/* Call to Action */}
        <CTA />
      </main>
      
      <Footer />
      <BackToTopButton />
    </>
  );
}
