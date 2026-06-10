import { Box, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingWhatsApp = () => {
  const phoneNumber = "263XXXXXXXXX";

  const message =
    "Hi Francisii Media, I would like to enquire about booking a photography session.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Box
      component="a"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Francisii Media on WhatsApp"
      sx={{
        position: "fixed",
        right: { xs: 16, md: 28 },
        bottom: { xs: 16, md: 28 },
        zIndex: 1500,
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: { xs: 1.6, sm: 2.2 },
        py: { xs: 1.4, sm: 1.5 },
        borderRadius: "999px",
        backgroundColor: "#25D366",
        color: "#050505",
        textDecoration: "none",
        boxShadow: "0 18px 50px rgba(37, 211, 102, 0.35)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 24px 70px rgba(37, 211, 102, 0.5)",
        },
      }}
    >
      <WhatsAppIcon sx={{ fontSize: { xs: 28, sm: 30 } }} />

      <Typography
        sx={{
          display: { xs: "none", sm: "block" },
          fontWeight: 900,
          fontSize: "0.9rem",
        }}
      >
        WhatsApp
      </Typography>
    </Box>
  );
};

export default FloatingWhatsApp;