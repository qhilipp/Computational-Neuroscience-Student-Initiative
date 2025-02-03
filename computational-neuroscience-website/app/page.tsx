import ProjectList from "./ProjectList/ProjectList";
import MembersList from "./MembersList/MembersList";
import { Member } from "./MemberCard/types";

export default function Home() {
  const title = "Computational Neuroscience Student Initiative";
  const description = "The Computational Neuroscience Student Initiative is a student-led organization founded by Philipp Kathöfer and Sven Spehr at the University of Münster. Our mission is to create a collaborative space for students interested in the fascinating intersection of neuroscience and computational science.\nWe meet every two weeks to explore and discuss cutting-edge topics in computational neuroscience. During each session, one member presents a topic they have researched, sparking discussions and fostering a deeper understanding of this rapidly evolving field.";
  const members: Member[] = [
    new Member("Philipp Kathöfer", "Co-founder", "https://www.linkedin.com/in/philipp-kathöfer-22045a26a/", "https://github.com/qhilipp", "https://github.com/qhilipp.png"),
    new Member("Sven Spehr", "", ""),
    new Member("Luke Runde", "", ""),
    new Member("Simon Heinrich Hemkentokrax", "", ""),
    new Member("Leon Pfeifer", "", ""),
    new Member("Jonah David Stefani", "", ""),
    new Member("Julius Vollenbröcker", "", ""),
  ]

  return (
    <div className="flex min-h-screen flex-col gap-4 p-4 md:flex-row md:gap-8 md:p-6">
  <div className="flex flex-col gap-4 md:w-1/2">
    {/* Info Card */}
    <div className="card">
      <h1 className="mb-4 text-2xl font-bold">
        {title}
      </h1>
      <p className="mb-6 text-gray-600">
        {description}
      </p>
      <h2 className="mb-3 text-xl font-semibold">Contact</h2>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <a href="mailto:philippkathoefer@icloud.com" className="text-blue-600 hover:underline">
          philippkathoefer@icloud.com
        </a>
        <span className="text-gray-400">•</span>
        <a href="mailto:info@example.com" className="text-blue-600 hover:underline">
          info@example.com
        </a>
      </div>
    </div>

    {/* Team Members Card */}
    <div className="card">
      <h2 className="mb-4 text-xl font-semibold">Team Members</h2>
      <div className="overflow-y-auto">
        <MembersList members={members} />
      </div>
    </div>
  </div>

  {/* Projects Section - now part of main page scroll on mobile */}
  <div className="md:h-screen md:w-1/2 md:overflow-y-auto">
    <ProjectList 
      owner="qhilipp" 
      repo="Computational-Neuroscience-Student-Initiative"
    />
  </div>
</div>
  );
}