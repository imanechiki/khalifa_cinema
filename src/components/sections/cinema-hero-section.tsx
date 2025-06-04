"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import FeaturesSidebar, { Feature } from "@/components/features-sidebar";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const features: Feature[] = [
    {
      title: "Commodité et Automatisation",
      description:
        "Systèmes intelligents pour contrôler tous les aspects de votre villa.",
    },
    {
      title: "Efficacité Énergétique",
      description:
        "Solutions écologiques réduisant l'empreinte carbone et les coûts énergétiques.",
    },
    {
      title: "Sécurité Renforcée",
      description: "Systèmes de sécurité avancés pour une protection optimale.",
    },
    {
      title: "Confort et Personnalisation Améliorés",
      description: "Espaces adaptés à vos besoins et préférences personnelles.",
    },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative w-full min-h-[60vh] sm:min-h-[50vh] lg:min-h-[80vh] xl:min-h-[80vh] overflow-hidden mt-20  group"
    >
      <div className="flex flex-col w-full h-full m-2 sm:m-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
          <Image
            src="/cinemaImages/c.webp"
            alt="Luxury Villa Interior"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-all duration-300 z-10" />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 flex flex-col lg:flex-row w-full h-full">
          {/* Main Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-end p-4 sm:p-6 md:p-12 lg:p-16"
          >
            <div className="mt-auto">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-contralto text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-2 sm:mb-4 text-white"
              >
                VOTRE CINÉMA PRIVÉ COMMENCE ICI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-xl text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-8 leading-relaxed text-white"
              >
                {`Discutez de votre projet avec nos experts et imaginez l’espace dont vous rêvez.`}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#contact">
                  <Button
                    variant="outline"
                    name="contact-us"
                    className="rounded-full px-4 py-2 sm:px-8 sm:py-6 h-auto bg-transparent text-white border-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Prenez rendez-vous
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature Sidebar - Hidden on small screens, positioned below on medium screens, side by side on large screens */}
          <div className="hidden lg:flex mt-auto sm:mt-auto lg:mt-0 px-4 sm:px-0 pb-4 sm:pb-0 w-full lg:w-auto">
            <FeaturesSidebar
              features={features}
              className="flex-shrink-0 sm:max-h-[280px] lg:max-h-none overflow-y-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
