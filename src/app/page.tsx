import { Contact, FaqSection, Packages } from "@/components/common";
import { About, Achievements, EngravingDesigns, Features, Hero, Portfolio, Testimonials, VectorGallery, MakePayment } from "@/components/home";
import { homeFaqs } from "@/lib/site";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <VectorGallery />
      <EngravingDesigns />
      <Features />
      <Achievements />
      <Testimonials />
      <Packages />
      <MakePayment />
      <FaqSection faqs={homeFaqs} />
      <Contact />
    </div>
  );
}
