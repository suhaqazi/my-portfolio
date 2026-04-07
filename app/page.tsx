import { Hero } from "@/app/components/Hero";
import { Timeline } from "@/app/components/Timeline";
import { Skills } from "@/app/components/Skills";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Timeline />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
