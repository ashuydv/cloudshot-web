import Clients from "@/components/Clients";
import { FeaturesSectionDemo } from "@/components/Feature2";
import { Features } from "@/components/Features";
import Hero from "@/components/Hero";
import { StickScrollAnimation } from "@/components/StickScrollAnimation";
import { TabComponent } from "@/components/TabComponent";
import { MarqueeDemoVertical } from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <TabComponent />
      <Features />
      <FeaturesSectionDemo />
      <MarqueeDemoVertical />
    </main>
  );
}
