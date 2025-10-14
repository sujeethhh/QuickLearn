import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "PRINCE2 Practitioner Certification Training | Advanced Project Management | Edura",
  description: "Master PRINCE2 Practitioner for advanced project management skills. Learn to apply and tailor PRINCE2 methodology in real-world scenarios.",
  keywords: "PRINCE2 Practitioner, advanced project management, PRINCE2 application, project tailoring, project leadership",
  openGraph: {
    title: "PRINCE2 Practitioner Certification Training",
    description: "Master advanced PRINCE2 application and project leadership skills",
    images: ["/Agile.jpg"],
  },
};

const courseData = {
  title: "PRINCE2 Practitioner",
  subtitle: "Apply and tailor PRINCE2 methodology for complex project environments",
  backgroundImage: "/Agile.jpg",
  overview: [
    "PRINCE2 Practitioner builds on Foundation knowledge to develop advanced project management skills. This certification demonstrates your ability to apply and tailor PRINCE2 methodology in real-world project scenarios.",
    "Learn to adapt PRINCE2 principles, themes, and processes to different project contexts, manage complex stakeholder relationships, and lead successful project delivery.",
    "Develop expertise in project tailoring, risk management, and change control that enables you to manage projects of any size and complexity effectively."
  ],
  courseOutline: [
    "Advanced PRINCE2 application and tailoring",
    "Project context analysis and adaptation",
    "Complex stakeholder management",
    "Advanced risk and issue management",
    "Change control and configuration management",
    "Quality management and assurance",
    "Project leadership and team management",
    "Project closure and benefits realization"
  ],
  learningObjectives: [
    "Apply PRINCE2 methodology in complex environments",
    "Tailor PRINCE2 to different project contexts",
    "Manage complex stakeholder relationships",
    "Implement advanced risk management techniques",
    "Lead effective change control processes",
    "Ensure quality throughout project lifecycle",
    "Demonstrate project leadership capabilities"
  ],
  targetGroup: [
    "Experienced project managers",
    "PRINCE2 Foundation certified professionals",
    "Senior project coordinators",
    "Programme managers",
    "Project management consultants"
  ],
  examDetails: [
    "Duration: 2.5 hours",
    "68 objective testing questions",
    "Passing score: 38/68 (55%)",
    "Open book examination",
    "Available at Pearson VUE centers"
  ],
  category: "Project & Program Management",
  tagline: "Apply. Tailor. Lead.",
  relatedCourses: [
    {
      title: "PRINCE2 Foundation",
      image: "/PRINCE2.jpg",
      description: "Master PRINCE2 fundamentals and methodology",
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
    },
    {
      title: "MSP Foundation",
      image: "/Agile.jpg",
      description: "Managing Successful Programmes methodology",
      href: "/MSPFoundation",
      duration: "3 Days",
      level: "Professional",
      badge: "MSP",
      badgeColor: "bg-orange-600"
    }
  ]
};

export default function Prince2PractitionerPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}