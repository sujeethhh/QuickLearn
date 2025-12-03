"use client";

import { useRef, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoursesWeOffer from "@/components/CoursesWeOffer";

export default function ClientHomeWrapper() {
  const coursesRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("");

  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* Header */}
      <Header onGetStartedClick={scrollToCourses} />

      {/* Hero Section */}
      <Hero
        onCategorySelect={(category) => {
          setActiveFilter(category);
          scrollToCourses();
        }}
      />

      {/* Courses Section */}
      <div ref={coursesRef}>
        <CoursesWeOffer activeFilterr={activeFilter} />
      </div>

    </div>
  );
}
