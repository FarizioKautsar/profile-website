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
  title: "Farizio Kautsar Heruzy - Web Developer & Designer",
  description:
    "Hi! I'm Farizio Kautsar Heruzy, a passionate web developer and designer. Explore my portfolio to see my interactive and engaging web projects. Need a web developer? I'm your guy!",
  keywords: ["web developer", "frontend developer", "Next.js", "React", "portfolio"],
  openGraph: {
    title: "Farizio Kautsar Heruzy - Web Developer & Designer",
    description: "Hi! I'm Farizio. Check out my web development projects and experiences.",
    url: "https://farizio.io",
    images: [
      {
        url: "/og-image.jpg", // Ensure this file is in your `/public` folder
        width: 1200,
        height: 630,
        alt: "Farizio Kautsar Heruzy Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farizio Kautsar Heruzy - Web Developer & Designer",
    description: "Hi! I'm Farizio. Check out my web development projects and experiences.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://farizio.io",
  },
  other: {
    "script[type='application/ld+json']": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Farizio Kautsar Heruzy",
      jobTitle: "Web Developer",
      url: "https://farizio.io",
      sameAs: [
        "https://github.com/FarizioKautsar",
        "https://linkedin.com/in/FarizioKautsar",
      ],
    }),
  },
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
