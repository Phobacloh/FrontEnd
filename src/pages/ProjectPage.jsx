import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/ProjectPage/ProjectPage.css";
import PledgeForm from "../components/PledgeForm/PledgeForm";
import "../components/PledgeCard/PledgeCard.css";
import { isAuthenticated } from "../components/utils/localStorage";

let user = window.localStorage.getItem("user");
console.log(user);

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

  return projectData != null ? (
    <div className="project_details">
      {/* <div id="project_top"> */}
      <img className="project_image" alt="project" src={projectData.image} />
      {/* </div> */}
      <div className="project_summary_details">
        <h2>{projectData.title}</h2>
        <Link to={`/profile/${projectData.owner}`}>
          <h3>{projectData.owner}</h3>
        </Link>
        <div id={projectData.category}>{projectData.category}</div>
        <h4 id="category_tag">{projectData.category}</h4>
        <p id="description_box">{projectData.description}</p>
      </div>
      <div id="project_contents">
        {/* <h3>Funding Close Date:</h3>
        <p>{projectData.date_closed}</p> */}
        <h3>Sample:</h3>
        <div id="sample_box">
          {projectData.sample
            ? projectData.sample.split("\n").map((t, i) => <p key={i}>{t}</p>)
            : null}
          {isAuthenticated && user === projectData.owner ? (
            <div>
              <div>
                <Link to={`/edit/${id}`}>
                  <a>Edit</a>
                </Link>
              </div>
              <div>
                <Link to={`/delete/${id}`}>
                  <a>Delete</a>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <h3> Pledges:</h3>
        <div>
          {projectData.pledges.map((pledgeData) => {
            return (
              <div id="pledge_card">
                <Link to={`/profile/${projectData.owner}`}>
                  {pledgeData.supporter}
                </Link>{" "}
                pledged ${pledgeData.amount} to {projectData.title}
                <br />
                <br />
                <div id="pledge_comment">
                  "{pledgeData.comment}"
                  <br />-{pledgeData.supporter}
                </div>
              </div>
            );
          })}
        </div>
        <PledgeForm project_id={id} />
      </div>
    </div>
  ) : (
    <h4>Loading....</h4>
  );
}
export default ProjectPage;
