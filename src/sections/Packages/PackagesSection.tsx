import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Essential Story",
    price: "From $80",
    description: "Perfect for birthdays, portraits and small family sessions.",
    features: ["1 hour shoot", "15 edited photos", "Outdoor or indoor session", "WhatsApp delivery"],
  },
  {
    name: "Signature Story",
    price: "From $180",
    description: "Ideal for lobola ceremonies, graduations and special events.",
    features: ["3 hours coverage", "50 edited photos", "Event highlights", "Priority editing"],
    featured: true,
  },
  {
    name: "Legacy Story",
    price: "Custom Quote",
    description: "Full coverage for weddings, corporate events and premium occasions.",
    features: ["Full event coverage", "100+ edited photos", "Creative direction", "Optional album add-on"],
  },
];

const PackagesSection = () => {
  return (
    <Box id="packages" sx={{ py: { xs: 8, md: 14 }, background: "#050505" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
          <Typography sx={{ color: "primary.main", textTransform: "uppercase", letterSpacing: "0.35em", fontSize: "0.78rem", mb: 2 }}>
            Packages
          </Typography>

          <Typography variant="h2" sx={{ maxWidth: 850, mx: "auto" }}>
            Choose the story that fits your moment.
          </Typography>

          <Typography sx={{ color: "text.secondary", maxWidth: 650, mx: "auto", mt: 2 }}>
            Cash payments accepted. Bookings remain pending until confirmed by Francisii Media.
          </Typography>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: { xs: 2.5, md: 3 } }}>
          {packages.map((item, index) => (
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
                background: item.featured
                  ? "linear-gradient(145deg, rgba(214,181,109,0.18), rgba(255,255,255,0.04))"
                  : "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025))",
                border: item.featured ? "1px solid rgba(214,181,109,0.55)" : "1px solid rgba(214,181,109,0.18)",
                minHeight: 520,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                {item.featured && (
                  <Typography sx={{ color: "primary.main", fontWeight: 900, mb: 2 }}>
                    Most Popular
                  </Typography>
                )}

                <Typography variant="h3">{item.name}</Typography>

                <Typography sx={{ color: "primary.main", fontWeight: 900, fontSize: "2rem", mt: 2 }}>
                  {item.price}
                </Typography>

                <Typography sx={{ color: "text.secondary", mt: 2 }}>
                  {item.description}
                </Typography>

                <Box sx={{ mt: 4 }}>
                  {item.features.map((feature) => (
                    <Typography key={feature} sx={{ mb: 1.5 }}>
                      ✓ {feature}
                    </Typography>
                  ))}
                </Box>
              </Box>

              <Button variant={item.featured ? "contained" : "outlined"} size="large" sx={{ mt: 4 }}>
                Select Package
              </Button>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PackagesSection;