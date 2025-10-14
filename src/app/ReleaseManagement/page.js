import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL Release Management Training | Software Release Management | Edura",
  description: "Master ITIL Release Management to plan, schedule and control software releases. Learn best practices for release planning and deployment coordination.",
  keywords: "ITIL Release Management, software releases, release planning, deployment, ITSM, release coordination",
  openGraph: {
    title: "ITIL Release Management Training",
    description: "Master Release Management for effective software release coordination",
    images: ["/corporate.jpg"],
  },
};

const courseData = {
  title: "Release Management",
  subtitle: "Plan, schedule and control the movement of releases to live environments",
  backgroundImage: "/corporate.jpg",
  overview: [
    "Release Management is the practice responsible for planning, scheduling and controlling the movement of releases to test and live environments. The primary goal is to ensure that the integrity of the live environment is protected and that the correct components are released.",
    "This course provides comprehensive training on release planning, coordination, and deployment activities that ensure successful software releases with minimal risk to production environments.",
    "Learn to implement effective release management processes that coordinate multiple changes, manage dependencies, and ensure successful service transitions."
  ],
  courseOutline: [
    "Release Management fundamentals and objectives",
    "Release planning and scheduling",
    "Release design and build processes",
    "Release testing and validation",
    "Deployment planning and coordination",
    "Release deployment and implementation",
    "Post-deployment activities and review",
    "Release management tools and automation"
  ],
  learningObjectives: [
    "Understand Release Management principles and processes",
    "Master release planning and scheduling techniques",
    "Develop effective release design and build processes",
    "Implement comprehensive testing and validation procedures",
    "Coordinate deployment activities across environments",
    "Manage release dependencies and risks",
    "Ensure successful service transitions"
  ],
  targetGroup: [
    "Release Managers and coordinators",
    "Deployment managers and engineers",
    "DevOps professionals and engineers",
    "IT Service Management professionals",
    "Software development team leads"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at test centers"
  ],
  category: "IT Service Management",
  tagline: "Plan. Coordinate. Deploy.",
  relatedCourses: [
    {
      title: "Change Enablement",
      image: "/blog3.jpg",
      description: "Learn to manage changes effectively and safely",
      href: "/ChangeEnablement",
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

export default function ReleaseManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}