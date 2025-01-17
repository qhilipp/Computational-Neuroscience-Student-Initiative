import React from 'react';
import { styles } from './styles';
import { ProjectListProps } from './types';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Project } from '../ProjectCard/types';
import Interactor from '../Interactor';

const ProjectList: React.FC<ProjectListProps> = async ({ owner, repo }) => {

  const interactor = new Interactor(owner, repo);

  let projects: Project[] = [];
  let error: string | null = null;

  try {
    projects = await interactor.getProjects();
  } catch (err) {
    error = JSON.stringify(err);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Projects</h1>
      <div className={styles.scrollContainer}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {projects.map((project, index) => (
          <div key={index} className={styles.cardWrapper}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;