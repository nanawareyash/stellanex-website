"use client";

import { useEffect, useState } from "react";

import { Button, Image } from "@nextui-org/react";

import DynamicWordSlider from "@/ui/DynamicWordSlider";

function HeroSection() {
  const bgImages = [
    "url('/images/shopping_store.jpg')",
    "url('/images/digital_game.jpg')",
    "url('/images/digital_property.jpg')",
    "url('/images/finance.jpg')",
  ];
  const [activeBackground, setActiveBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const length = bgImages.length;
      setActiveBackground((prev) => (prev + 1) % length);
    }, 3000);

    return () => clearInterval(interval);
  });
  return (
    <section
      className="w-dvw relative flex justify-center items-end md:items-center bg-cover bg-center transition-all duration-700"
      style={{
        minHeight: "calc(100svh - 80px)",
        backgroundImage: bgImages[activeBackground],
      }}
    >
      <div className="relative w-full md:w-[90%] lg:w-[85%] xl:w-[85%]">
        <div className="flex flex-col gap-5 xl:gap-10 p-3 md:p-5 bg-black/50 backdrop-blur-sm md:rounded-2xl">
          <div className="w-full flex flex-col gap-1 lg:gap-3 sm:items-start overflow-hidden">
            <p className="w-fit text-white/80 drop-shadow-2xl text-sm md:text-[1rem] lg:text-lg xl:text-xl 2xl:text-2xl text-nowrap font-extrabold uppercase tracking-widest">
              Stellanex Metaverse
            </p>
            <p className="w-fit flex flex-col gap-0.5 leading-10 text-white drop-shadow-2xl text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-wider">
              <span> Our dynamic virtual</span>
              <span>world lets you</span>
              <DynamicWordSlider
                className="w-fit from-red-400 via-pink-700 via-30% to-blue-400 bg-gradient-to-br bg-clip-text text-transparent drop-shadow-2xl text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-wider"
                words={["shop", "play", "own property", "do business"]}
              />
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="w-fit text-white text-sm md:text-[1rem] lg:text-lg xl:text-xl 2xl:text-2xl">
              Join Stellanex today to explore, create, and connect in our
              blockchain-powered virtual universe. Whether you&apos;re a
              creator, business owner, or gamer, the future is here for you.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-blue-600 text-white border-1 border-blue-600 text-sm lg:text-[1rem] xl:text-lg 2xl:text-xl lg:p-6">
              <span>Get Started</span>
              <span>
                <i className="bi bi-arrow-right"></i>
              </span>
            </Button>
            <Button className="bg-transparent text-white border-1 text-sm lg:text-[1rem] xl:text-lg 2xl:text-xl lg:p-6">
              <span>
                <i className="bi bi-play-fill"></i>
              </span>
              <span>Watch Demo</span>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-full w-full flex justify-center h-[15rem] md:hidden">
          <Image
            alt="VR Avatar"
            disableSkeleton
            disableAnimation
            src="/images/vr_avatar.png"
            className="h-full"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden md:block md:h-[75%] lg:h-[90%] xl:h-full will-change-transform">
        <Image
          alt="VR Avatar"
          disableSkeleton
          src="/images/vr_avatar.png"
          className="h-full animate-slideLeft"
          fetchPriority="high"
        />
      </div>
      <div className="z-10 hidden md:block absolute bottom-0 w-full h-20 from-transparent to-slate-950 bg-gradient-to-b"></div>
    </section>
  );
}

export default HeroSection;
