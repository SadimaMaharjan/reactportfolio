import React from "react";

export default function About() {
  return (
    <div class="content-body">
      <h1>About Me</h1>
      <div class="row">
        <div class="col-md-6 avatar">
          <img src={require("../../assets/avatar.png")} alt="my avatar" />
        </div>
        <div class="col-md-6  description">
          <h2 class="name title">Sadima Maharjan</h2>
          <h4 class="position">Front-End Developer</h4>
          <h5 class="availability">Available for Work</h5>
          <p>
            Hi, I am Sadima and I love working in front-end web development. I
            enjoy playing with colors, designs and various CSS and JavaScript
            effects and animations. My interest in web development developed
            when I was working as an intern for a company that developed
            Wordpress websites. I decided to dive into web design after that and
            worked as a junior web-designer. Besides work, I love hiking,
            trekking and gardening.
          </p>
          <div class="button-wrapper">
            <button type="button" class="btn btn-light" href="#contact">
              Get In Touch
            </button>
            <button type="button" class="btn btn-secondary">
              Work
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <h2 class="title">Skills</h2>
        <div class="col-md-2 badge text-bg-light skill-tab">HTML</div>
        <div class="col-md-2 badge text-bg-light skill-tab">CSS</div>
        <div class="col-md-2 badge text-bg-light skill-tab">JavaScript</div>
        <div class="col-md-2 badge text-bg-light skill-tab">GIT</div>
        <div class="col-md-2 badge text-bg-light skill-tab">NodeJS</div>
        <div class="col-md-2 badge text-bg-light skill-tab">ExpressJS</div>
        <div class="col-md-2 badge text-bg-light skill-tab">SQL</div>
        <div class="col-md-2 badge text-bg-light skill-tab">MongoDB/NoSQL</div>
        <div class="col-md-2 badge text-bg-light skill-tab">ReactJS</div>
        <div class="col-md-2 badge text-bg-light skill-tab">GraphQL</div>
      </div>
    </div>
  );
}
