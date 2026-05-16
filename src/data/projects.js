import { wheat } from "../utils";

// Add new project entries here following the same structure:
// { id, title, description, technologies, link, type: "professional" | "personal" }
export const projects = [
  {
    id: "semaphore-oracle",
    title: "Semaphore Oracle",
    description:
      "Built an oracle that aggregates narrative and sentiment signals from public sources including X, Reddit, Google, and Telegram. Integrated x402 payments to run paid scraping services via Apify.",
    technologies: ["TypeScript", "Node.js", "Apify", "x402"],
    link: "",
    type: "professional",
  },
  {
    id: "indexing-pipeline",
    title: "Digital Asset Indexing Pipeline",
    description:
      "Automated indexing pipeline in Go to collect, normalize, and make searchable metadata for 400,000+ digital assets across Ethereum, Solana, and EVM-compatible networks using Meilisearch.",
    technologies: ["Go", "Meilisearch", "Ethereum", "Solana", "EVM"],
    link: "",
    type: "professional",
  },
  {
    id: "dbs-marketplace",
    title: "DBS Marketplace",
    description:
      "Developed a marketplace platform from early-stage team. Built backend ETL services, authentication middleware, and queue-based workflows with AWS SQS.",
    technologies: ["Node.js", "AWS", "Serverless", "Redis", "React"],
    link: "",
    type: "professional",
  },
  {
    id: "ntuc-income-portal",
    title: "NTUC Income Portal",
    description:
      "Built a user portal and insurance subscription platform for NTUC Income using React.js and TypeScript.",
    technologies: ["React", "TypeScript", "Node.js"],
    link: "",
    type: "professional",
  },
  {
    id: "allianz-integration",
    title: "Allianz REST API Integration",
    description:
      "Developed and integrated RESTful APIs for Allianz trade using TypeScript and Node.js.",
    technologies: ["TypeScript", "Node.js", "REST"],
    link: "",
    type: "professional",
  },
  {
    id: "eth-prague",
    title: "ETH Prague Hackathon — 2nd Place",
    description:
      "Prototype that placed 2nd at ETH Prague hackathon — a sentiment aggregation oracle for blockchain applications.",
    technologies: ["Blockchain", "Solidity", "TypeScript"],
    link: "",
    type: "professional",
  },
];
