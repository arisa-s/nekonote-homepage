import { HeroSection, SectionLayout } from "@/components/homepage";
import { SECTIONS } from "@/constants/homepage";

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
