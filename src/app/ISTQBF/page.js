import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ISTQB Foundation Level Certification Training | Software Testing | Edura",
  description: "Master software testing fundamentals with ISTQB Foundation Level certification. Learn testing principles, techniques, and best practices with expert training.",
  keywords: "ISTQB Foundation, software testing, test automation, quality assurance, testing certification, test design",
  openGraph: {
    title: "ISTQB Foundation Level Certification Training",
    description: "Master software testing fundamentals with ISTQB Foundation certification",
    images: ["/ISTQB.jpg"],
  },
};

const courseData = {
  title: "ISTQB Foundation Level",
  subtitle: "Master software testing fundamentals and quality assurance principles",
  backgroundImage: "/ISTQB.jpg",
  overview: [
    "ISTQB Foundation Level provides comprehensive training in software testing fundamentals, covering testing principles, processes, and techniques. This globally recognized certification establishes a solid foundation in software quality assurance.",
    "Learn essential testing concepts including test planning, design, execution, and management. The course covers both manual and automated testing approaches, risk-based testing, and quality management principles.",
    "Develop skills in test case design, defect management, and testing tools to become an effective software testing professional capable of ensuring software quality and reliability."
  ],
  courseOutline: [
    "Fundamentals of testing and quality assurance",
    "Testing throughout the software development lifecycle",
    "Static testing techniques and reviews",
    "Test design techniques and approaches",
    "Test management and planning",
    "Testing tools and automation introduction",
    "Defect management and reporting",
    "Testing in different development models"
  ],
  learningObjectives: [
    "Understand software testing fundamentals and principles",
    "Master test design techniques and methodologies",
    "Learn test planning and management processes",
    "Implement static testing and review techniques",
    "Develop effective defect management practices",
    "Understand testing tools and automation basics",
    "Apply testing in various development lifecycles"
  ],
  targetGroup: [
    "Software testers and QA professionals",
    "Test analysts and test engineers",
    "Software developers interested in testing",
    "Project managers and team leaders",
    "Anyone new to software testing field"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available at Pearson VUE centers worldwide"
  ],
  category: "Software Testing & Technical",
  tagline: "Test. Verify. Assure.",
  relatedCourses: [
    {
      title: "ISTQB Advanced",
      image: "/TestAuto.jpg",
      description: "Advanced testing techniques and automation",
      href: "/ISTQBA",
      duration: "4 Days",
      level: "Professional",
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

export default function ISTQBFPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}