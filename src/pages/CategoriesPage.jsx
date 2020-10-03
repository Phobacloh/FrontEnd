import React, { useState, useEffect } from "react";
import CategoryNav from "../components/nav/CategoryNav";
// import Logo from "../components/Logo";

// // import "./ProjectCard.css";

function CategoriesPage() {
  return <CategoryNav />;
}
//   // Variables
//   const [categoryList, setCategoryList] = useState([]);

//   //methods
//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_API_URL}categories`)
//       .then((results) => {
//         return results.json();
//       })
//       .then((data) => {
//         setCategoryList(data);
//       });
//     // setProjectList(allProjects);
//   }, []);

//   //templates

//   return (
//     <div id="category-list">
//       {categoryList.map((categorytData, key) => {
//         return <ProjectCard key={key} categoryData={categoryData} />;
//       })}
//     </div>
//   );
// }

export default CategoriesPage;
