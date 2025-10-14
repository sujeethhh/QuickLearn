"use client";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFloat from "@/components/ui/ScroolReveal";
import Link from "next/link";
import LiveChat from "@/components/LiveChat";

export default function ICPACC() {
  return (
    <>
      <Headers />
      <section className="relative h-[600px] w-full overflow-hidden bg-gray-900">
        {/* Background */}
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
              style={{ backgroundImage: `url('/Agile.jpg')` }}
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
                className="max-w-4xl text-white"
              >
                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, x: -150 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.1 }}
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] sm:leading-[0.85] mb-6 sm:mb-8 tracking-[-0.02em] font-serif"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/95 bg-clip-text text-transparent drop-shadow-sm">
                    ICP-ACC Agile Coaching
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.25 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.5] sm:leading-[1.6] mb-6 sm:mb-8 md:mb-10 text-white/85 max-w-4xl font-light tracking-wide"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                >
                  Develop advanced agile coaching skills and become a certified agile coach.
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Enhanced ScrollFloat Section */}
      <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 relative overflow-hidden">
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
            ICP-ACC Agile Coaching
          </ScrollFloat>
        </div>
      </section>

      <section className="w-full bg-white px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Text Content */}
            <motion.div
              className="lg:col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative"
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
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.01, color: "#374151" }}
                transition={{ duration: 0.2 }}
              >
                The ICAgile Certified Professional in Agile Coaching (ICP-ACC) is one of two knowledge-based certifications on the Agile Coaching track. The certification focuses primarily on the mindset, roles, and responsibilities of an Agile Coach.
              </motion.p>
              <motion.p
                className="text-gray-700 leading-relaxed mb-6 text-justify"
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.01, color: "#374151" }}
                transition={{ duration: 0.2 }}
              >
                After completing this certification, the learner will be able to differentiate between and among mentoring, facilitating, professional coaching and teaching, and will also be able to describe the Agile Coaching competency framework.
              </motion.p>
              <motion.p
                className="text-gray-700 leading-relaxed mb-6 text-justify"
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.01, color: "#374151" }}
                transition={{ duration: 0.2 }}
              >
                This course provides a practical foundation for serving as an effective Agile Coach. Students will learn about the skills, tools, and techniques needed to coach agile teams and help organizations adopt agile practices.
              </motion.p>
            </motion.div>
            
            <motion.div
              className="lg:col-span-4 sticky top-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.img
                src="/corporate.jpg"
                alt="Agile Coaching Training"
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
                <motion.button 
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold px-5 py-2 rounded-xl shadow-xl hover:from-red-600 hover:to-pink-700 active:scale-95 transition-all duration-300 cursor-pointer" 
                  whileHover={{ scale: 1.08 }} 
                  whileTap={{ scale: 0.95 }}
                >
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
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Learning Objectives</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>
              <motion.ul className="list-none pl-0 text-gray-700 space-y-3">
                {[
                  "Understand the Agile Coaching competency framework",
                  "Differentiate between mentoring, facilitating, coaching, and teaching",
                  "Learn professional coaching skills and techniques",
                  "Understand how to facilitate team and organizational change",
                  "Learn conflict resolution and negotiation skills",
                  "Understand systems thinking and organizational dynamics",
                  "Learn how to assess team and organizational agile maturity",
                  "Develop skills for coaching at multiple levels (individual, team, organization)"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="group-hover:text-stone-700 transition-colors duration-200">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative mt-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Target Audience</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>
              <motion.ul className="list-none pl-0 text-gray-700 space-y-3">
                {[
                  "Scrum Masters seeking to develop coaching skills",
                  "Agile team leads and managers",
                  "Organizational change agents",
                  "Consultants working with agile transformations",
                  "HR professionals supporting agile adoption",
                  "Anyone interested in becoming an agile coach",
                  "Experienced practitioners looking to formalize coaching skills"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="group-hover:text-stone-700 transition-colors duration-200">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative mt-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Certification Details</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>
              <motion.ul className="list-none pl-0 text-gray-700 space-y-3">
                {[
                  "Duration: 3 days of training",
                  "Assessment: Knowledge-based certification",
                  "Format: Interactive workshops and practical exercises",
                  "Certification: ICAgile Certified Professional - Agile Coaching (ICP-ACC)",
                  "Certification period: Lifetime (no renewal required)",
                  "Prerequisites: ICP (ICAgile Certified Professional) or equivalent experience",
                  "Language: English",
                  "Includes: Digital badge and certificate"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="group-hover:text-stone-700 transition-colors duration-200">
                      {item}
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
            >
              <motion.img
                src="/team.jpg"
                alt="Agile Coaching Team"
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
                  <div className="text-2xl font-bold font-serif text-slate-800">ICP-ACC</div>
                  <div className="text-xs text-slate-600 font-medium">Coach. Guide. Transform.</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <LiveChat />
    </>
  );
}