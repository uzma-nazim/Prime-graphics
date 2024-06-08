import { Contact, Packages } from "@/components/common";
import { About, Achievements, EngravingDesigns, Features, Hero, Portfolio, VectorGallery ,MakePayment } from "@/components/home";

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
      <Packages />
      <MakePayment />
      <Contact />
    </div>
  );
}
