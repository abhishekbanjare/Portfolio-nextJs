"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import { Grid4x4TwoTone } from "@mui/icons-material";

export default function Contact() {
  const contactDetails = [
    { icon: PersonIcon, name: "Name", value: "Abhishek Banjare" },
    { icon: LocationOnIcon, name: "Address", value: "Raipur Chhatisgarh" },
    { icon: EmailIcon, name: "Email", value: "Suryaabhishek329@gmail.com" },
  ];
  return (
    <Box
      id="contact"
      sx={{
        paddingTop: "40px",
        paddingBottom: "40px",
        backgroundColor: "#edede9",
      }}
      // sx={{
      //   paddingTop: "40px",
      //   backgroundImage: "url('img/background/img1.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   color: "#fff",
      // }}
    >
      <Container sx={{ marginBottom: "40px" }}>
        <Grid container justifyContent="center">
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            sx={{ marginBottom: 2 }}
          >
            <Typography variant="h4" align="center">
              Contact Me
            </Typography>
            <Typography>--get in touch--</Typography>
          </Grid>
          <Grid item container textAlign="justify" display="flex">
            {/* First Grid item */}
            <Grid item xs={12} sm={6} padding={4}>
              <Typography variant="h5">Get in Touch</Typography>
              <Typography sx={{ marginBottom: "20px" }}>
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
                      <item.icon />
                    </Box>
                    <Box sx={{ marginBottom: "15px" }}>
                      <Typography>{item.name}:</Typography>
                      <Typography>{item.value}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Box>
            </Grid>
            {/* Second Grid item */}
            <Grid item xs={12} sm={6} padding={4}>
              <Box
                container
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <Typography variant="h5">Message me</Typography>
                {/* Name and Email in a single row */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField id="outlined-name" label="Name" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField id="outlined-email" label="Email" fullWidth />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField id="outlined-subject" label="Subject" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-message"
                    label="Message.."
                    fullWidth
                    multiline
                    rows={2}
                  />
                </Grid>
              </Box>
              <Box sx={{ marginTop: 2 }}>
                <Button variant="contained">Send Message</Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
