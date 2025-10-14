import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL Relationship Management Training | Stakeholder Management | Edura",
  description: "Master ITIL Relationship Management to build strong stakeholder relationships. Learn customer engagement, communication, and relationship strategies.",
  keywords: "ITIL Relationship Management, stakeholder management, customer engagement, business relationships, ITSM",
  openGraph: {
    title: "ITIL Relationship Management Training",
    description: "Master Relationship Management for effective stakeholder engagement",
    images: ["/SIAM.jpg"],
  },
};

const courseData = {
  title: "Relationship Management",
  subtitle: "Build and maintain strong relationships with stakeholders and customers",
  backgroundImage: "/SIAM.jpg",
  overview: [
    "Relationship Management is the practice responsible for establishing and nurturing links between an organization and its stakeholders at strategic and tactical levels.",
    "This course covers stakeholder engagement strategies, communication techniques, and relationship building practices that ensure alignment between IT services and business objectives.",
    "Learn to develop effective stakeholder relationships that drive service improvement, enhance customer satisfaction, and support business success."
  ],
  courseOutline: [
    "Relationship Management fundamentals and objectives",
    "Stakeholder identification and analysis",
    "Customer engagement strategies",
    "Communication planning and execution",
    "Relationship building and maintenance",
    "Conflict resolution and negotiation",
    "Performance measurement and feedback",
    "Strategic partnership development"
  ],
  learningObjectives: [
    "Understand Relationship Management principles and benefits",
    "Master stakeholder identification and analysis techniques",
    "Develop effective customer engagement strategies",
    "Implement comprehensive communication plans",
    "Build and maintain strong stakeholder relationships",
    "Resolve conflicts and negotiate effectively",
    "Measure and improve relationship performance"
  ],
  targetGroup: [
    "Business Relationship Managers",
    "Customer Success Managers",
    "Account managers and coordinators",
    "IT Service Management professionals",
    "Communication and engagement specialists"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at testing centers"
  ],
  category: "IT Service Management",
  tagline: "Engage. Connect. Succeed.",
  relatedCourses: [
    {
      title: "Service Level Management",
      image: "/Servicelevelman.jpg",
      description: "Learn to manage service levels and agreements",
      href: "/ServiceLevelManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Business Relationship Management",
      image: "/itl4.jpg",
      description: "Master business relationship strategies",
      href: "/BusinessRelationshipManage",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "SIAM Foundation",
      image: "/SIAM.jpg",
      description: "Learn service integration and management",
      href: "/SIAMFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "SIAM",
      badgeColor: "bg-purple-600"
    }
  ]
};

export default function RelationshipManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}