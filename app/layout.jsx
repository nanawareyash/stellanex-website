import Navbar from "@/components/layouts/Navbar";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} dark`}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
