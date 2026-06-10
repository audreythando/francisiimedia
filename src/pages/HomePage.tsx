import { Box } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../sections/Hero/HeroSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
  <HeroSection />
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