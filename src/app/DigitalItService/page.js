import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® 4 Specialist: Digital and IT Services (DITS) | Digital Transformation Leadership | Edura",
  description:
    "Master ITIL® 4 Specialist: Digital and IT Services (DITS) to lead digital transformation, integrate technology with business strategy, and drive innovation across IT-enabled services.",
  keywords:
    "ITIL 4 Specialist, Digital and IT Services, ITIL DITS, IT strategy, digital transformation, service management, IT governance, innovation, IT leadership, technology alignment",
  openGraph: {
    title: "ITIL® 4 Specialist: Digital and IT Services (DITS)",
    description:
      "Lead digital transformation and innovation with ITIL® 4 DITS. Learn how to align IT and business strategies to deliver value through digital services.",
    images: ["/ITIL4DITS.jpg"],
  },
};

const courseData = {
  title: "ITIL® 4 Specialist: Digital and IT Services (DITS)",
  subtitle: "Lead digital transformation and align IT strategies with business goals",
  backgroundImage: "/ITIL4DITS.jpg",
  overview: [
    "The ITIL® 4 Specialist: Digital and IT Services (DITS) course empowers leaders to drive digital transformation and innovation by aligning business and IT strategies.",
    "This module focuses on helping organizations thrive in the digital era by adopting a holistic approach that balances technology, leadership, governance, and agility.",
    "Participants learn how to define, plan, and implement digital strategies that deliver sustainable value through IT-enabled services."
  ],
  courseOutline: [
    "Understanding digital organizations and transformation",
    "Strategic alignment of IT and business objectives",
    "Building digital leadership and culture of innovation",
    "Governance, risk, and compliance in digital ecosystems",
    "Emerging technologies and their impact on IT services",
    "Managing and measuring digital value creation",
    "Balancing operational stability with innovation",
    "Sustainability and ethical considerations in digital strategy"
  ],
  learningObjectives: [
    "Understand the role of IT and digital strategies in modern enterprises",
    "Develop digital leadership and strategic planning capabilities",
    "Apply ITIL® 4 principles to manage digital transformation initiatives",
    "Leverage emerging technologies to create business value",
    "Ensure governance, risk management, and compliance in digital operations",
    "Balance innovation with operational resilience and sustainability"
  ],
  targetGroup: [
    "CIOs, CTOs, and Digital Transformation Leaders",
    "IT and Service Management Professionals",
    "IT Strategy and Governance Specialists",
    "Program and Portfolio Managers",
    "Anyone seeking to lead digital initiatives using ITIL® 4 principles"
  ],
  examDetails: [
    "Duration: 90 minutes",
    "40 multiple-choice questions",
    "Passing score: 70% (28/40)",
    "Closed book examination",
    "Available online and through accredited training providers"
  ],
  category: "IT Service Management (ITIL® 4)",
  tagline: "Strategize. Digitize. Transform.",
  relatedCourses: [
    {
      title: "ITIL® 4 Foundation",
      image: "/ITIL4.jpg",
      description:
        "Understand ITIL® 4 fundamentals and key concepts for managing IT-enabled services.",
      href: "/ITILFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "ITIL® 4 Strategist: Direct, Plan and Improve (DPI)",
      image: "/ITIL4DPI.jpg",
      description:
        "Master strategy, governance, and continual improvement for digital organizations.",
      href: "/ITIL4DPI",
      duration: "3 Days",
      level: "Intermediate",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "ITIL® 4 Specialist: Drive Stakeholder Value (DSV)",
      image: "/ITIL4DSV.jpg",
      description:
        "Enhance stakeholder engagement, experience, and value co-creation across IT services.",
      href: "/ITIL4DSV",
      duration: "3 Days",
      level: "Intermediate",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};




export default function DigitalItService() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}