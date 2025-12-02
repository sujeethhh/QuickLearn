"use client";

import { useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

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
    <Grid container direction="column" spacing={6}>
      
      {/* Header */}
      <Grid item xs={12}>
        <Header onGetStartedClick={scrollToCourses} />
      </Grid>

      {/* Hero Section */}
      <Grid item xs={12}>
        <Container maxWidth="xl">
          <Hero
            onCategorySelect={(category) => {
              setActiveFilter(category);
              scrollToCourses();
            }}
          />
        </Container>
      </Grid>

      {/* Courses Section */}
      <Grid item xs={12}>
        <div ref={coursesRef}>
          <Container maxWidth="lg">
            <CoursesWeOffer activeFilterr={activeFilter} />
          </Container>
        </div>
      </Grid>

    </Grid>
  );
}
