import Link from "next/link";

import StellanexLogoDark from "../svgs/StellanexLogoDark";

export default function Navbar() {
  return (
    <header className="fixed top-0 h-16 z-50 w-full flex items-center justify-center bg-transparent backdrop-blur-2xl border-b">
      <div className="container flex h-12 md:h-16 items-center justify-between px-4 md:px-2">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 focus-visible:outline-none"
          >
            <StellanexLogoDark className="h-[1.5rem]" />
          </Link>
        </div>
      </div>
    </header>
  );
}
