import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import token from ".utils/getToken/token";
import "../../App.css";
import ProjectData from "../utils/projectData";

// import { Link } from "react-router-dom";

function PledgeForm(props) {
  //variables
  const { project_id } = props;
  const projectData = { ProjectData };

  const token = window.localStorage.getItem("token");
  const username = window.localStorage.getItem("user");
  console.log(token);
  console.log(username);
  console.log(projectData);
  console.log(project_id);

  const [pledge, setPledge] = useState({
    amount: "",
    comment: "",
    anonymous: false,
    project: project_id,
    supporter: username,
  });
  const history = useHistory();

  //method
  const handleChange = (e) => {
    console.log(e);
    const { id, value } = e.target;
    console.log("---->", id, value);
    setPledge((prevPledge) => ({
      ...prevPledge,
      [id]: value,
    }));
  };

  const postDataPledge = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`,
      },
      body: JSON.stringify(pledge),
    });
    console.log(response.status);
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pledge.amount);
    console.log(pledge.supporter);
    console.log(pledge.comment);
    console.log(pledge.project_id);

    pledge.anonymous = false;
    pledge.project_id = project_id;
    if (pledge.amount) {
      postDataPledge().then((response) => {
        console.log(response);
        // window.localStorage.setItem("title", credentials.title);

        // if (response.token != null) {
        history.push("/project");
        // }
      });
    }
  };
  //template
  return (
    <div className="form">
      <h1>Love it so far?</h1>
      <p>Help them get off the ground and publish their first novel!</p>
      <form>
        <div>
          <label htmlFor="amount"></label>
          <input
            type="number"
            id="amount"
            placeholder="Amount"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="comment"></label>
          <textarea
            type="textarea"
            id="comment"
            placeholder="Comment"
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Pledge!
        </button>
      </form>
    </div>
  );
}

export default PledgeForm;
