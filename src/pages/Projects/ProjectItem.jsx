import React from "react";
import { StyledProjectItem } from "./ProjectItem.styled";

export const ProjectItem = (props) => {
  const { data } = props;
  return (
    <StyledProjectItem className="project-item" color={data.color}>
      <div className="header">
        <div className="text">
          <h2>{data.title}</h2>
          <h3 className="type-badge">
            {data.type === "professional" ? "💼 Professional" : "🛠️ Personal"}
          </h3>
        </div>
      </div>
      <div className="tech">
        {data.technologies?.join(" · ")}
      </div>
      <p>{data.description}</p>
      {data.link && (
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View project →
        </a>
      )}
    </StyledProjectItem>
  );
};
