"use client";

import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Divider, Link } from "@nextui-org/react";

import StellanexLogo from "@/images/logo_text.svg";

import { setActivePage } from "@/redux/slices/appSlice";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activePage = useSelector((state) => state.app.activePage);

  const dispatch = useDispatch();

  const navLinks = [
    { id: 1, href: "/", label: "Home" },
    { id: 2, href: "/about", label: "About" },
    { id: 3, href: "/support", label: "Support" },
    { id: 4, href: "/token", label: "Token" },
    { id: 5, href: "/metaverse", label: "Metaverse" },
    { id: 6, href: "/marketplace", label: "Marketplace" },
  ];

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      if (storedTheme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (systemPrefersDark) {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  return (
    <Fragment>
      <div className="h-20 flex justify-center py-4 bg-white dark:bg-slate-950 dark:text-white pointer-events-auto overflow-hidden">
        <div className="w-[96%] lg:w-[85%] xl:[80%] flex justify-between md:justify-normal gap-2 lg:gap-8 items-center">
          <div className="md:hidden">
            <Button
              className="text-2xl bg-transparent dark:text-white min-w-fit px-1"
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
                  className="text-base px-2 text-dark-text data-[active=true]:text-primary hover:text-black dark:hover:text-white data-[active=true]:pointer-events-none select-none"
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
          <div className="hidden md:flex gap-3">
            <Button
              className="text-small rounded bg-transparent dark:text-white border-1 border-slate-400 dark:border-white"
              size="sm"
            >
              Login
            </Button>
            <Button
              className="text-small rounded bg-primary text-white border-1 border-primary"
              size="sm"
            >
              Get Citizenship
            </Button>
          </div>
          <div className="">
            <Button
              className="min-w-8 w-8 h-8 rounded-full bg-black/10 dark:bg-white/20 text-dark-text dark:text-white text-base"
              size="sm"
              onPress={handleDarkMode}
            >
              <i className="bi bi-sun-fill dark:hidden"></i>
              <i className="bi bi-moon-fill dark:block hidden"></i>
            </Button>
          </div>
        </div>
      </div>
      <div
        className="absolute w-full bg-white dark:bg-black -translate-x-full data-[open=true]:translate-x-0 transition-all duration-300 flex flex-col md:hidden pointer-events-auto"
        data-open={isMenuOpen}
        style={{
          height: "calc(100dvh - 80px)",
        }}
      >
        <div className="flex flex-col px-2">
          {navLinks.map((nav) => (
            <Fragment key={`nav-link-${nav.id}`}>
              <Link
                className="p-3 text-base text-dark-text hover:text-black dark:hover:text-white data-[active=true]:text-primary-500"
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
        <div className="px-5 py-3 flex gap-3">
          <Button
            className="text-small rounded bg-transparent dark:text-white border-1 border-slate-400 dark:border-white"
            size="sm"
          >
            Login
          </Button>
          <Button
            className="text-small rounded bg-primary text-white border-1 border-primary"
            size="sm"
          >
            Get Citizenship
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
