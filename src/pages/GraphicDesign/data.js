
import ImgPortfolioChange from "./assets/image-change.jpg";
import ImgPortfolioBoxedWater from "./assets/image-boxed-water.jpg";
import ImgPortfolioScience from "./assets/image-science.jpg";


// <----------#

const fetchData = () => {
    let fetchedData;
    return  fetchedData = [
  {
    image: ImgPortfolioChange,
    title: "Change",
    description: "A book cover designed for Tim Brown's new release, 'Change'",
  },
  {
    image: ImgPortfolioBoxedWater,
    title: "Boxed Water",
    description: "A simple packaging concept made for Boxed Water",
  },
  {
    image: ImgPortfolioScience,
    title: "Science",
    description: "A poster made in collaboration with the Federal Art Project",
  },
];
}

export default fetchData;