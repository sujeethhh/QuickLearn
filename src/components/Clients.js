"use client";
import React from "react";
import { motion } from "framer-motion";
import LogoLoop from './LogoLoop';

// Enhanced client logos with more professional data
const imageLogos = [
  { src: "/company1.jpg", alt: "Microsoft", href: "https://microsoft.com" },
  { src: "/company2.jpg", alt: "Google", href: "https://google.com" },
  { src: "/company3.jpg", alt: "Amazon", href: "https://amazon.com" },
  { src: "/company4.jpg", alt: "Apple", href: "https://apple.com" },
  { src: "/company5.jpg", alt: "IBM", href: "https://ibm.com" },
  { src: "/company6.jpg", alt: "Oracle", href: "https://oracle.com" },
  { src: "/company7.jpg", alt: "Salesforce", href: "https://salesforce.com" },
  { src: "/company8.jpg", alt: "Adobe", href: "https://adobe.com" },
  { src: "/company9.jpg", alt: "Adobe", href: "https://adobe.com" },
  { src: "/company10.jpg", alt: "Adobe", href: "https://adobe.com" },
];

export default function Clients({clients=[]}) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
              Trusted Worldwide
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-slate-800 bg-clip-text text-transparent
">
              Clients
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Join the world's leading organizations who trust QuickLearn Learning to advance their teams' 
            professional development and drive business success.
          </motion.p>
        </motion.div>

        {/* Logo Loop Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative group"
        >
          {/* Gradient Overlays for Fade Effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 via-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 via-white to-transparent z-10 pointer-events-none" />

          {/* LogoLoop - Clean Implementation */}
          <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={clients.map(client => ({
                src: client.logo,
              }))}
              speed={80}
              direction="left"
              logoHeight={90}
              gap={80}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Our trusted client partners"
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        
      </div>
    </section>
  );
}