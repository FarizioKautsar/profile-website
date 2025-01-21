import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Yeseva_One } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { TooltipProvider } from "@/components/ui/tooltip";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
const yesevaOne = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yeseva",
});

export const metadata: Metadata = {
  title: "Farizio - Web Developer",
  description: "Hi, I'm Farizio! I build tools that empower businesses and communities. Need a web developer? I'm your guy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={clsx(plusJakarta.className, yesevaOne.variable)}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
