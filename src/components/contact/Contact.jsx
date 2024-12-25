"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import theme from "@/theme/theme";
import { Grid4x4TwoTone } from "@mui/icons-material";

export default function Contact() {
  const contactDetails = [
    { icon: PersonIcon, name: "Name", value: "Abhishek Banjare" },
    { icon: LocationOnIcon, name: "Address", value: "Raipur Chhatisgarh" },
    { icon: EmailIcon, name: "Email", value: "Suryaabhishek329@gmail.com" },
  ];

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#fff" }, // Default border color
      "&:hover fieldset": { borderColor: theme.palette.crimson.main }, // Hover color
      "&.Mui-focused fieldset": {
        borderColor: "#fff", // Focus color
        borderWidth: "2px", // Thicker border
      },
    },
    input: { color: "#fff" },
    label: { color: "#fff" },
  };

  return (
    <Box
      id="contact"
      sx={{
        // border: "1px solid red",

        backgroundColor: "#0C1E2C",
        color: "#fff",
      }}
    >
      <Container sx={{ py: 7 }}>
        <Grid container justifyContent="center">
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            sx={{ marginBottom: 2 }}
          >
            <Typography variant="h3" align="center">
              Contact Me
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.crimson.main }}
            >
              --get in touch--
            </Typography>
          </Grid>
          <Grid item container spacing={4} textAlign="justify" display="flex">
            {/* First Grid item */}
            <Grid item xs={12} sm={6}>
              <Typography variant="h4">Get in Touch</Typography>
              <Typography variant="subtitle1" sx={{ marginBottom: "20px" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                tempore explicabo dolorum ratione corporis non accusamus maxime
                omnis quo est!
              </Typography>
              <Box>
                {contactDetails.map((item, index) => (
                  <Grid
                    container
                    key={index}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Box item sx={{ marginRight: "20px" }}>
                      <item.icon sx={{ fontSize: "1.8rem" }} />
                    </Box>
                    <Box sx={{ marginBottom: "15px" }}>
                      <Typography variant="subtitle2">{item.name}:</Typography>
                      <Typography variant="subtitle2">{item.value}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Box>
            </Grid>
            {/* Second Grid item */}
            <Grid item xs={12} sm={6}>
              <Box
                container
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    // mb: 2,
                    input: { color: "#fff" },
                    label: { color: "#fff" },
                    fieldset: { borderColor: "#fff" },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <Typography variant="h4">Message me</Typography>
                {/* Name and Email in a single row */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-name"
                      label="Name"
                      fullWidth
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-email"
                      label="Email"
                      fullWidth
                      sx={textFieldStyles}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="outlined-subject"
                      label="Subject"
                      fullWidth
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-message"
                      label="Message.."
                      fullWidth
                      multiline
                      rows={2}
                      sx={textFieldStyles}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left" },
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: { xs: "80%", sm: "50%", md: "30%" },
                    backgroundColor: theme.palette.charcoalBlue.main,
                    color: "#fff",
                    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: theme.palette.crimson.main,
                      backgroundColor: theme.palette.blackPearl.main,
                      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.4)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
