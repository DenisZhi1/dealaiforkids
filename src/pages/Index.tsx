import { HeroSection } from "@/components/HeroSection";
import { GroupsSection } from "@/components/GroupsSection";
import { ProgramSection } from "@/components/ProgramSection";
import { UniquenessSection } from "@/components/UniquenessSection";
import { RequirementsSection } from "@/components/RequirementsSection";
import { PricingSection } from "@/components/PricingSection";
import { EnrollSection } from "@/components/EnrollSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* SEO Meta Tags - Set in document head */}
      <HeroSection />
      <GroupsSection />
      <ProgramSection />
      <UniquenessSection />
      <RequirementsSection />
      <PricingSection />
      <EnrollSection />
    </main>
  );
};

export default Index;