import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/ProjectPage/ProjectPage.css";
import EditProjectForm from "../components/EditProjectForm/EditProjectForm";
import "../App.css";
import { isAuthenticated } from "../components/utils/localStorage";

function EditProjectPage() {
  const [projectData, setProjectData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const urlProject = `${process.env.REACT_APP_API_URL}projects/${id}`;
    fetch(urlProject)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, [id]);

  if (isAuthenticated()) {
    return projectData != null ? (
      <EditProjectForm projectData={projectData} />
    ) : (
      <h4>Loading....</h4>
    );
    // }
    // return (
    //   <Link id="nav-link" to="/login">
    //     Login
    //   </Link>
    // )
  }
}

export default EditProjectPage;
