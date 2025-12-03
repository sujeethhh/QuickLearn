"use client";

import ClientHomeWrapper from "@/components/PageClientHomeWrapper";
import Testimonials from "@/components/Testimonial";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

export default function HomePageClient({ testimonials, clients }) {
  return (
    <div className="flex flex-col w-full">
      
      {/* Hero / Top Section */}
      <ClientHomeWrapper />

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* Clients Section */}
      <Clients clients={clients} />

      {/* Footer */}
      <Footer />

      {/* Live Chat */}
      <LiveChat />

    </div>
  );
}
