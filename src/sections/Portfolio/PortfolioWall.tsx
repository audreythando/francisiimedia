import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

import portfolio1 from "../../assets/portfolio/portfolio-1.jpg";
import portfolio2 from "../../assets/portfolio/portfolio-2.jpg";
import portfolio3 from "../../assets/portfolio/portfolio-3.jpg";
import portfolio4 from "../../assets/portfolio/portfolio-4.jpg";
import portfolio5 from "../../assets/portfolio/portfolio-5.jpg";
import portfolio6 from "../../assets/portfolio/portfolio-6.jpg";

const portfolioItems = [
    { title: "Lobola Ceremony", location: "Harare", image: portfolio1 },
    { title: "Wedding Story", location: "Bulawayo", image: portfolio2 },
    { title: "Birthday Portraits", location: "Borrowdale", image: portfolio3 },
    { title: "Family Session", location: "Avondale", image: portfolio4 },
    { title: "Graduation Shoot", location: "Harare", image: portfolio5 },
    { title: "Corporate Portraits", location: "CBD", image: portfolio6 },
];

const PortfolioWall = () => {
    return (
        <Box
            id="portfolio"
            sx={{
                pt: { xs: 14, md: 18 },
                pb: { xs: 8, md: 14 },
                background: "#050505",
            }}
        >
            <Container maxWidth="xl">
                <Box sx={{ maxWidth: 780, mb: { xs: 5, md: 8 } }}>
                    <Typography
                        sx={{
                            color: "primary.main",
                            textTransform: "uppercase",
                            letterSpacing: "0.35em",
                            fontSize: "0.78rem",
                            mb: 2,
                        }}
                    >
                        Portfolio Wall
                    </Typography>

                    <Typography variant="h2" sx={{ mb: 2 }}>
                        A living gallery of unforgettable stories.
                    </Typography>

                    <Typography sx={{ color: "text.secondary", maxWidth: 620 }}>
                        Explore real moments captured across Zimbabwe — from intimate lobola
                        ceremonies to polished corporate portraits.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(4, 1fr)",
                        },
                        gridAutoRows: { xs: "320px", md: "250px" },
                        gap: { xs: 2.5, md: 3 },
                    }}
                >
                    {portfolioItems.map((item, index) => {
                        const isLarge = index === 0;
                        const isWide = index === 3;

                        return (
                            <Box
                                key={item.title}
                                component={motion.div}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.08 }}
                                sx={{
                                    height: "100%",
                                    minHeight: { xs: 320, md: "auto" },
                                    gridColumn: {
                                        xs: "span 1",
                                        sm: "span 1",
                                        md: isLarge || isWide ? "span 2" : "span 1",
                                    },
                                    gridRow: {
                                        xs: "span 1",
                                        md: isLarge ? "span 2" : "span 1",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        height: "100%",
                                        p: { xs: 2.5, md: 3 },
                                        borderRadius: "34px",
                                        position: "relative",
                                        overflow: "hidden",
                                        cursor: "pointer",
                                        border: "1px solid rgba(214,181,109,0.18)",
                                        backgroundImage: `
                      linear-gradient(
                        180deg,
                        rgba(0,0,0,0.12) 0%,
                        rgba(0,0,0,0.45) 45%,
                        rgba(0,0,0,0.94) 100%
                      ),
                      url(${item.image})
                    `,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-end",
                                        transition: "all 0.4s ease",
                                        boxShadow: "0 24px 80px rgba(0,0,0,0.32)",
                                        "&:hover": {
                                            transform: "translateY(-8px) scale(1.01)",
                                            borderColor: "rgba(214,181,109,0.58)",
                                            boxShadow: "0 35px 100px rgba(0,0,0,0.55)",
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "primary.main",
                                            fontSize: "0.76rem",
                                            letterSpacing: "0.22em",
                                            textTransform: "uppercase",
                                            mb: 1,
                                        }}
                                    >
                                        {item.location}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: "1.8rem",
                                                md: isLarge ? "3rem" : "2.15rem",
                                            },
                                            lineHeight: 1.05,
                                            fontWeight: 900,
                                            letterSpacing: "-0.04em",
                                            maxWidth: 420,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: 1.5,
                                            color: "text.secondary",
                                            fontWeight: 800,
                                        }}
                                    >
                                        View Story →
                                    </Typography>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default PortfolioWall;