import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL Incident Management Certification Training | Edura",
  description: "Master ITIL Incident Management to restore services quickly and minimize business impact. Expert training with real-world scenarios and best practices.",
  keywords: "ITIL Incident Management, service restoration, incident response, ITSM, service desk, IT support",
  openGraph: {
    title: "ITIL Incident Management Certification Training",
    description: "Master Incident Management to restore services quickly and minimize impact",
    images: ["/incidentmanage.jpg"],
  },
};

const courseData = {
  title: "Incident Management",
  subtitle: "Master the practice of restoring services quickly to minimize business impact",
  backgroundImage: "/incidentmanage.jpg",
  overview: [
    "ITIL Incident Management is the practice responsible for managing the lifecycle of all incidents to ensure that normal service operation is restored as quickly as possible with minimal impact on business operations.",
    "This course provides comprehensive training on incident handling processes, escalation procedures, and service restoration techniques that are essential for maintaining high service availability.",
    "Learn to implement effective incident management processes that reduce downtime, improve customer satisfaction, and maintain service quality standards."
  ],
  courseOutline: [
    "Incident Management fundamentals and objectives",
    "Incident identification and logging procedures",
    "Incident categorization and prioritization",
    "Initial diagnosis and investigation techniques",
    "Escalation procedures and criteria",
    "Resolution and recovery processes",
    "Incident closure and documentation",
    "Major incident management procedures"
  ],
  learningObjectives: [
    "Understand the Incident Management process and its importance",
    "Learn incident identification and logging best practices",
    "Master incident categorization and prioritization techniques",
    "Develop effective escalation and communication skills",
    "Implement resolution and recovery procedures",
    "Manage major incidents effectively",
    "Ensure proper incident closure and documentation"
  ],
  targetGroup: [
    "Service Desk analysts and team leaders",
    "IT Support staff and technical specialists",
    "Incident Managers and coordinators",
    "IT Service Management professionals",
    "Anyone involved in incident response activities"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at test centers"
  ],
  category: "IT Service Management",
  tagline: "Restore. Respond. Resolve.",
  relatedCourses: [
    {
      title: "Problem Management",
      image: "/problemmanage.jpg",
      description: "Learn to identify and resolve root causes of incidents",
      href: "/ProblemManagement",
      duration: "5 Days",
      level: "Advanced",
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
    },
    {
      title: "Change Enablement",
      image: "/blog3.jpg",
      description: "Learn to manage changes effectively and safely",
      href: "/ChangeEnablement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function IncidentManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}