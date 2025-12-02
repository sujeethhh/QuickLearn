"use client";

import Grid from "@mui/material/Grid";
import ClientHomeWrapper from "@/components/PageClientHomeWrapper";
import Testimonials from "@/components/Testimonial";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

export default function HomePageClient({ testimonials, clients }) {
  return (
    <Grid container direction="column" spacing={0}>
      <Grid item xs={12}>
        <ClientHomeWrapper />
      </Grid>
      
      <Grid item xs={12}>
        <Testimonials testimonials={testimonials} />
      </Grid>
      
      <Grid item xs={12}>
        <Clients clients={clients} />
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
      
      <Grid item xs={12}>
        <LiveChat />
      </Grid>
    </Grid>
  );
}
