import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/ProjectPage/ProjectPage.css";
import EditProjectForm from "../components/EditProjectForm/EditProjectForm";
import "../App.css";
import { isAuthenticated } from "../components/utils/localStorage";

function EditProjectPage() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();
  console.log({ id });

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

  if (isAuthenticated()) {
    return <EditProjectForm projectData={projectData} />;
    // }
    // return (
    //   <Link id="nav-link" to="/login">
    //     Login
    //   </Link>
    // )
  }
}

export default EditProjectPage;
