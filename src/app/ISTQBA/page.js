import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ISTQB Advanced Level Certification Training | Software Testing | Edura",
  description: "Master advanced software testing with ISTQB Advanced Level certification. Learn test automation, advanced techniques, and testing leadership.",
  keywords: "ISTQB Advanced, advanced software testing, test automation, testing leadership, advanced test techniques",
  openGraph: {
    title: "ISTQB Advanced Level Certification Training",
    description: "Master advanced software testing techniques and automation with ISTQB Advanced",
    images: ["/TestAuto.jpg"],
  },
};

const courseData = {
  title: "ISTQB Advanced Level",
  subtitle: "Master advanced testing techniques and lead quality assurance initiatives",
  backgroundImage: "/TestAuto.jpg",
  overview: [
    "ISTQB Advanced Level builds on Foundation knowledge to provide comprehensive training in advanced testing techniques, test automation, and testing leadership.",
    "Learn sophisticated testing approaches, automation frameworks, and management skills needed to lead testing teams and drive quality initiatives in complex environments.",
    "Develop expertise in risk-based testing, performance testing, and test process improvement that enables you to ensure software quality at enterprise scale."
  ],
  courseOutline: [
    "Advanced test design techniques",
    "Test automation frameworks and tools",
    "Performance and load testing",
    "Security testing fundamentals",
    "Risk-based testing approaches",
    "Test management and leadership",
    "Test process improvement",
    "Advanced defect analysis and reporting"
  ],
  learningObjectives: [
    "Master advanced test design and execution techniques",
    "Implement effective test automation strategies",
    "Conduct performance and security testing",
    "Apply risk-based testing methodologies",
    "Lead testing teams and initiatives",
    "Improve testing processes and practices",
    "Analyze and report on testing effectiveness"
  ],
  targetGroup: [
    "Senior software testers and QA professionals",
    "Test managers and team leaders",
    "Test automation engineers",
    "Quality assurance managers",
    "ISTQB Foundation certified professionals"
  ],
  examDetails: [
    "Duration: 3 hours",
    "65 multiple choice questions",
    "Passing score: 42/65 (65%)",
    "Closed book examination",
    "Available at Pearson VUE centers worldwide"
  ],
  category: "Software Testing & Technical",
  tagline: "Automate. Lead. Excel.",
  relatedCourses: [
    {
      title: "ISTQB Foundation Level",
      image: "/ISTQB.jpg",
      description: "Master software testing fundamentals",
      href: "/ISTQBF",
      duration: "3 Days",
      level: "Foundation",
      badge: "ISTQB",
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
    },
    {
      title: "Agile Testing",
      image: "/Business.jpg",
      description: "Testing in Agile environments",
      href: "/AgileBA",
      duration: "3 Days",
      level: "Foundation",
      badge: "Agile",
      badgeColor: "bg-orange-600"
    }
  ]
};

export default function ISTQBAPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}