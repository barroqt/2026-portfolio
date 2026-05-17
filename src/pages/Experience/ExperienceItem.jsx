import React from "react";
import { Button } from "../../components/form";
import { StyledExperienceItem } from "./ExperienceItem.styled";

export const ExperienceItem = (props) => {
  const { data } = props;
  return (
    <StyledExperienceItem className="experience-item" color={data.color}>
      <div className="header">
        <div className="image">
          <div className="wrapper">
            <img src={data.logo} alt={data.name} />
          </div>
        </div>
        <div className="text">
          <h2>{data.name}</h2>
          <h3 className="position">{data.title}</h3>
        </div>
      </div>
      <div className="date">
        {data.joined} - {data.end}
        {data.location && <span className="location"> — {data.location}</span>}
      </div>
      <p>{data.bio}</p>
      {data.link && (
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          <Button sm bg={data.color}>
            Visit
          </Button>
        </a>
      )}
    </StyledExperienceItem>
  );
};
