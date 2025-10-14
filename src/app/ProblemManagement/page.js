import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL Problem Management Certification Training | Edura",
  description: "Master ITIL Problem Management practices to identify and resolve root causes of incidents. Expert-led training with hands-on experience and certification preparation.",
  keywords: "ITIL Problem Management, root cause analysis, incident prevention, ITSM, problem solving, ITIL certification",
  openGraph: {
    title: "ITIL Problem Management Certification Training",
    description: "Master Problem Management practices to prevent recurring incidents",
    images: ["/problemmanage.jpg"],
  },
};

const courseData = {
  title: "Problem Management",
  subtitle: "Master the art of identifying and resolving root causes to prevent recurring incidents",
  backgroundImage: "/problemmanage.jpg",
  overview: [
    "ITIL Problem Management is a critical practice that focuses on identifying, analyzing, and resolving the underlying causes of recurring incidents or problems to prevent them from happening again in the future.",
    "This comprehensive course covers the Problem Management process within IT Service Management, teaching you how to minimize the impact of problems on IT services and business operations.",
    "You'll learn advanced techniques for root cause analysis, problem investigation methodologies, and proactive measures to prevent future incidents."
  ],
  courseOutline: [
    "Problem Management fundamentals and principles",
    "Problem identification and categorization",
    "Root cause analysis techniques",
    "Problem investigation methodologies",
    "Known Error Database management",
    "Workaround development and implementation",
    "Problem resolution and closure processes",
    "Proactive Problem Management strategies"
  ],
  learningObjectives: [
    "Understand the Problem Management process and its role in ITSM",
    "Master root cause analysis techniques and methodologies",
    "Learn to identify and categorize problems effectively",
    "Develop skills in problem investigation and resolution",
    "Implement proactive Problem Management strategies",
    "Manage Known Error Database efficiently",
    "Create effective workarounds for known problems"
  ],
  targetGroup: [
    "Problem Managers and IT Service Management professionals",
    "Incident Managers looking to expand their skills",
    "IT Support staff and technical analysts",
    "Service Desk managers and team leaders",
    "Anyone involved in IT problem resolution activities"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at test centers"
  ],
  category: "IT Service Management",
  tagline: "Prevent. Analyze. Resolve.",
  relatedCourses: [
    {
      title: "ITIL® 4 Foundation",
      image: "/itl4.jpg",
      description: "Master the fundamentals of IT Service Management",
      href: "/ITL4Management",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
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
      title: "Service Desk",
      image: "/serviceDesk.jpg",
      description: "Master service desk operations and customer service",
      href: "/ServiceDesk",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function ProblemManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}