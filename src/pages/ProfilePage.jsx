import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../components/ProfilePage/ProfilePage.css";

// import { projectData } from "../data";
// import "../components/ProjectPage/ProjectPage.css";

function ProfilePage() {
  const { username } = useParams();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    tagline: "",
    bio: "",
    profile_pic: "",
    favorite_genre: "",
  });

  const url = `${process.env.REACT_APP_API_URL}users/${username}`;
  console.log({ url });
  useEffect(() => {
    fetch(url)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, [username]);

  return (
    <div className="user_details">
      <h1 className="username_profile">{userData.username} </h1>
      <img
        className="profile_pic"
        alt="profile pic"
        src={userData.profile_pic}
      />
      <div className="tagline_box">
        <p className="tagline">"{userData.tagline}"</p>
      </div>
      <div className="category_profile">
        <h2>Favorite Genre</h2>
        <p>{userData.favorite_genre}</p>
      </div>
      <div id="bio_div">
        <h2>Bio</h2>
        <p className="bio">{userData.bio}</p>
        {/* <p className="bio">{userData.id}</p> */}
      </div>
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
