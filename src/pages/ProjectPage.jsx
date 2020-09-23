import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { projectData } from "../data";
import "../components/ProjectPage/ProjectPage.css";

function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();

  const url = `${process.env.REACT_APP_API_URL}projects/${id}`;
  console.log({ url });
  useEffect(() => {
    fetch(url)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, [id]);
  return (
    <div>
      <img src={projectData.image} />
      <h2>{projectData.title}</h2>
      <h3>{projectData.owner}</h3>
      <h3>Genre: {projectData.category}</h3>
      <p>{projectData.description}</p>
      <h3>Funding Close Date: {projectData.date_closed}</h3>

      <h3> Pledges:</h3>
      <ul>
        {projectData.pledges.map((pledgeData) => {
          return (
            <li>
              {pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
      <h3>Sample: {projectData.sample}</h3>
      <h3>{`Status: ${projectData.is_open}`}</h3>
    </div>
  );
}

export default ProjectPage;
