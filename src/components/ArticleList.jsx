// import the Article component so we can use it in the list
import Article from "./Article";

// define the ArticleList component
function ArticleList(props) {
  // return the container for the list of articles
  return (
    <main>
      {/* loop through each post and show an Article for it */}
      {props.posts.map((post) => (
        <Article
          key={post.id} // use unique key for React's list tracking
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

// export for use in App
export default ArticleList;
