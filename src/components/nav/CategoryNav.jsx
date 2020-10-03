import React from "react";
import { Link } from "react-router-dom";

//THIS PAGE NEED HELP

function CategoryNav() {
  //   return (
  //     <nav className="category_nav">
  //       <Link to="/">Home</Link>
  //       <Link to="/project">Projects</Link>
  //     </nav>
  //   );
  // }
  // const [allBooks, setBooks] = useState([])

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}projects`)
  //     .then((results) => {
  //       return results.json();
  //     })
  //     .then((data) => {
  //       setProjectList(data);

  function handleclick(e) {
    e.preventDefault();
    console.log("the link was clicked");
    // const selectedCategory = allBooks.map(book) => book,category = categoryName)
  }

  return (
    <div>
      <h1> Categories</h1>
      <a href="#" onclick={handleclick}>
        Category Name 1
      </a>
      {/* <Link to="/register" onclick={handleclick}>
          category
        </Link> */}
    </div>
  );
}

//   if (credentials.username && credentials.password) {
//     postData().then((response) => {
//       console.log(response);
//       window.localStorage.setItem("token", response.token);
//       window.localStorage.setItem("user", credentials.username);

//       if (response.token != null) {
//         history.push("/");
//       }
//     });
export default CategoryNav;
