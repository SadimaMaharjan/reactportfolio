import React from "react";

export default function Project({ title, imageUrl, liveUrl }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        View Live
      </a>
    </div>
  );
}
