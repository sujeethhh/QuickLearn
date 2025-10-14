import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL Continual Improvement Training | Service Improvement | Edura",
  description: "Master ITIL Continual Improvement to drive ongoing service enhancement. Learn improvement methodologies, measurement, and change management.",
  keywords: "ITIL Continual Improvement, service improvement, continuous improvement, ITSM, improvement methodologies",
  openGraph: {
    title: "ITIL Continual Improvement Training",
    description: "Master Continual Improvement for ongoing service enhancement",
    images: ["/continualimprovement.jpg"],
  },
};

const courseData = {
  title: "Continual Improvement",
  subtitle: "Drive ongoing service enhancement through systematic improvement practices",
  backgroundImage: "/continualimprovement.jpg",
  overview: [
    "Continual Improvement is the practice responsible for aligning an organization's practices and services with changing business needs through the ongoing identification and improvement of all elements involved in the effective management of products and services.",
    "This course covers improvement methodologies, measurement frameworks, and change management techniques that enable organizations to continuously enhance their service delivery capabilities.",
    "Learn to implement systematic improvement processes that identify opportunities, measure performance, and drive sustainable organizational change."
  ],
  courseOutline: [
    "Continual Improvement fundamentals and principles",
    "Improvement methodologies and frameworks",
    "Performance measurement and metrics",
    "Improvement opportunity identification",
    "Improvement planning and prioritization",
    "Change management and implementation",
    "Improvement monitoring and evaluation",
    "Organizational learning and knowledge management"
  ],
  learningObjectives: [
    "Understand Continual Improvement principles and benefits",
    "Master improvement methodologies and frameworks",
    "Implement effective measurement and metrics systems",
    "Identify and prioritize improvement opportunities",
    "Plan and execute improvement initiatives",
    "Manage organizational change effectively",
    "Foster a culture of continuous improvement"
  ],
  targetGroup: [
    "Improvement managers and coordinators",
    "Quality managers and analysts",
    "Process improvement specialists",
    "IT Service Management professionals",
    "Change managers and facilitators"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at testing centers"
  ],
  category: "IT Service Management",
  tagline: "Measure. Improve. Excel.",
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
      title: "Lean Six Sigma Green Belt",
      image: "/SigmaBB.jpg",
      description: "Master process improvement methodologies",
      href: "/LeanSSGB",
      duration: "4 Days",
      level: "Professional",
      badge: "Six Sigma",
      badgeColor: "bg-black"
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
    }
  ]
};

export default function ContinuationImprovementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}