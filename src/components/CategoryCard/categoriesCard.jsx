import React from "react";

function CategoriesCard(props) {
  const { categories } = props;
  return (
    <div className="categories-card">
      {/* <Link to={`/project/${projectData.id}`}> */}
      <h3>{categories}</h3>
      {/* </Link> */}
    </div>
  );
}
export default CategoriesCard;
