import React from "react";
import { oneProject } from "../data";
import "../components/ProjectPage/ProjectPage.css";

function ProjectPage() {
  return (
    <div>
      <img src={oneProject.image} />
      <h2>{oneProject.title}</h2>
      <h3>{oneProject.owner}</h3>
      <h3>Genre: {oneProject.category}</h3>
      <p>{oneProject.description}</p>
      <h3>Funding Close Date: {oneProject.date_closed}</h3>

      <h3> Pledges:</h3>
      <ul>
        {oneProject.pledges.map((pledgeData, key) => {
          return (
            <li>
              {pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
      <h3>Sample: {oneProject.sample}</h3>
      <h3>{`Status: ${oneProject.is_open}`}</h3>
    </div>
  );
}

export default ProjectPage;
