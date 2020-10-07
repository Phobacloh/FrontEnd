import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/ProjectPage/ProjectPage.css";
import PledgeForm from "../components/PledgeForm/PledgeForm";
import "../components/PledgeCard/PledgeCard.css";
import DeleteProject from "../components/DeleteProject/DeleteProject";

function ProjectPage() {
  const [userData, setUserData] = useState({});
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();

  const url = `${process.env.REACT_APP_API_URL}users/${id}`;
  console.log({ url });
  useEffect(() => {
    fetch(url)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, [id]);

  const urlProject = `${process.env.REACT_APP_API_URL}projects/${id}`;
  console.log({ urlProject });
  useEffect(() => {
    fetch(urlProject)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, [id]);

  // const getProjectId = (e) => {
  //   window.localStorage.setItem("id", project.id);
  //   window.localStorage.setItem("title", project.title);
  //   console.log(projects.title);
  // };

  // const submitPledge = (event) => {
  //     getProjectId(event.target.name);
  //   }
  // };

  return (
    <div>
      <div className="project_details">
        {/* <div id="project_top"> */}
        <img className="project_image" alt="project" src={projectData.image} />
        {/* </div> */}
        <div className="project_summary_details">
          <h2>{projectData.title}</h2>
          <Link to={`/profile/${userData.id}`}>
            <h3>{projectData.owner}</h3>
          </Link>
          <p id="category_tag">{projectData.category}</p>
          <p>here{userData.id}</p>
          <p id="description_box">{projectData.description}</p>
        </div>
        <div id="project_contents">
          {/* <h3>Funding Close Date:</h3>
        <p>{projectData.date_closed}</p> */}
          <h3>Sample:</h3>
          <p id="sample_box">{projectData.sample}</p>
          <h3> Pledges:</h3>
          <div id="pledge_card">
            {/* <ul> */}
            {projectData.pledges.map((pledgeData) => {
              return (
                // <li>
                <div>
                  <Link to={`/profile/${userData.id}`}>
                    {pledgeData.supporter}
                  </Link>{" "}
                  pledged ${pledgeData.amount} to {projectData.title}
                  <br />
                  <br />
                  <div id="pledge_comment">"{pledgeData.comment}"</div>
                </div>
              );
            })}
            {/* </ul> */}
          </div>
          <PledgeForm project_id={id} />
        </div>
      </div>
      <Link to={`/edit/${id}`}>
        <p>Edit</p>
      </Link>
      <div>
        <DeleteProject />
      </div>
    </div>
  );
}

export default ProjectPage;
