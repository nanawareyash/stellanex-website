"use client";

import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Divider, Link } from "@nextui-org/react";

import StellanexLogo from "@/images/logo_text.svg";
import { setActivePage } from "@/redux/slices/appSlice";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activePage = useSelector((state) => state.app.activePage);

  const dispatch = useDispatch();

  const navLinks = [
    {
      id: 1,
      href: "/",
      icon: <i className="bi bi-house-fill"></i>,
      label: "Home",
    },
    {
      id: 2,
      href: "/about",
      icon: <i className="bi bi-home-fill"></i>,
      label: "About",
    },
    {
      id: 3,
      href: "/support",
      icon: <i className="bi bi-home-fill"></i>,
      label: "Support",
    },
    {
      id: 4,
      href: "/token",
      icon: <i className="bi bi-home-fill"></i>,
      label: "Token",
    },
    {
      id: 5,
      href: "/metaverse",
      icon: <i className="bi bi-home-fill"></i>,
      label: "Metaverse",
    },
    {
      id: 6,
      href: "/marketplace",
      icon: <i className="bi bi-home-fill"></i>,
      label: "Marketplace",
    },
  ];

  return (
    <Fragment>
      <div className="h-20 flex justify-center py-4 bg-slate-950 text-white pointer-events-auto overflow-hidden">
        <div className="w-[96%] lg:w-[85%] xl:[80%] flex gap-2 lg:gap-8 items-center">
          <div className="md:hidden">
            <Button
              className="text-2xl bg-transparent text-white min-w-fit px-1"
              disableAnimation
              disableRipple
              onPress={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <i className="bi bi-x"></i>
              ) : (
                <i className="bi bi-list"></i>
              )}
            </Button>
          </div>
          <div className="text-[10rem] absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:relative flex items-center gap-2">
            <StellanexLogo height="fit" />
          </div>
          <div className="grow justify-end hidden md:flex gap-1 lg:gap-4">
            {navLinks.map((nav) => (
              <Fragment key={`nav-link-${nav.id}`}>
                <Link
                  className="text-sm px-2 text-white/70 data-[active=true]:text-blue-400 data-[active=true]:pointer-events-none"
                  data-active={activePage === nav.id}
                  href={nav.href}
                  // isDisabled={activePage === nav.id}
                  onPress={() => {
                    dispatch(setActivePage(nav.id));
                    setIsMenuOpen(false);
                  }}
                >
                  {nav.label}
                </Link>
              </Fragment>
            ))}
          </div>
          <div className="hidden md:block">
            <Button className="text-xs bg-blue-600 text-white">
              Get Citizenship
            </Button>
          </div>
        </div>
      </div>
      <div
        className="absolute w-full bg-black -translate-x-full data-[open=true]:translate-x-0 transition-all duration-300 flex flex-col md:hidden pointer-events-auto"
        data-open={isMenuOpen}
        style={{
          height: "calc(100dvh - 80px)",
        }}
      >
        <div className="flex flex-col px-2 grow">
          {navLinks.map((nav) => (
            <Fragment key={`nav-link-${nav.id}`}>
              <Link
                className="p-3 text-white/70 data-[active=true]:text-blue-400"
                data-active={activePage === nav.id}
                href={nav.href}
                onPress={() => {
                  dispatch(setActivePage(nav.id));
                  setIsMenuOpen(false);
                }}
              >
                {nav.label}
              </Link>
            </Fragment>
          ))}
        </div>
        <Divider className="bg-slate-500" />
        <div className="px-5 py-3">
          <Button className="bg-blue-600 w-full text-white">
            Get Citizenship
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
