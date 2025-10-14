import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL Change Enablement Training | Change Management | Edura",
  description: "Master ITIL Change Enablement to manage changes safely and efficiently. Learn change assessment, authorization, and implementation best practices.",
  keywords: "ITIL Change Enablement, change management, change control, ITSM, change assessment, change authorization",
  openGraph: {
    title: "ITIL Change Enablement Training",
    description: "Master Change Enablement for safe and efficient change management",
    images: ["/blog3.jpg"],
  },
};

const courseData = {
  title: "Change Enablement",
  subtitle: "Enable safe and efficient changes while minimizing risk to services",
  backgroundImage: "/blog3.jpg",
  overview: [
    "Change Enablement is the practice responsible for maximizing the number of successful service and product changes by ensuring that risks have been properly assessed, authorizing changes to proceed, and managing the change schedule.",
    "This comprehensive course covers change management processes, risk assessment techniques, and change implementation strategies that ensure business continuity while enabling innovation.",
    "Learn to balance the need for change with the requirement for stability, implementing robust change control processes that support business objectives."
  ],
  courseOutline: [
    "Change Enablement fundamentals and principles",
    "Change types and categories",
    "Change assessment and evaluation",
    "Risk analysis and mitigation strategies",
    "Change authorization processes",
    "Change scheduling and coordination",
    "Change implementation and monitoring",
    "Post-implementation review and closure"
  ],
  learningObjectives: [
    "Understand Change Enablement principles and objectives",
    "Master change assessment and risk evaluation techniques",
    "Implement effective change authorization processes",
    "Develop change scheduling and coordination skills",
    "Learn change implementation best practices",
    "Conduct effective post-implementation reviews",
    "Balance innovation needs with service stability"
  ],
  targetGroup: [
    "Change Managers and coordinators",
    "IT Service Management professionals",
    "Release and deployment managers",
    "Technical architects and engineers",
    "Business analysts and project managers"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at test centers"
  ],
  category: "IT Service Management",
  tagline: "Assess. Authorize. Enable.",
  relatedCourses: [
    {
      title: "Release Management",
      image: "/corporate.jpg",
      description: "Learn to manage software releases effectively",
      href: "/ReleaseManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Deployment Management",
      image: "/PRINCE2.jpg",
      description: "Master deployment processes and procedures",
      href: "/DeploymentManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Service Configuration Management",
      image: "/Devops.jpg",
      description: "Master configuration management practices",
      href: "/ServiceConfiguration",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function ChangeEnablementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}