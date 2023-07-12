import React from "react";

import { Linkedin } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <div class="footer">
      <div class="linkedin">
        <a href="https://www.linkedin.com/in/sadima-maharjan/">
          <Linkedin size={40} className="linkedin-icon" />
        </a>
      </div>
      <div class="github">
        <a href="https://github.com/SadimaMaharjan/">
          <Github size={40} className="github-icon" />
        </a>
      </div>
    </div>
  );
}
