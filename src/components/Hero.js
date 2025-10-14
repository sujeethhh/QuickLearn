"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "IT Service Management",
    subtitle: "Master ITIL® 4 frameworks and best practices to manage IT services efficiently. Guide professionals in aligning IT services with business needs, handling incidents, problems, and continual improvement.",
    image: "/ITIL-Foundation.png",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "Project & Program Management",
    subtitle: "Earn globally recognized certifications like PMP, ACP, and Prince2. Develop essential skills in project planning, execution, agile practices, and strategic governance.",
    image: "/pmp.png",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Agile, Scrum & Kanban",
    subtitle: "Excel in agile delivery methods and frameworks like SAFe, Scrum, and Kanban. Train professionals in agile leadership, scaling frameworks, and product ownership.",
    image: "/hero2.jpg",
    accent: "from-purple-500 to-pink-500",
  },
  {
    title: "Quality Management",
    subtitle: "Master process improvement and efficiency using Lean Six Sigma methodologies. Gain Green Belt and Black Belt certifications to reduce waste and optimize quality.",
    image: "/slider_safe_cap.png",
    accent: "from-orange-500 to-red-500",
  },
  {
    title: "DevOps & Business Analysis",
    subtitle: "Bridge development and operations for faster, more reliable delivery. Master DevOps automation, CI/CD, cloud practices, and business transformation.",
    image: "/dev_ops.png",
    accent: "from-teal-500 to-blue-500",
  },
  {
    title: "Software Testing & Technical",
    subtitle: "Excel in software quality assurance and testing principles. Master ISTQB certifications with advanced skills in test design, execution, and automation.",
    image: "/hero6.jpg",
    accent: "from-indigo-500 to-purple-500",
  },
];

// Animations (unchanged, just shortened here)
const slideTransition = { type: "spring", stiffness: 120, damping: 25, mass: 1 };
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } }, exit: { opacity: 0 } };
const slideInLeftVariants = { hidden: { opacity: 0, x: -150 }, visible: { opacity: 1, x: 0, transition: { ...slideTransition, duration: 1.1 } }, exit: { opacity: 0, x: 100 } };
const fadeInVariants = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { ...slideTransition, duration: 1, delay: 0.25 } }, exit: { opacity: 0, y: -40 } };
const buttonVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { ...slideTransition, duration: 0.8, delay: 0.25 } }, exit: { opacity: 0, y: -30 } };

export default function Hero({ onCategorySelect }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 200);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const prevSlide = () => !isTransitioning && goToSlide((currentSlide - 1 + slides.length) % slides.length);
  const nextSlide = () => !isTransitioning && goToSlide((currentSlide + 1) % slides.length);
  const handleClick = () => {
    onSendValue(slides[currentSlide].title);
  };
  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] w-full overflow-hidden bg-gray-900">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          className="absolute inset-0"
          initial={{ scale: 1.15, opacity: 0, x: 100 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          exit={{ scale: 0.95, opacity: 0, x: -100 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].accent} opacity-25`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/55" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
              className="max-w-4xl text-white"
            >
              {/* Title */}
              <motion.h1
                variants={slideInLeftVariants}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] sm:leading-[0.85] mb-6 sm:mb-8 tracking-[-0.02em] font-serif"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                <span className="bg-gradient-to-r from-white via-white to-white/95 bg-clip-text text-transparent drop-shadow-sm">
                  {slides[currentSlide].title}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeInVariants}
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.5] sm:leading-[1.6] mb-6 sm:mb-8 md:mb-10 text-white/85 max-w-4xl font-light tracking-wide"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Buttons */}
              <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <motion.button
                  className="group relative bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg overflow-hidden shadow-2xl tracking-wide"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onCategorySelect(slides[currentSlide].title)}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 sm:p-3 text-white hover:bg-white/20 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        disabled={isTransitioning}
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 sm:p-3 text-white hover:bg-white/20 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        disabled={isTransitioning}
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
      </motion.button>

      {/* Slide Dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? "bg-white scale-125"
              : "bg-white/40 hover:bg-white/70"
              }`}
            whileHover={{ scale: index === currentSlide ? 1.25 : 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-20 text-white/70 text-xs sm:text-sm font-medium">
        <span className="text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-1 sm:mx-2">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
}
