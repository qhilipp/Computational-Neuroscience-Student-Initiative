import ProjectList from "./ProjectList/ProjectList";
import MembersList from "./MembersList/MembersList";
import { Member } from "./MembersList/types";

export default function Home() {
  let title = "Computational Neuroscience Student Initiative";
  let description = "The Computational Neuroscience Student Initiative is a student-led organization founded by Philipp Kathöfer and Sven Spehr at the University of Münster. Our mission is to create a collaborative space for students interested in the fascinating intersection of neuroscience and computational science.\nWe meet every two weeks to explore and discuss cutting-edge topics in computational neuroscience. During each session, one member presents a topic they have researched, sparking discussions and fostering a deeper understanding of this rapidly evolving field.";
  let members: Member[] = [
    new Member("Philipp Kathöfer", "", ""),
    new Member("Sven Spehr", "", ""),
    new Member("Luke Runde", "", ""),
    new Member("Simon Heinrich Hemkentokrax", "", ""),
    new Member("Leon Pfeifer", "", ""),
    new Member("Jonah David Stefani", "", ""),
    new Member("Julius Vollenbröcker", "", ""),
  ]

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 h-[600px]">
      <div className="md:w-1/2 flex flex-col gap-6">
        <div className="bg-gray-800 rounded-lg p-6 flex-1">
          <h1>
            {title}
          </h1>
          <p>
            {description}
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h2>Team Members</h2>
          <MembersList members={members} />
        </div>
      </div>
      
      <div className="md:w-1/2 overflow-hidden">
        <ProjectList owner="qhilipp" repo="Computational-Neuroscience-Student-Initiative"/>
      </div>
    </div>
  );
}