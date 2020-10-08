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
          <div className="card_text">
            <h3>{projectData.title}</h3>
            <span id={projectData.category}>{projectData.category}</span>
            <p>{projectData.owner}</p>
            <p>{projectData.description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
