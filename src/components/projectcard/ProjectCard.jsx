import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
  const { projectData } = props;
  return (
    <div>
      <div className="project-card">
        <Link to={`/project/${projectData.id}`}>
          <img alt="" src={projectData.image} />
          <h3>{projectData.title}</h3>
          <span className="category_tag">{projectData.category}</span>
          <p>{projectData.description}</p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
