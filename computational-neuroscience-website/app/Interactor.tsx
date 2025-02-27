import { Project } from './ProjectCard/types';

class Interactor {
  private owner: string;
  private repo: string;
  private apiUrl: string;

  constructor(owner: string, repo: string) {
    this.owner = owner;
    this.repo = repo;
    this.apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/`;
  }

  private async fetchWithGitHub(url: string) {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API Fehler: ${response.status} ${response.statusText}`);
    }
    
    return response;
  }

  private async fetchConfigFileContent(folderName: string): Promise<{ description: string; url: string; author: string }> {
    const configUrl = `${this.apiUrl}${folderName}/config.json`;

    try {
      const response = await this.fetchWithGitHub(configUrl);
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
      const response = await this.fetchWithGitHub(this.apiUrl);
      const data: Array<{ type: string; name: string; url: string }> = await response.json();

      const projects = await Promise.all(
        data
          .filter((item) => item.type === "dir")
          .map(async (item) => {
            try {
              const config = await this.fetchConfigFileContent(item.name);
              return new Project({
                title: item.name,
                description: config.description,
                url: config.url,
                author: config.author,
              });
            } catch (err) {
              console.warn(`Warnung: Fehler beim Verarbeiten von ${item.name}`, err);
              return new Project({
                title: item.name,
                description: "Keine Beschreibung verfügbar",
                url: `https://github.com/${this.owner}/${this.repo}/tree/main/${item.name}`,
                author: "Anonym"
              });
            }
          })
      );

      return projects;
    } catch (err) {
      console.error('Fehler beim Laden der Projekte:', err);
      throw err;
    }
  }

}

export default Interactor;
