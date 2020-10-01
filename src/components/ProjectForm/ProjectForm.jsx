import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import token from ".utils/getToken/token";
import "./ProjectForm.css";

// import { Link } from "react-router-dom";

function ProjectForm() {
  //variables

  const token = window.localStorage.getItem("token");

  const [credentials, setCredentials] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    date_closed: "2020-09-30T10:41:55.213982Z",
    sample: "",
    category: "Mystery",
    is_open: false,
  });
  const history = useHistory();

  //method
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postDataProject = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(credentials),
    });
    console.log(response.status);
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.title
      //   credentials.description &&
      //   credentials.goal &&
      //   credentials.image &&
      //   credentials.is_open &&
      //   credentials.date_closed &&
      //   credentials.sample &&
      //   credentials.category
    ) {
      postDataProject().then((response) => {
        window.localStorage.setItem("token", response.token);
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
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Description"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="goal">Goal amount</label>
        <input
          type="number"
          id="goal"
          placeholder="How much do you want to raise?"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="url"
          id="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date_closed">Closing Date:</label>
        <input
          type="date"
          id="date_closed"
          placeholder="Closing Date"
          //   onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="sample">Sample:</label>
        <textarea
          type="textarea"
          id="sample"
          placeholder="Give us a taste of what's to come to get sponsors!"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="is_open">Open for donations?:</label>
        {/* <select type="select" id="is_open" onChange={handleChange}> */}
        <select type="select" id="is_open">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <div>
        <label htmlFor="category">Genre:</label>
        <select
          type="select"
          id="genre"
          placeholder="Genre!"
          //   onChange={handleChange}
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
        Publish!
      </button>
    </form>
  );
}

export default ProjectForm;
