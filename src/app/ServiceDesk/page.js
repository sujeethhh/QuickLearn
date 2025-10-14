"use client";
import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFloat from "@/components/ui/ScroolReveal";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import LiveChat from "@/components/LiveChat";

export default  function ServiceDesk(){
    

    const slideTransition = { type: "spring", stiffness: 120, damping: 25, mass: 1 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
    exit: { opacity: 0 }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { ...slideTransition, duration: 1.1 } },
    exit: { opacity: 0, x: 100 }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { ...slideTransition, duration: 1, delay: 0.25 } },
    exit: { opacity: 0, y: -40 }
  };

  const staggerTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const wordSlideVariants = {
    hidden: { opacity: 0, x: -20, y: 10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 1
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Enhanced image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1.2
      }
    }
  };

    return(
        <>
        <Headers/>
        <section className="relative h-[600px] w-full overflow-hidden bg-gray-900">
        {/* Background with same animations as Hero */}
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15, opacity: 0, x: 100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.95, opacity: 0, x: -100 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/serviceDesk.jpg')` }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-slate-800 to-gray-900 opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/55" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="max-w-4xl text-white"
              >
                {/* Title */}
                <motion.h1
                  variants={slideInLeftVariants}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.85] mb-8 tracking-[-0.02em] font-serif"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/95 bg-clip-text text-transparent drop-shadow-sm">
                 Service Desk
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={fadeInVariants}
                  className="text-lg md:text-xl lg:text-2xl leading-[1.6] mb-10 text-white/85 max-w-4xl font-light tracking-wide"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                >
                  Value for time and money invested is the prime aspiration of Quicklearn Systems.
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      {/* Enhanced ScrollFloat Section */}
      <section className=" bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <ScrollFloat
            animationDuration={1.5}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.05}
            containerClassName="text-center"
            textClassName="font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] bg-gradient-to-r from-slate-700 via-gray-800 to-stone-900 bg-clip-text text-transparent drop-shadow-lg"
          >
             Service Desk
          </ScrollFloat>
        </div>
      </section>
      <section className="w-full bg-white  px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Text Content */}
            <motion.div
              className="lg:col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerTextVariants}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Course Overview</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.h2>
              <motion.p
                className="text-gray-700 leading-relaxed mb-6 text-justify"
                variants={paragraphVariants}
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.01, color: "#374151" }}
                transition={{ duration: 0.2 }}
              >
                ITIL 4 Practitioner: Problem Management certification training courses and exams based on the ITIL practice for Problem management.
