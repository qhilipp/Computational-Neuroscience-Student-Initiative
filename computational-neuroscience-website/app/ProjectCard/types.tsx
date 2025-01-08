export class Project {
  imageUrl: string;
  title: string;
  description: string;
  author: string;

  constructor({
    imageUrl = "https://via.placeholder.com/150",
    title = "Untitled Project",
    description = "No description",
    author = "Anonymous",
  }: Partial<Project> = {}) {
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.author = author;
  }
}