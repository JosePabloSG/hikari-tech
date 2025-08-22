import { Hero, Issues, Solutions, About, WorkFlow, CTA, Footer } from "@/components/sections";
import Navbar from "@/components/sections/navbar";
import BackToTopButton from "@/components/sections/back-to-top-button";
import { Separator } from "@radix-ui/react-separator";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Separator />
      <Issues />
      <Separator />
      <Solutions />
      <Separator />
      <WorkFlow />
      <Separator />
      <About />
      <Separator />
      <CTA />
      <Footer />
      <BackToTopButton />
    </main>
  );
}
