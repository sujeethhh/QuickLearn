import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SIAM Foundation Certification Training | Service Integration | Edura",
  description: "Master Service Integration and Management (SIAM) fundamentals for multi-vendor environments. Learn SIAM methodology, governance, and best practices.",
  keywords: "SIAM Foundation, Service Integration and Management, multi-vendor management, service integration, SIAM methodology",
  openGraph: {
    title: "SIAM Foundation Certification Training",
    description: "Master Service Integration and Management for multi-vendor environments",
    images: ["/SIAM.jpg"],
  },
};

const courseData = {
  title: "SIAM Foundation",
  subtitle: "Master Service Integration and Management in multi-vendor environments",
  backgroundImage: "/SIAM.jpg",
  overview: [
    "Service Integration and Management (SIAM) is a methodology for managing services where multiple service providers contribute to the delivery of services. SIAM Foundation provides comprehensive training in managing complex multi-vendor environments.",
    "Learn to implement SIAM governance structures, manage service provider relationships, and ensure seamless service delivery across multiple vendors while maintaining service quality and customer satisfaction.",
    "Develop skills in service integration, vendor management, and governance frameworks that enable organizations to leverage multiple service providers effectively while reducing complexity and risk."
  ],
  courseOutline: [
    "SIAM fundamentals and methodology overview",
    "SIAM ecosystem and stakeholder management",
    "Service integration governance and structures",
    "Multi-vendor service management",
    "SIAM roles and responsibilities",
    "Service provider management and coordination",
    "Performance management and reporting",
    "SIAM implementation and transition"
  ],
  learningObjectives: [
    "Understand SIAM methodology and principles",
    "Master multi-vendor service management",
    "Implement effective governance structures",
    "Manage service provider relationships",
    "Coordinate service integration activities",
    "Develop performance management frameworks",
    "Lead SIAM implementation initiatives"
  ],
  targetGroup: [
    "Service Integration Managers",
    "Vendor and supplier managers",
    "IT Service Management professionals",
    "Contract and procurement managers",
    "Service delivery managers"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at testing centers"
  ],
  category: "IT Service Management",
  tagline: "Integrate. Coordinate. Deliver.",
  relatedCourses: [
    {
      title: "SIAM Professional",
      image: "/itl4.jpg",
      description: "Advanced SIAM practices and implementation",
      href: "/SIAMProfessional",
      duration: "3 Days",
      level: "Foundation",
      badge: "SIAM",
      badgeColor: "bg-purple-600"
    },
    {
      title: "Supplier Management",
      image: "/itl4.jpg",
      description: "Master supplier relationship management",
      href: "/SupplierManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Relationship Management",
      image: "/SIAM.jpg",
      description: "Master stakeholder relationship management",
      href: "/RelationshipManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function SIAMFoundationPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}