import { Hero, Issues, Solutions } from "@/components/sections";
import About from "@/components/sections/about";
import CTA from "@/components/sections/cta";
import WorkFlow from "@/components/sections/work-flow";
import { Separator } from "@radix-ui/react-separator";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
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
    </main>
  );
}
