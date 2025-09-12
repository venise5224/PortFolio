import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

const HomePage = () => {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <Hero />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
};

export default HomePage;
