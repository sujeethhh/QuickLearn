import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® 4 Specialist: High Velocity IT (HVIT) Training | Agile ITSM | QuickLearn",
  description:
    "Accelerate your IT performance with ITIL® 4 Specialist: High Velocity IT. Learn how to apply Agile, Lean, and DevOps concepts to deliver digital products and services rapidly and reliably.",
  keywords:
    "ITIL 4 Specialist, High Velocity IT, ITIL HVIT, Agile ITSM, DevOps, Lean IT, Digital Transformation, ITIL 4 certification, service management, cloud agility",
  openGraph: {
    title: "ITIL® 4 Specialist: High Velocity IT (HVIT) Training",
    description:
      "Master the digital mindset with ITIL® 4 HVIT. Learn how to combine Agile, Lean, and DevOps principles for high-performing IT and digital organizations.",
    images: ["/ITIL4.jpg"],
  },
};

const courseData = {
  title: "ITIL® 4 Specialist: High Velocity IT (HVIT)",
  subtitle:
    "Empower your IT organization with speed, agility, and digital transformation excellence",
  backgroundImage: "/ITIL4HVIT.jpg",
  overview: [
    "The ITIL® 4 Specialist: High Velocity IT module is designed for IT professionals who work in or aspire to work in digitally advanced environments.",
    "It explores the use of Agile, Lean, and DevOps practices, focusing on rapid delivery of IT-enabled products and services to achieve maximum value.",
    "Learners gain practical insights into how modern IT and digital organizations function in high-velocity environments where innovation, automation, and continuous improvement drive success."
  ],
  courseOutline: [
    "Introduction to High Velocity IT",
    "The digital organization and digital transformation",
    "High Velocity IT objectives and characteristics",
    "Concepts of the digital product lifecycle",
    "Applying Lean, Agile, and DevOps to value delivery",
    "The five key objectives of HVIT: valuable investments, fast development, resilient operations, co-created value, and assured conformance",
    "Cultural shift towards digital mindset and continuous learning",
    "Measurement and improvement in high-velocity environments"
  ],
  learningObjectives: [
    "Understand the digital product lifecycle and the role of IT in value creation",
    "Apply Agile, Lean, and DevOps principles to improve speed and efficiency",
    "Adopt a digital mindset for continuous innovation and improvement",
    "Enable high-velocity service delivery and operational resilience",
    "Support digital transformation initiatives using ITIL® 4 practices",
    "Integrate HVIT concepts with business strategy and ITSM frameworks"
  ],
  targetGroup: [
    "IT Managers and Team Leaders",
    "Service Management Professionals",
    "Agile and DevOps Practitioners",
    "Digital Transformation Specialists",
    "ITIL® 4 Foundation Certified Professionals"
  ],
  examDetails: [
    "Duration: 90 minutes",
    "40 scenario-based multiple-choice questions",
    "Passing score: 70% (28/40)",
    "Closed book examination",
    "Available online and in-person through accredited institutes"
  ],
  category: "IT Service Management (ITIL® 4)",
  tagline: "Think Digital. Deliver Fast. Improve Continuously.",
  relatedCourses: [
    {
      title: "ITIL® 4 Foundation",
      image: "/ITIL4.jpg",
      description: "Understand the fundamentals of ITIL® 4 and modern service management practices.",
      href: "/ITILFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "ITIL® 4 Specialist: Create, Deliver and Support (CDS)",
      image: "/ITIL4CDS.jpg",
      description: "Learn how to design, build, and deliver IT-enabled services efficiently.",
      href: "/ITIL4CDS",
      duration: "3 Days",
      level: "Intermediate",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "ITIL® 4 Strategist: Direct, Plan and Improve (DPI)",
      image: "/ITIL4DPI.jpg",
      description: "Develop strategic and tactical skills to lead continual improvement initiatives.",
      href: "/ITIL4DPI",
      duration: "3 Days",
      level: "Intermediate",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};


export default function ITL4SHVI() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}