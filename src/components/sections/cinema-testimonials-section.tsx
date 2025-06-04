"use client";
import TestimonialCard from "@/components/testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CustomCarouselNext,
  CustomCarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const testimonials = [
  {
    quote:
      "Les lumières s'allument dès que nous entrons. Les rideaux suivent notre humeur. Ce n'est plus une simple villa, c'est une véritable expérience.",
    name: "M. Mohamed",
  },
  {
    quote:
      "Chaque pièce a sa propre ambiance. Le confort est total, tout est automatisé, mais avec goût. Un vrai plaisir au quotidien.",
    name: "K. Hafida",
  },
  {
    quote:
      "Notre maison répond maintenant à nos besoins avant même que nous y pensions. L'intégration des systèmes est parfaitement fluide.",
    name: "Mme. Garcia",
  },
  {
    quote:
      "La combinaison d'éclairage intelligent et d'automatisation a transformé notre villa en un espace à la fois élégant et extrêmement fonctionnel.",
    name: "M. Dupont",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref}>
      <motion.h1
        className="text-3xl md:text-4xl mb-12 uppercase text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
       AVIS DE NOS CLIENTS
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.0, delay: 0.2 }}
        className="relative"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            skipSnaps: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-full lg:basis-1/2 xl:basis-1/3 flex justify-center p-4"
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -bottom-16 right-0 flex">
            <CustomCarouselPrevious className="relative left-0 top-0 translate-y-0" />
            <CustomCarouselNext className="relative right-0 top-0 translate-y-0" />
          </div>
        </Carousel>
      </motion.div>
    </section>
  );
}
