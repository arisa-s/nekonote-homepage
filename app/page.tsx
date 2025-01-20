import {
  AboutSection,
  ContactSection,
  HeroSection,
  SectionLayout,
  WorkSection,
} from "@/components/homepage";

export const SECTIONS = {
  WORK: { key: "work", component: WorkSection, title: "Work" },
  ABOUT: { key: "about", component: AboutSection, title: "About" },
  CONTACT: { key: "contact", component: ContactSection, title: "Contact" },
};

export default function Home() {
  return (
    <div className="max-w-8xl mx-auto flex flex-col min-h-screen">
      <HeroSection />
      {Object.values(SECTIONS).map(({ key, component, title }) => (
        <SectionLayout sectionKey={key} sectionTitle={title}>
          {component()}
        </SectionLayout>
      ))}
    </div>
  );
}
