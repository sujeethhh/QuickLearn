import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SRE Foundation Certification Training | Site Reliability Engineering | Edura",
  description: "Master Site Reliability Engineering (SRE) fundamentals. Learn reliability principles, monitoring, incident response, and automation practices.",
  keywords: "SRE Foundation, Site Reliability Engineering, system reliability, monitoring, incident response, automation",
  openGraph: {
    title: "SRE Foundation Certification Training",
    description: "Master Site Reliability Engineering for system reliability and performance",
    images: ["/Sre.jpg"],
  },
};

const courseData = {
  title: "SRE Foundation",
  subtitle: "Master Site Reliability Engineering principles for scalable and reliable systems",
  backgroundImage: "/Sre.jpg",
  overview: [
    "Site Reliability Engineering (SRE) Foundation provides comprehensive training in reliability engineering principles, practices, and tools used to build and maintain large-scale distributed systems.",
    "Learn to balance system reliability with feature velocity, implement effective monitoring and alerting, and respond to incidents with systematic approaches.",
    "Develop skills in automation, capacity planning, and performance optimization that enable organizations to deliver reliable services at scale."
  ],
  courseOutline: [
    "SRE principles and philosophy",
    "Service Level Objectives (SLOs) and Error Budgets",
    "Monitoring, alerting, and observability",
    "Incident response and post-mortem analysis",
    "Automation and toil reduction",
    "Capacity planning and performance",
    "Release engineering and deployment",
    "Organizational aspects of SRE"
  ],
  learningObjectives: [
    "Understand SRE principles and practices",
    "Define and manage Service Level Objectives",
    "Implement effective monitoring and alerting",
    "Respond to incidents systematically",
    "Reduce toil through automation",
    "Plan capacity and optimize performance",
    "Apply SRE practices in organizations"
  ],
  targetGroup: [
    "Site Reliability Engineers",
    "DevOps engineers and practitioners",
    "System administrators and operators",
    "Software engineers interested in reliability",
    "IT operations professionals"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at testing centers"
  ],
  category: "DevOps & Business Analysis",
  tagline: "Reliable. Scalable. Automated.",
  relatedCourses: [
    {
      title: "DevOps Foundation",
      image: "/Devops.jpg",
      description: "Learn DevOps culture and practices",
      href: "/DevopsFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "DevOps",
      badgeColor: "bg-green-600"
    },
    {
      title: "SRE Practitioner",
      image: "/Business.jpg",
      description: "Advanced SRE practices and implementation",
      href: "/SREPractitioner",
      duration: "3 Days",
      level: "Foundation",
      badge: "SRE",
      badgeColor: "bg-red-600"
    },
    {
      title: "Monitoring & Event Management",
      image: "/blog2.jpg",
      description: "Master monitoring and event management",
      href: "/MonitoringEventManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function SREFoundationPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}