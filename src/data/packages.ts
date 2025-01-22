import { ProjectPackage } from "@/types";

export const packages: ProjectPackage[] = [
  {
    name: "Portfolio Website Package",
    timeframe: "~1-2 weeks",
    priceRange: "AUD 400 - 640",
    idrPriceRange: "IDR 2,900,000 - 4,600,000",
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
    idrPriceRange: "IDR 4,000,000 - 5,700,000",
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
    idrPriceRange: "IDR 5,700,000 - 11,400,000",
    description:
      "Up to 10 pages, intermediate animations, lead capture forms, etc.",
    features: [
      "Intermediate animations / micro-interactions",
      "CMS integration for more complex content",
      "Lead capture or basic user login",
    ],
  },
  // {
  //   name: "Mobile App Development",
  //   timeframe: "~4-8 weeks",
  //   priceRange: "Starting at AUD 2,000+",
  //   description:
  //     "Cross-platform or native app development with basic to mid-level functionality.",
  //   features: [
  //     "User authentication & basic data management",
  //     "Simple integrations (e.g., push notifications, payment gateways)",
  //     "Performance optimization & store deployment (App Store/Play Store)",
  //   ],
  //   note: "Actual costs can easily exceed AUD 2,000 depending on feature complexity (e.g., real-time chat, advanced animations, offline support, etc.).",
  // },
  {
    name: "E-Commerce / Web App",
    timeframe: "~6-10 weeks",
    priceRange: "Starting at AUD 2,000+",
    idrPriceRange: "IDR 14,200,000+",
    description:
      "Next.js + Strapi/NestJS, e-commerce or interactive features, payment gateway, etc.",
    features: [
      "Advanced features & performance optimization",
      "Payment gateway integration (Stripe, PayPal, Xendit)",
      "E-commerce or interactive functionality",
    ],
  },
];
