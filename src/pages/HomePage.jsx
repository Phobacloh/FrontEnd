import React, { useState, useEffect } from "react";
import ProjectCard from "../components/projectcard/ProjectCard";
import CategoriesCard from "../components/CategoryCard/categoriesCard";

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
          id="fantasy"
          name="Fantasy"
          onClick={changeFilter}
        >
          Fantasy
        </button>
        <button
          type="button"
          id="comics"
          name="Graphic Novels & Comics"
          onClick={changeFilter}
        >
          Graphic Novels & Comics
        </button>
        <button
          type="button"
          id="historical_fiction"
          name="Historical Fiction"
          onClick={changeFilter}
        >
          Historical Fiction
        </button>
        <button type="button" id="horror" name="Horror" onClick={changeFilter}>
          Horror
        </button>
        <button
          type="button"
          id="non_fiction"
          name="Non-Fiction"
          onClick={changeFilter}
        >
          Non-Fiction
        </button>
        <button type="button" id="poetry" name="Poetry" onClick={changeFilter}>
          Poetry
        </button>
        <button
          type="button"
          id="romance"
          name="Romance"
          onClick={changeFilter}
        >
          Romance
        </button>
        <button type="button" id="scifi" name="Sci-Fi" onClick={changeFilter}>
          Sci-Fi
        </button>
        <button
          type="button"
          id="thriller"
          name="Thriller"
          onClick={changeFilter}
        >
          Thriller
        </button>
        <button
          type="button"
          id="young_adult"
          name="Young Adult"
          onClick={changeFilter}
        >
          Young Adult
        </button>
        <button
          type="button"
          id="mystery"
          name="Mystery"
          onClick={changeFilter}
        >
          Mystery
        </button>
        <button type="button" id="all" name="All" onClick={changeFilter}>
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
