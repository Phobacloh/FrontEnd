import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginForm() {
  //variables
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
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

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        console.log("this is the token", response);
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("user", credentials.username);

        if (response.token != null) {
          history.push("/");
        }
      });
    }
  };
  //template
  return (
    <div className="form">
      <form>
        <div>
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            placeholder="What's your nom de plume?"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <br></br>
        <p>Not registered yet?</p>
        <Link to="/register">Sign Up</Link>
      </form>
    </div>
  );
}

export default LoginForm;
