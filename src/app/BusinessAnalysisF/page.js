import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Business Analysis Foundation Certification Training | Edura",
  description: "Master Business Analysis fundamentals for effective requirements management. Learn stakeholder analysis, process modeling, and solution evaluation.",
  keywords: "Business Analysis Foundation, requirements management, stakeholder analysis, process modeling, business analyst",
  openGraph: {
    title: "Business Analysis Foundation Certification Training",
    description: "Master Business Analysis fundamentals for effective requirements and stakeholder management",
    images: ["/Business.jpg"],
  },
};

const courseData = {
  title: "Business Analysis Foundation",
  subtitle: "Master business analysis fundamentals for effective requirements and stakeholder management",
  backgroundImage: "/Business.jpg",
  overview: [
    "Business Analysis Foundation provides comprehensive training in business analysis principles, techniques, and best practices for identifying business needs and determining solutions.",
    "Learn to analyze business processes, gather and manage requirements, and facilitate stakeholder communication to drive successful project outcomes.",
    "Develop skills in process modeling, requirements documentation, and solution evaluation that enable effective business analysis across various industries and domains."
  ],
  courseOutline: [
    "Business analysis fundamentals and role",
    "Stakeholder identification and analysis",
    "Requirements elicitation techniques",
    "Requirements analysis and modeling",
    "Process mapping and improvement",
    "Solution evaluation and validation",
    "Communication and facilitation skills",
    "Business analysis planning and monitoring"
  ],
  learningObjectives: [
    "Understand business analysis role and responsibilities",
    "Master stakeholder identification and engagement",
    "Apply effective requirements elicitation techniques",
    "Analyze and model business requirements",
    "Map and improve business processes",
    "Evaluate and validate proposed solutions",
    "Facilitate effective stakeholder communication"
  ],
  targetGroup: [
    "Business analysts and coordinators",
    "Requirements specialists",
    "Project managers and team leaders",
    "Process improvement professionals",
    "Anyone involved in requirements management"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at testing centers"
  ],
  category: "DevOps & Business Analysis",
  tagline: "Analyze. Model. Improve.",
  relatedCourses: [
    {
      title: "Business Analysis Practice",
      image: "/Business.jpg",
      description: "Advanced business analysis techniques",
      href: "/BusinessAnalysisP",
      duration: "3 Days",
      level: "Foundation",
      badge: "BA",
      badgeColor: "bg-purple-600"
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
    },
    {
      title: "Process Improvement",
      image: "/continualimprovement.jpg",
      description: "Master process improvement techniques",
      href: "/ContinuationImprovement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function BusinessAnalysisFPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}