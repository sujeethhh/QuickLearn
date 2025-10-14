import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL 4 Specialist: Acquiring & Managing Cloud Services | Cloud Strategy | Edura",
  description:
    "Master ITIL 4 Acquiring and Managing Cloud Services to build cloud strategies, manage suppliers, and optimize service value. Learn governance, risk, and financial management for cloud environments.",
  keywords:
    "ITIL 4 Specialist, Acquiring and Managing Cloud Services, ITIL ACP, Cloud Strategy, Cloud Governance, Cloud Procurement, ITSM, Cloud Service Management, Cloud Financial Management",
  openGraph: {
    title: "ITIL 4 Specialist: Acquiring & Managing Cloud Services Training",
    description:
      "Learn to effectively acquire, govern, and manage cloud services with ITIL 4 ACP. Build cloud strategies and ensure alignment with business goals.",
    images: ["/AcquiringManagingCloud.jpg"],
  },
};

const courseData = {
  title: "ITIL 4 Specialist: Acquiring & Managing Cloud Services (ACP)",
  subtitle:
    "Acquire, govern, and manage cloud services to optimize value and align with business strategy.",
  backgroundImage: "/AcquiringManagingCloud.jpg",
  overview: [
    "The ITIL 4 Specialist: Acquiring & Managing Cloud Services (ACP) course equips professionals with the knowledge to effectively acquire and manage cloud-based services in alignment with organizational strategies and ITIL 4 principles.",
    "This course emphasizes governance, procurement, and financial management of cloud environments, ensuring that organizations maximize business value from their cloud investments.",
    "Through practical examples and best practices, learners gain the expertise to balance innovation, risk, and compliance in multi-cloud ecosystems."
  ],
  courseOutline: [
    "Introduction to cloud service management and ITIL 4 context",
    "Cloud strategy and governance models",
    "Cloud service procurement and supplier management",
    "Cloud financial management and cost optimization",
    "Risk, compliance, and data security in cloud environments",
    "Cloud service performance measurement and improvement",
    "Integration of cloud services with ITIL 4 practices",
    "Sustainability and continual improvement in cloud operations"
  ],
  learningObjectives: [
    "Understand the principles of acquiring and managing cloud services",
    "Develop governance and procurement strategies for cloud adoption",
    "Apply ITIL 4 practices to manage multi-cloud environments effectively",
    "Implement financial management and cost optimization frameworks",
    "Ensure compliance, risk management, and data protection in the cloud",
    "Drive continual improvement and innovation in cloud service delivery"
  ],
  targetGroup: [
    "Cloud Service Managers and Strategists",
    "IT Service Management professionals",
    "Procurement and Vendor Management specialists",
    "Cloud Architects and Consultants",
    "IT Governance and Compliance Officers"
  ],
  examDetails: [
    "Duration: 90 minutes",
    "40 multiple-choice questions",
    "Passing score: 70% (28/40)",
    "Closed book examination",
    "Available online and through accredited partners"
  ],
  category: "IT Service Management",
  tagline: "Acquire. Govern. Optimize.",
  relatedCourses: [
    {
      title: "ITIL 4 Specialist: Create, Deliver & Support",
      image: "/CreateDeliverSupport.jpg",
      description:
        "Master how to create, deliver, and support IT-enabled services for improved customer value.",
      href: "/CreateDeliverSupport",
      duration: "3 Days",
      level: "Intermediate",
      badge: "ITIL®",
      badgeColor: "bg-blue-600"
    },
    {
      title: "ITIL 4 Strategist: Direct, Plan & Improve",
      image: "/DirectPlanImprove.jpg",
      description:
        "Learn to align strategy and operations using ITIL 4’s Direct, Plan & Improve framework.",
      href: "/DirectPlanImprove",
      duration: "3 Days",
      level: "Advanced",
      badge: "ITIL®",
      badgeColor: "bg-purple-600"
    },
    {
      title: "Cloud Governance & Security",
      image: "/CloudGovernance.jpg",
      description:
        "Gain expertise in managing cloud risks, compliance, and security in hybrid environments.",
      href: "/CloudGovernanceSecurity",
      duration: "2 Days",
      level: "Professional",
      badge: "Cloud",
      badgeColor: "bg-green-600"
    }
  ]
};

export default function AcquiringManagingCloudPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}
