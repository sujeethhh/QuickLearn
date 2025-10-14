"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight} from "lucide-react";
import Image from "next/image";

export default function Testimonial({ testimonials }) {
  const [current, setCurrent] = useState(0);

  // Auto-scroll every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg animate-pulse">Loading testimonials...</p>
      </div>
    );
  }

  const currentItem = testimonials[current];

  return (
    <div className="relative w-[95%] mx-auto md:w-[90%] lg:w-[85%] xl:w-[80%] 
bg-white/70 backdrop-blur-lg border border-blue-100/40 shadow-2xl rounded-3xl p-12 md:p-16">

      {/* Floating gradient background glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72  opacity-30 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72  opacity-30 blur-3xl rounded-full" />

      {/* Slide animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-10 relative z-10"
        >
          {/* Left: text & details */}
          <div className="flex-1 space-y-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex gap-1"
            >
              
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 text-lg leading-relaxed italic"
            >
              “{currentItem.message}”
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-semibold text-gray-900 text-xl"
            >
              {currentItem.name}
            </motion.h3>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-300 opacity-20 blur-2xl rounded-2xl"
              />
              <Image
                src={currentItem.image}
                alt={currentItem.name}
                width={280}
                height={280}
                className="rounded-2xl shadow-2xl object-cover ring-4 ring-white/60"
              />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <div className="absolute inset-x-0 flex justify-between items-center px-4">
        <button
          onClick={prevSlide}
          className="bg-white/70 hover:bg-white text-gray-700 hover:text-blue-600 rounded-full p-2 shadow-lg transition-transform hover:scale-110 backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/70 hover:bg-white text-gray-700 hover:text-blue-600 rounded-full p-2 shadow-lg transition-transform hover:scale-110 backdrop-blur-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrent(i)}
            whileHover={{ scale: 1.3 }}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-blue-600 shadow-[0_0_8px_2px_rgba(37,99,235,0.5)]"
                : "bg-gray-300 hover:bg-blue-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
