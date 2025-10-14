import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Lean Six Sigma Green Belt Certification Training | Edura",
  description: "Master Lean Six Sigma Green Belt methodology for process improvement. Learn DMAIC, statistical tools, and project management with expert training.",
  keywords: "Lean Six Sigma Green Belt, DMAIC, process improvement, quality management, statistical analysis, project management",
  openGraph: {
    title: "Lean Six Sigma Green Belt Certification Training",
    description: "Master Lean Six Sigma for process improvement and quality excellence",
    images: ["/SigmaBB.jpg"],
  },
};

const courseData = {
  title: "Lean Six Sigma Green Belt",
  subtitle: "Master process improvement and quality management methodologies",
  backgroundImage: "/SigmaBB.jpg",
  overview: [
    "Lean Six Sigma Green Belt certification combines Lean manufacturing principles with Six Sigma quality improvement methodologies to eliminate waste and reduce variation in business processes. This comprehensive program prepares you to lead improvement projects and drive organizational excellence.",
    "Learn the DMAIC (Define, Measure, Analyze, Improve, Control) methodology, statistical analysis techniques, and project management skills needed to identify problems, analyze root causes, and implement sustainable solutions.",
    "Develop expertise in process mapping, data analysis, hypothesis testing, and change management to become an effective improvement leader in your organization."
  ],
  courseOutline: [
    "Lean Six Sigma fundamentals and philosophy",
    "DMAIC methodology and project lifecycle",
    "Define phase: Project charter, VOC, SIPOC",
    "Measure phase: Process mapping, data collection, measurement systems",
    "Analyze phase: Statistical analysis, root cause analysis, hypothesis testing",
    "Improve phase: Solution generation, pilot testing, implementation planning",
    "Control phase: Control plans, statistical process control, sustainability",
    "Lean tools: Value stream mapping, 5S, Kaizen, waste elimination"
  ],
  learningObjectives: [
    "Master Lean Six Sigma principles and methodology",
    "Apply DMAIC framework to improvement projects",
    "Conduct statistical analysis and hypothesis testing",
    "Develop process maps and value stream maps",
    "Implement measurement systems and data collection",
    "Lead root cause analysis and problem solving",
    "Design and implement sustainable control systems"
  ],
  targetGroup: [
    "Quality managers and improvement professionals",
    "Process engineers and analysts",
    "Operations managers and supervisors",
    "Project managers and team leaders",
    "Anyone involved in process improvement initiatives"
  ],
  examDetails: [
    "Duration: 4 hours",
    "100 multiple choice questions",
    "Passing score: 70/100 (70%)",
    "Open book examination",
    "Available at certified testing centers"
  ],
  category: "Quality Management",
  tagline: "Improve. Optimize. Excel.",
  relatedCourses: [
    {
      title: "Lean Six Sigma Black Belt",
      image: "/SigmaBB.jpg",
      description: "Advanced Six Sigma leadership and project management",
      href: "/LeanSSBB",
      duration: "5 Days",
      level: "Expert",
      badge: "Six Sigma",
      badgeColor: "bg-black"
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
      title: "Business Analysis Foundation",
      image: "/Business.jpg",
      description: "Master business analysis techniques",
      href: "/BusinessAnalysisF",
      duration: "3 Days",
      level: "Foundation",
      badge: "BA",
      badgeColor: "bg-purple-600"
    }
  ]
};

export default function LeanSSGBPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}