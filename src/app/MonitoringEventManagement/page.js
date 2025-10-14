import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL Monitoring & Event Management Training | Edura",
  description: "Master ITIL Monitoring & Event Management to ensure service availability and performance. Learn event detection, filtering, and response strategies.",
  keywords: "ITIL Monitoring, Event Management, service monitoring, performance management, event detection, ITSM",
  openGraph: {
    title: "ITIL Monitoring & Event Management Training",
    description: "Master Monitoring & Event Management for proactive service management",
    images: ["/blog2.jpg"],
  },
};

const courseData = {
  title: "Monitoring & Event Management",
  subtitle: "Proactively monitor services and manage events to ensure optimal performance",
  backgroundImage: "/blog2.jpg",
  overview: [
    "Monitoring & Event Management is the practice responsible for systematically observing services and service components, and recording and reporting selected changes of state identified as events.",
    "This course covers comprehensive monitoring strategies, event detection techniques, and automated response mechanisms that ensure service availability and performance optimization.",
    "Learn to implement effective monitoring frameworks that provide early warning of potential issues and enable proactive service management."
  ],
  courseOutline: [
    "Monitoring & Event Management fundamentals",
    "Event types and classification",
    "Monitoring strategy and planning",
    "Event detection and filtering",
    "Automated event processing",
    "Event correlation and analysis",
    "Alerting and notification systems",
    "Performance monitoring and reporting"
  ],
  learningObjectives: [
    "Understand monitoring and event management principles",
    "Design effective monitoring strategies",
    "Implement event detection and filtering systems",
    "Develop automated event processing workflows",
    "Master event correlation and analysis techniques",
    "Create effective alerting mechanisms",
    "Monitor and report on service performance"
  ],
  targetGroup: [
    "System administrators and engineers",
    "Monitoring specialists and analysts",
    "IT Operations staff",
    "Service Desk personnel",
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
  tagline: "Monitor. Detect. Respond.",
  relatedCourses: [
    {
      title: "Incident Management",
      image: "/incidentmanage.jpg",
      description: "Learn to manage and resolve IT incidents effectively",
      href: "/IncidentManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Problem Management",
      image: "/problemmanage.jpg",
      description: "Master root cause analysis and problem resolution",
      href: "/ProblemManagement",
      duration: "5 Days",
      level: "Advanced",
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

export default function MonitoringEventManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}