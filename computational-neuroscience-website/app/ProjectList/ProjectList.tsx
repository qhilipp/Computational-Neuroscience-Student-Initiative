import React from 'react';
import { styles } from './styles';
import { ProjectListProps } from './types';
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Projects</h1>
      <div className={styles.scrollContainer}>
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