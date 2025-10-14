import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SAFe Scrum Master Certification Training | Scaled Agile | Edura",
  description: "Master SAFe Scrum Master role in scaled Agile environments. Learn to facilitate Agile teams, PI planning, and continuous improvement in SAFe.",
  keywords: "SAFe Scrum Master, Scaled Agile Framework, Agile teams, PI planning, SAFe certification, Scrum at scale",
  openGraph: {
    title: "SAFe Scrum Master Certification Training",
    description: "Master Scrum Master role in Scaled Agile Framework environments",
    images: ["/SCRUMM.jpg"],
  },
};

const courseData = {
  title: "SAFe Scrum Master",
  subtitle: "Facilitate Agile teams and drive continuous improvement in scaled environments",
  backgroundImage: "/SCRUMM.jpg",
  overview: [
    "SAFe Scrum Master prepares current Scrum Masters for a SAFe environment, focusing on facilitation, team coaching, and supporting Program Increment (PI) execution.",
    "Learn to facilitate Agile teams within the Scaled Agile Framework, support PI planning events, and drive relentless improvement across the Agile Release Train.",
    "Develop advanced facilitation skills, team coaching techniques, and system thinking approaches that enable high-performing Agile teams in enterprise environments."
  ],
  courseOutline: [
    "SAFe framework and Scrum Master role",
    "Facilitating Agile teams in SAFe",
    "Program Increment (PI) planning facilitation",
    "Agile Release Train (ART) participation",
    "Team performance and flow optimization",
    "Coaching and mentoring techniques",
    "Continuous improvement and innovation",
    "Scaled Agile ceremonies and events"
  ],
  learningObjectives: [
    "Understand SAFe framework and Scrum Master role",
    "Facilitate effective Agile teams in scaled environments",
    "Support Program Increment planning and execution",
    "Coach teams for high performance and flow",
    "Drive continuous improvement initiatives",
    "Apply systems thinking to team challenges",
    "Enable innovation and experimentation"
  ],
  targetGroup: [
    "Scrum Masters transitioning to SAFe",
    "Agile coaches in enterprise environments",
    "Team leads and facilitators",
    "Agile transformation professionals",
    "Anyone supporting Agile teams in SAFe"
  ],
  examDetails: [
    "Duration: 90 minutes",
    "45 multiple choice questions",
    "Passing score: 34/45 (76%)",
    "Web-based and closed book",
    "One-year SAFe Community Platform membership"
  ],
  category: "Agile, Scrum & Kanban",
  tagline: "Facilitate. Coach. Improve.",
  relatedCourses: [
    {
      title: "Leading SAFe Agilist",
      image: "/SAFe.jpg",
      description: "Lead enterprise Agile transformations with SAFe",
      href: "/LeadingSAFeAgilist",
      duration: "2 Days",
      level: "Professional",
      badge: "SAFe",
      badgeColor: "bg-orange-600"
    },
    {
      title: "Professional Scrum Master I",
      image: "/SCRUM1.jpg",
      description: "Master Scrum framework fundamentals",
      href: "/PScrumM1",
      duration: "2 Days",
      level: "Professional",
      badge: "Scrum.org",
      badgeColor: "bg-blue-600"
    },
    {
      title: "SAFe Advanced Scrum Master",
      image: "/SCRUMM.jpg",
      description: "Advanced Scrum Master skills in SAFe",
      href: "/SAFeAdvancedScrumMaster",
      duration: "2 Days",
      level: "Professional",
      badge: "SAFe",
      badgeColor: "bg-orange-600"
    }
  ]
};

export default function SAFeScrumMasterPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}