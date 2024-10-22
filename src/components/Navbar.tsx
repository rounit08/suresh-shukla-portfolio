"use client";
import React from "react";
import NavLogo from "../../public/assets/images/sandesh ji logo.png"
import Image from "next/image";

interface NavbarProps {
  scrollToIntro: () => void;
  scrollToBentoGrid: () => void;
  scrollToPrize: () => void;
  scrollToFooter: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToIntro,
  scrollToBentoGrid,
  scrollToPrize,
  scrollToFooter,
}) => {
  return (
    <nav className="fixed z-50 top-0 w-full flex justify-between items-center bg-white shadow-lg p-4">
      <div className="flex items-center">
   <Image src={NavLogo} alt="navlogo" height={100} width={100}/>
      </div>
      <div className="flex space-x-4 text-base md:text-lg lg:text-2xl italic">
        <button onClick={scrollToIntro} className="hover:text-blue-500">
          परिचय
        </button>
        <button onClick={scrollToBentoGrid} className="hover:text-blue-500">
          रचनाएं
        </button>
        <button onClick={scrollToPrize} className="hover:text-blue-500">
          पुरस्कार
        </button>
        <button onClick={scrollToFooter} className="hover:text-blue-500">
          संपर्क
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// Usage example
export function NavbarWrapper({
  scrollToBentoGrid,
  scrollToFooter,
  scrollToPrize,
  scrollToIntro,
}: NavbarProps) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar
        scrollToBentoGrid={scrollToBentoGrid}
        scrollToFooter={scrollToFooter}
        scrollToPrize={scrollToPrize}
        scrollToIntro={scrollToIntro}
      />
    </div>
  );
}
