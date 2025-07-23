"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center text-center text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://videos.pexels.com/video-files/4132710/4132710-hd_1280_720_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="z-20 flex flex-col items-center"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          Pioneering the Future
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-6xl font-bold tracking-tight text-blue-400"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          of Medicine
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          Delivering innovative and reliable pharmaceutical solutions for a healthier world.
        </motion.p>
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore Our Products
            </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}