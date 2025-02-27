import ProjectList from "./ProjectList/ProjectList";
import MembersList from "./MembersList/MembersList";
import { Member } from "./MemberCard/types";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  const title = "Computational Neuroscience Student Initiative";
  const description = "The Computational Neuroscience Student Initiative is a student-led organization at the University of Münster. Our mission is to create a collaborative space for students interested in the fascinating intersection of neuroscience and computational science.\nWe meet every two weeks to explore and discuss cutting-edge topics in computational neuroscience. During each session, one member presents a topic they have researched, sparking discussions and fostering a deeper understanding of this rapidly evolving field.\n\nContact us at ";
  const members: Member[] = [
    new Member("Philipp Kathöfer", "Co-founder", "https://www.linkedin.com/in/philipp-kathöfer-22045a26a/", "https://github.com/qhilipp", "https://stackoverflow.com/users/15136297/philipp-kathöfer", "https://github.com/qhilipp.png"),
    new Member("Sven Spehr", "", ""),
    new Member("Luke Runde", "", ""),
    new Member("Simon Heinrich Hemkentokrax", "", ""),
    new Member("Leon Pfeifer", "", ""),
    new Member("Jonah David Stefani", "", ""),
    new Member("Julius Vollenbröcker", "", ""),
  ]

  return (
    <div className="h-screen flex overflow-hidden">
      <div className="flex-1 flex md:w-1/2 p-1">
        <div className="flex flex-col gap-2 w-full">
          {/* Info Card */}
          <div className="card p-4 shrink-0">
            <h1 className="mb-4 text-2xl font-bold">
              {title}
            </h1>
            <p style={{ color: '#888888' }}>
              {description}
              <a href="mailto:philippkathoefer@icloud.com" className="text-[#bbbbbb] hover:underline">
                philippkathoefer@icloud.com
              </a>
              <span className="mx-1">•</span>
              <a href="mailto:spehr.sv@gmail.com" className="text-[#bbbbbb] hover:underline">
                spehr.sv@gmail.com
              </a>
            </p>
          </div>

          {/* Team Members Card */}
          <div className="card flex-grow min-h-0 flex flex-col">
            <h2 className="p-4 text-2xl font-semibold shrink-0">Team Members</h2>
            <div className="flex-grow min-h-0 p-4">
              <MembersList members={members} />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex-1 md:w-1/2 p-1">
        <ProjectList 
          owner="qhilipp" 
          repo="Computational-Neuroscience-Student-Initiative"
        />
      </div>
    </div>
  );
}