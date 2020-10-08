import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../components/ProfilePage/ProfilePage.css";
import { isAuthenticated } from "../components/utils/localStorage";
import { Link } from "react-router-dom";

// import { projectData } from "../data";
// import "../components/ProjectPage/ProjectPage.css";

function ProfilePage() {
  const { username } = useParams();
  const [userData, setUserData] = useState({});
  let user = window.localStorage.getItem("user");
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

  return userData != null ? (
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
        <span id={userData.favorite_genre}>{userData.favorite_genre}</span>
      </div>
      <div id="bio_div">
        <h2>Bio</h2>
        <p className="bio">{userData.bio}</p>
        {isAuthenticated && user === userData.username ? (
          <div>
            <div>
              <Link to={`/update/${username}`}>
                <a>Edit</a>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  ) : (
    <h4>Loading....</h4>
  );
}

export default ProfilePage;
