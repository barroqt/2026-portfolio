import { mist } from "../utils";

// Add new experience entries here following the same structure
export const experiences = [
  {
    id: "independent-2024",
    name: "Independent Work",
    title: "Backend Engineer",
    joined: "December 2024",
    end: "Present",
    bio: "Semaphore: Built an oracle that aggregates narrative and sentiment signals from public sources including X, Reddit, Google, and Telegram. Integrated x402 payments to run paid scraping services via Apify. Prototype placed 2nd at ETH Prague hackathon. Outlier: Refined LLM-generated coding responses through reinforcement learning.",
    color: mist,
  },
  {
    id: "momo-2023",
    name: "Momo Networks",
    title: "Backend Developer",
    joined: "April 2023",
    end: "December 2024",
    location: "Seoul, South Korea",
    bio: "Built an automated indexing pipeline in Go to collect, normalize, and make searchable metadata for 400,000+ digital assets across Ethereum, Solana, and EVM-compatible networks. Used Meilisearch to improve metadata discoverability and query performance. Integrated external APIs and partner-facing embedding workflows for asset metadata distribution. Deployed and maintained services with PM2, monitoring, and production error tracking via Sentry.",
    color: mist,
  },
  {
    id: "smart-chain-2021",
    name: "Smart-Chain",
    title: "Backend Developer",
    joined: "November 2021",
    end: "February 2023",
    location: "Paris, France",
    bio: "Built NestJS backend services for digital asset platforms. Improved synchronization reliability and throughput through batch processing, parallel execution, RPC fallback strategies, and checkpointing. Worked on systems handling on-chain asset data and integrations with blockchain networks. Applied Factory and Decorator patterns where they helped keep the codebase modular, and used TDD.",
    color: mist,
  },
  {
    id: "esens-2020",
    name: "Esens Consulting",
    title: "Full-Stack Developer",
    joined: "February 2020",
    end: "June 2021",
    location: "Paris, France",
    bio: "Allianz trade: Developed and integrated RESTful APIs using TypeScript and Node.js. PMU: Built full-stack features with vanilla JavaScript. R&D: Experimented with emerging AI and blockchain technologies.",
    color: mist,
  },
  {
    id: "palo-it-2017",
    name: "Palo-IT",
    title: "Full-Stack Developer",
    joined: "April 2017",
    end: "February 2020",
    location: "Singapore",
    bio: "DBS marketplace: Developed a marketplace platform from early-stage team. Built backend ETL services, authentication middleware, frontend-backend data interfaces. Built queue-based workflows with AWS SQS. Implemented frontend and backend user behavior analytics using Adobe Analytics. Solved scalability challenges using AWS Lambdas and Serverless. NTUC Income: Built a user portal and insurance subscription platform with React.js and TypeScript. Ministry of Education of Singapore: Proof of concept for school registration app in React.js — project got approved and implemented.",
    color: mist,
  },
];
