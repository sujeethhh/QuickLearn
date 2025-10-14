import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL Information Security Management Training | IT Security | Edura",
  description: "Master ITIL Information Security Management to protect organizational information assets. Learn security policies, risk management, and compliance.",
  keywords: "ITIL Information Security Management, IT security, security policies, risk management, information protection, ITSM",
  openGraph: {
    title: "ITIL Information Security Management Training",
    description: "Master Information Security Management for comprehensive IT security",
    images: ["/infosecman.jpg"],
  },
};

const courseData = {
  title: "Information Security Management",
  subtitle: "Protect organizational information assets through comprehensive security management",
  backgroundImage: "/infosecman.jpg",
  overview: [
    "Information Security Management is the practice responsible for ensuring that an organization's information, and the information systems and technology used to process it, remain appropriately secure.",
    "This course covers security policy development, risk assessment, incident response, and compliance management to protect organizational information assets effectively.",
    "Learn to implement comprehensive security frameworks that balance security requirements with business needs while ensuring regulatory compliance."
  ],
  courseOutline: [
    "Information Security Management fundamentals",
    "Security policy development and governance",
    "Risk assessment and management",
    "Security controls and measures",
    "Incident response and management",
    "Compliance and regulatory requirements",
    "Security awareness and training",
    "Continuous security monitoring and improvement"
  ],
  learningObjectives: [
    "Understand Information Security Management principles",
    "Develop effective security policies and procedures",
    "Conduct comprehensive risk assessments",
    "Implement appropriate security controls",
    "Manage security incidents effectively",
    "Ensure regulatory compliance",
    "Build security awareness across the organization"
  ],
  targetGroup: [
    "Information Security Managers",
    "IT Security specialists and analysts",
    "Risk managers and coordinators",
    "Compliance officers",
    "IT Service Management professionals"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at testing centers"
  ],
  category: "IT Service Management",
  tagline: "Protect. Secure. Comply.",
  relatedCourses: [
    {
      title: "IT Asset Management",
      image: "/SCRUM1.jpg",
      description: "Learn effective IT asset lifecycle management",
      href: "/ItAssetManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Incident Management",
      image: "/incidentmanage.jpg",
      description: "Master incident response and management",
      href: "/IncidentManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Supplier Management",
      image: "/itl4.jpg",
      description: "Learn supplier security and risk management",
      href: "/SupplierManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function InformationSecurityManPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}