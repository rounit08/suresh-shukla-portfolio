"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import NavLogo from "../../public/assets/images/sandesh ji logo.png";
import ShuklaJiImage from "../../public/assets/images/Suresh Kumar Shukla Sandesh.jpg";
import { useRouter } from "next/navigation";
export function NavbarWrapper() {
  return (
    <div className="relative  w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const router = useRouter();
  const handleCreationRoute = () => {
    router.push("/creations");
  };
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed flex rounded-full animate-shimmer border shadow-lg  items-center justify-center top-10 inset-x-0 max-w-4xl mx-auto p-0 z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="परिचय ">
          <div className="flex border border-black ml-28 gap-2 space-y-6 py-3 items-center justify-center text-sm">
            <div>
              <Image
                src={ShuklaJiImage}
                alt="shukla ji image"
                height={80}
                width={100}
                className="rounded-xl"
              />
            </div>

            <text className="text-black w-1/2">
              श्री सुरेश कुमार शुक्ल 'संदेश' का जन्म उत्तर प्रदेश राज्य में जिला
              खीरी में स्थित गोला गोकर्णनाथ के कुलीन हिन्दू श्री श्रीराम शुक्ल
              एवं श्रीमती राजरानी शुक्ला के घर वर्ष 1972, 5 फरवरी को हुआ था।
              उनकी प्रारंभिक शिक्षा कस्तूरबा प्राथमिक विद्यालय गोला गोकर्णनाथ
              से...
            </text>
            <button className="text-xs text-blue-800 underline cursor-pointer">
              अधिक पढ़ें
            </button>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="रचनाएं ">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="पंचरत्ना"
              href="https://algochurn.com"
              src="https://th.bing.com/th?id=OIP.8IsQ7ViZmlo936S4jGXwrAHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
            <ProductItem
              title="अनंत आविर्भाव"
              href="https://tailwindmasterkit.com"
              src="https://th.bing.com/th?id=OIP.8IsQ7ViZmlo936S4jGXwrAHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
            <ProductItem
              title="जय मातृभूमि "
              href="https://gomoonbeam.com"
              src="https://th.bing.com/th?id=OIP.8IsQ7ViZmlo936S4jGXwrAHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
            <ProductItem
              title="श्री हनुमत बावनी"
              href="https://userogue.com"
              src="https://th.bing.com/th?id=OIP.8IsQ7ViZmlo936S4jGXwrAHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
          </div>
          <button
            className="text-xs float-end p-3 text-blue-800 underline cursor-pointer"
            onClick={handleCreationRoute}
          >
            अधिक पढ़ें
          </button>
        </MenuItem>

        <Image
          src={NavLogo}
          alt="sandesh ji logo"
          height={100}
          width={100}
          className="aspect-rectangle cursor-pointer"
        />
        <MenuItem setActive={setActive} active={active} item="पुरस्कार ">
          <div className="flex flex-col space-y-4 text-sm border border-black p-4">
            <div className="flex flex-col items-center text-center">
              <p className="text-center font-medium py-2 text-base underline">
                उत्तर प्रदेश हिन्दी संस्थान (उत्तर प्रदेश शासन)
              </p>
              <div className="flex gap-2">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  आनंद मिश्र सर्जना पुरस्कार
                </button>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  तुलसी नामित पुरस्कार
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <p className="text-center font-medium py-2 text-base underline">
                राजकीय औद्योगिक एवं कृषि प्रदर्शनी, अलीगढ़
              </p>
              <div className="flex gap-2">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  नीरज शहय्यार पुरस्कार
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <p className="text-center font-medium py-2 text-base underline">
                नगर पालिका परिषद-गोला गोकर्णनाथ
              </p>
              <div className="flex gap-2">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  गोला गौरव
                </button>
              </div>
            </div>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="संपर्क "
        ></MenuItem>
      </Menu>
    </div>
  );
}
