import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/projectcard/ProjectCard";

function ProjectData() {
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
  }, []);

  {
    projectList.map((projectData, key) => {
      return <ProjectCard key={key} projectData={projectData} />;
    });
  }
}
export default ProjectData;
