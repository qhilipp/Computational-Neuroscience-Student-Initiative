import React from 'react';
import { styles } from './styles';
import { Project } from './types';

const ProjectCard: React.FC<Project> = ({
  imageUrl = "https://miro.medium.com/v2/resize:fit:1100/1*vBIWWCFLLzZzGes1HcCJOw.jpeg",
  title = "Neuronale Netze",
  description = "A fascinating exploration of neural networks",
  author = "Philipp Kathöfer"
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt="Something went wrong" className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textBackground}>
          <div className={styles.gradientOverlay} />
        </div>
        
        <div className={styles.textContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.author}>By {author}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;