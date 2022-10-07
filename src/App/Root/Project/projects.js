import javascript from "assets/icons/languages/javascript-bw.png";
import python from "assets/icons/languages/python-bw.png";
import auth0 from "assets/icons/technologies/black/auth0.png";
import django from "assets/icons/technologies/black/django.png";
import express from "assets/icons/technologies/black/express.png";
import heroku from "assets/icons/technologies/black/heroku.png";
import mongodb from "assets/icons/technologies/black/mongodb.png";
import nextjs from "assets/icons/technologies/black/nextjs.png";
import nodejs from "assets/icons/technologies/black/nodejs.png";
import postgresql from "assets/icons/technologies/black/postgresql.webp";
import reactjs from "assets/icons/technologies/black/reactjs.png";
import sqlite from "assets/icons/technologies/black/sqlite.png";
import styledcomponents from "assets/icons/technologies/black/styledcomponents.png";
import vercel from "assets/icons/technologies/black/vercel.png";
import bugpenAuthentication from "assets/slides/bugpen/authentication.png";
import bugpenAuthorize from "assets/slides/bugpen/authorize.png";
import bugpenBugTracking from "assets/slides/bugpen/bug-tracking.png";
import bugpenHome from "assets/slides/bugpen/home.png";
import bugpenPermissions from "assets/slides/bugpen/permissions.png";
import bugpenProjects from "assets/slides/bugpen/projects.png";
import bugpenResponsive from "assets/slides/bugpen/responsive.png";
import bugpenSchema from "assets/slides/bugpen/schema.png";
import bugpenTags from "assets/slides/bugpen/tags.png";
import sigmavoteCreate from "assets/slides/sigmavote/create.png";
import sigmavoteEmail from "assets/slides/sigmavote/email.png";
import sigmavoteFeedback from "assets/slides/sigmavote/feedback.png";
import sigmavotePoints from "assets/slides/sigmavote/points.png";
import sigmavoteResults from "assets/slides/sigmavote/results.png";
import sigmavoteSetup from "assets/slides/sigmavote/setup.png";
import sigmavoteWaiting from "assets/slides/sigmavote/waiting.png";
import teamlistenerAuthentication from "assets/slides/teamlistener/authentication.png";
import teamlistenerLinkSpotify from "assets/slides/teamlistener/link-spotify.png";
import teamlistenerProfile from "assets/slides/teamlistener/profile.png";
import teamlistenerResponsiveMobile from "assets/slides/teamlistener/responsive-mobile.png";
import teamlistenerResponsiveTablet from "assets/slides/teamlistener/responsive-tablet.png";

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
  javascript: { src: javascript, title: "JavaScript" },
  python: { src: python, title: "Python" },
  auth0: { src: auth0, title: "Auth0" },
  postgresql: { src: postgresql, title: "PostgreSQL" },
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
      tech.javascript,
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
        title: "What is this?",
        description:
          "A music/video streaming app, that lets users join rooms and listen to music from Spotify and Youtube in a single app.",
      },
      {
        title: "3 authentication methods",
        description:
          "Easier access and improved security, with custom Google, Spotify, and Email/Password authentication",
        image: teamlistenerAuthentication,
      },
      {
        title: "Responsive layout for tablets",
        description:
          "Simple dashboard for user with a tablet or a split screen.",
        image: teamlistenerResponsiveTablet,
      },
      {
        title: "Responsive layout for mobile",
        description:
          "In mobile view, the video is hidden to make space for the queue.",
        image: teamlistenerResponsiveMobile,
      },
      {
        title: "Link multiple accounts",
        description:
          "Those who didn't sign up with Spotify, can link their Spotify account to their current profile, to enable Spotify Streaming.",
        image: teamlistenerLinkSpotify,
      },
      {
        title: "Profile customization",
        description: "Customize your username, profile picture in 2 clicks.",
        image: teamlistenerProfile,
      },
      {
        title: "Request access to other rooms",
        description:
          "Search for a room, request access, and join after a member has given you permission.",
        image: teamlistenerProfile,
      },
      {
        title: "Create rooms",
        description:
          "You can create any number of rooms and invite any number of users into them.",
        image: teamlistenerProfile,
      },
    ],
  },

  bugpen: {
    index: 2,
    name: "bugpen",
    title: "BugPen",
    url: "https://bugpen.com",
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
    urlEnd: ".com",
    colors: ["#00BFA6"],
    stack: [
      tech.javascript,
      tech.python,
      tech.reactjs,
      tech.styledcomponents,
      tech.django,
      tech.auth0,
      tech.sqlite,
      tech.heroku,
      tech.vercel,
      tech.postgresql,
    ],
    slides: [
      {
        title: "What is this?",
        description:
          "A bug tracker and project management website built for teams.",
      },
      {
        title: "Home page with the latest updates",
        description: "",
        image: bugpenHome,
      },
      {
        title: "Authentication with Auth0",
        description: "Logging in and out happens entirely on the client side.",
        image: bugpenAuthentication,
      },
      {
        title: "Create projects with teams",
        description: "Each project can have its own configuration.",
        image: bugpenProjects,
      },
      {
        title: "Permissions/Authorization",
        description:
          "Permissions can be set for each project member by administrators.",
        image: bugpenPermissions,
      },
      {
        title: "Authorize project members",
        description:
          "Members can have three authorization levels: spectator, contributor and administrator.",
        image: bugpenAuthorize,
      },
      {
        title: "Bug tracking",
        description:
          "Bugs can be created, removed, updated, assigned, files attached, and more...",
        image: bugpenBugTracking,
      },
      {
        title: "Tagging bugs with labels",
        description:
          "Bugs can be tagged with fully customizable labels specified by admins.",
        image: bugpenTags,
      },
      {
        title: "Schema in Django and cloud PostgreSQL",
        description:
          "Database migrations are managed by Django and the underlying relational database is PostgreSQL hosted on CleverCloud. The client is hosted on Vercel, and the backend is hosted on Heroku.",
        image: bugpenSchema,
      },
      {
        title: "Responsive",
        description:
          "The entire site is responsive, supporting tablets, and mobile devices",
        image: bugpenResponsive,
      },
    ],
  },

  sigmavote: {
    index: 3,
    name: "sigmavote",
    title: "SigmaVote",
    url: "https://sigmavote.com",
    githubUrls: [
      {
        title: "Source",
        href: "https://github.com/bernatfogarasi/sigma-vote",
      },
    ],
    urlEnd: ".com",
    colors: ["#2D7DD2"],
    color: "white",
    stack: [
      tech.javascript,
      tech.nextjs,
      tech.styledcomponents,
      tech.mongodb,
      tech.vercel,
    ],
    slides: [
      {
        title: "What is this?",
        description:
          "A voting app for teams to assess each other's performance in a team project. Voting invitations are sent by email, and all votes are anonymous.",
      },
      {
        title: "Select a poll type",
        description:
          "Currently, only one voting method is available, and that is contribution analysis for teams.",
        image: sigmavoteCreate,
      },
      {
        title: "Create a new poll",
        description:
          "You can specify the title and the description of the poll. Also, you can add any number of participants to it, by simply entering their name and email address.",
        image: sigmavoteSetup,
      },
      {
        title: "Voting invitation email",
        description:
          "All participants are sent a voting invitation by email over an SMTP server.",
        image: sigmavoteEmail,
      },
      {
        title: "Feedback",
        description:
          "There is visible feedback after every step in the voting process.",
        image: sigmavoteFeedback,
      },
      {
        title: "Points",
        description:
          "In a contribution analysis poll, participants need to split 100 points between every other voter.",
        image: sigmavotePoints,
      },
      {
        title: "Waiting",
        description:
          "Participants need to wait until everyone has voted, to see the results of the poll.",
        image: sigmavoteWaiting,
      },
      {
        title: "Results",
        description:
          "The result for each participant is the average of all the points they got. After everyone has voted, these scores are displayed in a table and on a pie chart.",
        image: sigmavoteResults,
      },
    ],
  },
};

export default projects;
