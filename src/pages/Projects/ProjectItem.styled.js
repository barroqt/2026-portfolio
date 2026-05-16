import styled from "styled-components";
import { wheat, typeScale } from "../../utils";

export const StyledProjectItem = styled.div`
  overflow: hidden;
  background-color: ${(props) =>
    props.color ? props.color["60"] : wheat["60"]};

  color: ${(props) => (props.color ? props.color["00"] : wheat["00"])};
  border: 4px solid ${(props) => (props.color ? props.color["00"] : wheat["00"])};
  box-shadow: 0.8rem 0.8rem 0
    ${(props) => (props.color ? props.color["00"] : wheat["00"])};
  border-radius: 1rem;
  height: 400px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  cursor: pointer;
  .tech {
    display: none;
    font-size: ${typeScale.paragraph};
    font-weight: bold;
  }

  .project-link {
    display: none;
    font-weight: bold;
    color: inherit;
    text-decoration: underline;
  }

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    rotate: 90deg;
    transform: translateX(40px);
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;

    h2 {
      font-size: ${typeScale.title};
      line-height: 2.4rem;
    }
    .type-badge {
      display: none;
    }
  }
  p {
    display: none;
    font-size: ${typeScale.text};
  }

  &.active {
    width: 600px;
    .tech {
      display: block;
    }
    p {
      display: block;
    }
    .project-link {
      display: inline-block;
    }

    .header {
      justify-content: start;
      align-items: center;
      rotate: 0deg;
      transform: translateX(0%);
      .text {
        .type-badge {
          display: block;
          font-size: ${typeScale.helperText};
          font-weight: normal;
          margin-top: 0.25rem;
        }
      }
    }
  }

  @media screen and (max-width: 940px) {
    gap: 0.25rem;
    .header {
      gap: 0.75rem;
      h2 {
        font-size: ${typeScale.subtitle};
        line-height: 1.75rem;
      }
    }

    p {
      font-size: ${typeScale.paragraph};
    }
  }

  @media screen and (max-width: 720px) {
    height: auto;
    width: 100%;
    grid-column: span 1;
    grid-row: 2;
    .text {
      display: none;
    }

    .header {
      transform: translateX(0);
      rotate: 0deg;
    }

    &.active {
      width: 100%;
      grid-column: 1 / 4;
      grid-row: 1;
      .text {
        display: block;
      }
    }
  }
`;
