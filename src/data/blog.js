import logo from "../assets/logo";

const blogData = {
  name: "Underreacted",
  image: logo,
  about: "A blog about learning React",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
    {
      id: 4,
      title: "An extra one to prove this works",
      date: "Tomorrow",
      preview: "crazy ain't it?",
      minutes: 47,
    },
  ],
};

export default blogData;
