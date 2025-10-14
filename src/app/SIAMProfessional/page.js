import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SIAM Professional Training | Advanced Service Integration | QuickLearn",
  description:
    "Advance your career with SIAM Professional certification. Master end-to-end service integration, governance, and multi-supplier management for complex IT environments.",
  keywords:
    "SIAM Professional, Service Integration and Management, advanced SIAM, multi-supplier management, service governance, ITSM integration, vendor coordination",
  openGraph: {
    title: "SIAM Professional Training",
    description:
      "Become an expert in managing and integrating multiple service providers through advanced SIAM principles and practices.",
    images: ["/SIAMProfessional.jpg"],
  },
};

const courseData = {
  title: "SIAM Professional",
  subtitle:
    "Master advanced Service Integration and Management practices for multi-supplier environments",
  backgroundImage: "/SIAMProfessional.jpg",
  overview: [
    "The SIAM Professional course equips participants with the advanced knowledge and skills required to design, implement, and manage a SIAM ecosystem in complex, multi-vendor environments.",
    "It expands on the foundational SIAM concepts, focusing on governance structures, cross-supplier collaboration, performance management, and continual improvement.",
    "Through real-world scenarios and case studies, learners gain practical insights into orchestrating services from multiple providers to deliver seamless value to the business."
  ],
  courseOutline: [
    "Review of SIAM Foundation concepts",
    "Advanced SIAM structures and governance models",
    "Cross-supplier collaboration and conflict resolution",
    "Service performance and value realization",
    "SIAM process integration with ITSM frameworks",
    "Risk, compliance, and security considerations",
    "Continual improvement in multi-supplier environments",
    "Implementing and managing SIAM transformation programs"
  ],
  learningObjectives: [
    "Understand advanced SIAM concepts, roles, and responsibilities",
    "Design and implement SIAM models tailored to business needs",
    "Facilitate collaboration across multiple service providers",
    "Measure and manage end-to-end service performance",
    "Integrate SIAM with ITSM, Agile, and DevOps practices",
    "Lead SIAM transformation and governance initiatives"
  ],
  targetGroup: [
    "Service Integration Managers",
    "SIAM Consultants and Practitioners",
    "IT Governance and Service Delivery Managers",
    "Vendor and Contract Managers",
    "ITSM Process Owners and Architects"
  ],
  examDetails: [
    "Duration: 90 minutes",
    "40 scenario-based multiple-choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and in-person"
  ],
  category: "Service Integration and Management (SIAM)",
  tagline: "Integrate. Govern. Excel.",
  relatedCourses: [
    {
      title: "SIAM Foundation",
      image: "/SIAMFoundation.jpg",
      description: "Gain fundamental knowledge of Service Integration and Management concepts.",
      href: "/SIAMFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "SIAM",
      badgeColor: "bg-purple-600"
    },
    {
      title: "ITIL® 4 Foundation",
      image: "/ITIL4.jpg",
      description: "Learn ITIL® 4 principles and practices to align IT services with business goals.",
      href: "/ITILFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Service Level Management",
      image: "/Servicelevelman.jpg",
      description: "Develop the ability to manage service quality through defined SLAs.",
      href: "/ServiceLevelManagement",
      duration: "3 Days",
      level: "Intermediate",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};


export default function SIAMProfessional() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}