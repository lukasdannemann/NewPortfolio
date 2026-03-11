import activityAppIMG from "../assets/ActivityApp_img.jpg";
import pokemonAppIMG from "../assets/PokemonApp_img.png";

const projects = [
  {
    id: 1,
    type: "Team",
    title: "Activity App",
    shortDescription: [
  "Group project built in React featuring todos, habits and an event planner. I built the event module with filtering, edit/delete and dynamic styling based on date."
],
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
    id: 2,
    type: "Solo",
    title: "Pokédex",
    shortDescription: [
  "A React app exploring the PokéAPI – browse all Pokémon and click through to a detail card with stats and dynamic styling based on strengths."
],
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
