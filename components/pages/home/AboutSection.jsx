"use client";

import { useEffect, useState } from "react";

import { Divider } from "@nextui-org/react";

function AboutSection() {
  const [visibleFeature, setVisibleFeature] = useState(0);

  const stellanexFeatures = [
    {
      title: "Blockchain Security",
      background: "url('/images/blockchain_security.jpg')",
      description:
        "Your transactions are safe, transparent, and secured by Ethereum's trusted blockchain.",
    },
    {
      title: "Smart Contracts",
      background: "url('/images/smart_contracts.jpg')",
      description:
        "Automated and self-executing agreements ensure secure and transparent transactions.",
    },
    {
      title: "NFTs and Digital Assets",
      background: "url('/images/nft_token.jpg')",
      description: "Trade unique digital items that hold real value.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const length = stellanexFeatures.length;
      setVisibleFeature((prev) => (prev + 1) % length);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <section
      className="relative w-dvw flex justify-center items-center py-10 md:py-0"
      style={{
        minHeight: "calc(100svh - 80px)",
      }}
    >
      <div className="z-20 w-[90%] lg:w-[85%] xl:[80%] grid grid-cols-1 md:grid-cols-2 items-center gap-5 xl:gap-10">
        <div className="flex flex-col gap-5">
          <p className="font-semibold tracking-widest text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            About Us
          </p>
          <Divider className="bg-white w-[6rem]" />
          <p className="text-white text-justify text-[1rem] md:text-lg lg:text-xl xl:text-2xl drop-shadow-2xl">
            <span className="font-semibold text-blue-300">Stellanex</span> is
            India&apos;s pioneering Metaverse platform, built on the secure{" "}
            <span className="text-yellow-400 underline underline-offset-4 font-semibold">
              Ethereum blockchain
            </span>
            . In this immersive virtual world, you can explore, shop, and
            interact in ways that mirror real-life activities like buying
            property, playing games, and running a business. Stellanex brings
            the future to your fingertips today.
          </p>
        </div>
        <div className="h-full flex flex-col items-end gap-5">
          <div className="relative w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:flex justify-end items-center gap-3">
            {stellanexFeatures.map((feature, index) => (
              <div
                key={`stellanex-feature-${index}`}
                className="z-10 relative md:absolute group w-full md:w-2/3 pt-[100%] xs:pt-[100%] sm:pt-[150%] md:pt-[75%] rounded-xl border-1 border-slate-700 md:opacity-0 md:data-[visible=true]:opacity-100 bg-cover bg-center transition-all duration-300 overflow-hidden"
                data-visible={visibleFeature === index}
                style={{
                  backgroundImage: feature.background,
                }}
              >
                <div className="absolute bottom-0 left-0 w-full xs:h-30 sm:h-28 md:h-fit flex flex-col gap-1 p-4 bg-white/15 backdrop-blur-md">
                  <p className="text-sm md:text-[1rem] font-semibold text-white">
                    {feature.title}
                  </p>
                  <p className="text-xs md:text-sm text-white/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="hidden md:block w-full md:w-2/3 pt-[75%] rounded-2xl animate-scaleUp from-red-400 via-pink-700 to-sky-400 bg-gradient-to-br"></div>
          </div>
          <div className="hidden w-full md:w-2/3 md:flex flex-nowrap justify-center gap-2">
            {stellanexFeatures.map((feature, index) => (
              <span
                key={`active-feature-${index}`}
                className="w-5 h-1 rounded-full bg-white/50 data-[active=true]:bg-white transition-all duration-700"
                data-active={visibleFeature === index}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
