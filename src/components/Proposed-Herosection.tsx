"use client";
import React from "react";
import { ContainerScroll } from "./ui/proposed-herosection";
import Image from "next/image";
import HeroImage from "../../public/assets/images/herosection.png";
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white ">
              सुरेश कुमार शुक्ल 'संदेश'
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-[100px] leading-none">
                {" "}
                'संदेश'
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={HeroImage}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
