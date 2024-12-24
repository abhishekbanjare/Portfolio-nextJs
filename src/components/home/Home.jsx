import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
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
            sm={6}
            sx={{
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
              <Typography variant="h2">And i&apos;m a Software Developer</Typography>
              <Typography>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: "16px",
                    backgroundColor: "#0C1E2C",
                    color: "#fff",
                    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.3)",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#001219",
                      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.4)",
                    },
                  }}
                >
                  Hire me
                </Button>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            sm={4}
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },

              justifyContent: "center",
              alignItems: "center",

              height: "100vh",
              padding: "4px",
            }}
          >
            <Image
              src="/img/home/abhishekabc.jpg"
              alt="Description"
              layout="responsive"
              width={500}
              height={300}
              style={{
                maxWidth: "80%",
                maxHeight: "80vh",
                border: "10px solid #1e272e",
                borderRadius: "0px 30px 0px 30px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
