import React from "react";
import { Button } from "../../components/form";
import { wheat } from "../../utils";
import { StyledProjectItem } from "./ProjectItem.styled";

export const ProjectItem = (props) => {
  const { data } = props;
  return (
    <StyledProjectItem className="project-item" color={data.color}>
      <div className="header">
        {data.image && (
          <div className="image">
            <div className="wrapper">
              <img src={data.image} alt={data.title} />
            </div>
          </div>
        )}
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
      <div className="buttons">
        {data.github && (
          <a href={data.github} target="_blank" rel="noopener noreferrer">
            <Button sm bg={wheat}>Github</Button>
          </a>
        )}
        {data.meetup && (
          <a href={data.meetup} target="_blank" rel="noopener noreferrer">
            <Button sm bg={wheat}>Meetup</Button>
          </a>
        )}
        {data.instagram && (
          <a href={data.instagram} target="_blank" rel="noopener noreferrer">
            <Button sm bg={wheat}>Instagram</Button>
          </a>
        )}
        {data.link && (
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <Button sm bg={wheat}>Visit</Button>
          </a>
        )}
      </div>
    </StyledProjectItem>
  );
};
