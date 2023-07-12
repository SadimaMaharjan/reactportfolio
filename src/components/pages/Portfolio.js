import React from "react";

export default function Portfolio() {
  return (
    <div class="content-body">
      <h1>My Portfolio</h1>
      <div class="row">
        <div class="col-md-6 ">
          <a
            class="project-item"
            href="https://textncodeditor-db46f522e61e.herokuapp.com/"
          >
            <div class="project-image col-md-4">
              <img
                src={require("../../assets/textncode-editor.png")}
                alt="text and code editor"
              />
            </div>
            <div class="project-info col-md-8">
              <div class="project-top">
                <h3 class="project-name">TextNCode Editor</h3>
              </div>
              <div class="project-bottom">
                <div class="project-desc">
                  ExpressJS, Webpack, IndexedDB API
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6">
          <a
            class="project-item"
            href="https://github.com/SadimaMaharjan/blogwithme"
          >
            <div class="project-image col-md-4">
              <img
                src={require("../../assets/Blogwithme.png")}
                alt="social media blog"
              />
            </div>
            <div class="project-info col-md-8">
              <div class="project-top">
                <h3 class="project-name">BlogWithMe</h3>
              </div>
              <div class="project-bottom">
                <div class="project-desc">ExpressJS, MySQL2, Sequelize</div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6">
          <a
            class="project-item"
            href="https://github.com/SadimaMaharjan/BidWise"
          >
            <div class="project-image col-md-4">
              <img
                src={require("../../assets/BidWise.png")}
                alt="auction website"
              />
            </div>
            <div class="project-info col-md-8">
              <div class="project-top">
                <h3 class="project-name">BidWise</h3>
              </div>
              <div class="project-bottom">
                <div class="project-desc">
                  ExpressJS, MySQL, Sequelize, Google API, NodeJS
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6">
          <a
            class="project-item"
            href="https://github.com/SadimaMaharjan/note-me-down"
          >
            <div class="project-image col-md-4">
              <img
                src={require("../../assets/notetaker.png")}
                alt="notetaker app"
              />
            </div>
            <div class="project-info col-md-8">
              <div class="project-top">
                <h3 class="project-name">Note Me Down</h3>
              </div>
              <div class="project-bottom">
                <div class="project-desc">ExpressJS</div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6">
          <a
            class="project-item"
            href="https://sadimamaharjan.github.io/5-day-weatherforcast/"
          >
            <div class="project-image col-md-4">
              <img
                src={require("../../assets/Weatherdashboard.png")}
                alt="weather dashboard app"
              />
            </div>
            <div class="project-info col-md-8">
              <div class="project-top">
                <h3 class="project-name">5-Day Weather Forecast</h3>
              </div>
              <div class="project-bottom">
                <div class="project-desc">
                  HTML, CSS, JavaScript, OpenWeather API
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6">
          <a
            class="project-item"
            href="https://sadimamaharjan.github.io/javascript-quiz/"
          >
            <div class="project-image col-md-4">
              <img src={require("../../assets/quiz.png")} alt="quiz app" />
            </div>
            <div class="project-info col-md-8">
              <div class="project-top">
                <h3 class="project-name">Quiz</h3>
              </div>
              <div class="project-bottom">
                <div class="project-desc">HTML, CSS, JavaScript</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
