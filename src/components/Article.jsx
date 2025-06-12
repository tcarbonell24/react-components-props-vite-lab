// define the Article component for a single blog post
function Article(props) {
  // if no date is given, show a default
  const displayDate = props.date || "January 1, 1970";

  return (
    <article>
      {/* show the post title */}
      <h3>{props.title}</h3>

      {/* show the date */}
      <small>{displayDate}</small>

      {/* show the preview text */}
      <p>{props.preview}</p>
    </article>
  );
}

// export for use in ArticleList
export default Article;
