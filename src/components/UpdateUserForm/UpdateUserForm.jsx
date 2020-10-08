import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { isAuthenticated, setStorage } from "../utils/localStorage";

function UpdateUserForm({ userData }) {
  console.log("---->", userData);
  const [userDetails, setUserDetails] = useState({
    username: userData.username,
    email: userData.email,
    tagline: userData.tagline,
    bio: userData.bio,
    profile_pic: userData.profile_pic,
    favorite_genre: userData.favorite_genre,
  });
  const history = useHistory();
  const { username } = useParams();

  //methods
  //set state
  const handleChange = (e) => {
    const { username, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [username]: value,
    }));
  };

  const postData = async () => {
    const token = window.localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}users/${username}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
        body: JSON.stringify(userDetails),
      }
    );
    return response.json();
  };
  //get token
  const handleSubmit = (e) => {
    e.preventDefault();
    postData(isAuthenticated()).then((response) => {
      history.push(`/users/${response.username}`);
    });
  };
  //template
  return (
    <div className="form">
      <form>
        <div>
          <p>Username</p>
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            value={userDetails.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Favorite Quote</p>
          <label htmlFor="tagline"></label>
          <input
            type="text"
            id="tagline"
            value={userDetails.tagline}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Bio</p>
          <label htmlFor="bio"></label>
          <input
            type="text"
            id="bio"
            value={userDetails.bio}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Profile Picture</p>
          <label htmlFor="profile_pic"></label>
          <input
            type="url"
            id="profile_pic"
            value={userDetails.profile_pic}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>What's your favorite genre?</p>
          <label htmlFor="favorite_category"></label>
          <select
            type="select"
            id="favorite_category"
            value={userDetails.favorite_category}
            onChange={handleChange}
          >
            <option value="Fantasy">Fantasy </option>
            <option value="Graphic-Novels-and-Comics">
              Graphic Novels & Comics{" "}
            </option>
            <option value="Historical-Fiction">Historical Fiction</option>
            <option value="Horror">Horror </option>
            <option value="Mystery">Mystery </option>
            <option value="Non-Fiction">Non-Fiction </option>
            <option value="Poetry">Poetry </option>
            <option value="Romance">Romance </option>
            <option value="Sci-Fi">Sci-Fi </option>
            <option value="Thriller">Thriller </option>
            <option value="Young-Adult">Young Adult </option>
          </select>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Update!
        </button>
      </form>
    </div>
  );
}

export default UpdateUserForm;
