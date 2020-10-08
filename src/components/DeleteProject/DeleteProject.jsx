import React from "react";
import { useHistory, useParams } from "react-router-dom";

function DeleteProject() {
  const history = useHistory();
  const { id } = useParams();

  //   useEffect(() => {
  //     setProjectDetails({});
  //   }, [projectData]);
  //   //methods
  //   //set state
  //   const handleChange = (e) => {
  //     const { id, value } = e.target;
  //     setProjectDetails((prevProjectData) => ({
  //       ...prevProjectData,
  //       [id]: value,
  //     }));
  //   };
  const deleteData = async () => {
    const token = window.localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}projects/${id}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      }
    );
    // return response.json();
  };
  //get token
  const handleSubmit = (e) => {
    e.preventDefault();
    deleteData().then((response) => {
      //   clearStorage();
      //   console.log(response);
      history.push(`/`);
    });
  };
  //template
  return (
    <div>
      <button type="submit" onClick={handleSubmit}>
        Delete
      </button>
    </div>
  );
}

export default DeleteProject;
