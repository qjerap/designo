
import ImgPortfolioExpress from "../WebDesign/assets/image-express.jpg";
import ImgPortfolioTransfer from "../WebDesign/assets/image-transfer.jpg";
import ImgPortfolioPhoton from "../WebDesign/assets/image-photon.jpg";
import ImgPortfolioBuilder from "../WebDesign/assets/image-builder.jpg";
import ImgPortfolioBlogr from "../WebDesign/assets/image-blogr.jpg";
import ImgPortfolioCamp from "../WebDesign/assets/image-camp.jpg";
// <----------#

const fetchData = () => {
    let fetchedData;
    return  fetchedData = [
  {
    image: ImgPortfolioExpress,
    title: "express",
    description: "A multi-carrier shippinh website for ecommerce businesses",
  },
  {
    image: ImgPortfolioTransfer,
    title: "transfer",
    description:
      "site for low-cost money transfers and sending money within seconds",
  },
  {
    image: ImgPortfolioPhoton,
    title: "photon",
    description:
      "a state-of-the-art music player with hight-resolution audio and DSP effects",  
  },
  {
    image: ImgPortfolioBuilder,
    title: "builder",
    description:
      "connects users with local contractors based on their location",  
  },
  {
    image: ImgPortfolioBlogr,
    title: "blogr",
    description:
      "blogr is a platform for creating an online blog or publication",  
  },
  {
    image: ImgPortfolioCamp,
    title: "camp",
    description:
      "get expert training in coding, data, design, and digital marketing",  
  },
];
}

export default fetchData;