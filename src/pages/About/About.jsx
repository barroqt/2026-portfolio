import React from "react";
import { Page } from "../../components/Page";
import { stone } from "../../utils";
import {
  Certifications,
  Education,
  Paragraph,
  SkillTag,
  SkillsList,
  Text,
} from "./About.styled";

export const About = () => {
  const skills = [
    "Rust", "Go", "Node.js", "TypeScript", "JavaScript",
    "NestJS", "Express", "REST", "GraphQL",
    "AWS (SQS, S3, EC2, API Gateway)", "Docker", "Serverless", "PM2", "Sentry",
    "SQL", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "Meilisearch", "Prisma",
    "Ethereum", "Solana", "EVM", "Solidity", "Foundry", "Hardhat", "Hyperledger", "IPFS",
    "OpenCode", "Agentic Coding",
  ];

  const certifications = [
    "Alyra RS5000 Certification: Blockchain Developer (2023)",
  ];

  return (
    <Page header="About">
      <Text>
        <Education>
          <h3>Education</h3>
          <div className="item">
            <strong>Master in Software Engineering</strong>
            <span>Tongji University — Shanghai, China — 2017</span>
          </div>
          <div className="item">
            <strong>Master of Information Technology</strong>
            <span>EPITECH — European Institute of Technology — Paris, France — 2017</span>
          </div>
        </Education>
        <Certifications>
          <h3>Certifications</h3>
          {certifications.map((cert, i) => (
            <div key={i} className="item">{cert}</div>
          ))}
        </Certifications>
        <Paragraph>
          Backend software engineer with production experience in APIs, indexing
          pipelines, and blockchain integrations. Focused on business
          applications for supply chain & energy, plus payments, settlements,
          and real-world asset tokenization. Fluent in French, English, Mandarin
          Chinese, Korean, Portuguese, and Spanish.
        </Paragraph>
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
