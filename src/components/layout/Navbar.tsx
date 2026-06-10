import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = ["Stories", "Packages", "Reviews", "Booking"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: { xs: 12, md: 20 },
          background: "transparent",
          boxShadow: "none",
          px: { xs: 2, md: 4 },
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1200px",
            width: "100%",
            mx: "auto",
            minHeight: { xs: 64, md: 72 },
            px: { xs: 2, md: 3 },
            borderRadius: "999px",
            background: "rgba(16,16,16,0.78)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(214,181,109,0.22)",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              FRANCISII
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.62rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
              }}
            >
              Media
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                sx={{
                  color: "text.primary",
                  fontSize: "0.85rem",
                  px: 2,
                  "&:hover": {
                    color: "primary.main",
                    background: "rgba(214,181,109,0.08)",
                  },
                }}
              >
                {item}
              </Button>
            ))}

            <Button variant="contained" sx={{ ml: 1 }}>
              Book Now
            </Button>
          </Stack>

          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "primary.main",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "82%",
              maxWidth: 360,
              background: "rgba(5,5,5,0.96)",
              borderLeft: "1px solid rgba(214,181,109,0.22)",
              p: 3,
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography sx={{ color: "primary.main", fontWeight: 900 }}>
              FRANCISII
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.62rem",
                letterSpacing: "0.28em",
              }}
            >
              Media
            </Typography>
          </Box>

          <IconButton onClick={() => setOpen(false)} sx={{ color: "primary.main" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Stack spacing={2.5} sx={{ mt: 6 }}>
          {navItems.map((item) => (
            <Button
              key={item}
              onClick={() => setOpen(false)}
              sx={{
                justifyContent: "flex-start",
                color: "text.primary",
                fontSize: "1.1rem",
              }}
            >
              {item}
            </Button>
          ))}

          <Button variant="contained" size="large" onClick={() => setOpen(false)}>
            Book Now
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};

export default Navbar;