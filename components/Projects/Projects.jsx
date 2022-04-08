import React from 'react';

import { projectsData } from '../../data/projects/data';
import Project from '../Project/Project';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = projectsData.slice(0, 2);

  return (
    <div className={styles.projects}>
      <div className="container">
        <div className="section-header">
          <h1 className="heading">Projects</h1>
        </div>
        <div className={styles.projectsWrapper}>
          {projects.map(project => (
            <Project key={project.index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
