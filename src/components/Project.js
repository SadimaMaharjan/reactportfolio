import React from "react";
import { Github } from "react-bootstrap-icons";

export default function Project({
  title,
  description,
  imageUrl,
  liveUrl,
  githubUrl,
}) {
  return (
    <div class="col-md-6 ">
      <a class="project-item">
        {/* <img src={imageUrl} alt={title} />
          <p>{description}</p>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            View Live
          </a> */}
        <div class="project-image col-md-4">
          <img src={imageUrl} alt={title} />
        </div>
        <div class="project-info col-md-8">
          <div class="project-top">
            <h3 class="project-name">{title}</h3>
          </div>
          <div class="project-bottom">
            <div class="project-desc">{description}</div>
          </div>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            Live
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github size={20} className="github-icon" />
          </a>
        </div>
      </a>
    </div>
  );
}
