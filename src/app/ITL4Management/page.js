import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollFloat from "@/components/ui/ScroolReveal";
import Link from "next/link";
import LiveChat from "@/components/LiveChat";
import CoursePageClient from "./CoursePageClient";

// Server-side metadata for SEO
export const metadata = {
  title: "ITIL® 4 Foundation Certification Training | Edura",
  description: "Master IT Service Management fundamentals with ITIL® 4 Foundation certification. Expert-led training, hands-on labs, and exam preparation. Enroll today!",
  keywords: "ITIL 4 Foundation, IT Service Management, ITSM certification, ITIL training, service management",
  openGraph: {
    title: "ITIL® 4 Foundation Certification Training",
    description: "Master IT Service Management fundamentals with ITIL® 4 Foundation certification",
    images: ["/itl4.jpg"],
  },
};

// Server-side course data
const courseData = {
  title: "ITIL® 4 Foundation",
  subtitle: "Master the fundamentals of IT Service Management with industry-leading certification",
  backgroundImage: "/itl4.jpg",
  overview: "ITIL 4 Foundation introduces an end-to-end operating model for the creation, delivery and continual improvement of technology-enabled products and services. The course covers key concepts of service management and introduces the ITIL 4 service value system (SVS), including the four dimensions of service management, the ITIL service value chain, and the ITIL practices.",
  courseOutline: [
    "Key concepts of service management",
    "The four dimensions of service management", 
    "The ITIL service value system",
    "The ITIL service value chain activities",
    "ITIL practices overview",
    "Continual improvement model"
  ],
  learningObjectives: [
    "Understand the key concepts of service management",
    "Comprehend how the ITIL guiding principles can help an organization",
    "Understand the four dimensions of service management",
    "Understand the purpose and components of the ITIL service value system",
    "Know the activities of the service value chain and when value is created",
    "Know the purpose of ITIL practices",
    "Understand key terms and definitions"
  ],
  targetGroup: [
    "Individuals who require a basic understanding of the ITIL framework",
    "IT professionals working within organizations that have adopted ITIL",
    "IT professionals, business managers and business process owners",
    "Anyone looking to enhance their IT service management knowledge"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions", 
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available in multiple languages"
  ],
  duration: "3 Days",
  level: "Foundation",
  category: "IT Service Management"
};

export default function ITL4ManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageClient courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}