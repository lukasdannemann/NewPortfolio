import activityAppIMG from "../assets/ActivityApp_img.jpg";
import pokemonAppIMG from "../assets/PokemonApp_img.png";
import plotTwistImg from '../assets/plot-twist-img.jpg';
import weddingDemo from "../assets/wedding-demo.png"

const projects = [
  
  {
    id: 1,
    type: "Team",
    title: "Plot Twist",
   shortDescription:
  "Team project from Backend 1 at Nackademin, a plant-swap platform where neighbors can list and trade houseplants. Built with the MEN stack and JWT auth, image uploads and a full trade lifecycle.", 
  longDescription: [
"Plot Twist is a plant-swap platform built as the final project of my Backend 1 course at Nackademin. I worked with two backend classmates and two frontend students during a three-week period. The backend is built with Node.js, Express and MongoDB, and the frontend with Vanilla JS. We followed a Kanban workflow using Trello.",
 "Users can create an account, list plants they want to trade or give away, and request swaps from other users. Once both parties agree, they can set a meeting place and time, and complete the trade. The app keeps a history of past trades and notifies users when something happens to a request they're part of.",
  "I was responsible for the auth and token system. A dual-token JWT setup with separate access and refresh tokens. I also worked on the flow for products, from mongoose schema, to database functions and dedicated routes. We used express-validator for input validation and rate limiting to prevent brute-force attacks and spam."
],
    image: plotTwistImg,
    badges: ["MongoDB", "Express", "Node.js", "Git", "JWT", "KanBan"],
    liveUrl: "https://plot-twist-fe.vercel.app/",
    githubUrl: "https://github.com/lukasdannemann/plot-twist-backend",
  },
  {
    id: 2,
    type: "Team",
    title: "HaloMind",
    shortDescription:
  "Group project built in React featuring todos, habits and an event planner. I built the event module with filtering, edit/delete and dynamic styling based on date.",
longDescription: [
  "HaloMind is a productivity app built in React as a group project using agile methods – daily standups via Discord and sprint planning in Trello. The app brings todos, habits and events together in one place, with a dashboard showing the latest activity from each section.",
  "I was responsible for the event planner module. Users can create events with a date, time and description, and edit or delete them at any time.",
  "Events are filtered across three views – upcoming, all and past – where the styling automatically adjusts depending on whether an event has already passed or is coming up. Routing was handled with React Router and authentication with localStorage/sessionStorage."
],
    image: activityAppIMG,
    badges: ["React", "JSX", "React Router", "Git"],
    liveUrl: "https://ehlproductivity-app.netlify.app/",
    githubUrl: "https://github.com/lukasdannemann/productivity-app",
  },
  {
    id: 3,
    type: "Solo",
    title: "Wedding site",
    shortDescription:
  "A wedding website with RSVP, schedule and info pages. Shown here as an anonymized demo — names and dates are fictional and form submissions are disabled",
longDescription: [
  "I got asked to build a wedding website for my sister in law with RSVP, schedule and form for speeches. This was my solution.",
  "I started from a wireframe styled after the couple's 'save the date' card, and followed their wish for something clean and easy to use. The site is bilingual (Swedish/English) and sits behind a soft access-code gate so only invited guests get in.",
  "Built with React and React Router. The RSVP and speech forms post to a Google Apps Script that writes responses straight into a Google Sheet the couple can follow.",
  "This is an anonymized demo. Names, dates and contact details are fictional and form submissions are disabled."
],
    image: weddingDemo,
    badges: ["React", "JSX", "React Router", "Git"],
    liveUrl: "https://wedding-demo-git-main-lukas-projects-a153b405.vercel.app/",
  },

  {
    id: 4,
    type: "Solo",
    title: "Pokédex",
    shortDescription:
  "A React app exploring the PokéAPI – browse all Pokémon and click through to a detail card with stats and dynamic styling based on strengths.",
longDescription: [
  "A React app that fetches data from the PokéAPI and displays a scrollable list of all Pokémon.",
  "Clicking a Pokémon navigates via React Router to a detail page with an individual card showing its stats – styling automatically adapts based on the Pokémon's strengths to give a visual sense of its character."
],
    image: pokemonAppIMG,
    badges: ["React", "JSX", "REST API"],
    liveUrl: "https://pokemon-app-seven-virid.vercel.app/",
    githubUrl: "https://github.com/lukasdannemann/pokemon-app",
  }
];

export default projects;
