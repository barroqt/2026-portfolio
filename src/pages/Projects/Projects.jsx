import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { projects } from "../../data";
import { useScreenWidth } from "../../hooks";
import { ProjectItem } from "./ProjectItem";
import { StyledProjectsLayout } from "./Projects.styled";

export const Projects = () => {
  const { width } = useScreenWidth();

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".project-item");
    cards.forEach((card, i) => {
      card.classList.remove("active");
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener(width < 720 ? "click" : "mouseenter", (e) => {
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
  }, [width]);
  return (
    <Page header="Projects">
      <StyledProjectsLayout>
        {projects.map((project, index) => (
          <ProjectItem key={project.id || index} data={project} />
        ))}
      </StyledProjectsLayout>
    </Page>
  );
};
