import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® 4 Specialist: Acquiring and Managing Cloud Services (AMCS) | Cloud Governance & Service Management | Edura",
  description:
    "Master ITIL® 4 Specialist: Acquiring and Managing Cloud Services to effectively evaluate, procure, and manage cloud-based solutions. Learn governance, risk management, and integration strategies for hybrid environments.",
  keywords:
    "ITIL 4 Specialist, Acquiring and Managing Cloud Services, ITIL AMCS, cloud service management, cloud governance, ITSM, cloud procurement, hybrid IT, cloud strategy, service integration",
  openGraph: {
    title: "ITIL® 4 Specialist: Acquiring and Managing Cloud Services (AMCS)",
    description:
      "Learn how to acquire, govern, and manage cloud services efficiently with ITIL® 4 AMCS. Bridge the gap between ITSM and modern cloud ecosystems.",
    images: ["/ITIL4AMCS.jpg"],
  },
};

const courseData = {
  title: "ITIL® 4 Specialist: Acquiring and Managing Cloud Services (AMCS)",
  subtitle: "Bridge the gap between IT service management and modern cloud ecosystems",
  backgroundImage: "/ITIL4AMCS.jpg",
  overview: [
    "The ITIL® 4 Specialist: Acquiring and Managing Cloud Services (AMCS) module focuses on helping organizations make informed decisions about cloud service acquisition and management.",
    "It provides guidance on assessing cloud readiness, selecting suitable cloud solutions, managing vendors, and ensuring governance and compliance across hybrid IT environments.",
    "Participants learn how to apply ITIL® 4 principles to effectively integrate cloud services into existing service management practices while ensuring business value, resilience, and performance."
  ],
  courseOutline: [
    "Introduction to Cloud Service Management within ITIL® 4",
    "Evaluating business drivers and readiness for cloud adoption",
    "Cloud service strategy and acquisition models",
    "Governance, risk, and compliance (GRC) for cloud environments",
    "Vendor and contract management for cloud services",
    "Service integration and orchestration in hybrid environments",
    "Financial management and cost optimization for cloud",
    "Continual improvement and performance monitoring in cloud services"
  ],
  learningObjectives: [
    "Understand how to assess organizational readiness for cloud adoption",
    "Develop effective strategies for selecting and acquiring cloud services",
    "Apply ITIL® 4 practices to govern and manage cloud-based environments",
    "Integrate cloud services into existing ITSM and service value systems",
    "Ensure compliance, security, and risk mitigation in cloud operations",
    "Optimize cloud costs and performance through continual improvement"
  ],
  targetGroup: [
    "Cloud Service Managers",
    "IT Service Management Professionals",
    "Procurement and Vendor Managers",
    "IT Governance and Compliance Officers",
    "ITIL® 4 Foundation Certified Professionals"
  ],
  examDetails: [
    "Duration: 90 minutes",
    "40 scenario-based multiple-choice questions",
    "Passing score: 70% (28/40)",
    "Closed book examination",
    "Available online and through accredited training organizations"
  ],
  category: "IT Service Management (ITIL® 4)",
  tagline: "Acquire Smart. Manage Efficient. Govern Cloud.",
  relatedCourses: [
    {
      title: "ITIL® 4 Foundation",
      image: "/ITIL4.jpg",
      description: "Understand the core principles of ITIL® 4 and modern service management practices.",
      href: "/ITILFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "ITIL® 4 Specialist: Drive Stakeholder Value (DSV)",
      image: "/ITIL4DSV.jpg",
      description: "Enhance your ability to build, manage, and sustain stakeholder relationships in IT service environments.",
      href: "/ITIL4DSV",
      duration: "3 Days",
      level: "Intermediate",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "ITIL® 4 Strategist: Direct, Plan and Improve (DPI)",
      image: "/ITIL4DPI.jpg",
      description: "Lead digital transformation and continual improvement with strategic governance and planning.",
      href: "/ITIL4DPI",
      duration: "3 Days",
      level: "Intermediate",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};



export default function AcquiringAndManagingCS() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}