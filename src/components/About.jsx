// define the About component for the sidebar info
function About(props) {
  // use a fallback image if none is passed in
  const imageSrc = props.image || "https://via.placeholder.com/215";

  return (
    <aside>
      {/* show the blog image */}
      <img src={imageSrc} alt="blog logo" />

      {/* show the about text */}
      <p>{props.about}</p>
    </aside>
  );
}

// export for use in App
export default About;
