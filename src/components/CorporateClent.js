"use client";
import Link from "next/link";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Users, 
  Award, 
  Target, 
  Globe, 
  CheckCircle, 
  Star, 
  Building2, 
  TrendingUp, 
  Clock, 
  BookOpen, 
  Shield, 
  Zap,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Briefcase
} from "lucide-react";
import ScrollFloat from "@/components/ui/ScroolReveal";
import { useState } from "react";

export default function CorporateClient() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Animation variants
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
  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { ...slideTransition, duration: 0.8, delay: 0.4 } },
    exit: { opacity: 0, y: -30 }
  };

  return (
    <>
      <Headers />

      {/* Hero Section - Same style as Hero component */}
      <section className="relative h-[500px] w-full overflow-hidden bg-gray-900">
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
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
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
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] sm:leading-[0.85] mb-6 sm:mb-8 tracking-[-0.02em] font-serif"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/95 bg-clip-text text-transparent drop-shadow-sm">
                    Corporate Training
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={fadeInVariants}
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.5] sm:leading-[1.6] mb-6 sm:mb-8 md:mb-10 text-white/85 max-w-4xl font-light tracking-wide"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                >
                  Empower your workforce with industry-leading training programs. Transform your organization&apos;s capabilities with our comprehensive corporate training solutions.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <motion.button
                    className="group relative bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg overflow-hidden shadow-2xl tracking-wide"
                    style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                      Get Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                  <Link href="/Contact">
                  <motion.button
                    className="group relative border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Contact Us
                    </span>
                  </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollFloat
            animationDuration={1.5}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.05}
            containerClassName="text-center mb-12 sm:mb-16"
            textClassName="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[0.9] bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg"
          >
            Why Choose Our Corporate Training?
          </ScrollFloat>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Users,
                title: "Expert Trainers",
                description: "Industry-certified professionals with real-world experience",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Target,
                title: "Customized Programs",
                description: "Tailored training solutions to meet your specific business needs",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Award,
                title: "Globally Recognized",
                description: "Internationally acclaimed certifications and credentials",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Measurable improvement in team performance and productivity",
                color: "from-orange-500 to-red-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Training <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs across multiple domains to enhance your team&apos;s capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "IT Service Management",
                description: "ITIL®, SIAM, and service management best practices",
                courses: ["ITIL® 4 Foundation", "ITIL® Managing Professional", "SIAM Foundation", "Problem Management"],
                icon: Shield,
                color: "from-blue-500 to-indigo-600"
              },
              {
                title: "Project Management",
                description: "PMP, PRINCE2, and agile project management methodologies",
                courses: ["PMP Certification", "PRINCE2 Foundation", "Agile Project Management", "Risk Management"],
                icon: Briefcase,
                color: "from-emerald-500 to-green-600"
              },
              {
                title: "Agile & Scrum",
                description: "SAFe, Scrum, and agile transformation frameworks",
                courses: ["Leading SAFe", "Certified Scrum Master", "Product Owner Training", "Agile Coaching"],
                icon: Zap,
                color: "from-purple-500 to-violet-600"
              },
              {
                title: "Quality Management",
                description: "Six Sigma, Lean, and continuous improvement methodologies",
                courses: ["Lean Six Sigma Green Belt", "Lean Six Sigma Black Belt", "Quality Assurance", "Process Improvement"],
                icon: Award,
                color: "from-orange-500 to-amber-600"
              },
              {
                title: "DevOps & Cloud",
                description: "DevOps practices, cloud technologies, and automation",
                courses: ["DevOps Foundation", "AWS Certification", "Docker & Kubernetes", "CI/CD Pipelines"],
                icon: Globe,
                color: "from-cyan-500 to-blue-600"
              },
              {
                title: "Software Testing",
                description: "ISTQB, test automation, and quality assurance",
                courses: ["ISTQB Foundation", "Test Automation", "Performance Testing", "Security Testing"],
                icon: CheckCircle,
                color: "from-pink-500 to-rose-600"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm">Popular Courses:</h4>
                  <ul className="space-y-1">
                    {category.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Packages */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Training <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible training solutions designed to fit your organization&apos;s needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Starter Package",
                price: "Contact for Pricing",
                description: "Perfect for small teams getting started",
                features: [
                  "Up to 10 participants",
                  "2-day training program",
                  "Digital materials included",
                  "Certificate of completion",
                  "Email support for 30 days"
                ],
                popular: false,
                color: "from-blue-500 to-cyan-500"
              },
              {
                name: "Professional Package",
                price: "Contact for Pricing",
                description: "Ideal for growing organizations",
                features: [
                  "Up to 25 participants",
                  "5-day comprehensive program",
                  "Physical & digital materials",
                  "Industry certification",
                  "3 months post-training support",
                  "Customized content available"
                ],
                popular: true,
                color: "from-purple-500 to-pink-500"
              },
              {
                name: "Enterprise Package",
                price: "Contact for Pricing",
                description: "Complete solution for large enterprises",
                features: [
                  "Unlimited participants",
                  "Multi-week program",
                  "On-site training available",
                  "Multiple certifications",
                  "12 months ongoing support",
                  "Fully customized curriculum",
                  "Dedicated account manager"
                ],
                popular: false,
                color: "from-emerald-500 to-teal-500"
              }
            ].map((pkg, index) => (
              <Link key={index} href="/Contact">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  pkg.popular ? 'border-purple-500 scale-105' : 'border-gray-200'
                } group hover:scale-105`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">{pkg.price}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedPackage(pkg.name)}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Training <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure maximum learning outcomes and business impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Needs Assessment",
                description: "We analyze your organization's specific training requirements and skill gaps",
                icon: Target
              },
              {
                step: "02",
                title: "Custom Design",
                description: "Tailored curriculum development based on your business objectives and team needs",
                icon: BookOpen
              },
              {
                step: "03",
                title: "Expert Delivery",
                description: "Industry-certified trainers deliver engaging, hands-on learning experiences",
                icon: Users
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "Post-training support and resources to ensure knowledge retention and application",
                icon: Shield
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <process.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{process.step}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      
      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our corporate training programs
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "How do you customize training programs for our organization?",
                answer: "We start with a comprehensive needs assessment to understand your specific requirements, skill gaps, and business objectives. Our team then designs a tailored curriculum that aligns with your organizational goals and industry standards."
              },
              {
                question: "What is the typical duration of corporate training programs?",
                answer: "Training duration varies based on the program complexity and your requirements. We offer flexible options from intensive 2-day workshops to comprehensive multi-week programs. Most popular programs range from 3-5 days."
              },
              {
                question: "Do you provide on-site training at our location?",
                answer: "Yes, we offer both on-site and virtual training options. On-site training is available for groups of 10 or more participants. We can also provide hybrid solutions combining both delivery methods."
              },
              {
                question: "What certifications do participants receive?",
                answer: "Participants receive industry-recognized certifications from leading bodies such as AXELOS, PMI, Scrum Alliance, IIBA, and others, depending on the specific training program completed."
              },
              {
                question: "What kind of post-training support do you provide?",
                answer: "We provide comprehensive post-training support including access to learning materials, email support, follow-up sessions, and in some packages, ongoing mentoring to ensure knowledge retention and practical application."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-6"
              >
                <button
                  onClick={() => setActiveTab(activeTab === `faq-${index}` ? "" : `faq-${index}`)}
                  className="w-full text-left bg-gray-50 hover:bg-gray-100 rounded-xl p-6 transition-all duration-300 border border-gray-200"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: activeTab === `faq-${index}` ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeTab === `faq-${index}` && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white border-l-4 border-blue-500 ml-6 mt-2 rounded-r-xl">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Team?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Contact us today to discuss your corporate training needs and get a customized proposal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+111 (564) 568 25",
                description: "Speak directly with our training consultants"
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "corporate@quicklearn.com",
                description: "Send us your training requirements"
              },
              {
                icon: Calendar,
                title: "Schedule Meeting",
                info: "Book a Consultation",
                description: "Free 30-minute strategy session"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                <p className="text-lg font-semibold text-white/90 mb-2">{contact.info}</p>
                <p className="text-white/70">{contact.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Get Your Custom Quote Today
            </button>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
