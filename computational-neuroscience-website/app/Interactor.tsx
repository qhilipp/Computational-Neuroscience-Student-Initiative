import { Project } from './ProjectCard/types';

class Interactor {
  private owner: string;
  private repo: string;
  private apiUrl: string;

  constructor(owner: string, repo: string) {
    this.owner = owner;
    this.repo = repo;
    this.apiUrl = `https://api.github.com/repos/${this.owner}/${this.repo}/contents/`;
  }

  private async fetchConfigFileContent(folderName: string): Promise<{ description: string; url: string; author: string }> {
    const configUrl = `${this.apiUrl}${folderName}/config.json`;

    try {
      const response = await fetch(configUrl);
      if (!response.ok) {
        throw new Error(`Fehler beim Laden von ${configUrl}: ${response.status} ${response.statusText}`);
      }

      const fileData: { content: string } = await response.json();
      const decodedContent = atob(fileData.content);
      const config = JSON.parse(decodedContent);

      return {
        description: config.description || "Keine Beschreibung verfügbar",
        url: config.url || "https://github.com/qhilipp/Computational-Neuroscience-Student-Initiative",
        author: config.author || "Anonym",
      };
    } catch (err) {
      console.warn(`Warnung: Konnte config.json in ${folderName} nicht laden.`, err);
      return {
        description: "Keine Beschreibung verfügbar",
        url: "https://github.com/qhilipp/Computational-Neuroscience-Student-Initiative",
        author: "Anonym",
      };
    }
  }

  async getProjects(): Promise<Project[]> {
    try {
      const response = await fetch(this.apiUrl);
      
      if (!response.ok) {
        throw new Error(`Fehler: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      console.log(data);

      //const projects = await Promise.all(
      //  data
      //    .map(async (item) => {
      //      return new Project({title: item.name});
      //    })
      //);
      return []
      //return projects.filter((project) => project !== null);
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  }

}

export default Interactor;
