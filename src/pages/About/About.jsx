import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { stone } from "../../utils";
import {
  Educations,
  Paragraph,
  SkillTag,
  SkillsList,
  Text,
} from "./About.styled";
import { AboutItem } from "./AboutItem";

export const About = () => {
  const skills = [
    "Rust", "Go", "Node.js", "TypeScript", "JavaScript",
    "NestJS", "Express", "REST", "GraphQL",
    "AWS (SQS, S3, EC2, API Gateway)", "Docker", "Serverless", "PM2", "Sentry",
    "SQL", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "Meilisearch", "Prisma",
    "Ethereum", "Solana", "EVM", "Solidity", "Foundry", "Hardhat", "Hyperledger", "IPFS",
    "OpenCode", "Agentic Coding",
  ];

  const educationData = [
    {
      initials: "TU",
      title: "Tongji University, Shanghai",
      p: "Master in Software Engineering — 2017",
    },
    {
      initials: "EP",
      title: "EPITECH — European Institute of Technology",
      p: "Master of Information Technology — Paris, France — 2017",
    },
    {
      initials: "AL",
      title: "Alyra",
      p: "RS5000 Certification: Blockchain Developer — 2023",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);

  return (
    <Page header="About">
      <Text>
        <h3 className="section-title">Education</h3>
        <Educations>
          {educationData.map((edu, i) => (
            <AboutItem
              key={i}
              color={stone}
              active={i === 0}
              data={edu}
            />
          ))}
        </Educations>
      </Text>
      <SkillsList>
        {skills.map((skill, i) => (
          <SkillTag key={i} color={stone}>
            {skill}
          </SkillTag>
        ))}
      </SkillsList>
    </Page>
  );
};
