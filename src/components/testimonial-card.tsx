"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  name: string;
}

export default function TestimonialCard({ quote, name }: TestimonialCardProps) {
  return (
    <motion.div whileHover={{ scale: 1 }} transition={{ duration: 0.5 }}>
      <Card className="max-w-md cursor-grab border shadow-md bg-white rounded-3xl h-full w-full p-4">
        <CardContent className="p-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 mb-6  text-center"
          >
            {quote}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <p className="font-semibold text-gray-800">{name}</p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
