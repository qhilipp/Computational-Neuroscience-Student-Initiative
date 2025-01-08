import HeroSection from "./HeroSection/HeroSection";
import ProjectList from "./ProjectList/ProjectList";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ProjectList owner="qhilipp" repo="Computational-Neuroscience-Student-Initiative"/>
    </div>
  );
}