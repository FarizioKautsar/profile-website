import { ProjectPackage } from "@/types";

export const packages: ProjectPackage[] = [
  {
    name: "Portfolio Website Package",
    timeframe: "~1-2 weeks",
    priceRange: "AUD 400 - 640",
    description: "Visually appealing design showcasing your work.",
    features: [
      "3-5 sections/pages",
      "Responsive layout (desktop & mobile)",
      "Light animations (Framer Motion)",
    ],
  },
  {
    name: "Basic Website Package",
    timeframe: "~2-3 weeks",
    priceRange: "AUD 560 - 800",
    description:
      "Up to 5 content pages, mobile-responsive design, and a simple CMS.",
    features: [
      "Mobile-responsive design",
      "Basic animations",
      "Simple CMS setup (e.g., Strapi)",
    ],
  },
  {
    name: "Standard Business Website",
    timeframe: "~3-5 weeks",
    priceRange: "AUD 800 - 1,600",
    description:
      "Up to 10 pages, intermediate animations, lead capture forms, etc.",
    features: [
      "Intermediate animations / micro-interactions",
      "CMS integration for more complex content",
      "Lead capture or basic user login",
    ],
  },
  {
    name: "E-Commerce / Web App",
    timeframe: "~6-10 weeks",
    priceRange: "Starting at AUD 2,000+",
    description:
      "Next.js + Strapi/NestJS, e-commerce or interactive features, payment gateway, etc.",
    features: [
      "Advanced features & performance optimization",
      "Payment gateway integration (Stripe, PayPal, Xendit)",
      "E-commerce or interactive functionality",
    ],
  },
];
