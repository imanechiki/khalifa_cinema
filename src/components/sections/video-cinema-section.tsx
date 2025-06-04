"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function VideoCinemaSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[80vh] rounded-[2rem] overflow-hidden animate-fade-in mt-10 lg:mt-0"
    >
      {/* Video background - always visible */}
      <video
        ref={videoRef}
        src="/cinemaImages/video.webm"
        className="absolute inset-0 w-full h-full object-cover rounded-[2rem] animate-scale-in"
        playsInline
        muted
        loop
      />

      {/* Gradient overlay - always visible when not playing */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity duration-700 rounded-[2rem] animate-fade-in ${
          isPlaying ? "opacity-30" : "opacity-100"
        }`}
      />

      {/* Content overlay */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 animate-slide-up"
      >
        <h1
          className={`text-4xl font-contralto md:text-5xl lg:text-6xl text-center max-w-5xl leading-tight mb-20 transition-opacity duration-700 animate-fade-in ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        >
          VIVEZ L'EXPÉRIENCE DU SMART
          <br />
          LIVING AVEC KHALIFA GROUP
        </h1>

        {/* Play/Pause button */}
        <div
          className={`relative w-32 h-32 cursor-pointer group transition-opacity duration-700 animate-bounce-in ${
            isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={togglePlay}
        >
          {/* Rotating text circle */}
          <div className="absolute inset-0 rounded-full animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="textPath"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[8px] uppercase tracking-widest">
                <textPath xlinkHref="#textPath" className="fill-white">
                  video play · video play · video play · video play · video play
                  ·
                </textPath>
              </text>
            </svg>
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <Play className="h-8 w-8 text-black fill-black ml-1" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Clickable overlay for pausing when video is playing */}
      <div
        className={`absolute inset-0 cursor-pointer rounded-[2rem] ${
          isPlaying ? "block" : "hidden"
        }`}
        onClick={togglePlay}
      />

      {/* Pause button - only visible when video is playing */}
      {isPlaying && (
        <button
          onClick={togglePlay}
          name="play"
          className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors z-10 animate-fade-in"
        >
          <Pause className="h-6 w-6 text-white" />
        </button>
      )}
    </section>
  );
}
