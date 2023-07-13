import React from "react";
import resumeFile from "../../assets/Resume_Sadima.pdf";

export default function Resume() {
  return (
    <div class="content-body">
      <h1>My Resume</h1>
      <div class="download">
        <h5>
          Download my
          <a href={resumeFile} download="Resume_Sadima.pdf">
            &nbsp;Resume
          </a>
        </h5>
      </div>
      <div class="proficiencies">
        <div class="front-end">
          <h5>Front-End Proficiencies</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
            <li>ReactJS</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div class="back-end">
          <h5>Back-End Proficiencies</h5>
          <ul>
            <li>APIs</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
