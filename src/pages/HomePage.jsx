import React, { useState, useEffect } from "react";
import ProjectCard from "../components/projectcard/ProjectCard";
import CategoriesCard from "../components/CategoryCard/categoriesCard";

// import Logo from "../components/Logo";

// import "./ProjectCard.css";

function HomePage() {
  // Variables
  const [projectList, setProjectList] = useState([]);
  const [categoryList, setcategoryList] = useState([]);

  //methods

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);

        // console.log(data);

        const categories = data.map((cat) => cat.category);

        // console.log(categories);

        setcategoryList(categories);
        // console.log(setcategoryList);
      });
    // setProjectList(allProjects);
  }, []);

  //templates

  return (
    <div>
      <div id="category-list">
        {categoryList.map((categories, key) => {
          return <CategoriesCard key={key} categories={categories} />;
        })}
      </div>
      <div id="project-list">
        {projectList.map((projectData, key) => {
          return <ProjectCard key={key} projectData={projectData} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
