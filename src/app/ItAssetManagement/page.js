import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL IT Asset Management Training | Asset Lifecycle Management | Edura",
  description: "Master ITIL IT Asset Management for effective asset lifecycle management. Learn asset tracking, optimization, and compliance strategies.",
  keywords: "ITIL IT Asset Management, asset lifecycle, asset tracking, asset optimization, ITSM, asset compliance",
  openGraph: {
    title: "ITIL IT Asset Management Training",
    description: "Master IT Asset Management for effective asset lifecycle management",
    images: ["/SCRUM1.jpg"],
  },
};

const courseData = {
  title: "IT Asset Management",
  subtitle: "Optimize IT assets throughout their lifecycle for maximum value and compliance",
  backgroundImage: "/SCRUM1.jpg",
  overview: [
    "IT Asset Management is the practice responsible for planning and managing the full lifecycle of all IT assets to help the organization maximize value, control costs, manage risks, and support decision-making.",
    "This comprehensive course covers asset lifecycle management, tracking systems, optimization strategies, and compliance requirements that ensure effective asset utilization and cost control.",
    "Learn to implement robust asset management processes that provide visibility into asset inventory, optimize asset utilization, and ensure regulatory compliance."
  ],
  courseOutline: [
    "IT Asset Management fundamentals and objectives",
    "Asset lifecycle management processes",
    "Asset identification and classification",
    "Asset tracking and inventory management",
    "Asset optimization and utilization",
    "Financial management and cost control",
    "Compliance and risk management",
    "Asset disposal and retirement"
  ],
  learningObjectives: [
    "Understand IT Asset Management principles and benefits",
    "Master asset lifecycle management processes",
    "Implement effective asset tracking systems",
    "Optimize asset utilization and performance",
    "Manage asset-related costs and budgets",
    "Ensure compliance with regulations and policies",
    "Plan and execute asset disposal activities"
  ],
  targetGroup: [
    "IT Asset Managers and coordinators",
    "Financial managers and analysts",
    "Procurement and vendor managers",
    "IT Service Management professionals",
    "Compliance and risk managers"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at testing centers"
  ],
  category: "IT Service Management",
  tagline: "Track. Optimize. Comply.",
  relatedCourses: [
    {
      title: "Service Configuration Management",
      image: "/Devops.jpg",
      description: "Master configuration management practices",
      href: "/ServiceConfiguration",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Supplier Management",
      image: "/itl4.jpg",
      description: "Learn supplier relationship management",
      href: "/SupplierManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Information Security Management",
      image: "/infosecman.jpg",
      description: "Master information security practices",
      href: "/InformationSecurityMan",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function ItAssetManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}