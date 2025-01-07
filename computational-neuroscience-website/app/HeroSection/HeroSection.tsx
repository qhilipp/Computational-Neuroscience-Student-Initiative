import React from 'react';
import { styles } from './styles';
import { HeroProps } from './types';

const HeroSection: React.FC<HeroProps> = ({ 
  imageUrl = "https://neurosciencenews.com/files/2023/05/neuroscience-news-week.jpg",
  title = "Computational\nNeuroscience\nStudent\nInitiative",
  description = "The Computational Neuroscience Student Initiative is a student-led organization founded by Philipp Kathöfer and Sven Spehr at the University of Münster. Our mission is to create a collaborative space for students interested in the fascinating intersection of neuroscience and computational science.\nWe meet every two weeks to explore and discuss cutting-edge topics in computational neuroscience. During each session, one member presents a topic they have researched, sparking discussions and fostering a deeper understanding of this rapidly evolving field."
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img 
          src={imageUrl}
          alt="Neuroscience"
          className={styles.image}
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.textSection}>
          <div className={styles.gradientOverlay}>
            <div className={styles.blurContainer} />
          </div>

          <div className={styles.textContent}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        
        <div className={styles.emptySpace} />
      </div>
    </div>
  );
};

export default HeroSection;