import React from 'react';
import { Project } from './types';
import { styles } from './styles';

const ProjectCard: React.FC<Project> = ({
  imageUrl,
  title,
  description,
  author,
  url,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={imageUrl}
          alt="Something went wrong"
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textBackground}>
          <div className={styles.gradientOverlay} />
        </div>
        <div className={styles.textContent}>
          <a href={url} className={styles.title}>{title}</a>
          <p className={styles.description}>{description}</p>
          <p className={styles.author}>By {author}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
