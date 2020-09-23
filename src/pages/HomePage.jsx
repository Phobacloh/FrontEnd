import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/projectcard/ProjectCard";
// import Logo from "../components/Logo";

// import "./ProjectCard.css";

function HomePage() {
  // Variables
  const [projectList, setProjectList] = useState([]);

  //methods
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
    // setProjectList(allProjects);
  }, []);

  //templates

  return (
    <div id="project-list">
      {projectList.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
      })}
    </div>
  );
}

export default HomePage;
