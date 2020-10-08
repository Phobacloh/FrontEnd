import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import token from ".utils/getToken/token";
import "../../App.css";

// import { Link } from "react-router-dom";

function ProjectForm() {
  //variables

  const token = window.localStorage.getItem("token");
  console.log(token);

  const [project, setProject] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    date_closed: "",
    sample: "",
    category: "",
  });
  const history = useHistory();

  //method
  const handleChange = (e) => {
    console.log(e);
    const { id, value } = e.target;
    console.log("---->", id, value);
    setProject((prevProject) => ({
      ...prevProject,
      [id]: value,
    }));
  };

  const postDataProject = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`,
      },
      body: JSON.stringify(project),
    });
    console.log(response.status);
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(project.date_closed);
    console.log(project.title);
    console.log(project.category);
    project.is_open = true;
    if (project.title) {
      postDataProject().then((response) => {
        console.log(response);
        // window.localStorage.setItem("title", credentials.title);

        // if (response.token != null) {
        history.push("/projects");
        // }
      });
    }
  };

  //template
  return (
    <div className="form">
      <h1>Show us what you've got!</h1>
      <p>
        Here's your opportunity to get booked! Tell us all about what you've
        written and start gaining your adoring fans
      </p>
      <form>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description"></label>
          <input
            type="text"
            id="description"
            placeholder="Description"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="goal"></label>
          <input
            type="number"
            id="goal"
            placeholder="How much money do you hope to raise?"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image"></label>
          <input
            type="url"
            id="image"
            placeholder="Image URL"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date_closed"></label>
          <input
            type="datetime-local"
            id="date_closed"
            placeholder="Closing Date"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="sample"></label>
          <textarea
            type="text"
            id="sample"
            placeholder="Give us your most tantilizing chapter to get sponsors!"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category"></label>
          <select
            type="select"
            id="category"
            placeholder="Genre!"
            onChange={handleChange}
          >
            <option value="Fantasy">Fantasy </option>
            <option value="Graphic-Novels-&-Comics">
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
          Publish!
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;
