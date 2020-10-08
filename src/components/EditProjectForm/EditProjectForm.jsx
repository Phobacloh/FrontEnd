import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { isAuthenticated, setStorage } from "../utils/localStorage";

function EditProjectForm({ projectData }) {
  console.log("---->", projectData);
  const [projectDetails, setProjectDetails] = useState({
    title: projectData.title,
    description: projectData.description,
    goal: projectData.goal,
    image: projectData.image,
    is_open: projectData.is_open,
    owner: projectData.owner,
    date_closed: projectData.date_closed.substr(0, 19),
    sample: projectData.sample,
    category: projectData.category,
  });
  const history = useHistory();
  const { id } = useParams();

  //methods
  //set state
  const handleChange = (e) => {
    const { id, value } = e.target;
    setProjectDetails((prevProjectDetails) => ({
      ...prevProjectDetails,
      [id]: value,
    }));
  };

  const postData = async () => {
    const token = window.localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}projects/${id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
        body: JSON.stringify(projectDetails),
      }
    );
    return response.json();
  };
  //get token
  const handleSubmit = (e) => {
    e.preventDefault();
    postData(isAuthenticated()).then((response) => {
      history.push(`/project/${response.id}`);
    });
  };
  //template
  return (
    <div className="form">
      <form>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            value={projectDetails.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description"></label>
          <input
            type="text"
            id="description"
            value={projectDetails.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="goal"></label>
          <input
            type="number"
            id="goal"
            value={projectDetails.goal}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image"></label>
          <input
            type="url"
            id="image"
            value={projectDetails.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date_closed"></label>
          <input
            type="datetime-local"
            id="date_closed"
            value={projectDetails.date_closed}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="sample"></label>
          <textarea
            id="sample"
            value={projectDetails.sample}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category"></label>
          <select
            type="select"
            id="category"
            value={projectDetails.category}
            onChange={handleChange}
          >
            <option value="Fantasy">Fantasy </option>
            <option value="Graphic Novels & Comics">
              Graphic Novels & Comics{" "}
            </option>
            <option value="Historical Fiction">Historical Fiction</option>
            <option value="Horror">Horror </option>
            <option value="Mystery">Mystery </option>
            <option value="Non-Fiction">Non-Fiction </option>
            <option value="Poetry">Poetry </option>
            <option value="Romance">Romance </option>
            <option value="Sci-Fi">Sci-Fi </option>
            <option value="Thriller">Thriller </option>
            <option value="Young Adult">Young Adult </option>
          </select>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Update!
        </button>
      </form>
    </div>
  );
}

export default EditProjectForm;
