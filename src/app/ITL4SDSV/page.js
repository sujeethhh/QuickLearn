import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL® 4 Specialist Drive Stakeholder Value Training | Edura",
  description: "Master ITIL® 4 Specialist Drive Stakeholder Value module. Learn customer journey mapping, stakeholder engagement, and value co-creation.",
  keywords: "ITIL 4 Specialist, Drive Stakeholder Value, customer journey, stakeholder engagement, value creation, ITSM",
  openGraph: {
    title: "ITIL® 4 Specialist Drive Stakeholder Value Training",
    description: "Master stakeholder value creation with ITIL® 4 Specialist training",
    images: ["/itl4.jpg"],
  },
};

const courseData = {
  title: "ITIL® 4 Specialist Drive Stakeholder Value",
  subtitle: "Create and deliver value through effective stakeholder engagement and collaboration",
  backgroundImage: "/itl4.jpg",
  overview: [
    "ITIL® 4 Specialist: Drive Stakeholder Value focuses on customer journey, customer experience, and stakeholder relationships to drive value creation and delivery.",
    "This module covers stakeholder engagement strategies, customer experience design, and value co-creation techniques that ensure services meet stakeholder needs and expectations.",
    "Learn to map customer journeys, design exceptional experiences, and build collaborative relationships that drive mutual value creation."
  ],
  courseOutline: [
    "Stakeholder value and customer experience",
    "Customer journey mapping and analysis",
    "Service relationship management",
    "Customer experience design",
    "Value co-creation and collaboration",
    "Stakeholder engagement strategies",
    "Marketing and communication",
    "Service portfolio management"
  ],
  learningObjectives: [
    "Understand stakeholder value creation principles",
    "Master customer journey mapping techniques",
    "Design exceptional customer experiences",
    "Implement effective stakeholder engagement",
    "Facilitate value co-creation activities",
    "Develop service relationship strategies",
    "Optimize service portfolio for value delivery"
  ],
  targetGroup: [
    "Customer Experience Managers",
    "Business Relationship Managers",
    "Service Portfolio Managers",
    "Marketing and communication professionals",
    "IT Service Management professionals"
  ],
  examDetails: [
    "Duration: 90 minutes",
    "40 multiple choice questions",
    "Passing score: 28/40 (70%)",
    "Closed book examination",
    "Available at Pearson VUE centers"
  ],
  category: "IT Service Management",
  tagline: "Engage. Experience. Value.",
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
      title: "Relationship Management",
      image: "/SIAM.jpg",
      description: "Master stakeholder relationship management",
      href: "/RelationshipManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Service Level Management",
      image: "/Servicelevelman.jpg",
      description: "Learn to manage service levels and agreements",
      href: "/ServiceLevelManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function ITL4SDSVPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}