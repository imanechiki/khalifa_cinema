import React from "react";
import Header from "@/components/header";
import HeroSection from "@/components/sections/cinema-hero-section";
import TestimonialsSection from "@/components/sections/cinema-testimonials-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/footer";
import PremiumDesigned from "@/components/sections/premium-design";
import CinemaServicesSection from "@/components/sections/cinema-services";
import CinemaProcessSection from "@/components/sections/cinema-process";
import VideoCinemaSection from "@/components/sections/video-cinema-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-12 md:gap-16 lg:gap-16 xl:gap-20 2xl:gap-24 relative bg-white container mx-auto">
      <Header />
      <HeroSection />
      <PremiumDesigned />
      <CinemaServicesSection />
      <CinemaProcessSection />
      <TestimonialsSection />
      <VideoCinemaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}