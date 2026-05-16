import styled from "styled-components";
import { stone, typeScale } from "../../utils";

export const Paragraph = styled.p`
  font-size: ${typeScale.text};
  grid-column: 2/ 7;
  line-height: 2rem;
  padding-block: 2rem;
  color: ${stone["10"]};
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
    font-size: ${typeScale.paragraph};
    line-height: 1.2rem;
    padding-block: 0rem;
  }
`;

export const Education = styled.div`
  margin-bottom: 1.5rem;
  h3 {
    font-size: ${typeScale.subtitle};
    margin-bottom: 0.75rem;
    color: ${stone["00"]};
  }
  .item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 0.75rem;
    strong {
      font-size: ${typeScale.paragraph};
      color: ${stone["10"]};
    }
    span {
      font-size: ${typeScale.helperText};
      color: ${stone["30"]};
    }
  }
`;

export const Certifications = styled.div`
  margin-bottom: 1.5rem;
  h3 {
    font-size: ${typeScale.subtitle};
    margin-bottom: 0.75rem;
    color: ${stone["00"]};
  }
  .item {
    font-size: ${typeScale.paragraph};
    color: ${stone["10"]};
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    position: relative;
    &::before {
      content: "▸";
      position: absolute;
      left: 0;
      color: ${stone["50"]};
    }
  }
`;

export const Text = styled.aside`
  grid-column: 2/7;
  width: 100%;
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
    padding-inline: 1rem;
  }
`;

export const SkillsList = styled.aside`
  grid-column: 7/ 13;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  gap: 0.6rem;
  padding: 1rem;
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
  }
`;

export const SkillTag = styled.span`
  background-color: ${(props) => (props.color ? props.color["50"] : stone["50"])};
  color: ${(props) => (props.color ? props.color["00"] : stone["00"])};
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  font-size: ${typeScale.helperText};
  font-weight: 500;
  border: 2px solid ${(props) => (props.color ? props.color["30"] : stone["30"])};
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 0 ${(props) => (props.color ? props.color["00"] : stone["00"])};
  }
`;
