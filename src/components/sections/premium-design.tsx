"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

export default function PremiumDesigned() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="
        relative 
        flex
        items-center 
        overflow-hidden 
        h-auto
        md:h-[60rem]

      "
    >
      <motion.div
        className="hidden md:flex relative h-full overflow-hidden rounded-full"
        initial={{
          width: "0%",
          x: "-100%",
        }}
        animate={
          inView
            ? {
                width: "50%",
                x: "0%",
              }
            : {}
        }
        transition={{ 
          width: { duration: 1.2, ease: "easeOut", delay: 0.5 },
          x:     { duration: 1.5, ease: "easeOut", delay: 0.5 },
        }}
        style={{ flexShrink: 0 }}
      >
        <Image
          src="/cinemaImages/b.webp"
          alt="Premium theater (left side)"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      <motion.div
        className="
          flex 
          flex-col 
          items-center 
          justify-center 
          px-8 
          text-center 
          overflow-hidden
        "
        initial={{
          width: typeof window !== "undefined" && window.innerWidth < 768 ? "100%" : "50%",
          y: 50,
        }}
        animate={
          inView
            ? {
                width: typeof window !== "undefined" && window.innerWidth < 768 ? "100%" : "50%",
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          width: { duration: 1.2, ease: "easeOut", delay: 0.5 },
          y: { duration: 0.8, ease: "easeOut", delay: 1.0 },
        }}
        style={{ flexShrink: 0 }}
      >
        <h1 className="font-contralto text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-[#1a1a1a]">
          DESIGN D’EXCEPTION.
          <br />
          EXPÉRIENCE PRIVÉE.
        </h1>
        <p className="text-gray-700 max-w-3xl">
          Nous créons des cinémas résidentiels immersifs, où technologie
          avancée et élégance architecturale se rencontrent. Chaque espace
          offre une immersion totale et un confort absolu, parfaitement adapté
          à votre mode de vie.
        </p>
      </motion.div>

      <motion.div
        className="hidden md:flex relative h-full overflow-hidden rounded-full"
        initial={{
          width: "50%",
          x: "0%",
        }}
        animate={
          inView
            ? {
                width: "0%",
                x: "100%",
              }
            : {}
        }
        transition={{
          width: { duration: 1.2, ease: "easeInOut", delay: 0.5 },
          x:     { duration: 1.5, ease: "easeIn", delay: 0.5 },
        }}
        style={{ flexShrink: 0 }}
      >
        <Image
          src="/cinemaImages/b.webp"
          alt="Premium theater (right side)"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>
    </section>
  );
}
