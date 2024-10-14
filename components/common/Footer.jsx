import Link from "next/link";

import { Divider } from "@nextui-org/react";

import StellanexLogo from "@/images/logo_text.svg";

function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Whitepaper", href: "/company/whitepaper" },
        { label: "Careers", href: "/company/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/legal/terms_of_service" },
        { label: "Privacy Policy", href: "/legal/privacy_policy" },
        { label: "Cookie Policy", href: "/legal/cookie_policy" },
        { label: "NFT Policy", href: "/legal/nft_policy" },
        { label: "Refund Policy", href: "/legal/refund_policy" },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "Marketplace", href: "/marketplace" },
        { label: "Services", href: "/services" },
        { label: "Meta Estate", href: "/meta_estate" },
        { label: "Gaming", href: "/gaming" },
        { label: "Roadmap", href: "/roadmap" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQs", href: "/faqs" },
        { label: "Community Guidelines", href: "/community_guidelines" },
        { label: "Security Practices", href: "/security_practices" },
      ],
    },
  ];
  return (
    <div className="w-[90%] lg:w-[85%] xl:[80%] pt-14 sm:pt-20 lg:pt-[130px] flex flex-col">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-[30%] flex flex-col px-4">
          <div className="text-white text-[10rem] mb-6">
            <StellanexLogo height="fit" />
          </div>
          <p className="text-dark-text text-base mb-10">
            Step Into the Future – Build, Play, and Grow in the Stellanex
            Metaverse.
          </p>
          <div className="flex items-center space-x-3">
            <Link
              className="text-2xl text-dark-text hover:text-white hover:bg-primary p-2 leading-none rounded-full transition-all duration-250"
              href={"#"}
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link
              className="text-2xl text-dark-text hover:text-white hover:bg-primary p-2 leading-none rounded-full transition-all duration-250"
              href={"#"}
              target="_blank"
            >
              <i className="bi bi-twitter-x"></i>
            </Link>
            <Link
              className="text-2xl text-dark-text hover:text-white hover:bg-primary p-2 leading-none rounded-full transition-all duration-250"
              href={"#"}
              target="_blank"
            >
              <i className="bi bi-youtube"></i>
            </Link>
            <Link
              className="text-2xl text-dark-text hover:text-white hover:bg-primary p-2 leading-none rounded-full transition-all duration-250"
              href={"#"}
              target="_blank"
            >
              <i className="bi bi-instagram"></i>
            </Link>
          </div>
        </div>
        <Divider className="bg-[#2E333D] md:hidden my-4" />
        <div className="w-full md:w-[70%] grid grid-cols-2 lg:grid-cols-4 gap-y-5">
          {footerLinks.map((category, cIndex) => (
            <div key={`footer-category-${cIndex}`} className="px-4 mb-20">
              <p className="mb-9 font-heading text-2xl font-medium text-white">
                {category.title}
              </p>
              <ul className="space-y-4">
                {category.links.map((link, lIndex) => (
                  <li key={`footer-category-${category.title}-${lIndex}`}>
                    <Link
                      className="text-base text-dark-text hover:text-white transition-all duration-200"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Divider className="bg-[#2E333D] my-4" />
      <p className="py-2 pb-6 text-center text-dark-text">
        &copy; 2024, Stellanex Private Limited. All Right&apos;s Reserved.
      </p>
    </div>
  );
}

export default Footer;
