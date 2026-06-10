import { Box, Button, Container, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        background: "#050505",
        borderTop: "1px solid rgba(214,181,109,0.18)",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr 1fr" },
            gap: { xs: 5, md: 8 },
          }}
        >
          <Box>
            <Typography sx={{ color: "primary.main", fontWeight: 900, fontSize: "1.5rem" }}>
              FRANCISII
            </Typography>
            <Typography sx={{ color: "text.secondary", letterSpacing: "0.28em", mb: 2 }}>
              MEDIA
            </Typography>
            <Typography sx={{ color: "text.secondary", maxWidth: 420, lineHeight: 1.8 }}>
              Preserving Zimbabwe&apos;s most meaningful moments through timeless photography and cinematic storytelling.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 900, mb: 2 }}>Quick Links</Typography>
            <Stack spacing={1}>
              {["Stories", "Portfolio", "Reviews", "Packages", "Booking"].map((item) => (
                <Typography key={item} sx={{ color: "text.secondary" }}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 900, mb: 2 }}>Contact</Typography>
            <Stack spacing={1}>
              <Button startIcon={<WhatsAppIcon />} sx={{ color: "text.secondary", justifyContent: "flex-start", px: 0 }}>
                WhatsApp
              </Button>
              <Button startIcon={<InstagramIcon />} sx={{ color: "text.secondary", justifyContent: "flex-start", px: 0 }}>
                Instagram
              </Button>
              <Button startIcon={<FacebookIcon />} sx={{ color: "text.secondary", justifyContent: "flex-start", px: 0 }}>
                Facebook
              </Button>
              <Button startIcon={<EmailIcon />} sx={{ color: "text.secondary", justifyContent: "flex-start", px: 0 }}>
                Email
              </Button>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ mt: 6, pt: 3, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
            © {year} Francisii Media. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterSection;