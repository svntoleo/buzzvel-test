import { SiteHeader } from "./components/site-header";
import {
  CategoriesSection,
  ContactSection,
  FeaturedCourseSection,
  FinalCtaSection,
  HeroSection,
  HowItWorksSection,
  PeopleSection,
  SiteFooter,
  TestimonialSection,
} from "./components/sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <HeroSection />
        <CategoriesSection />
        <FeaturedCourseSection />
        <HowItWorksSection />
        <TestimonialSection />
        <PeopleSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
