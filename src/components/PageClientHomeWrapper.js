"use client";

import { useRef, useState ,useEffect} from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LiveChat from "@/components/LiveChat";
import Clients from "@/components/Clients";
import CoursesWeOffer from "@/components/CoursesWeOffer";
import Testimonials from "@/components/Testimonial";
import Footer from "@/components/Footer";
export default function ClientHomeWrapper() {
  const coursesRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("");

  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [data, setData] = useState(null);

  

  return (
    <>
      <Header onGetStartedClick={scrollToCourses} />

      <Hero
        onCategorySelect={(category) => {
          setActiveFilter(category);
          scrollToCourses();
        }}
      />

      <div ref={coursesRef}>
        <CoursesWeOffer activeFilterr={activeFilter} />
      </div>

      
    </>
  );
}
