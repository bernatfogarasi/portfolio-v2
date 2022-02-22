import django from "assets/icons/technologies/black/django.png";
import express from "assets/icons/technologies/black/express.png";
import heroku from "assets/icons/technologies/black/heroku.png";
import mongodb from "assets/icons/technologies/black/mongodb.png";
import nextjs from "assets/icons/technologies/black/nextjs.png";
import nodejs from "assets/icons/technologies/black/nodejs.png";
import reactjs from "assets/icons/technologies/black/reactjs.png";
import sqlite from "assets/icons/technologies/black/sqlite.png";
import styledcomponents from "assets/icons/technologies/black/styledcomponents.png";
import vercel from "assets/icons/technologies/black/vercel.png";
import bugpenHome from "assets/slides/bugpen/home.png";
import sigmavoteCreate from "assets/slides/sigmavote/create.png";
import teamlistenerAuthentication from "assets/slides/teamlistener/authentication.png";

const tech = {
  django: { src: django, title: "Django" },
  express: { src: express, title: "Express.js" },
  heroku: { src: heroku, title: "Heroku" },
  mongodb: { src: mongodb, title: "MongoDB" },
  nextjs: { src: nextjs, title: "Nextjs" },
  nodejs: { src: nodejs, title: "Node.js" },
  reactjs: { src: reactjs, title: "React.js" },
  sqlite: { src: sqlite, title: "SQLite" },
  styledcomponents: { src: styledcomponents, title: "Styled Components" },
  vercel: { src: vercel, title: "Vercel" },
};

const projects = {
  teamlistener: {
    index: 1,
    name: "teamlistener",
    title: "TeamListener",
    url: "http://teamlistener.com",
    githubUrls: [
      {
        title: "Client",
        href: "https://github.com/bernatfogarasi/team-listener-client",
      },
      {
        title: "Server",
        href: "https://github.com/bernatfogarasi/team-listener-server",
      },
    ],
    urlEnd: ".com",
    colors: ["#D6B11C", "#252526"],
    stack: [
      tech.reactjs,
      tech.styledcomponents,
      tech.nodejs,
      tech.express,
      tech.mongodb,
      tech.heroku,
      tech.vercel,
    ],
    slides: [
      {
        title: "3 authentication methods",
        description: "Ease of access and security.",
        image: teamlistenerAuthentication,
      },
    ],
  },

  bugpen: {
    index: 2,
    name: "bugpen",
    title: "BugPen",
    url: "https://bugpen.vercel.app",
    githubUrls: [
      {
        title: "Client",
        href: "https://github.com/bernatfogarasi/bug-pen-client",
      },
      {
        title: "Server",
        href: "https://github.com/bernatfogarasi/bug-pen-server",
      },
    ],
    urlEnd: ".vercel.app",
    colors: ["#00BFA6"],
    stack: [
      tech.reactjs,
      tech.styledcomponents,
      tech.django,
      tech.sqlite,
      tech.heroku,
      tech.vercel,
    ],
    slides: [
      {
        title: "Home page with the latest updates",
        description: "",
        image: bugpenHome,
      },
    ],
  },

  sigmavote: {
    index: 3,
    name: "sigmavote",
    title: "SigmaVote",
    url: "https://sigmavote.vercel.app",
    githubUrls: [
      {
        title: "Source",
        href: "https://github.com/bernatfogarasi/sigma-vote",
      },
    ],
    urlEnd: ".vercel.app",
    colors: ["#2D7DD2"],
    color: "white",
    stack: [tech.nextjs, tech.styledcomponents, tech.mongodb, tech.vercel],
    slides: [
      {
        title: "Create different polls",
        description: "",
        image: sigmavoteCreate,
      },
    ],
  },
};

export default projects;
