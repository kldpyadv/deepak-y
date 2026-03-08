export const dynamic = "force-dynamic";

import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { MadLibsBio } from "@/components/about";
import { ImpactStats } from "@/components/impact-stats";
import { Skills } from "@/components/skills";
import { ExperienceTimeline } from "@/components/experience";
import { HomeBlogSection } from "@/components/home-blog-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      <Hero />
      <Projects />
      <MadLibsBio />
      <ImpactStats />
      <Skills />
      <ExperienceTimeline />
      <HomeBlogSection />
      <Footer />
    </main>
  );
}
