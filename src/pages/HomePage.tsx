import { LandingSection } from "../components/sections/LandingSection";
import { Layout } from "../components/Layout";
import { SubLandingSection } from "../components/sections/SubLandingSection";
import { DescriptionSection } from "../components/sections/DescriptionSection";
import { AboutSection } from "../components/sections/AboutSection";

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <LandingSection />
      <SubLandingSection />
      <DescriptionSection />
      <AboutSection />
    </Layout>
  );
};
