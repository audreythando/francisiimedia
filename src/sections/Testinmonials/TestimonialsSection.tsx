import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Tinashe & Rudo",
    event: "Lobola Ceremony",
    quote:
      "Francisii Media captured every emotion beautifully. The photos felt natural, warm, and full of meaning.",
  },
  {
    name: "Farai M.",
    event: "Birthday Shoot",
    quote:
      "Professional, creative, and so easy to work with. The final images looked premium and timeless.",
  },
  {
    name: "Natasha K.",
    event: "Wedding Story",
    quote:
      "Our wedding memories were captured exactly how we imagined them — elegant, emotional, and beautiful.",
  },
];

const TestimonialsSection = () => {
  return (
    <Box
      id="reviews"
      sx={{
        py: { xs: 8, md: 14 },
        background:
          "linear-gradient(180deg, #050505 0%, #0b0b0b 45%, #050505 100%)",
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
            Kind Words
          </Typography>

          <Typography variant="h2" sx={{ maxWidth: 850, mx: "auto" }}>
            Stories from people who trusted the lens.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <Box
              key={item.name}
              component={motion.div}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "34px",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025))",
                border: "1px solid rgba(214,181,109,0.18)",
                minHeight: 320,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  borderColor: "rgba(214,181,109,0.55)",
                  boxShadow: "0 30px 90px rgba(0,0,0,0.45)",
                },
              }}
            >
              <Box>
                <Typography sx={{ color: "primary.main", mb: 3 }}>
                  ★★★★★
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "1.25rem", md: "1.45rem" },
                    lineHeight: 1.45,
                    fontWeight: 700,
                  }}
                >
                  “{item.quote}”
                </Typography>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography sx={{ fontWeight: 900 }}>{item.name}</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {item.event}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
