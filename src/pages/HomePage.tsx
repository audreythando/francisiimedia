import { Box } from "@mui/material";
import Navbar from "../components/layout/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />

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