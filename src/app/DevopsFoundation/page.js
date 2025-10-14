import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "DevOps Foundation Certification Training | DevOps Institute | Edura",
  description: "Master DevOps fundamentals with DevOps Foundation certification. Learn DevOps culture, practices, automation, and continuous delivery principles.",
  keywords: "DevOps Foundation, DevOps certification, continuous integration, continuous delivery, automation, DevOps culture",
  openGraph: {
    title: "DevOps Foundation Certification Training",
    description: "Master DevOps culture, practices, and tools for continuous delivery",
    images: ["/Devops.jpg"],
  },
};

const courseData = {
  title: "DevOps Foundation",
  subtitle: "Master DevOps culture, practices, and tools for continuous delivery excellence",
  backgroundImage: "/Devops.jpg",
  overview: [
    "DevOps Foundation provides a comprehensive introduction to DevOps principles, practices, and tools. This course covers the cultural and technical aspects of DevOps, focusing on collaboration, automation, and continuous improvement.",
    "Learn how DevOps bridges the gap between development and operations teams, enabling faster delivery, improved quality, and enhanced customer satisfaction through automation and collaborative practices.",
    "Understand the key DevOps practices including continuous integration, continuous delivery, infrastructure as code, and monitoring, along with the cultural transformation required for successful DevOps adoption."
  ],
  courseOutline: [
    "DevOps fundamentals and principles",
    "DevOps culture and organizational transformation",
    "Continuous Integration (CI) practices",
    "Continuous Delivery (CD) and deployment",
    "Infrastructure as Code (IaC)",
    "Configuration management and automation",
    "Monitoring, logging, and observability",
    "DevOps tools and technology stack"
  ],
  learningObjectives: [
    "Understand DevOps principles and cultural aspects",
    "Learn continuous integration and delivery practices",
    "Master infrastructure as code concepts",
    "Implement configuration management and automation",
    "Design effective monitoring and observability strategies",
    "Select appropriate DevOps tools and technologies",
    "Drive organizational DevOps transformation"
  ],
  targetGroup: [
    "Software developers and engineers",
    "System administrators and operations staff",
    "DevOps engineers and practitioners",
    "IT managers and team leaders",
    "Anyone involved in software delivery processes"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at testing centers"
  ],
  category: "DevOps & Business Analysis",
  tagline: "Collaborate. Automate. Deliver.",
  relatedCourses: [
    {
      title: "SRE Foundation",
      image: "/Sre.jpg",
      description: "Site Reliability Engineering principles and practices",
      href: "/SREFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "SRE",
      badgeColor: "bg-red-600"
    },
    {
      title: "DevOps Master",
      image: "/Business.jpg",
      description: "Advanced DevOps practices and leadership",
      href: "/DevopsMaster",
      duration: "3 Days",
      level: "Foundation",
      badge: "DevOps",
      badgeColor: "bg-green-600"
    },
    {
      title: "Agile Business Analysis",
      image: "/Business.jpg",
      description: "Business analysis in Agile environments",
      href: "/AgileBA",
      duration: "3 Days",
      level: "Foundation",
      badge: "BA",
      badgeColor: "bg-purple-600"
    }
  ]
};

export default function DevopsFoundationPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}