import ProjectList from "./ProjectList/ProjectList";
import MembersList from "./MembersList/MembersList";
import { Member } from "./MemberCard/types";

export default function Home() {
  let title = "Computational Neuroscience Student Initiative";
  let description = "The Computational Neuroscience Student Initiative is a student-led organization founded by Philipp Kathöfer and Sven Spehr at the University of Münster. Our mission is to create a collaborative space for students interested in the fascinating intersection of neuroscience and computational science.\nWe meet every two weeks to explore and discuss cutting-edge topics in computational neuroscience. During each session, one member presents a topic they have researched, sparking discussions and fostering a deeper understanding of this rapidly evolving field.";
  let members: Member[] = [
    new Member("Philipp Kathöfer", "Co-founder", "https://www.linkedin.com/in/philipp-kathöfer-22045a26a/", "https://github.com/qhilipp", "https://github.com/qhilipp.png"),
    new Member("Sven Spehr", "", ""),
    new Member("Luke Runde", "", ""),
    new Member("Simon Heinrich Hemkentokrax", "", ""),
    new Member("Leon Pfeifer", "", ""),
    new Member("Jonah David Stefani", "", ""),
    new Member("Julius Vollenbröcker", "", ""),
  ]

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 h-screen"> {/* h-[600px] durch h-screen ersetzt */}
      <div className="md:w-1/2 flex flex-col gap-6 min-h-0"> {/* min-h-0 hinzugefügt */}
        {/* Obere Card nimmt nur benötigten Platz */}
        <div className="card" style={{flexShrink: "0"}}> {/* flex-1 entfernt, shrink-0 hinzugefügt */}
          <h1>
            {title}
          </h1>
          <p className="description" style={{marginBottom: "20px"}}>
            {description}
          </p>
          <h2>Contact</h2>
          <div className="flex items-center gap-2">
            <a href="mailto:philippkathoefer@icloud.com">philippkathoefer@icloud.com</a>
            <span>•</span>
            <a href="mailto:info@example.com">info@example.com</a>
          </div>
        </div>
        {/* Untere Card nimmt restlichen Platz */}
        <div className="card" style={{flex: 1}}> {/* flex-1 und overflow-auto hinzugefügt */}
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