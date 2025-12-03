"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Minimize2,
  Maximize2,
  Phone,
  CheckCircle2,
  User,
  Sparkles,
  Mail,
  MapPin,
  ArrowLeft,
  ExternalLink
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showEnquiryBubble, setShowEnquiryBubble] = useState(true);
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const messagesEndRef = useRef(null);
  const router = useRouter();

  // Debug: Log when component mounts
  useEffect(() => {
    console.log('LiveChat component mounted');
    console.log('Is mobile:', /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);

  // Contact options
  const contactOptions = [
    {
      id: "whatsapp",
      title: "WhatsApp Chat",
      description: "Get instant support via WhatsApp",
      icon: MessageCircle,
      color: "from-green-500 to-emerald-600",
      action: "whatsapp"
    },
    {
      id: "contacts",
      title: "Contact Page",
      description: "Visit our contacts page for detailed information",
      icon: MapPin,
      color: "from-blue-500 to-indigo-600",
      action: "contacts"
    },
    {
      id: "email",
      title: "Send Email",
      description: "Send us an email with your enquiry",
      icon: Mail,
      color: "from-purple-500 to-violet-600",
      action: "email"
    }
  ];

  const whatsAppInfo = {
    number: "+919876543210", // Replace with actual WhatsApp business number
    message: "Hello! I'm interested in learning more about your courses. Can you help me?",
    businessHours: "Mon-Fri: 9am-6pm IST"
  };

  // Function to open WhatsApp chat
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsAppInfo.message);
    const whatsappURL = `https://wa.me/${whatsAppInfo.number.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);

    if (option.action === "whatsapp") {
      setTimeout(() => {
        openWhatsApp();
      }, 500);
    } else if (option.action === "contacts") {
      setTimeout(() => {
        router.push("/Contact");
      }, 500);
    }
    // For email, just show the form (handled in UI)
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
    setSelectedOption(null);
    if (!isOpen) {
      setShowEnquiryBubble(false);
    }
  };

  const minimizeChat = () => {
    setIsMinimized(!isMinimized);
  };

  const goBack = () => {
    setSelectedOption(null);
  };

  // Handle email form
  const handleEmailChange = (field, value) => {
    setEmailForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const subject = encodeURIComponent(emailForm.subject || "Enquiry from QuickLearn Website");
    const body = encodeURIComponent(`
Name: ${emailForm.name}
Email: ${emailForm.email}

Message:
${emailForm.message}
    `);
    const mailtoLink = `mailto:info@quicklearn.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Reset form
    setEmailForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
      {/* Simple Mobile-First Chat Button */}
      {!isOpen && (
        <div
          className="fixed bottom-4 left-4 z-[9998]"
          style={{
            position: 'fixed',
            bottom: '16px',
            left: '16px',
            zIndex: 9998
          }}
        >
          <button
            onClick={() => {
              console.log('Simple button clicked!');
              setIsOpen(true);
            }}
            className="bg-blue-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-blue-700 transition-colors"
            style={{
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
              border: 'none',
              outline: 'none'
            }}
          >
            💬
          </button>
        </div>
      )}

      {/* Chat Toggle Button with Enhanced Effects */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-4 left-4 z-[9998] sm:bottom-6 sm:left-6"
            style={{ 
              position: 'fixed',
              bottom: '16px',
              left: '16px',
              zIndex: 9998,
              pointerEvents: 'auto'
            }}
          >
            {/* Simple fallback button for mobile debugging */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Fallback button clicked!');
                toggleChat();
              }}
              className="absolute inset-0 w-full h-full bg-transparent z-[10000] cursor-pointer"
              style={{
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation'
              }}
            />
            
            {/* Enquiry Message Bubble */}
            <AnimatePresence>
              {showEnquiryBubble && (
                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.8 }}
                  transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
                  className="absolute bottom-full left-0 mb-4 bg-white rounded-2xl shadow-2xl p-4 max-w-sm border border-gray-100 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(59, 130, 246, 0.4)",
                          "0 0 0 8px rgba(59, 130, 246, 0)",
                          "0 0 0 0 rgba(59, 130, 246, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800 mb-1">Have an Enquiry?</p>

                    </div>
                    <button
                      onClick={() => setShowEnquiryBubble(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  {/* Speech bubble arrow */}
                  <div className="absolute bottom-0 left-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-100"></div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Enhanced Chat Button */}
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Chat button clicked!'); // Debug log
                toggleChat();
              }}
              onTouchStart={(e) => {
                e.preventDefault();
                console.log('Touch started on chat button'); // Debug log
              }}
              className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 group overflow-hidden touch-manipulation min-w-[64px] min-h-[64px] flex items-center justify-center active:scale-95 cursor-pointer"
              style={{
                WebkitTapHighlightColor: 'transparent',
                userSelect: 'none',
                touchAction: 'manipulation'
              }}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Background Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/20"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />

              <motion.div
                className="absolute inset-2 rounded-full border border-white/10"
                animate={{
                  rotate: -360,
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />

              {/* Main Icon with Glow */}
              <motion.div
                className="relative z-10"
                animate={{
                  filter: [
                    "drop-shadow(0 0 0px rgba(255,255,255,0))",
                    "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
                    "drop-shadow(0 0 0px rgba(255,255,255,0))"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
              </motion.div>

              {/* Enhanced Pulsing Indicator */}
              <motion.div
                className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.4)",
                    "0 0 0 6px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 0.8, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Hover Sparkle Effects */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)"
                }}
              />

              {/* Floating Particles */}
              <motion.div
                className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-full"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0
                }}
              />

              <motion.div
                className="absolute bottom-3 right-3 w-1 h-1 bg-white/40 rounded-full"
                animate={{
                  y: [0, -6, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.2, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[9998] w-[95vw] sm:w-[400px] md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            style={{ 
              height: isMinimized ? "70px" : "calc(85vh - 20px)", 
              maxHeight: "600px",
              position: 'fixed',
              bottom: '16px',
              left: '16px',
              zIndex: 9998
            }}
          >
            {/* Enhanced Header */}
            <motion.div
              className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white p-3 sm:p-4 overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Animated Background Pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)"
                }}
                animate={{ x: [-100, 400] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2 sm:gap-3">
                  {selectedOption && (
                    <motion.button
                      onClick={goBack}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors mr-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </motion.button>
                  )}
                  <motion.div
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-semibold border border-white/30"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(255,255,255,0.2)",
                        "0 0 0 4px rgba(255,255,255,0.1)",
                        "0 0 0 0 rgba(255,255,255,0.2)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    QS
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="font-semibold text-xs sm:text-sm">
                      {selectedOption ? selectedOption.title : "QuickLearn Support"}
                    </h3>
                    <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-blue-100">
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span>Available {whatsAppInfo.businessHours}</span>
                    </div>
                  </motion.div>
                </div>
                <div className="flex items-center gap-1">
                  <motion.button
                    onClick={minimizeChat}
                    className="p-1 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isMinimized ? <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" /> : <Minimize2 className="w-3 h-3 sm:w-4 sm:h-4" />}
                  </motion.button>
                  <motion.button
                    onClick={toggleChat}
                    className="p-1 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Chat Content */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col h-full"
                >
                  {!selectedOption ? (
                    <>
                      {/* Welcome Section */}
                      <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-blue-100">
                        <div className="text-center">
                          <motion.div
                            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3"
                            animate={{
                              boxShadow: [
                                "0 0 0 0 rgba(59, 130, 246, 0.4)",
                                "0 0 0 8px rgba(59, 130, 246, 0)",
                                "0 0 0 0 rgba(59, 130, 246, 0)"
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <MessageCircle className="w-8 h-8 text-white" />
                          </motion.div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            How can we help you?
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Choose your preferred way to get in touch with our team for support and enquiries.
                          </p>
                        </div>
                      </div>

                      {/* Contact Options */}
                      <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
                        {contactOptions.map((option, index) => {
                          const IconComponent = option.icon;
                          return (
                            <motion.button
                              key={option.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => handleOptionSelect(option)}
                              className="w-full p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 text-left group hover:scale-[1.02] relative overflow-hidden"
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                              <div className="flex items-center gap-4 relative z-10">
                                <motion.div
                                  className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
                                  whileHover={{ rotate: 5 }}
                                >
                                  <IconComponent className="w-6 h-6 text-white" />
                                </motion.div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                                    {option.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {option.description}
                                  </p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>

                      {/* Footer Info */}
                      <div className="p-4 bg-white border-t border-gray-100">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                            <span>Available {whatsAppInfo.businessHours}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <motion.div
                              className="w-2 h-2 bg-green-500 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span>Online now</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : selectedOption.action === "email" ? (
                    /* Email Form */
                    <div className="flex-1 flex flex-col">
                      <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 border-b border-purple-100">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                            <Mail className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">Send us an Email</h3>
                            <p className="text-sm text-gray-600">Fill out the form below and we&apos;ll get back to you</p>
                          </div>
                        </div>
                      </div>

                      <form onSubmit={handleEmailSubmit} className="flex-1 p-4 space-y-4 bg-gray-50 overflow-y-auto">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                          <input
                            type="text"
                            required
                            value={emailForm.name}
                            onChange={(e) => handleEmailChange("name", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                            placeholder="Your full name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                          <input
                            type="email"
                            required
                            value={emailForm.email}
                            onChange={(e) => handleEmailChange("email", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                            placeholder="your.email@example.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                          <input
                            type="text"
                            value={emailForm.subject}
                            onChange={(e) => handleEmailChange("subject", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                            placeholder="Course enquiry"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                          <textarea
                            required
                            rows="4"
                            value={emailForm.message}
                            onChange={(e) => handleEmailChange("message", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm resize-none"
                            placeholder="Tell us about your enquiry..."
                          />
                        </div>

                        <motion.button
                          type="submit"
                          className="w-full bg-gradient-to-r from-purple-500 to-violet-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-center gap-2">
                            <Send className="w-4 h-4" />
                            Send Email
                          </div>
                        </motion.button>
                      </form>
                    </div>
                  ) : (
                    /* Selected Option View */
                    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-center"
                      >
                        <motion.div
                          className={`w-20 h-20 bg-gradient-to-br ${selectedOption.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <selectedOption.icon className="w-10 h-10 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {selectedOption.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {selectedOption.action === "whatsapp"
                            ? "Redirecting you to WhatsApp for instant support..."
                            : "Redirecting you to our contacts page..."
                          }
                        </p>
                        <div className="flex items-center justify-center gap-2 text-blue-600">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <selectedOption.icon className="w-5 h-5" />
                          </motion.div>
                          <span className="font-medium">
                            {selectedOption.action === "whatsapp" ? "Opening WhatsApp" : "Opening Contacts"}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}