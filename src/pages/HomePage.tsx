
import Navbar from "../components/layout/Navbar";
import BookingSection from "../sections/Bookings/BookingSection";
import HeroSection from "../sections/Hero/HeroSection";
import PackagesSection from "../sections/Packages/PackagesSection";
import PortfolioWall from "../sections/Portfolio/PortfolioWall";
import StorySelection from "../sections/Stories/StorySelection";
import TestimonialsSection from "../sections/Testinmonials/TestimonialsSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StorySelection />
      <PortfolioWall />
      <TestimonialsSection />
      <PackagesSection />
      <BookingSection />
 
    </>
  );
};

export default HomePage;