Problem Management is a process within IT Service Management that focuses on identifying, analyzing, and resolving the underlying causes of recurring incidents or problems to prevent them from happening again in the future.


              </motion.p>
              <motion.p
                className="text-gray-700 leading-relaxed mb-6 text-justify"
                variants={paragraphVariants}
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.01, color: "#374151" }}
                transition={{ duration: 0.2 }}
              >
                A Problem Manager is responsible for overseeing the Problem Management process, coordinating investigations, and implementing proactive measures to minimize the impact of problems on IT services.
              </motion.p>
              <motion.p
                className="text-gray-700 leading-relaxed mb-6 text-justify"
                variants={paragraphVariants}
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.01, color: "#374151" }}
                transition={{ duration: 0.2 }}
              >
                ITIL 4 takes you through a more evolved view of a Service Value System (SVS), which provides a holistic end-to-end picture of what it really means to contribute to business value, and also integrates concepts from models such as Lean IT, Agile and DevOps.
              </motion.p>
              </motion.div>
              <motion.div
              className="lg:col-span-4 sticky top-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
            >
              <motion.img
                src="/corporate.jpg"
                alt="Corporate Training"
                className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Professional badge */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white rounded-lg shadow-2xl p-2 border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
               
               <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">Training Calendar</div>
                  
                </div>
                
              </motion.div>
              
              
               <Link href="/Events">
              <motion.button className="absolute -bottom-4 -right-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold px-5 py-2 rounded-xl shadow-xl hover:from-red-600 hover:to-pink-700 active:scale-95 transition-all duration-300 cursor-pointer" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} >
                Check Schedule 
                </motion.button>
                </Link>
                
             
            </motion.div>
              


              </div>
              </div>
              </section>
              <section className="w-full bg-gradient-to-br from-stone-50 via-slate-50 to-gray-50 py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
              className="lg:col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerTextVariants}
            >
          <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Course outline</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>
              <motion.ul
                className="list-none pl-0 text-gray-700 space-y-3"
                variants={staggerTextVariants}
              >
                {[
                  { text: "", desc: "Key concepts of the practice" },
                  { text: "", desc: "Processes of the practice" },
                  { text: "", desc: "Roles and competencies of the practice" },
                  { text: "", desc: "How information and technology enable the practice" },
                  { text: "", desc: "Role of partners and suppliers in the practice" },
                  { text: "", desc: "How the ITIL capability model can be used to develop the practice" },
                  { text: "", desc: "How the guiding principles support the practice" }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={wordSlideVariants}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span>
                      <span className="font-semibold text-slate-800 group-hover:text-stone-700 transition-colors duration-200">
                        {item.text}
                      </span>{" "}
                      {item.desc}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Learning Objective</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>
              <motion.ul
                className="list-none pl-0 text-gray-700 space-y-3"
                variants={staggerTextVariants}
              >
                {[
                  { text: "", desc: "Define key concepts, principles, value, and challenges of Service Desk." },
                  { text: "", desc: "Capture demand for incident resolution and service requests." },
                  { text: "", desc: "Establish and maintain communication channels and interfaces between the service provider and users." },
                  { text: "", desc: "Enable effective, efficient, and convenient communications between the service provider and its users." },
                  { text: "", desc: "Apply Service Desk metrics to improve performance." },
                  { text: "", desc: "Measure, assess, and develop the Service Desk practice capability in their organization using the ITIL Maturity Model." }
                 
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={wordSlideVariants}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span>
                      <span className="font-semibold text-slate-800 group-hover:text-stone-700 transition-colors duration-200">
                        {item.text}
                      </span>{" "}
                      {item.desc}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Target Group</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>
              <motion.ul
                className="list-none pl-0 text-gray-700 space-y-3"
                variants={staggerTextVariants}
              >
                {[
                  { text: "", desc: "Individuals who require a basic understanding of the refreshed ITIL framework and how it may be used to enhance the quality of IT service management within an organization." },
                  { text: "", desc: "IT professionals that are working within an organization that has adopted and adapted ITIL, who need to be informed about and thereafter contribute to, an ongoing service improvement program." },
                  {text:"",desc:"This may include but is not limited to, IT professionals, business managers and business process owners."}
                 
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={wordSlideVariants}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span>
                      <span className="font-semibold text-slate-800 group-hover:text-stone-700 transition-colors duration-200">
                        {item.text}
                      </span>{" "}
                      {item.desc}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Exam Details</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>
              <motion.ul
                className="list-none pl-0 text-gray-700 space-y-3"
                variants={staggerTextVariants}
              >
                {[
                  { text: "", desc: "Duration of 30 minutes (45 minutes for candidates taking the exam in a language other than their native)" },
                  { text: "", desc: "Closed book" },
                  {text:"",desc:"20 multiple choice questions"},
                  {text:"",desc:"1 mark for each correct answer"},
                  {text:"",desc:"Passing score: 13/20 marks - 65%"}
                 
                 
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={wordSlideVariants}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span>
                      <span className="font-semibold text-slate-800 group-hover:text-stone-700 transition-colors duration-200">
                        {item.text}
                      </span>{" "}
                      {item.desc}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
              </motion.div>
              <motion.div
              className="lg:col-span-4 sticky top-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
            >
              <motion.img
                src="/team.jpg"
                alt="Our Team"
                className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              {/* Values highlight */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold font-serif text-slate-800">

                                                Service Desk</div>
                  <div className="text-xs text-slate-600 font-medium">Streamline. Optimize. Deliver.</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          </div>
          </section>

      {/* IT Service Management Courses Slider */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Related Courses</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of IT Service Management courses
            </p>
          </motion.div>

          {/* Slider Component */}
          <div className="relative">
            {/* Slider Controls */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
              <button 
                className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={() => {
                  const slider = document.getElementById('itsm-slider');
                  slider.scrollBy({ left: -300, behavior: 'smooth' });
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <button 
                className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={() => {
                  const slider = document.getElementById('itsm-slider');
                  slider.scrollBy({ left: 300, behavior: 'smooth' });
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Slider Container */}
            <div 
              id="itsm-slider" 
              className="flex overflow-x-auto pb-8 pt-4 px-2 snap-x snap-mandatory scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollSnapType: 'x mandatory'
              }}
            >
              {/* Course Card 1 */}
              <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">ITIL® 4 Foundation</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">3 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Foundation</span>
                        </div>
                      </div>
                      <Link href="/ITL4Management" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Course Card 2 */}
              <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/problemmanage.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Problem Management</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Advanced ITIL® practices for service management professionals.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Advanced</span>
                        </div>
                      </div>
                      <Link href="/ProblemManagement" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Course Card 3 */}
              <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/SIAM.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">SIAM</span>
                      <h3 className="text-xl font-bold text-white mt-2">SIAM Foundation</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Service Integration and Management fundamentals for multi-vendor environments.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">2 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Foundation</span>
                        </div>
                      </div>
                      <Link href="/SIAMFoundation" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Course Card 4 */}
              <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/incidentmanage.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Incident Management</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Strategic IT service management for digital transformation initiatives.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">3 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Advanced</span>
                        </div>
                      </div>
                      <Link href="/IncidentManagement" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Course Card 5 */}
              <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/Servicereq.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Service Request Management</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/ServiceRequestManagement" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Course Card 6 */}
              <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/blog2.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Monitoring & Event Management</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/MonitoringEventManagement" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Course Card 7 */}
              <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/blog3.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Change Enablement</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/ChangeEnablement" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Course Card 8 */}
              <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/corporate.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Release Management</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/ReleaseManagement" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Course Card 9 */}
              <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/Devops.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Service Configuration Management</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/ServiceConfiguration" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Course Card 10 */}
              <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/PRINCE2.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Deployment Management</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/DeploymentManagement" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/*Course card-11*/}
              <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/SCRUM1.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">IT Asset Management</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/ItAssetManagement" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            {/*Course card-12*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/continualimprovement.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Continual improvement</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/ContinuationImprovement" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/*Course card-13*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/SIAM.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Relationship Management</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/RelationshipManagement" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/*Course card-14*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Service Level Management</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/ServiceLevelManagement" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/*Course card-15*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Information Security Management</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/InformationSecurityMan" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/*Course card-16*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Supplier Management</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/SupplierManagement" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/*Course card-17*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">ITIL® 4 Specialist Create, Deliver and Support</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/ITL4SCDS" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            {/*Course card-18*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">ITIL® 4 Specialist Drive Stakeholder value</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/ITL4SDSV" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/*Course card-19*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">ITIL® 4 Specialist High Velocity IT</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/ITL4SHVI" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            {/*Course card-20*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">ITIL® 4 Strategist Direct Plan & Improve</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/ITL4SDPI" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            {/*Course card-21*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Create, Deliver and Support</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/CreateDeliverSupport" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            {/*Course card-22*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Drive Stakeholder Valu</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/DriveStakeholderValue" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            
            {/*Course card-23*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">High Velocity IT</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/HighvelIt" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            
            {/*Course card-24*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Direct Plan & Improve</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/DirectPlan" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            {/*Course card-25*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Acquring And Managing Cloud Service</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/AcquringAndManagingCS" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            
            {/*Course card-26*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Sustainability In Digital and IT</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/SustainabilityInDigitalAI" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            {/*Course card-27*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Business Relationship Management</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/BusinessRelationshipManage" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            {/*Course card-28*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">IT Asset Management</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/ItAssetManage" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            {/*Course card-29*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Monitor,Support and Fulfil</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/MonitorSupportFulfil" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            {/*Course card-30*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">Digital IT & Services</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/DigitalItService" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            
            {/*Course card-31*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">SIAM Foundation</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/SIAMFoundation" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            {/*Course card-32*/}
            <div className="flex-shrink-0 w-[300px] snap-start mx-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('/itl4.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ITIL®</span>
                      <h3 className="text-xl font-bold text-white mt-2">SIAM Professional</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">Comprehensive ITIL® professional certification for IT service managers.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Duration</span>
                          <span className="font-medium text-sm">5 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="font-medium text-sm">Expert</span>
                        </div>
                      </div>
                      <Link href="/SIAMProfessional" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            
            
            
            
            </div>
            

            {/* Slider Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2].map((index) => (
                <button 
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors duration-200"
                  onClick={() => {
                    const slider = document.getElementById('itsm-slider');
                    const cardWidth = 300 + 32; // card width + margins
                    slider.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      
      
      <Footer/>
      <LiveChat/>
        </>
    )
}