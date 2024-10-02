"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../public/assets/images/FB_IMG_1721389491849.jpg";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: any;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-black">
        सुरेश कुमार शुक्ल 'संदेश'
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-700">
        श्री सुरेश कुमार शुक्ल 'संदेश' का जन्म उत्तर प्रदेश राज्य में जिला खीरी
        में स्थित गोला गोकर्णनाथ के कुलीन हिन्दू श्री श्रीराम शुक्ल एवं श्रीमती
        राजरानी शुक्ला के घर वर्ष 1972, 5 फरवरी को हुआ था। उनकी प्रारंभिक शिक्षा
        कस्तूरबा प्राथमिक विद्यालय गोला गोकर्णनाथ से, जूनियर हाई स्कूल
        ब्रह्मानंद स्मारक विद्यालय गोला गोकर्णनाथ से, माध्यमिक शिक्षा पब्लिक
        इंटर कॉलेज गोला गोकर्णनाथ से एवं स्नातक व परास्नातक की शिक्षा कानपुर
        विश्वविद्यालय से संपन्न हुई। उनके साहित्य-गुरु नदी काव्य के प्रणेता डॉ.
        अनंतराम मिश्र थे। श्री शुक्ल जी द्वारा 29 पुस्तकों की रचना की गई है जो
        प्रकाशित स्वरूप में उपलब्ध हैं, जो स्वयं में साक्षात् मां शारदे का
        आशीर्वाद है। विस्तृत जानकारी (pdf)
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-contain object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
