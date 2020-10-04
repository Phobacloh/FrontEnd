import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import { projectData } from "../data";
// import "../components/ProjectPage/ProjectPage.css";

function ProfilePage() {
  const [userData, setUserData] = useState([]);
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

  return (
    <div className="user_details">
      <h1>{userData.username} </h1>
      <img className="profile_image" alt="profile pic" src={userData.image} />
      {/* <div className="project_summary_details">
        <h2>{projectData.title}</h2>
        <h3>{projectData.owner}</h3>
        <p>{projectData.category}</p>
        <p>{projectData.description}</p>
      </div>
      <h3>Funding Close Date:</h3>
      <p>{projectData.date_closed}</p>
      <h3> Pledges:</h3>
      <h3>Sample:</h3>
      <p>{projectData.sample}</p>
      <h3>{`Status: ${projectData.is_open}`}</h3> */}
    </div>
  );
}

export default ProfilePage;
