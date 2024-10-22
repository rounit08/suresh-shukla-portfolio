"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./ui/prize-carousel";
import AnandMishraPrize from "../../public/assets/images/anand mishra award UP GOV.jpg";
import BharatiBhushanPrize from "../../public/assets/images/bharti bhushan image.jpg";
import GolaGuaravPrize from "../../public/assets/images/gola gaurav award.jpg";
import NaamitPrize from "../../public/assets/images/naamit puruskar up gov.jpg";
import NeerajSahityakarPrize from "../../public/assets/images/neeraj sahityakar purushkar.jpg";

export function PrizeCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-black text-center font-sans">
        पुरस्कार
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return <></>;
      })}
    </>
  );
};

const data = [
  {
    category: "पुरुस्कार",
    title: "भारती भूषण सम्मान",
    src: BharatiBhushanPrize,
  },
  {
    category: "पुरुस्कार",
    title: "तुलसी नामित पुरस्कार",
    src: NaamitPrize,
  },
  {
    category: "पुरुस्कार",
    title: "आनंद मिश्र सर्जना पुरस्कार",
    src: AnandMishraPrize,
  },
  {
    category: "पुरुस्कार",
    title: "गोला गौरव",
    src: GolaGuaravPrize,
  },

  {
    category: "पुरुस्कार",
    title: "नीरज साहित्यकार पुरुस्कार",
    src: NeerajSahityakarPrize,
  },
];
