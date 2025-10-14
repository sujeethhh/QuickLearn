import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL Deployment Management Training | Software Deployment | Edura",
  description: "Master ITIL Deployment Management for safe and efficient software deployments. Learn deployment planning, execution, and rollback strategies.",
  keywords: "ITIL Deployment Management, software deployment, deployment planning, rollback strategies, ITSM",
  openGraph: {
    title: "ITIL Deployment Management Training",
    description: "Master Deployment Management for safe and efficient software deployments",
    images: ["/PRINCE2.jpg"],
  },
};

const courseData = {
  title: "Deployment Management",
  subtitle: "Execute safe and efficient deployments with minimal service disruption",
  backgroundImage: "/PRINCE2.jpg",
  overview: [
    "Deployment Management is the practice responsible for moving new or changed hardware, software, documentation, processes, or any other component to live environments.",
    "This comprehensive course covers deployment planning, execution strategies, and risk mitigation techniques that ensure successful service transitions with minimal business impact.",
    "Learn to coordinate complex deployments, manage deployment risks, and implement effective rollback procedures to maintain service stability."
  ],
  courseOutline: [
    "Deployment Management fundamentals",
    "Deployment planning and strategy",
    "Deployment models and approaches",
    "Risk assessment and mitigation",
    "Deployment execution and coordination",
    "Testing and validation procedures",
    "Rollback and recovery planning",
    "Post-deployment activities and review"
  ],
  learningObjectives: [
    "Understand Deployment Management principles and processes",
    "Master deployment planning and strategy development",
    "Implement various deployment models effectively",
    "Assess and mitigate deployment risks",
    "Execute coordinated deployment activities",
    "Develop effective rollback procedures",
    "Conduct post-deployment reviews and improvements"
  ],
  targetGroup: [
    "Deployment managers and engineers",
    "Release managers and coordinators",
    "DevOps professionals",
    "System administrators",
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
  tagline: "Deploy. Validate. Succeed.",
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
      title: "Change Enablement",
      image: "/blog3.jpg",
      description: "Master change management processes",
      href: "/ChangeEnablement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "DevOps Foundation",
      image: "/Devops.jpg",
      description: "Learn DevOps culture and practices",
      href: "/DevopsFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "DevOps",
      badgeColor: "bg-green-600"
    }
  ]
};

export default function DeploymentManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}