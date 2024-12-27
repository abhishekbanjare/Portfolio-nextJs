"use client";
import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typewriter } from "react-simple-typewriter";

import theme from "@/theme/theme";
export default function Home() {
  return (
    <Grid
      id="home"
      sx={{
        backgroundImage: "url('/img/home/backgroundimg2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "70vh",
      }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={7}
            sx={{
              // border: "1px solid blue",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "#fff",
              height: { xs: "60vh", sm: "100vh" },
              padding: "4px",
            }}
          >
            <Grid>
              <Typography variant="h6">Hello, my name is</Typography>
              <Typography variant="h1">Abhishek Banjare</Typography>
              <Typography variant="h2">
                And i&apos;m a{" "}
                <span style={{ color: theme.palette.crimson.main }}>
                  <Typewriter
                    words={[
                      "Software Developer",
                      "Website Developer",
                      "ReactJs Developer",
                      "NextJs Developer",
                    ]}
                    loop={0} // Infinite loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={1000}
                  />
                </span>
              </Typography>
              <Typography>
                <Button
                  variant="contained"
                  href="/pdfs/AbhishekResume.pdf" // Relative path to the file
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice
                  sx={{
                    backgroundColor: theme.palette.charcoalBlue.main,
                    color: "#fff",
                    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.3)",
                    // textTransform: "none",
                    transition: "all 0.3s ease",
                    width: { xs: "40%", sm: "40%", md: "26%" },
                    "&:hover": {
                      backgroundColor: theme.palette.blackPearl.main,
                      color: theme.palette.crimson.main,
                      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.4)",
                    },
                  }}
                >
                  Hire Me
                </Button>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            sm={4}
            sx={{
              // border: "1px solid red",
              display: {
                xs: "none",
                sm: "flex",
              },
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Image
              // src="/img/home/abhishek1.jpg"
              // src="/img/home/abhishek2.jpg"
              // src="/img/home/abhishek3.jpg"
              src="/img/home/abhishek4.jpg"
              alt="Description"
              layout="responsive"
              width={500}
              height={300}
              style={{
                maxWidth: "80%",
                maxHeight: "90vh",
                border: "6px solid #1e272e",
                borderRadius: "0px 30px 0px 30px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
