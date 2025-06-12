// import the component files
import React from "react";
import Header from "./Header.jsx";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";


//print the blogdata for testing
console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* set the header */}
      <Header name={blogData.name} />

      {/* adds the image for the blog, and the text sextion for the about */}
      <About image={blogData.image} about={blogData.about} />

      {/* adds the article list, which itself has multiple articles within based on blog.js */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

// export for use in main.jsx
export default App;
