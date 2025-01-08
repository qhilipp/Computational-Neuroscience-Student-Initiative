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

  async getProjects(): Promise<Project[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`Fehler: ${response.status} ${response.statusText}`);
      }

      const data: Array<{ type: string; name: string; html_url: string }> = await response.json();

      return data
        .filter((item) => item.type === "dir")
        .map((item) => (new Project({title: item.name, description: item.html_url})));
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  }
}

export default Interactor;
