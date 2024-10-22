"use client";

import { HeroParallaxDemo } from "@/components/HeroParallax";
import { NavbarWrapper } from "@/components/Navbar";
import { useRouter } from "next/navigation";
import SloganSection from "../components/SloganSection";
import { BentoGridDemo } from "@/components/BentoGrid";
import { HeroScrollDemo } from "@/components/Proposed-Herosection";
import { PrizeCarousel } from "../components/PrizeCarousel";
import ShortSection from "@/components/ShortSection";
import ShortPoem from "@/components/ShortPoem";
import Footer from "@/components/Footer";
import { useRef } from "react";

export default function Home() {
  const bentoGridRef = useRef<HTMLDivElement | null>(null);
  const FooterRef = useRef<HTMLDivElement | null>(null);
  const PrizeRef = useRef<HTMLDivElement | null>(null);
  const IntroRef = useRef<HTMLDivElement | null>(null);
  // Function to scroll to the BentoGrid section
  const scrollToBentoGrid = () => {
    if (bentoGridRef.current) {
      bentoGridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFooter = () => {
    if (FooterRef.current) {
      FooterRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPrize = () => {
    if (PrizeRef.current) {
      PrizeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToIntro = () => {
    if (IntroRef.current) {
      IntroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main>
      <div className="custom-container">
        <NavbarWrapper
          scrollToBentoGrid={scrollToBentoGrid}
          scrollToFooter={scrollToFooter}
          scrollToPrize={scrollToPrize}
          scrollToIntro={scrollToIntro}
        />
      </div>
      <div ref={IntroRef}>
        <HeroParallaxDemo />
      </div>
      {/* <HeroScrollDemo /> */}
      <div className="custom-container">
        <SloganSection />
        <div ref={bentoGridRef}>
          <BentoGridDemo />
        </div>
        <ShortSection />
        <div ref={PrizeRef}>
          <PrizeCarousel />
        </div>
        <ShortPoem />
      </div>

      <div ref={FooterRef} className="bg-gray-800">
        <Footer />
      </div>
    </main>
  );
}
