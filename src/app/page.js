import HomePageClient from "@/components/HomePageClient";

export default async function HomePage() {
  const res = await fetch("https://quicklearnsys.com/data/testimonials/testimonials.json", {
    cache: "no-store",
  });

  const testimonials = await res.json();

  const baseUrl = "https://quicklearnsys.com";

  // Fix the invalid relative image paths
  const fixedTestimonials = testimonials.map(item => ({
    ...item,
    image: item.image.replace(/^\.\//, `${baseUrl}/`),
  }));

  const res2 = await fetch("https://quicklearnsys.com/data/clients/clients.json", {
    cache: "no-store",
  });

  const clients = await res2.json();

  const fixedclients = clients.map(item => ({
    ...item,
    logo: item.logo.replace(/^\.\//, `${baseUrl}/`),
  }));

  return <HomePageClient testimonials={fixedTestimonials} clients={fixedclients} />;
}
