"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import NavLogo from "../../public/assets/images/sandesh ji logo.png";
import ShuklaJiImage from "../../public/assets/images/Suresh Kumar Shukla Sandesh.jpg";
import { useRouter } from "next/navigation";
export function NavbarWrapper({
  scrollToBentoGrid,
  scrollToFooter,
  scrollToPrize,
  scrollToIntro,
}: {
  scrollToBentoGrid: () => void;
  scrollToFooter: () => void;
  scrollToPrize: () => void;
  scrollToIntro: () => void;
}) {
  return (
    <div className="relative  w-full flex items-center justify-center">
      <Navbar
        className="top-2"
        scrollToBentoGrid={scrollToBentoGrid}
        scrollToFooter={scrollToFooter}
        scrollToPrize={scrollToPrize}
        scrollToIntro={scrollToIntro}
      />
    </div>
  );
}

function Navbar({
  className,
  scrollToPrize,
  scrollToBentoGrid,
  scrollToIntro,
  scrollToFooter,
}: {
  className?: string;
  scrollToBentoGrid: () => void;
  scrollToFooter: () => void;
  scrollToPrize: () => void;
  scrollToIntro: () => void;
}) {
  const router = useRouter();
  const handleCreationRoute = () => {
    router.push("/creations");
  };
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed flex rounded-full bg-white animate-shimmer border shadow-lg  items-center justify-center top-10 inset-x-0 max-w-4xl mx-auto p-0 z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div onClick={scrollToIntro}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="परिचय "
          ></MenuItem>
        </div>
        <div onClick={scrollToBentoGrid}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="रचनाएं "
          ></MenuItem>
        </div>
        <Image
          src={NavLogo}
          alt="sandesh ji logo"
          height={100}
          width={100}
          className="aspect-rectangle cursor-pointer"
        />
        <div onClick={scrollToPrize}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="पुरस्कार "
          ></MenuItem>
        </div>
        <div onClick={scrollToFooter}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="संपर्क "
          ></MenuItem>
        </div>
      </Menu>
    </div>
  );
}
