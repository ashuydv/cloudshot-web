import Clients from "@/components/Clients";
import { FeaturesSectionDemo } from "@/components/Feature2";
import { Features } from "@/components/Features";
import Hero from "@/components/Hero";
import GridPattern from "@/components/magicui/grid-pattern";
import { MarqueeDemoVertical } from "@/components/Testimonials";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Features />
      <FeaturesSectionDemo />
      <MarqueeDemoVertical />
    </main>
  );
}
