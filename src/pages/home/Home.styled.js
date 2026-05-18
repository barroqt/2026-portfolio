import styled, { keyframes } from "styled-components";
import { PageHeaderStyled } from "../../components/ui";
import { sage, typeScale, wheat } from "../../utils";

export const HomeWrapper = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  @media screen and (max-width: 920px) {
    grid-template-rows: 1fr 1fr;
  }
`;

export const TextContainer = styled.section`
  grid-column: 2 / 8;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  @media screen and (max-width: 1204px) {
    gap: 2.5rem;
  }
  @media screen and (max-width: 920px) {
    grid-column: 1 / 13;
    align-self: end;
    padding-inline: 1rem;
    justify-self: center;
    align-self: center;
  }
  @media screen and (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const Name = styled.h1`
  font-size: ${typeScale.bigDisplay};
  font-weight: bolder;
  margin: 0;
  background: white;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, #ddd 100%);
  line-height: 1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 1204px) {
    font-size: ${typeScale.display};
  }

  @media screen and (max-width: 480px) {
    font-size: ${typeScale.headline};
    text-align: center;
  }
`;

const textRotate1 = keyframes`
0% { transform: translate3d(0, 0%, 0) rotateX(0deg) }
22% { transform: translate3d(0, 0%, 0) rotateX(0deg) }
33% { transform: translate3d(0, -100%, 0) rotateX(-90deg) }
88% { transform: translate3d(0, 100%, 0) rotateX(-90deg) }
100% { transform: translate3d(0, 0%, 0) rotateX(0deg) }
`;

const textRotate2 = keyframes`
0% { transform: translate3d(0, 100%, 0) rotateX(-90deg) }
22% { transform: translate3d(0, 100%, 0) rotateX(-90deg) }
33% { transform: translate3d(0, 0%, 0) rotateX(0deg) }
55% { transform: translate3d(0, 0%, 0) rotateX(0deg) }
66% { transform: translate3d(0, -100%, 0) rotateX(-90deg) }
100% { transform: translate3d(0, 100%, 0) rotateX(-90deg) }
`;

const textRotate3 = keyframes`
0% { transform: translate3d(0, 100%, 0) rotateX(-90deg) }
55% { transform: translate3d(0, 100%, 0) rotateX(-90deg) }
66% { transform: translate3d(0, 0%, 0) rotateX(0deg) }
88% { transform: translate3d(0, 0%, 0) rotateX(0deg) }
100% { transform: translate3d(0, -100%, 0) rotateX(-90deg) }
`;

export const Position = styled(PageHeaderStyled)`
  background: unset;
  line-height: unset;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  margin-block: 0;
  margin-inline: 0;
  margin: 0;
  padding: 0;
  position: relative;
  color: ${sage["50"]};
  cursor: default;
  .text {
    white-space: nowrap;
    span {
      display: inline-block;
      will-change: transform;
      transform-style: preserve-3d;
      transform-origin: bottom;
    }
    &.first span {
      animation: ${textRotate1} 8s infinite;
    }
    &.second {
      position: absolute;
      top: 2%;
      left: 0;
      span {
        transform-origin: bottom;
        transform: translate3d(0, 100%, 0) rotateX(-90deg);
        animation: ${textRotate2} 8s infinite;
      }
    }
    &.third {
      position: absolute;
      top: 2%;
      left: 0;
      span {
        transform-origin: bottom;
        transform: translate3d(0, 100%, 0) rotateX(-90deg);
        animation: ${textRotate3} 8s infinite;
      }
    }
  }
  @media screen and (max-width: 1204px) {
    font-size: ${typeScale.title};
  }
  @media screen and (max-width: 480px) {
    font-size: ${typeScale.subtitle};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      &.second,
      &.third {
        left: auto;
      }
    }
  }
`;

export const AnimatedSpan = styled.span`
  animation-delay: ${(props) => props.index * 0.05}s !important;
  padding: ${(props) => (props.letter === " " ? "0.325rem" : null)};
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  a {
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.15);
    }
  }
  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

export const AboutText = styled.aside`
  grid-column: 8 / 13;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  padding-right: 2rem;
  p {
    font-size: ${typeScale.text};
    line-height: 1.8rem;
    color: ${sage["90"]};
  }
  @media screen and (max-width: 920px) {
    grid-column: 1 / 13;
    padding-inline: 1rem;
    align-self: start;
    p {
      font-size: ${typeScale.paragraph};
      line-height: 1.5rem;
    }
  }
`;
