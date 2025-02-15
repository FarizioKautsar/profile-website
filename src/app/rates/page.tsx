"use client";

import PackageCard from "@/components/rates/PackageCard";
import { packages } from "@/data/packages";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";

export default function RatesPage() {
  const [style, setStyle] = useState({});

  // useEffect(() => {
  //   const getRandomPosition = () => ({
  //     x: Math.random() * window.innerWidth,
  //     y: Math.random() * window.innerHeight,
  //   });

  //   const mousePosition = getRandomPosition();

  //   const updatedStyle = {
  //     background: `radial-gradient(circle at ${mousePosition.x}px ${
  //       mousePosition.y
  //     }px, rgba(91, 69, 231, 0.215), transparent 80%), 
  //                  radial-gradient(circle at ${mousePosition.x}px ${
  //       mousePosition.y
  //     }px, rgba(53, 117, 219, 0.2), transparent 80%), 
  //                  radial-gradient(circle at ${
  //                    window.innerWidth - mousePosition.x
  //                  }px ${
  //       window.innerHeight - mousePosition.y
  //     }px, rgba(114, 53, 219, 0.2), transparent 80%)`,
  //   };

  //   setStyle(updatedStyle);
  // }, []);

  const [isIndonesian, setIsIndonesian] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(`https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IPINFO_TOKEN}`);
        if (!response.ok) {
          throw new Error('Failed to fetch location');
        }
        const data = await response.json();
        // setIsIndonesian(['ID', 'SG'].includes(data.country));
      } catch (err) {
        console.error(err);
        setError('Unable to determine location');
      }
    };

    fetchLocation();
  }, []);

  return (
    <div style={style}>
      <div
        className="
        min-h-screen 
        py-10 
        px-4 
        container
      "
      >
        <Link href="/">
          <div className="flex items-center mb-8 cursor-pointer">
            <BiChevronLeft className="size-4 mr-4" />
            Back to Home
          </div>
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 font-serif">
          Farizio — Rate Card
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-yellow-400 text-xl font-semibold mb-2 font-serif">
              1. Hourly / Daily Rates
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Hourly Rate:</strong>{" "}
                {isIndonesian ? "Rp170,000" : "AUD 30"}
              </li>
              <li>
                <strong>Daily Rate:</strong>{" "}
                {isIndonesian ? "Rp1,360,000 / day" : "AUD 240 / day"}
              </li>
            </ul>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              *Hourly/day billing is great for small tasks, consultations, or
              flexible scopes.
            </p>
          </section>

          {/* Project-Based Packages */}
          <section>
            <h2 className="text-yellow-400 text-xl font-semibold mb-2 font-serif">
              2. Project-Based Packages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packages.map((pack) => (
                <PackageCard
                  key={pack.name}
                  pack={{
                    ...pack,
                    priceRange: isIndonesian
                      ? (pack.idrPriceRange || pack.priceRange)
                      : pack.priceRange,
                  }}
                />
              ))}
            </div>
          </section>

          {/* Maintenance & Retainer Packages */}
          <section>
            <h2 className="text-yellow-400 text-xl font-semibold mb-2 font-serif">
              3. Maintenance & Retainer Packages
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Basic Retainer (up to 5 hrs/month):</strong>{" "}
                {isIndonesian ? "Rp1.200.000/month" : "~AUD 150/month"}
              </li>
              <li>
                <strong>Standard Retainer (up to 10 hrs/month):</strong>{" "}
                {isIndonesian ? "Rp2,000,000/month" : "~AUD 300/month"}
              </li>
              <li>
                <strong>Custom Retainer:</strong> Price on request
              </li>
            </ul>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              *Retainers cover ongoing updates, security patches, and minor
              feature additions.
            </p>
          </section>

          {/* Add-Ons / Extras */}
          <section>
            <h2 className="text-yellow-400 text-xl font-semibold mb-2 font-serif">
              4. Add-Ons / Extras
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>UI/UX Design Consultation:</strong>{" "}
                {isIndonesian ? "Rp170,000/hr" : "AUD 30/hr"}
              </li>
              <li>
                <strong>Branding / Visual Assets:</strong> Price on request
              </li>
              <li>
                <strong>Priority Support:</strong> +20% on top of retainer for
                faster turnaround
              </li>
            </ul>
          </section>
        </div>

        {/* Important Notes */}
        <section className="mt-8">
          <h2 className="text-yellow-400 text-xl font-semibold mb-2 font-serif">
            Important Notes
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>GST & ABN:</strong> If you&apos;re in Australia, consider
              applying for an ABN. Make it clear whether rates include GST (if
              applicable).
            </li>
            <li>
              <strong>Payment Terms:</strong> Usually{" "}
              <strong>30-50% deposit</strong> upfront, with final payment at
              completion or in milestones.
            </li>
            <li>
              <strong>Scope & Contracts:</strong> Provide a clear proposal or
              contract to define scope and minimize misunderstandings.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
