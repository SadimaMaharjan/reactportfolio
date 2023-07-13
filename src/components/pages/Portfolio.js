import React from "react";
import Project from "../Project";

export default function Portfolio() {
  const projects = [
    {
      title: "TextNCode Editor",
      description: "ExpressJS, Webpack, IndexedDB API",
      imageUrl: "../../assets/textncode-editor.png",
      liveUrl: "https://textncodeditor-db46f522e61e.herokuapp.com/",
      githubUrl: "https://github.com/SadimaMaharjan/textNcode-editor",
    },
    {
      title: "BlogWithMe",
      description: "ExpressJS, MySQL2, Sequelize",
      imageUrl: "../../assets/Blogwithme.png",
      liveUrl: "https://github.com/SadimaMaharjan/blogwithme",
      githubUrl: "https://github.com/SadimaMaharjan/blogwithme",
    },
    {
      title: "BidWise",
      description: "ExpressJS, MySQL, Sequelize, Google API, NodeJS",
      imageUrl: "../../assets/BidWise.png",
      liveUrl: "https://github.com/SadimaMaharjan/BidWise",
      githubUrl: "https://github.com/SadimaMaharjan/BidWise",
    },
    {
      title: "Note Me Down",
      description: "ExpressJS",
      imageUrl: "../../assets/notetaker.png",
      liveUrl: "https://github.com/SadimaMaharjan/note-me-down",
      githubUrl: "https://github.com/SadimaMaharjan/note-me-down",
    },
    {
      title: "5-Day Weather Forecast",
      description: "HTML, CSS, JavaScript, OpenWeather API",
      imageUrl: "../../assets/Weatherdashboard.png",
      liveUrl: "https://sadimamaharjan.github.io/5-day-weatherforcast/",
      githubUrl: "https://github.com/SadimaMaharjan/5-day-weatherforcast",
    },
    {
      title: "Quiz",
      description: "HTML, CSS, JavaScript",
      imageUrl: "../../assets/quiz.png",
      liveUrl: "https://sadimamaharjan.github.io/javascript-quiz/",
      githubUrl: "https://github.com/SadimaMaharjan/javascript-quiz",
    },
  ];
  return (
    <div class="content-body">
      <h1>My Portfolio</h1>
      <div class="row">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}
