import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL Service Request Management Training | Edura",
  description: "Master Service Request Management to handle user requests efficiently. Learn best practices for request fulfillment and service delivery.",
  keywords: "ITIL Service Request Management, request fulfillment, service delivery, ITSM, user requests, service catalog",
  openGraph: {
    title: "ITIL Service Request Management Training",
    description: "Master Service Request Management for efficient request fulfillment",
    images: ["/Servicereq.jpg"],
  },
};

const courseData = {
  title: "Service Request Management",
  subtitle: "Streamline user requests and enhance service delivery efficiency",
  backgroundImage: "/Servicereq.jpg",
  overview: [
    "Service Request Management is the practice responsible for supporting the agreed quality of a service by handling all pre-defined, user-initiated service requests in an effective and user-friendly manner.",
    "This course covers the complete lifecycle of service requests, from initial submission through fulfillment and closure, ensuring efficient service delivery and user satisfaction.",
    "Learn to implement standardized request fulfillment processes that improve service quality, reduce costs, and enhance user experience."
  ],
  courseOutline: [
    "Service Request Management fundamentals",
    "Service catalog design and management",
    "Request models and workflows",
    "Request fulfillment processes",
    "Automation and self-service options",
    "Request tracking and monitoring",
    "Performance measurement and reporting",
    "Continuous improvement strategies"
  ],
  learningObjectives: [
    "Understand Service Request Management principles and objectives",
    "Design and manage effective service catalogs",
    "Implement standardized request fulfillment processes",
    "Develop automation and self-service capabilities",
    "Monitor and measure request performance",
    "Ensure user satisfaction and service quality",
    "Drive continuous improvement in request handling"
  ],
  targetGroup: [
    "Service Request coordinators and analysts",
    "Service Catalog managers",
    "IT Service Management professionals",
    "Process improvement specialists",
    "Service Desk staff and managers"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at test centers"
  ],
  category: "IT Service Management",
  tagline: "Request. Fulfill. Deliver.",
  relatedCourses: [
    {
      title: "Service Desk",
      image: "/serviceDesk.jpg",
      description: "Master service desk operations and customer service",
      href: "/ServiceDesk",
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

export default function ServiceRequestManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}