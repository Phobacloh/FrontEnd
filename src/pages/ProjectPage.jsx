import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { projectData } from "../data";
import "../components/ProjectPage/ProjectPage.css";

function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const [userData, setUserData] = useState([]);
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

  const urlUser = `${process.env.REACT_APP_API_URL}users/${id}`;
  console.log({ urlUser });
  useEffect(() => {
    fetch(urlUser)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, [id]);
  console.log(projectData);
  console.log(userData);

  return (
    <div className="project_details">
      <img className="project_image" alt="project" src={projectData.image} />
      <div className="project_summary_details">
        <h2>{projectData.title}</h2>
        <Link to={`/profile/${userData.id}`}>
          <h3>{projectData.owner}</h3>{" "}
        </Link>
        <p>{projectData.category}</p>
        <p>{projectData.description}</p>
      </div>
      <h3>Funding Close Date:</h3>
      <p>{projectData.date_closed}</p>
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
      <h3>Sample:</h3>
      <p>{projectData.sample}</p>
    </div>
  );
}

export default ProjectPage;
