import { Contact, Packages } from "@/components/common";
import { About, Achievements, EngravingDesigns, Features, Hero, Portfolio, Testimonials, VectorGallery ,MakePayment } from "@/components/home";

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
      <Contact />
    </div>
  );
}
