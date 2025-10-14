import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "PRINCE2 Agile Practitioner Training | Advanced Project Management | Edura",
  description:
    "Master PRINCE2 Agile Practitioner to manage complex projects with governance, flexibility, and agile delivery. Learn how to tailor PRINCE2 for agile environments and ensure successful project outcomes.",
  keywords:
    "PRINCE2 Agile Practitioner, PRINCE2 Practitioner, Advanced Project Management, Agile Project Management, PRINCE2 Agile, Project Governance, Agile Delivery, Risk Management, Tailoring PRINCE2, IT Project Management",
  openGraph: {
    title: "PRINCE2 Agile Practitioner Training",
    description:
      "Learn to apply PRINCE2 Agile principles and practices in complex projects. Tailor governance and agile techniques to achieve project success.",
    images: ["/PRINCE2AgilePractitioner.jpg"],
  },
};

const courseData = {
  title: "PRINCE2 Agile Practitioner",
  subtitle: "Apply PRINCE2 Agile principles and tailor governance for complex projects",
  backgroundImage: "/PRINCE2AgilePractitioner.jpg",
  overview: [
    "The PRINCE2 Agile Practitioner course focuses on applying PRINCE2 principles, themes, and processes in real-world, complex, and agile project environments.",
    "Participants will learn to tailor PRINCE2 governance frameworks to agile delivery methods, balancing control, flexibility, and iterative delivery.",
    "This course provides practical insights into decision-making, risk management, and stakeholder engagement to ensure successful project outcomes in dynamic environments."
  ],
  courseOutline: [
    "PRINCE2 Agile Practitioner overview and exam structure",
    "Tailoring PRINCE2 to agile project environments",
    "Agile frameworks, techniques, and practices in PRINCE2",
    "Managing risks, issues, and changes in complex projects",
    "Stakeholder engagement and communication strategies",
    "Controlling stages, delivering products iteratively",
    "Decision-making and project governance in agile delivery",
    "Best practices for project performance measurement and continual improvement"
  ],
  learningObjectives: [
    "Apply PRINCE2 governance principles in agile project contexts",
    "Tailor project management frameworks to meet agile delivery requirements",
    "Integrate agile techniques with PRINCE2 themes and processes",
    "Manage complex risks, issues, and change effectively",
    "Engage stakeholders and maintain clear communication throughout projects",
    "Control project stages and ensure iterative delivery of products",
    "Measure project performance and drive continual improvement",
    "Demonstrate readiness for PRINCE2 Agile Practitioner certification exam"
  ],
  targetGroup: [
    "Project Managers and Program Managers",
    "Team Leaders and Project Coordinators",
    "Agile Coaches and Scrum Masters",
    "Business Analysts and IT Project Professionals",
    "Professionals seeking PRINCE2 Agile Practitioner certification"
  ],
  examDetails: [
    "Duration: 150 minutes",
    "50 multiple-choice objective testing questions (scenario-based)",
    "Passing score: 55% (28/50)",
    "Open book examination (PRINCE2 manual allowed)",
    "Available online and at accredited training centers"
  ],
  category: "Project Management",
  tagline: "Govern Agile. Deliver Successfully. Lead Projects.",
  relatedCourses: [
    {
      title: "PRINCE2 Agile Foundation",
      image: "/PRINCE2Agile.jpg",
      description:
        "Understand the fundamentals of PRINCE2 Agile methodology and hybrid project management.",
      href: "/PRINCE2AgileFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "PRINCE2",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Agile Project Management",
      image: "/AgilePM.jpg",
      description:
        "Learn agile methods and techniques for iterative and adaptive project delivery.",
      href: "/AgileProjectManagement",
      duration: "3 Days",
      level: "Intermediate",
      badge: "Agile",
      badgeColor: "bg-green-500"
    },
    {
      title: "Scrum Master Certification",
      image: "/ScrumMaster.jpg",
      description:
        "Gain practical knowledge to lead Scrum teams and implement Agile practices successfully.",
      href: "/ScrumMaster",
      duration: "2 Days",
      level: "Foundation",
      badge: "Scrum",
      badgeColor: "bg-purple-600"
    }
  ]
};

export default function PRINCE2AgilePractitioner() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}
