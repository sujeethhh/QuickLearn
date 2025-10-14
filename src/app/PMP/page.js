import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollFloat from "@/components/ui/ScroolReveal";
import Link from "next/link";
import LiveChat from "@/components/LiveChat";
import CoursePageClient from "./CoursePageClient";

// Server-side metadata for SEO
export const metadata = {
  title: "PMP Certification Training | Project Management Professional | Edura",
  description: "Become a certified Project Management Professional (PMP) with our comprehensive training program. Expert instructors, exam prep, and hands-on experience.",
  keywords: "PMP certification, Project Management Professional, PMI training, project management course, PMP exam prep",
  openGraph: {
    title: "PMP Certification Training - Project Management Professional",
    description: "Become a certified Project Management Professional with comprehensive training and exam preparation",
    images: ["/PMPC.jpg"],
  },
};

// Server-side course data
const courseData = {
  title: "PMP Certification",
  subtitle: "Become a certified Project Management Professional and advance your career",
  backgroundImage: "/PMPC.jpg",
  overview: "The Project Management Professional (PMP) certification is the most important industry-recognized certification for project managers. This comprehensive training program covers the five process groups and ten knowledge areas as defined in the PMBOK Guide. You'll learn best practices in project management and gain the skills needed to lead projects successfully in any industry.",
  courseOutline: [
    "Project Integration Management",
    "Project Scope Management", 
    "Project Schedule Management",
    "Project Cost Management",
    "Project Quality Management",
    "Project Resource Management",
    "Project Communications Management",
    "Project Risk Management",
    "Project Procurement Management",
    "Project Stakeholder Management"
  ],
  learningObjectives: [
    "Master the five process groups of project management",
    "Understand the ten knowledge areas in detail",
    "Apply project management tools and techniques",
    "Develop leadership and team management skills",
    "Learn risk management and mitigation strategies",
    "Understand stakeholder engagement principles",
    "Prepare for the PMP certification exam"
  ],
  targetGroup: [
    "Project managers with 3+ years of experience",
    "Team leaders looking to advance to project management roles",
    "Senior professionals seeking PMP certification",
    "Anyone managing projects in any industry",
    "Professionals looking to enhance project management skills"
  ],
  examDetails: [
    "Duration: 4 hours",
    "180 multiple choice questions", 
    "Computer-based testing",
    "Passing score: Above Target proficiency",
    "Available at Pearson VUE test centers worldwide",
    "35 PDUs required for exam eligibility"
  ],
  duration: "4 Days",
  level: "Professional",
  category: "Project & Program Management"
};

export default function PMPPage() {
  return (
    <>
      <Headers />
      <CoursePageClient courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}