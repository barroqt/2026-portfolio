import { wheat } from "../utils";

// Add new project entries here following the same structure:
// { id, title, description, technologies, link, type: "professional" | "personal" | "community" }
export const projects = [
  {
    id: "kaeda",
    title: "Kaeda",
    description:
      "Desktop app and TUI to mine medias into flashcards for language learners.",
    technologies: ["Rust"],
    image: "/kaeda.png",
    github: "https://github.com/barroqt/Kaeda",
    type: "personal",
  },
  {
    id: "semaphore",
    title: "Semaphore",
    description:
      "Oracle that aggregates narrative and sentiment from X, Reddit, Google, and Telegram. Can be used with ai agents and x402 payments. 2nd place at ETH Prague 2026.",
    technologies: ["Solidity", "x402", "IPFS", "Chainlink"],
    image: "/semaphore.png",
    github: "https://github.com/barroqt/semaphore",
    type: "professional",
  },
  {
    id: "game-of-life",
    title: "Game of Life",
    description:
      "WASM implementation of Conway's Game of Life.",
    technologies: ["Rust", "WebAssembly"],
    image: "/gameoflife.jpg",
    link: "https://barroqt.github.io/wasm-game-of-life",
    github: "https://github.com/barroqt/wasm-game-of-life",
    type: "personal",
  },
  {
    id: "scribe",
    title: "Scribe",
    description:
      "Web application to get your own analysis and stats about the board game 7 wonders.",
    technologies: ["NextJS", "Bun", "Turso"],
    image: "/scribe.jpg",
    link: "https://scribe-7wonders.vercel.app",
    github: "https://github.com/barroqt/scribe",
    type: "personal",
  },
  {
    id: "catapult-dao",
    title: "Catapult DAO",
    description:
      "DAO framework for decentralized governance and proposal management. Prize winner at Avalanche Barcelona.",
    technologies: ["Solidity", "Ethers.js", "React", "Hardhat"],
    image: "/catapultdao.png",
    github: "https://github.com/barroqt/catapult-dao",
    type: "professional",
  },
  {
    id: "gengoffee",
    title: "Gengoffee",
    description:
      "Organizer of the Korean-French meet-up and board games meet-up.",
    image: "/gengoffee.jpg",
    link: "https://gengoffee.com/",
    meetup: "https://www.meetup.com/the-english-gengoffee-apero-franco-english/",
    instagram: "https://www.instagram.com/gengoffee/",
    type: "community",
  },
];
