import { Contact, FaqSection, Packages } from "@/components/common";
import { About, Achievements, EngravingDesigns, Features, Hero, Portfolio, Testimonials, VectorGallery, MakePayment } from "@/components/home";
import { pageMetadata } from "@/lib/seo";
import { HOME_DESCRIPTION, HOME_TITLE_PART, homeFaqs } from "@/lib/site";

export const metadata = pageMetadata({
  title: HOME_TITLE_PART,
  description: HOME_DESCRIPTION,
  path: "/",
  imageAlt: "Custom patches made by Prime Graphics",
});

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
