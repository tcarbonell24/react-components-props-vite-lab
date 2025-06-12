// define the Header component for the top of the page
function Header(props) {
  return (
    <header>
      {/* show the name of the blog */}
      <h1>{props.name}</h1>
    </header>
  );
}

// export for use in App
export default Header;
