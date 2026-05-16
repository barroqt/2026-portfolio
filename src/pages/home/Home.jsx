import React, { useContext, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
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
            href="https://github.com/barrogt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={28} color={sage["50"]} />
          </a>
          <a href="mailto:barrogt@gmail.com">
            <AiOutlineMail size={28} color={sage["50"]} />
          </a>
        </SocialLinks>
      </TextContainer>
      <AboutText>
        <p>
          Backend software engineer with production experience in APIs, indexing
          pipelines, and blockchain integrations. Focused on business
          applications for supply chain & energy, plus payments, settlements,
          and real-world asset tokenization.
        </p>
        <p>
          Host of international meet-ups in Paris and Seoul, with experience
          across fintech, insurtech, and digital asset platforms. Fluent in
          French, English, Mandarin Chinese, Korean, Portuguese, and Spanish.
        </p>
      </AboutText>
    </HomeWrapper>
  );
};
