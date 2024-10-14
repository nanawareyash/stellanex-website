"use client";

import StellaNexCoin from "@/images/stellanex_coin.svg";

function AboutSection() {
  const stellanexFeatures = [
    {
      title: "Blockchain Security",
      icon: <i className="bi bi-shield-check"></i>,
      description:
        "Your transactions are safe, transparent, and secured by Ethereum's trusted blockchain.",
    },
    {
      title: "Smart Contracts",
      icon: <i className="bi bi-fingerprint"></i>,
      description:
        "Automated and self-executing agreements ensure secure and transparent transactions.",
    },
    {
      title: "NFTs and Digital Assets",
      icon: <StellaNexCoin />,
      description: "Trade unique digital items that hold real value.",
    },
  ];

  return (
    <section
      className="relative w-dvw flex justify-center py-20 bg-slate-100 dark:bg-slate-900"
      style={{
        minHeight: "calc(100svh - 80px)",
      }}
    >
      <div className="z-20 relative w-[90%] lg:w-[85%] xl:[80%] flex flex-col gap-5 md:gap-10">
        <div className="w-full flex flex-col items-center mb-9">
          <p className="mb-5 text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px] text-center">
            About Us
          </p>
          <p className="w-full md:w-[80%] text-base text-dark-text text-center">
            Stellanex is India&apos;s pioneering Metaverse platform, built on
            the secure{" "}
            <span className="relative mx-1.5 whitespace-nowrap">
              <span className="block absolute -inset-0.5 -skew-y-2 -skew-x-12 bg-primary"></span>
              <span className="text-white font-semibold relative">
                Ethereum blockchain.
              </span>
            </span>
            In this immersive virtual world, you can explore, shop, and interact
            in ways that mirror real-life activities like buying property,
            playing games, and running a business. Stellanex brings the future
            to your fingertips today.
          </p>
        </div>
        <div className="grow w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-20">
          {stellanexFeatures.map((feature, index) => (
            <div
              key={`service-${index}`}
              className="group flex flex-col text-center"
            >
              <div class="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px] text-5xl">
                {feature.icon}
              </div>
              <p className="mb-3 text-xl font-medium text-dark dark:text-white sm:text-2xl md:mb-5">
                {feature.title}
              </p>
              <p className="text-base text-dark-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
