import HeroSection from "./HeroSection/HeroSection";
import ProjectList from "./ProjectList/ProjectList";
import { Project } from "./ProjectCard/types";

const projects: Project[] = [
    {
      imageUrl: "https://psychology.berkeley.edu/sites/default/files/graduate-program/shutterstock_1120901825_2.jpg",
      title: "Smart Home Dashboard",
      description: "Ein modernes Dashboard zur Steuerung von IoT-Geräten im Haus, entwickelt mit React und TypeScript.",
      author: "Sven Spehr"
    },
    {
      imageUrl: "https://miro.medium.com/v2/resize:fit:1100/1*vBIWWCFLLzZzGes1HcCJOw.jpeg",
      title: "Fitness Tracker App",
      description: "Mobile Anwendung zum Tracken von Workouts und Ernährung mit personalisierten Empfehlungen.",
      author: "Philipp Kathöfer"
    },
    {
      imageUrl: "https://www.susla.edu/assets/susla/images/Biology.jpg",
      title: "E-Commerce Platform",
      description: "Skalierbare Online-Shopping-Plattform mit integriertem Zahlungssystem und Inventarverwaltung.",
      author: "Lisa Meyer"
    },
    {
      imageUrl: "/api/placeholder/400/300",
      title: "Projekt Management Tool",
      description: "Kollaboratives Tool für agile Teams mit Kanban-Board und Zeiterfassung.",
      author: "Michael Bauer"
    }
  ];

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ProjectList projects={projects}/>
    </div>
  );
}