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
      className="w-dvw relative flex justify-center items-center py-10"
      style={{ minHeight: "calc(100svh - 80px)" }}
    >
      <div className="relative w-[90%] lg:w-[85%] xl:w-[85%] flex flex-col-reverse md:flex-row items-center gap-20 md:gap-5 md:justify-between">
        <div className="w-full md:w-[40%] mb-9 md:mb-0 text-center md:text-left">
          <p className="w-full md:w-fit flex flex-col gap-0.5 mb-9 text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            <span> Our dynamic virtual</span>
            <span>world lets you</span>
            <DynamicWordSlider
              className="w-full md:w-fit text-center md:text-left from-red-400 via-pink-400 via-50% to-primary bg-gradient-to-br bg-clip-text text-transparent text-3xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px]"
              words={["shop", "play", "own property", "do business"]}
            />
          </p>
          <p className="mb-12 text-base text-dark-text">
            Join Stellanex today to explore, create, and connect in our
            blockchain-powered virtual universe. Whether you&apos;re a creator,
            business owner, or gamer, the future is here for you.
          </p>
          <div className="flex justify-center md:justify-start gap-3">
            <Button className="bg-blue-600 rounded text-white border-1 border-blue-600 text-sm lg:text-[1rem] xl:text-lg 2xl:text-xl lg:p-6">
              <span>Get Started</span>
              <span>
                <i className="bi bi-arrow-right"></i>
              </span>
            </Button>
            <Button className="bg-transparent rounded text-white border-1 text-sm lg:text-[1rem] xl:text-lg 2xl:text-xl lg:p-6">
              <span>
                <i className="bi bi-play-fill"></i>
              </span>
              <span>Watch Demo</span>
            </Button>
          </div>
        </div>
        <div className="w-full md:w-[55%] relative">
          <span
            class="block rounded absolute -inset-0 bg-primary blur"
            aria-hidden="true"
          ></span>
          <video
            loop
            autoPlay
            playsInline
            disableRemotePlayback
            muted
            className="rounded relative object-cover aspect-video w-full md:h-full"
          >
            <source src="/videos/hero_section.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
