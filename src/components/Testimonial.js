"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function Testimonial({ testimonials }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  if (!testimonials || testimonials.length === 0) {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{ height: "16rem" }}>
        <p className="text-gray-500 text-lg animate-pulse">Loading testimonials...</p>
      </Grid>
    );
  }

  const currentItem = testimonials[current];

  return (
    <div className="py-12 bg-gray-50">
      <Container maxWidth="lg">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            What Our Students Say
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto" />
        </motion.div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-8 md:p-10"
            >
              <Grid container spacing={4} alignItems="center">
                
                {/* Image */}
                <Grid item xs={12} md={4}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex justify-center"
                  >
                    <div className="relative">
                      <Image
                        src={currentItem.image}
                        alt={currentItem.name}
                        width={200}
                        height={200}
                        className="rounded-full object-cover shadow-xl"
                      />
                    </div>
                  </motion.div>
                </Grid>

                {/* Content */}
                <Grid item xs={12} md={8}>
                  <div className="space-y-4">
                    
                    {/* Quote */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-700 text-lg md:text-xl leading-relaxed italic"
                    >
                      &ldquo;{currentItem.message}&rdquo;
                    </motion.p>

                    {/* Name */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {currentItem.name}
                      </h3>
                      {currentItem.role && (
                        <p className="text-gray-500 text-sm mt-1">{currentItem.role}</p>
                      )}
                    </motion.div>

                  </div>
                </Grid>

              </Grid>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="border-t border-gray-100 px-8 py-4 flex items-center justify-between">
            
            {/* Arrow Buttons */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 rounded-full p-2 transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 rounded-full p-2 transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>

      </Container>
    </div>
  );
}
