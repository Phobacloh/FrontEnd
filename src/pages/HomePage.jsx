import React, { useState, useEffect } from "react";
import ProjectCard from "../components/projectcard/ProjectCard";

// import Logo from "../components/Logo";

// import "./ProjectCard.css";

function HomePage() {
  // Variables
  const [projectList, setProjectList] = useState([]);
  const [filter, setFilter] = useState();

  //methods

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  //templates

  const changeFilter = (event) => {
    if (event.target.name === "All") {
      setFilter();
    } else {
      setFilter(event.target.name);
    }
  };

  return (
    <div>
      <div id="category_buttons">
        <button
          type="button"
          id="Fantasy"
          name="Fantasy"
          onClick={changeFilter}
        >
          Fantasy
        </button>
        <button
          type="button"
          id="Graphic-Novels-and-Comics"
          name="Graphic-Novels-and-Comics"
          onClick={changeFilter}
        >
          Graphic Novels & Comics
        </button>
        <button
          type="button"
          id="Historical-Fiction"
          name="Historical-Fiction"
          onClick={changeFilter}
        >
          Historical Fiction
        </button>
        <button type="button" id="Horror" name="Horror" onClick={changeFilter}>
          Horror
        </button>
        <button
          type="button"
          id="Non-Fiction"
          name="Non-Fiction"
          onClick={changeFilter}
        >
          Non-Fiction
        </button>
        <button type="button" id="Poetry" name="Poetry" onClick={changeFilter}>
          Poetry
        </button>
        <button
          type="button"
          id="Romance"
          name="Romance"
          onClick={changeFilter}
        >
          Romance
        </button>
        <button type="button" id="Sci-Fi" name="Sci-Fi" onClick={changeFilter}>
          Sci-Fi
        </button>
        <button
          type="button"
          id="Thriller"
          name="Thriller"
          onClick={changeFilter}
        >
          Thriller
        </button>
        <button
          type="button"
          id="Young-Adult"
          name="Young-Adult"
          onClick={changeFilter}
        >
          Young Adult
        </button>
        <button
          type="button"
          id="Mystery"
          name="Mystery"
          onClick={changeFilter}
        >
          Mystery
        </button>
        <button type="button" id="All" name="All" onClick={changeFilter}>
          All
        </button>
      </div>
      <div id="project-list">
        {projectList.reduce((total, projectData, key) => {
          if (filter != null && projectData.category !== filter) return total;
          total.push(<ProjectCard key={key} projectData={projectData} />);
          return total;
        }, [])}
      </div>
      {/* <div id="project-list">
        {projectList.map((projectData, key) => {
          return <ProjectCard key={key} projectData={projectData} />;
        })}
      </div> */}
    </div>
  );
}

export default HomePage;
