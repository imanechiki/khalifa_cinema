"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export interface Feature {
  title: string;
  description: string;
}

interface FeaturesSidebarProps {
  features: Feature[];
  className?: string;
}

export default function FeaturesSidebar({
  features,
  className = "",
}: FeaturesSidebarProps) {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  return (
    <div
      className={`w-full max-w-[400px] lg:w-[400px] flex flex-col gap-2 justify-center rounded-r-2xl pr-4 ${className}`}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className={`p-6 cursor-pointer backdrop-blur-sm rounded-2xl ${
            activeFeature === index ? "bg-white/20" : "hover:bg-white/25"
          }`}
          onClick={() => setActiveFeature(index)}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: activeFeature === index ? 1.02 : 1,
            backgroundColor:
              activeFeature === index
                ? "rgba(255,255,255,0.2)"
                : "rgba(255,255,255,0)",
          }}
          whileHover={{
            scale: 1.02,
            backgroundColor: "rgba(255,255,255,0.25)",
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: index * 0.1, // Stagger the entrance animation
          }}
        >
          <h2 className="text-lg md:text-xl font-medium mb-2 text-white">
            {feature.title}
          </h2>
          <motion.div
            initial={false}
            animate={{ height: activeFeature === index ? "auto" : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <motion.p
              className="text-sm text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeFeature === index ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
