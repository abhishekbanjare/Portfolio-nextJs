import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Homepage() {
  return (
    <Grid
      id="home"
      sx={{
        paddingTop: "40px",
        backgroundImage: "url('/img/home/backgroundimg2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Grid container justifyContent="center">
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
            color: "#fff",

            height: "100vh",
            padding: "4px",
          }}
        >
          <Grid>
            <Typography variant="h6" fontWeight="bold">
              Hello, my name is
            </Typography>
            <Typography variant="h2" fontWeight="bold">
              Abhishek Banjare
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              And i'm a Software Developer
            </Typography>
            <Typography>
              <Button variant="contained">Read More</Button>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          sm={4}
          sx={{
            display: {
              xs: "none", // Hide the image on extra small screens
              sm: "flex", // Show the image on small and larger screens
            },

            // display: "flex",
            justifyContent: "center",
            alignItems: "center",

            height: "100vh",
            padding: "4px",
          }}
        >
          <Image
            // src="/img/profile-11.jpg"
            src="/img/home/abhishekabc.jpg"
            alt="Description"
            layout="responsive"
            width={500}
            height={300}
            style={{
              maxWidth: "80%", // Ensures the image doesn't exceed the container width
              maxHeight: "80vh", // Optionally limit the height to fit within the viewport
              //   border: "10px solid #2f3542",
              border: "10px solid #1e272e",
              borderRadius: "0px 30px 0px 30px",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
