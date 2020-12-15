
import ImgPortfolioAirfilter from "./assets/image-airfilter.jpg";
import ImgPortfolioEyecam from "./assets/image-eyecam.jpg";
import ImgPortfolioFaceit from "./assets/image-faceit.jpg";
import ImgPortfolioTodo from "./assets/image-todo.jpg";
import ImgPortfolioLoopstudios from "./assets/image-loopstudios.jpg";

// <----------#

const fetchData = () => {
    let fetchedData;
    return  fetchedData = [
  {
    image: ImgPortfolioAirfilter,
    title: "airfilter",
    description: "solving the problem of poor indoor air quality by filtering the air",
  },
  {
    image: ImgPortfolioEyecam,
    title: "eyecam",
    description: "product that lets you edit your favorite photos and vides at any time",
  },
  {
    image: ImgPortfolioFaceit,
    title: "faceit",
    description: "Get to meet your favorite internetsuperstrat with the faceit app",
  },
  {
    image: ImgPortfolioTodo,
    title: "todo",
    description: "A todo app that features cloud sync with light and dark mode",
  },
  {
    image: ImgPortfolioLoopstudios,
    title: "loopstudios",
    description: "a vr experience app made for loopstudios",
  },
];
}

export default fetchData;