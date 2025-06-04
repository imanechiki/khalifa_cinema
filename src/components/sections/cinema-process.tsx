"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function CinemaProcessSection() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const title = "NOTRE\nAPPROCHE";
    const letters = title.split("").map((char, i) =>
        char === "\n" ? (
            <br key={i} />
        ) : (
            <motion.h2
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                style={{ display: char === " " ? "inline-block" : "inline-block" }}
                className=""
            >
                {char}
            </motion.h2>
        )
    );

    return (
        <section ref={ref}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="full overflow-hidden"
                >
                    <Image
                        src="/cinemaImages/d.webp"
                        alt="Luxury villa with pool at sunset"
                        width={800}
                        height={600}
                        priority
                        quality={100}
                        className="w-full h-auto object-cover "
                    />
                </motion.div>
                <div className="flex flex-col gap-4 lg:gap-6">
                    <div
                        className="font-contralto text-3xl md:text-4xl lg:text-5xl mb-6 uppercase"
                        style={{ display: "inline-block", lineHeight: 1.2 }}
                    >
                        {letters}
                    </div>
                    <motion.ul
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="color[#191919] text-2xl flex flex-col gap-8"
                    >
                        <li className="poppins font-medium  flex flex-col gap-4">
                            <span>1. Discover Your Vision</span>
                            <span>Personal consultation to understand your space and goals.</span>
                        </li>
                        <li className="poppins font-medium  flex flex-col gap-4">
                            <span>2. Design & Customize</span>
                            <span>Tailored layouts blending style, comfort, and tech.</span>
                        </li>
                        <li className="poppins font-medium  flex flex-col gap-4">
                            <span>3. Deliver & Install</span>
                            <span>Effortless setup, complete handover, and support.</span>
                        </li>
                    </motion.ul>
                </div>
            </div>
        </section>
    );
}
