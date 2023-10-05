import p5 from "./assets/gpt.png";
import p2 from "./assets/port.png";
import p3 from "./assets/pop2.png";
import p4 from "./assets/BoomBot.png";
import p1 from "./assets/qstack2.png";
import p6 from "./assets/savsearches.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Hackathons",
        id: "hackathons",
    },
    {
        name: "Under-Dev",
        id: "under-dev",
    },
    {
        name: "Deployed",
        id: "deployed",
    }
    
];

export const projects = [
    {
        name: "QStack - P2P tutoring",
        image: p1,
        tags: ["under-dev","hackathons"],
        link: "https://github.com/pratham4434/diversion-qstack",
    },
    {
        name: "My Portfolio",
        image: p2,
        tags: [ "under-dev", "deployed"],
        link: "https://bat-folio.vercel.app/",

    },
    {
        name: "Popcorn-IMDB",
        image: p3,
        tags: ["deployed"],
        link: "https://github.com/pratham4434/popcorn-web-fs",

    },
    {
        name: "BoomBot - An Ecom Website",
        image: p4,
        tags: ["deployed"],
        link: "https://github.com/pratham4434/BoomBot-ecom",

    },
    {
        name: "Open-AI Website",
        image: p5,
        tags: ["deployed"],
        link: "https://github.com/pratham4434/GPT3-JSM-AI",

    },
    {
        name: "SavourySearches",
        image: p6,
        tags: ["hackathons"],
        link: "https://github.com/pratham4434/SavourySearches",

    },
];

export const achievements = [
    {
        id: 1,
        year: 80,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 15,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 25,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 70,
        description: "COMMUNITY<br />POSTS",
    },
];
