import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® 4 Strategist: Direct, Plan and Improve (DPI) Training | Strategy & Governance | Edura",
  description:
    "Gain the skills to lead IT and digital transformation with ITIL® 4 Strategist: Direct, Plan and Improve. Learn governance, continual improvement, and strategy execution across all service management levels.",
  keywords:
    "ITIL 4 Strategist, Direct Plan and Improve, ITIL DPI, continual improvement, IT strategy, governance, service management, leadership, Agile ITSM, DevOps alignment",
  openGraph: {
    title: "ITIL® 4 Strategist: Direct, Plan and Improve (DPI) Training",
    description:
      "Master ITIL® 4 DPI to align strategic direction, planning, and continual improvement across IT and digital organizations.",
    images: ["/ITIL4DPI.jpg"],
  },
};

const courseData = {
  title: "ITIL® 4 Strategist: Direct, Plan and Improve (DPI)",
  subtitle: "Align strategy, governance, and continual improvement to drive digital success",
  backgroundImage: "/ITIL4DPI.jpg",
  overview: [
    "The ITIL® 4 Strategist: Direct, Plan and Improve (DPI) course equips professionals with the practical skills needed to create a learning and improving IT organization with a strong strategic direction.",
    "It focuses on how to align planning, governance, and continuous improvement across all levels of the organization, combining agile, lean, and DevOps principles for enhanced adaptability and efficiency.",
    "Participants learn to apply DPI concepts to lead transformation initiatives, establish effective measurement systems, and embed continual improvement into every organizational process."
  ],
  courseOutline: [
    "Core concepts of Direct, Plan and Improve (DPI)",
    "Key principles and methods of direction and planning",
    "Governance, risk, and compliance (GRC) in ITSM",
    "Effective measurement and reporting structures",
    "Establishing a continual improvement culture",
    "Leveraging Agile, Lean, and DevOps in strategic planning",
    "Driving organizational change and transformation",
    "Integrating DPI practices with other ITIL® 4 modules"
  ],
  learningObjectives: [
    "Understand the key concepts and principles of Direct, Plan and Improve",
    "Establish effective governance and strategic direction in IT and digital organizations",
    "Develop and implement continual improvement practices at all organizational levels",
    "Integrate Agile, Lean, and DevOps practices into strategic and tactical planning",
    "Measure, assess, and enhance organizational performance",
    "Drive sustainable digital transformation and cultural change"
  ],
  targetGroup: [
    "IT Managers and Team Leaders",
    "Service Management Professionals",
    "Process Owners and Improvement Managers",
    "Project and Program Managers",
    "IT Governance and Strategy Specialists"
  ],
  examDetails: [
    "Duration: 90 minutes",
    "40 multiple-choice questions",
    "Passing score: 70% (28/40)",
    "Closed book examination",
    "Available online and at accredited testing centers"
  ],
  category: "IT Service Management (ITIL® 4)",
  tagline: "Direct. Plan. Improve. Lead.",
  relatedCourses: [
    {
      title: "ITIL® 4 Foundation",
      image: "/ITIL4.jpg",
      description: "Learn the fundamentals of ITIL® 4 and modern service management practices.",
      href: "/ITILFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "ITIL® 4 Specialist: Create, Deliver and Support (CDS)",
      image: "/ITIL4CDS.jpg",
      description: "Enhance your ability to design, deliver, and support IT-enabled services effectively.",
      href: "/ITIL4CDS",
      duration: "3 Days",
      level: "Intermediate",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "ITIL® 4 Specialist: High Velocity IT (HVIT)",
      image: "/ITIL4HVIT.jpg",
      description: "Accelerate digital transformation by adopting Agile, Lean, and DevOps practices.",
      href: "/ITIL4HVIT",
      duration: "3 Days",
      level: "Intermediate",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};


export default function DirectPlan() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}