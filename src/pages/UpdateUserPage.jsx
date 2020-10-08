import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../components/ProjectPage/ProjectPage.css";
import UpdateUserForm from "../components/UpdateUserForm/UpdateUserForm";
import "../App.css";
import { isAuthenticated } from "../components/utils/localStorage";

function UpdateUserPage() {
  const [userData, setUserData] = useState();
  const { username } = useParams();

  useEffect(() => {
    const urlUser = `${process.env.REACT_APP_API_URL}users/${username}`;
    fetch(urlUser)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, [username]);

  if (isAuthenticated()) {
    return userData != null ? (
      <UpdateUserForm userData={userData} />
    ) : (
      <h4>Loading....</h4>
    );
  }
}

export default UpdateUserPage;
