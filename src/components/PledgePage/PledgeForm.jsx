import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import token from ".utils/getToken/token";
import "../../App.css";

// import { Link } from "react-router-dom";

function PledgeForm() {
  //variables

  const token = window.localStorage.getItem("token");
  console.log(token);

  const [pledge, setPledge] = useState({
    amount: "",
    comment: "",
    anonymous: "",
    supporter: "",
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

    // project.category = "Mystery";
    // project.date_closed = "2020-09-19T13:35:00Z";
    // project.title = Book
    // project.goal = 300
    // project.image = ""

    pledge.anonymous = false;
    if (
      pledge.amount
      //   project.description &&
      //   project.goal &&
      //   project.image &&
      //   project.is_open &&
      //   project.date_closed &&
      //   project.sample &&
      //   project.category
    ) {
      postDataPledge().then((response) => {
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
      <h1>How much do you pledge?</h1>
      <p>
        Love what this author has to offer? Help them get off the ground and
        publish their first novel!
      </p>
      <form>
        <div>
          <label htmlFor="project_id"></label>
          <input
            type="number"
            id="project_id"
            placeholder="What are you pledging to?"
            onChange={handleChange}
          />
        </div>
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
          <input
            type="text"
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
