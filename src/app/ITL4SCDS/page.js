import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® 4 Specialist Create, Deliver and Support Training | Edura",
  description: "Master ITIL® 4 Specialist Create, Deliver and Support module. Learn service design, transition, and operation practices for effective service delivery.",
  keywords: "ITIL 4 Specialist, Create Deliver Support, service design, service transition, service operation, ITSM",
  openGraph: {
    title: "ITIL® 4 Specialist Create, Deliver and Support Training",
    description: "Master service creation, delivery and support with ITIL® 4 Specialist training",
    images: ["/itl4.jpg"],
  },
};

const courseData = {
  title: "ITIL® 4 Specialist Create, Deliver and Support",
  subtitle: "Master service creation, delivery and support practices for operational excellence",
  backgroundImage: "/itl4.jpg",
  overview: [
    "ITIL® 4 Specialist: Create, Deliver and Support focuses on integrating different value streams and activities to create, deliver and support IT-enabled products and services.",
    "This module covers service design principles, transition practices, and operational support techniques that ensure effective service delivery throughout the service lifecycle.",
    "Learn to apply ITIL® 4 practices in real-world scenarios, focusing on service creation, delivery optimization, and ongoing support excellence."
  ],
  courseOutline: [
    "Service value chain and value streams",
    "Planning and improving service delivery",
    "Service design and architecture",
    "Service transition and deployment",
    "Service operation and support",
    "Performance monitoring and optimization",
    "Incident and problem management integration",
    "Continuous improvement in operations"
  ],
  learningObjectives: [
    "Understand service value streams and integration",
    "Master service design and architecture principles",
    "Implement effective service transition practices",
    "Optimize service operation and support activities",
    "Monitor and improve service performance",
    "Integrate incident and problem management",
    "Drive operational excellence and improvement"
  ],
  targetGroup: [
    "Service designers and architects",
    "Service transition managers",
    "Operations managers and staff",
    "IT Service Management professionals",
    "Process improvement specialists"
  ],
  examDetails: [
    "Duration: 90 minutes",
    "40 multiple choice questions",
    "Passing score: 28/40 (70%)",
    "Closed book examination",
    "Available at Pearson VUE centers"
  ],
  category: "IT Service Management",
  tagline: "Create. Deliver. Support.",
  relatedCourses: [
    {
      title: "ITIL® 4 Foundation",
      image: "/itl4.jpg",
      description: "Master ITIL® 4 fundamentals and framework",
      href: "/ITL4Management",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "ITIL® 4 Specialist Drive Stakeholder Value",
      image: "/itl4.jpg",
      description: "Learn to drive stakeholder value creation",
      href: "/ITL4SDSV",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Service Design",
      image: "/serviceDesk.jpg",
      description: "Master service design principles and practices",
      href: "/ServiceDesk",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function ITL4SCDSPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}