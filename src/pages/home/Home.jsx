import React, { useContext, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineFilePdf, AiOutlineMail } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { NavbarContext } from "../../context";
import { sage } from "../../utils";
import {
  AboutText,
  AnimatedSpan,
  HomeWrapper,
  Name,
  Position,
  SocialLinks,
  TextContainer,
} from "./Home.styled";

export const Home = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const setPage = useContext(NavbarContext);

  useEffect(() => {
    if (inView) {
      setPage("home");
    }
  }, [inView]);

  const produceSpans = (name) => {
    return name.split("").map((letter, index) => (
      <AnimatedSpan
        index={index}
        letter={letter}
        aria-hidden="true"
        key={index}
      >
        {letter}
      </AnimatedSpan>
    ));
  };
  return (
    <HomeWrapper ref={ref} id="home-page">
      <TextContainer>
        <Name>Thomas Barroqueiro</Name>
        <Position>
          <div className="text first" aria-label="Backend Engineer">
            {produceSpans("Backend Engineer")}
          </div>
          <div className="text second" aria-label="Blockchain Specialist">
            {produceSpans("Blockchain Specialist")}
          </div>
          <div className="text third" aria-label="Language Enthusiast">
            {produceSpans("Language Enthusiast")}
          </div>
        </Position>
        <SocialLinks>
          <a
            href="https://www.linkedin.com/in/thomas-barroqueiro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={28} color={sage["50"]} />
          </a>
          <a
            href="https://github.com/barroqt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={28} color={sage["50"]} />
          </a>
          <a href="mailto:barroqt@gmail.com">
            <AiOutlineMail size={28} color={sage["50"]} />
          </a>
          <a
            href="/thomas-barroqueiro-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineFilePdf size={28} color={sage["50"]} />
          </a>
        </SocialLinks>
      </TextContainer>
      <AboutText>
        <p>
          Hello! I am a committed lifelong learner: self-taught Rust and Solidity, I am exploring how to integrate LLMs effectively into engineering workflows.
        </p>
        <p>
          Outside of code, I host language meet-ups in Paris and work toward becoming a polyglot. 
        </p>
        <p>
          Currently open to new projects where I can contribute both skill and genuine interest.
        </p>
      </AboutText>
    </HomeWrapper>
  );
};
