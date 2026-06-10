import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

import weddingImage from "../../assets/stories/wedding.jpg";
import lobolaImage from "../../assets/stories/lobola.jpg";
import familyImage from "../../assets/stories/family.jpg";
import birthdayImage from "../../assets/stories/hero.jpeg";
import graduationImage from "../../assets/stories/hero.jpeg";
import corporateImage from "../../assets/stories/corperate.jpg";

const stories = [
  {
    title: "Weddings",
    text: "Your forever begins here.",
    image: weddingImage,
  },
  {
    title: "Lobola",
    text: "Tradition. Family. Legacy.",
    image: lobolaImage,
  },
  {
    title: "Family",
    text: "Moments that matter most.",
    image: familyImage,
  },
  {
    title: "Birthdays",
    text: "Every year deserves remembering.",
    image: birthdayImage,
  },
  {
    title: "Graduation",
    text: "Celebrate your achievement.",
    image: graduationImage,
  },
  {
    title: "Corporate",
    text: "Professional stories, beautifully told.",
    image: corporateImage,
  },
];

const StorySelection = () => {
  return (
    <Box
      id="stories"
      sx={{
        py: { xs: 8, md: 14 },
        background:
          "linear-gradient(180deg, #050505 0%, #0b0b0b 50%, #050505 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
          <Typography
            sx={{
              color: "primary.main",
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              fontSize: "0.78rem",
              mb: 2,
            }}
          >
            Choose Your Story
          </Typography>

          <Typography
            variant="h2"
            sx={{
              maxWidth: 900,
              mx: "auto",
            }}
          >
            Every moment deserves its own spotlight.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Box
                sx={{
                  minHeight: { xs: 260, md: 360 },
                  p: { xs: 3, md: 4 },
                  borderRadius: "34px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "1px solid rgba(214,181,109,0.18)",
                  transition: "all 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  backgroundImage: `
                    linear-gradient(
                      180deg,
                      rgba(0,0,0,0.12) 0%,
                      rgba(0,0,0,0.42) 45%,
                      rgba(0,0,0,0.88) 100%
                    ),
                    url(${story.image})
                  `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 20px 70px rgba(0,0,0,0.32)",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    borderColor: "rgba(214,181,109,0.6)",
                    boxShadow: "0 35px 100px rgba(0,0,0,0.55)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at top right, rgba(214,181,109,0.22), transparent 38%)",
                    opacity: 0,
                    transition: "opacity 0.35s ease",
                  },
                  "&:hover::before": {
                    opacity: 1,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: "0.8rem",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    mb: 1,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  0{index + 1}
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    textShadow: "0 6px 24px rgba(0,0,0,0.5)",
                  }}
                >
                  {story.title}
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    mt: 1,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {story.text}
                </Typography>

                <Typography
                  sx={{
                    color: "primary.main",
                    mt: 2,
                    fontWeight: 800,
                    position: "relative",
                    zIndex: 1,
                    opacity: { xs: 1, md: 0 },
                    transform: { xs: "none", md: "translateY(10px)" },
                    transition: "all 0.35s ease",
                    ".MuiBox-root:hover &": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  }}
                >
                  Explore Story →
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StorySelection;