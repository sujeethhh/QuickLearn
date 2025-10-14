import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Lean Six Sigma Black Belt Certification Training | Edura",
  description: "Master Lean Six Sigma Black Belt for advanced process improvement leadership. Learn advanced statistics, project management, and organizational change.",
  keywords: "Lean Six Sigma Black Belt, advanced process improvement, statistical analysis, project leadership, organizational change",
  openGraph: {
    title: "Lean Six Sigma Black Belt Certification Training",
    description: "Master advanced process improvement and lead organizational transformation",
    images: ["/SigmaBB.jpg"],
  },
};

const courseData = {
  title: "Lean Six Sigma Black Belt",
  subtitle: "Lead organizational transformation through advanced process improvement expertise",
  backgroundImage: "/SigmaBB.jpg",
  overview: [
    "Lean Six Sigma Black Belt represents the highest level of process improvement expertise, combining advanced statistical analysis with leadership skills to drive organizational transformation.",
    "This comprehensive program prepares you to lead complex improvement projects, mentor Green Belts, and implement enterprise-wide process excellence initiatives.",
    "Develop mastery in advanced statistical methods, change management, and project leadership that enables you to deliver significant business impact and ROI."
  ],
  courseOutline: [
    "Advanced Lean Six Sigma methodology",
    "Statistical analysis and hypothesis testing",
    "Design of Experiments (DOE)",
    "Advanced process mapping and analysis",
    "Change management and leadership",
    "Project management and team leadership",
    "Financial analysis and business case development",
    "Organizational transformation strategies"
  ],
  learningObjectives: [
    "Master advanced Lean Six Sigma methodologies",
    "Apply sophisticated statistical analysis techniques",
    "Design and execute complex experiments",
    "Lead organizational change initiatives",
    "Manage large-scale improvement projects",
    "Mentor and develop Green Belt practitioners",
    "Drive enterprise-wide process excellence"
  ],
  targetGroup: [
    "Senior quality and improvement professionals",
    "Operations managers and directors",
    "Process improvement leaders",
    "Lean Six Sigma Green Belts seeking advancement",
    "Change management professionals"
  ],
  examDetails: [
    "Duration: 4 hours",
    "150 multiple choice questions",
    "Passing score: 105/150 (70%)",
    "Open book examination",
    "Project submission required for certification"
  ],
  category: "Quality Management",
  tagline: "Lead. Transform. Excel.",
  relatedCourses: [
    {
      title: "Lean Six Sigma Green Belt",
      image: "/SigmaBB.jpg",
      description: "Foundation process improvement skills",
      href: "/LeanSSGB",
      duration: "4 Days",
      level: "Professional",
      badge: "Six Sigma",
      badgeColor: "bg-green-600"
    },
    {
      title: "Change Management",
      image: "/blog3.jpg",
      description: "Master organizational change practices",
      href: "/ChangeEnablement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
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
    }
  ]
};

export default function LeanSSBBPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}