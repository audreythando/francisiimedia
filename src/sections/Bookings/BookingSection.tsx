import {
    Box,
    Button,
    Container,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const packageOptions = [
    "Essential Story",
    "Signature Story",
    "Legacy Story",
    "Custom Quote",
];

const shootTypes = [
    "Wedding",
    "Lobola",
    "Birthday",
    "Graduation",
    "Family",
    "Corporate",
    "Other",
];

const BookingSection = () => {
    return (
        <Box
            id="booking"
            sx={{
                py: { xs: 8, md: 14 },
                background:
                    "linear-gradient(180deg, #050505 0%, #0b0b0b 50%, #050505 100%)",
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
                        gap: { xs: 5, md: 8 },
                        alignItems: "start",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                color: "primary.main",
                                textTransform: "uppercase",
                                letterSpacing: "0.35em",
                                fontSize: "0.78rem",
                                mb: 2,
                            }}
                        >
                            Bookings
                        </Typography>

                        <Typography variant="h2" sx={{ mb: 3 }}>
                            Reserve your date.
                        </Typography>

                        <Typography sx={{ color: "text.secondary", maxWidth: 560 }}>
                            Submit your booking request and Francisii Media will confirm
                            availability directly on WhatsApp. All bookings remain pending
                            until confirmed.
                        </Typography>

                        <Box
                            sx={{
                                mt: 4,
                                p: 3,
                                borderRadius: "28px",
                                background: "rgba(214,181,109,0.1)",
                                border: "1px solid rgba(214,181,109,0.25)",
                            }}
                        >
                            <Typography sx={{ fontWeight: 900, color: "primary.main", mb: 1 }}>
                                Cash-based bookings
                            </Typography>
                            <Typography sx={{ color: "text.secondary" }}>
                                Payments are handled manually in cash. Deposit status will be
                                updated by Francisii Media after confirmation.
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        component={motion.form}
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        sx={{
                            p: { xs: 3, md: 4 },
                            borderRadius: "34px",
                            background:
                                "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025))",
                            border: "1px solid rgba(214,181,109,0.18)",
                            display: "grid",
                            gap: 2.5,
                        }}
                    >
                        <TextField label="Full Name" fullWidth />

                        <TextField label="WhatsApp Number" fullWidth placeholder="+263..." />

                        <TextField select label="Shoot Type" fullWidth defaultValue="">
                            {shootTypes.map((type) => (
                                <MenuItem key={type} value={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField select label="Package" fullWidth defaultValue="">
                            {packageOptions.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            label="Preferred Date"
                            type="date"
                            fullWidth
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />

                        <TextField label="Event Location" fullWidth placeholder="Harare, Bulawayo..." />

                        <TextField label="Event Notes" fullWidth multiline minRows={4} />

                        <Button variant="contained" size="large">
                            Submit Pending Booking
                        </Button>

                        <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
                            After submitting, your request will be marked as pending. Francisii
                            Media will confirm or suggest another date via WhatsApp.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default BookingSection;