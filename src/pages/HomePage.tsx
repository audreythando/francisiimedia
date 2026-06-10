import { Box } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../sections/Hero/HeroSection";
import StorySelection from "../sections/Stories/StorySelection";

const HomePage = () => {
  return (
    <>
      <Navbar />
  <HeroSection />
      <StorySelection />
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