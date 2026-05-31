import { wheat } from "../utils";

// Add new project entries here following the same structure:
// { id, title, description, technologies, link, type: "professional" | "personal" }
export const projects = [
  {
    id: "kaeda",
    title: "Kaeda",
    description:
      "Korean vocabulary mining TUI that parses .srt subtitle files, tokenizes text, looks up definitions, and builds an SRS deck, all from the terminal.",
    technologies: ["Rust"],
    image: "/kaeda.png",
    github: "https://github.com/barroqt/Kaeda",
    type: "personal",
  },
  {
    id: "semaphore",
    title: "Semaphore",
    description:
      "Oracle that aggregates narrative and sentiment. Signals from X, Reddit, Google, and Telegram are made via ai agents paying with 402 http status. 2nd place at ETH Prague 2026.",
    technologies: ["Solidity", "x402", "IPFS", "Chainlink"],
    image: "/semaphore.png",
    github: "https://github.com/barroqt/semaphore",
    type: "personal",
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
    id: "catapult-dao",
    title: "Catapult DAO",
    description:
      "DAO framework for decentralized governance and proposal management on Ethereum. Prize winner at Avalanche Barcelona.",
    technologies: ["Solidity", "Ethers.js", "React", "Hardhat"],
    image: "/catapultdao.png",
    github: "https://github.com/barroqt/catapult-dao",
    type: "personal",
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
    type: "personal",
  },
];
