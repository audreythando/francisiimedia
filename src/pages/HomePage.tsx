import { Box } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../sections/Hero/HeroSection";
import StorySelection from "../sections/Stories/StorySelection";
import PortfolioWall from "../sections/Portfolio/PortfolioWall";


const HomePage = () => {
  return (
    <>
      <Navbar />
  <HeroSection />
      <StorySelection />
        <PortfolioWall />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
        }}
      />
    </>
  );
};

export default HomePage;