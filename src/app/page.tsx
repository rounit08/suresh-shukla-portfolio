"use client";

import { HeroParallaxDemo } from "@/components/HeroParallax";
import { NavbarWrapper } from "@/components/Navbar";
import { useRouter } from "next/navigation";
import SloganSection from "../components/SloganSection";
import { BentoGridDemo } from "@/components/BentoGrid";
export default function Home() {
  const router = useRouter();

  const handleAboutPage = () => {
    router.push("/about");
  };
  return (
    <main>
      <div className="custom-container">
        <NavbarWrapper />
      </div>
      <HeroParallaxDemo />
      <div className="custom-container">
        <SloganSection />
        <BentoGridDemo />
      </div>
    </main>
  );
}
