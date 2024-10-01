"use client";

import { useState } from "react";

import { Button } from "@nextui-org/react";

function ServicesSection() {
  const [selectedService, setSelectedService] = useState(-1);

  const services = [
    {
      title: "Meta Citizenship",
      tagline: "Become a Stellanex Citizen",
      background: "url('/images/meta_citizenship.jpg')",
      description:
        "Join the Stellanex community by becoming a citizen. Enjoy exclusive perks like special events, discounts, and the opportunity to connect with others in the Metaverse. Citizenship comes with added benefits that make your virtual experience even richer.",
    },
    {
      title: "Meta Shopping",
      tagline: "Shop at the Elysian Mall",
      background: "url('/images/meta_ecommerce.jpg')",
      description:
        "Visit Elysian, our virtual shopping mall, where you can browse and buy everything from fashion to accessories. Enjoy a unique, futuristic shopping experience with the convenience of secure transactions and customer reviews.",
    },
    {
      title: "Meta Real Estate",
      tagline: "Buy and Trade Virtual Properties",
      background: "url('/images/meta_real_estate.jpg')",
      description:
        "In Stellanex, you can invest in virtual property just like in the real world. Whether it's a home, business space, or land, owning property in the Metaverse offers exciting investment opportunities.",
    },
    {
      title: "Meta Gaming",
      tagline: "Play and Earn in the Stellanex",
      background: "url('/images/meta_gaming.jpg')",
      description:
        "Enter the gaming world of Stellanex, where you can play, compete, and earn rewards. Whether you enjoy fast-paced action or strategic simulations, there's something for every gamer. Earn digital tokens and assets while playing, which you can use or trade within the Metaverse.",
    },
    {
      title: "Meta Business",
      tagline: "Run Your Business in Stellanex",
      background: "url('/images/meta_business.jpg')",
      description:
        "Stellanex provides a unique platform for businesses to reach a new, global audience. Whether you're a small start-up or a large company, Stellanex helps you grow your brand and reach new customers in the Metaverse.",
    },
  ];
  return (
    <section
      className="relative w-dvw flex justify-center py-20 bg-slate-900"
      style={{
        minHeight: "calc(100svh - 80px)",
      }}
    >
      <div className="z-20 relative w-[90%] lg:w-[85%] xl:[80%] flex flex-col gap-5 md:gap-10">
        <div className="w-full flex flex-col">
          <p className="mb-5 text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px] text-center">
            Explore Our Meta Services
          </p>
          <p className="text-base text-dark-text text-center">
            We offer a variety of services designed to make your experience in
            the Metaverse exciting, seamless, and rewarding.
          </p>
        </div>
        <div className="grow w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={`service-${index}`}
              className="relative pt-[125%] xs:pt-[175%] sm:pt-[125%] lg:pt-[150%] border-1 border-slate-600 rounded-xl bg-cover bg-bottom overflow-hidden"
              style={{ backgroundImage: service.background }}
            >
              <div
                className="group absolute bottom-0 w-full h-20 data-[open=true]:h-full p-4 rounded-b-xl bg-black/50 backdrop-blur-md flex flex-col gap-5 transition-all duration-300"
                data-open={selectedService === index}
              >
                <div className="flex gap-1 items-center">
                  <div className="grow flex flex-col gap-1 overflow-hidden">
                    <p className="text-white font-extrabold text-sm md:text-[1rem] uppercase tracking-widest">
                      {service.title}
                    </p>
                    <p className="text-yellow-400 text-xs md:text-sm underline underline-offset-4 font-semibold truncate group-data-[open=true]:whitespace-normal">
                      {service.tagline}
                    </p>
                  </div>
                  <div className="px-1">
                    <Button
                      className="bg-transparent text-white/80 min-w-0 min-h-0 border-1 border-white rounded-full h-fit p-1"
                      onPress={() =>
                        setSelectedService((prev) =>
                          prev === index ? -1 : index
                        )
                      }
                    >
                      <i class="bi bi-chevron-up w-5 h-5 transition-all duration-300 group-data-[open=true]:-rotate-180"></i>
                    </Button>
                  </div>
                </div>
                <p className="text-white text-justify text-xs md:text-sm drop-shadow-2xl opacity-0 group-data-[open=true]:opacity-100 transition-all duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
