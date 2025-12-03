"use client";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFloat from "@/components/ui/ScroolReveal";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function AboutPageHybrid() {
  // Same animation variants as Hero component
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



  return (
    <div className="flex flex-col w-full">
      
      {/* Header */}
      <Headers />

      {/* Hero Section - Same style as Hero component */}
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
              style={{ backgroundImage: `url('/AboutUs1.jpg')` }}
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
                    About QuickLearn Systems
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
            About QuickLearn Systems
          </ScrollFloat>
        </div>
      </section>

      {/* About Content Section */}
      <section className="w-full bg-white py-12 px-4 md:px-8">
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            
            {/* Left Text Content */}
            <Grid item xs={12} md={8}>
              <motion.div
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
                  <span className="relative z-10">About QuickLearn Systems</span>
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
                  QuickLearn Systems is a premier professional training and certification
                  provider, delivering top-quality learning solutions for the last 4 years.
                  With a strong commitment to excellence, QuickLearn has empowered thousands of
                  individuals and organizations to upgrade their skills and achieve career
                  success. Our comprehensive portfolio of world-class training includes online
                  learning, instructor-led classroom sessions, e-learning modules, and
                  customized corporate training programs designed to fit the evolving needs of
                  learners and businesses alike.
                </motion.p>

                <motion.p
                  className="text-gray-700 leading-relaxed mb-4"
                  variants={paragraphVariants}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ scale: 1.01, color: "#374151" }}
                  transition={{ duration: 0.2 }}
                >
                  At QuickLearn, customer satisfaction, value for time, and return on
                  investment remain our top priorities. Every training program is carefully
                  tailored to meet individual and corporate requirements, ensuring that learners
                  gain not only theoretical knowledge but also practical skills that can be
                  applied immediately in real-world scenarios.
                </motion.p>

                <motion.p
                  className="text-gray-700 leading-relaxed mb-4"
                  variants={paragraphVariants}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ scale: 1.01, color: "#374151" }}
                  transition={{ duration: 0.2 }}
                >
                  We strongly believe in a learner-first approach, where understanding customer
                  challenges, career aspirations, and organizational goals plays a central role
                  in shaping our training solutions. By guiding learners with a structured
                  framework and providing personalized attention, we help them unlock their
                  potential and grow steadily up the career ladder.
                </motion.p>

                <motion.p
                  className="text-gray-700 leading-relaxed mb-4"
                  variants={paragraphVariants}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ scale: 1.01, color: "#374151" }}
                  transition={{ duration: 0.2 }}
                >
                  Our dedicated service and support team ensures a transparent, seamless, and
                  enriching learning journey. With a culture deeply rooted in professionalism,
                  ethics, and integrity, we continuously strive to maintain trust and deliver
                  value-driven services.
                </motion.p>

                <motion.p
                  className="text-gray-700 leading-relaxed mb-4"
                  variants={paragraphVariants}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ scale: 1.01, color: "#374151" }}
                  transition={{ duration: 0.2 }}
                >
                  QuickLearn Systems is widely recognized as a leading training provider for
                  working professionals in specialized domains such as Project & Program
                  Management, Service Management, IT Governance & Architecture, and Quality
                  Management. We offer flexible learning modes to suit every preference,
                  including live online training (instructor-led virtual classes), classroom
                  training (instructor-led physical sessions), e-learning (self-paced modules),
                  and customized corporate training programs.
                </motion.p>

                <motion.p
                  className="text-gray-700 leading-relaxed mb-4"
                  variants={paragraphVariants}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ scale: 1.01, color: "#374151" }}
                  transition={{ duration: 0.2 }}
                >
                  With physical and satellite training centers across India and globally,
                  QuickLearn Systems has established a strong presence in major metropolitan
                  cities and international markets. Whether you are an individual professional
                  seeking career advancement or a corporate organization aiming to upskill your
                  workforce, QuickLearn is your trusted partner for effective, impactful, and
                  result-oriented learning solutions.
                </motion.p>

                <motion.p
                  className="text-gray-700 leading-relaxed"
                  variants={paragraphVariants}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ scale: 1.01, color: "#374151" }}
                  transition={{ duration: 0.2 }}
                >
                  At QuickLearn Systems, we don&apos;t just deliver training — we create success
                  stories by shaping skills, strengthening knowledge, and supporting growth at
                  every step of your professional journey.
                </motion.p>
              </motion.div>
            </Grid>

            {/* Right Image - Sticky positioned */}
            <Grid item xs={12} md={4}>
              <motion.div
                className="sticky top-24"
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
                  className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl p-4 border border-slate-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800">4+</div>
                    <div className="text-xs text-slate-600 font-medium">Years Experience</div>
                  </div>
                </motion.div>
              </motion.div>
            </Grid>

          </Grid>
        </Container>
      </section>

      {/* Mission & Values Section */}
      <section className="w-full bg-gradient-to-br from-stone-50 via-slate-50 to-gray-50 py-12 px-4 md:px-8">
        <Container maxWidth="lg">
          <Grid container spacing={4}>

            {/* Mission & Values Content */}
            <Grid item xs={12} md={8}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerTextVariants}
              >
                {/* Mission */}
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                  variants={headingVariants}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  whileHover={{ scale: 1.02, color: "#374151" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="relative z-10">Mission</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-slate-600 to-stone-700 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.h2>

                <motion.p
                  className="text-gray-700 leading-relaxed mb-8 text-justify"
                  variants={paragraphVariants}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ scale: 1.01, color: "#374151" }}
                  transition={{ duration: 0.2 }}
                >
                  Where there is a will, there is only the A–Z way…
                  Enable customers with the knowledge capable to develop and enhance
                  their skills to create different endeavors to be a professional.
                  We offer flexible trainings, customized solutions designed to educate,
                  inspire, and motivate individuals and businesses to achieve your goals
                  and aspirations.
                </motion.p>

                {/* Values */}
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                  variants={headingVariants}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  whileHover={{ scale: 1.02, color: "#374151" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="relative z-10">Values</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "35%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </motion.h2>

                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  variants={paragraphVariants}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ scale: 1.01, color: "#374151" }}
                  transition={{ duration: 0.2 }}
                >
                  We at <span className="font-semibold text-slate-800">QuickLearn Systems</span>,
                  fully committed to help you succeed.
                </motion.p>

                <motion.ul
                  className="list-none pl-0 text-gray-700 space-y-3"
                  variants={staggerTextVariants}
                >
                  {[
                    { text: "Quality", desc: "teaching and learning." },
                    { text: "Respect", desc: "and Care for all." },
                    { text: "Customer Satisfaction", desc: "is our priority." },
                    { text: "Continuous improvement", desc: "focus." },
                    { text: "Long-term relationships", desc: "with our customers." }
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
            </Grid>

            {/* Team Image - Sticky positioned */}
            <Grid item xs={12} md={4}>
              <motion.div
                className="sticky top-24"
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
                    <div className="text-2xl font-bold text-slate-800">100%</div>
                    <div className="text-xs text-slate-600 font-medium">Satisfaction</div>
                  </div>
                </motion.div>
              </motion.div>
            </Grid>

          </Grid>
        </Container>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
