import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import heroImage from "../../assets/hero.jpeg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 13, md: 10 },
        pb: { xs: 6, md: 8 },
        background:
          "radial-gradient(circle at top right, rgba(214,181,109,0.16), transparent 38%), #050505",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 0.95, width: "100%" }}>
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <Typography
                sx={{
                  color: "primary.main",
                  textTransform: "uppercase",
                  letterSpacing: { xs: "0.22em", md: "0.35em" },
                  fontSize: { xs: "0.72rem", md: "0.85rem" },
                  mb: 2,
                }}
              >
                Capturing Memories Across Zimbabwe
              </Typography>

              <Typography variant="h1" sx={{ maxWidth: 650, mb: 3 }}>
                We Capture
                <br />
                Your Story.
              </Typography>

              <Typography
                variant="body1"
                sx={{ maxWidth: 620, color: "text.secondary", mb: 5 }}
              >
                Preserving Zimbabwe&apos;s most meaningful moments through
                timeless photography and cinematic storytelling.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button variant="contained" size="large">
                  Reserve Your Date
                </Button>

                <Button variant="outlined" size="large" color="primary">
                  Explore Stories
                </Button>
              </Stack>
            </motion.div>
          </Box>

          <Box sx={{ flex: 1.05, width: "100%" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Box sx={{ position: "relative", maxWidth: 650, mx: "auto" }}>
                <Box
                  sx={{
                    position: "absolute",
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: "rgba(214,181,109,0.12)",
                    filter: "blur(100px)",
                    right: 0,
                    top: 80,
                    zIndex: -1,
                  }}
                />

                <Box
                  component="img"
                  src={heroImage}
                  alt="Francisii Media photography"
                  sx={{
                    width: "100%",
                    height: { xs: 420, sm: 520, md: 680 },
                    objectFit: "cover",
                    borderRadius: {
                      xs: "32px",
                      md: "48px 48px 180px 48px",
                    },
                    border: "1px solid rgba(214,181,109,0.26)",
                    boxShadow: "0 40px 120px rgba(0,0,0,0.65)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: 16, md: -36 },
                    bottom: { xs: 20, md: 50 },
                    p: { xs: 2, md: 3 },
                    borderRadius: "24px",
                    background: "rgba(16,16,16,0.82)",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(214,181,109,0.22)",
                    maxWidth: 260,
                  }}
                >
                  <Typography sx={{ color: "primary.main", mb: 1 }}>
                    ★★★★★
                  </Typography>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.1rem" }}>
                    500+ Events Captured
                  </Typography>
                  <Typography
                    sx={{ color: "text.secondary", fontSize: "0.9rem" }}
                  >
                    Weddings, lobola ceremonies, birthdays and corporate
                    moments.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    right: { xs: 16, md: -28 },
                    top: { xs: 20, md: 48 },
                    p: { xs: 2, md: 2.5 },
                    borderRadius: "999px",
                    background: "rgba(214,181,109,0.92)",
                    color: "#050505",
                    fontWeight: 900,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
                  }}
                >
                  Bookings Open
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;