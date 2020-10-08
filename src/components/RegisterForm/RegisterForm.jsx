import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function RegisterForm() {
  //variables
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
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
  //   const postRegister = async () => {
  //     const response = await fetch(`${process.env.REACT_APP_API_URL}user/`, {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(credentials),
  //     });
  //     return response.json();
  //   };

  const postDataRegister = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}users/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postDataRegister().then((response) => {
        console.log(response);
        window.localStorage.setItem("user", response.username);
        history.push("/login");
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
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
