import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "MSP Foundation Certification Training | Programme Management | Edura",
  description: "Master MSP Foundation for effective programme management. Learn MSP principles, governance, and transformational flow for successful programmes.",
  keywords: "MSP Foundation, Managing Successful Programmes, programme management, MSP certification, transformational flow",
  openGraph: {
    title: "MSP Foundation Certification Training",
    description: "Master Managing Successful Programmes (MSP) for effective programme leadership",
    images: ["/Agile.jpg"],
  },
};

const courseData = {
  title: "MSP Foundation",
  subtitle: "Master programme management principles for successful transformational change",
  backgroundImage: "/Agile.jpg",
  overview: [
    "Managing Successful Programmes (MSP) provides a framework for delivering transformational change through programme management. MSP Foundation introduces the core principles and processes for managing complex programmes.",
    "Learn to coordinate multiple related projects, manage stakeholder expectations, and deliver transformational benefits that align with organizational strategy and objectives.",
    "Develop skills in programme governance, benefits management, and stakeholder engagement that enable successful delivery of large-scale change initiatives."
  ],
  courseOutline: [
    "MSP framework and principles",
    "Programme governance and organization",
    "Transformational flow and lifecycle",
    "Benefits management and realization",
    "Stakeholder engagement and management",
    "Risk and issue management",
    "Programme planning and control",
    "Quality and assurance processes"
  ],
  learningObjectives: [
    "Understand MSP framework and principles",
    "Master programme governance structures",
    "Implement transformational flow processes",
    "Manage benefits realization effectively",
    "Engage stakeholders throughout programme lifecycle",
    "Control programme risks and issues",
    "Plan and monitor programme delivery"
  ],
  targetGroup: [
    "Programme managers and directors",
    "Senior project managers",
    "Change managers and leaders",
    "Business transformation professionals",
    "Portfolio managers"
  ],
  examDetails: [
    "Duration: 75 minutes",
    "75 multiple choice questions",
    "Passing score: 38/75 (50%)",
    "Closed book examination",
    "Available at Pearson VUE centers"
  ],
  category: "Project & Program Management",
  tagline: "Transform. Coordinate. Deliver.",
  relatedCourses: [
    {
      title: "MSP Practitioner",
      image: "/Agile.jpg",
      description: "Advanced MSP application and programme leadership",
      href: "/MSPPractitioner",
      duration: "3 Days",
      level: "Professional",
      badge: "MSP",
      badgeColor: "bg-orange-600"
    },
    {
      title: "PRINCE2 Foundation",
      image: "/PRINCE2.jpg",
      description: "Master PRINCE2 project management methodology",
      href: "/Prince2Foundation",
      duration: "3 Days",
      level: "Foundation",
      badge: "PRINCE2",
      badgeColor: "bg-purple-600"
    },
    {
      title: "PMP Certification",
      image: "/PMPC.jpg",
      description: "Project Management Professional certification",
      href: "/PMP",
      duration: "4 Days",
      level: "Professional",
      badge: "PMI",
      badgeColor: "bg-green-600"
    }
  ]
};

export default function MSPFoundationPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}