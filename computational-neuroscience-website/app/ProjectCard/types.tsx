export class Project {
  imageUrl: string;
  title: string;
  description: string;
  author: string;
  url: string;

  constructor({
    imageUrl = "https://github.com/qhilipp/Computational-Neuroscience-Student-Initiative/blob/main/Machine%20Learning/thumbnail.jpg",
    title = "Untitled Project",
    description = "No description",
    author = "Anonymous",
    url = "https://github.com/qhilipp/Computational-Neuroscience-Student-Initiative"
  }: Partial<Project> = {}) {
    this.imageUrl = imageUrl + "?raw=true";
    this.title = title;
    this.description = description;
    this.author = author;
    this.url = url;
  }
}