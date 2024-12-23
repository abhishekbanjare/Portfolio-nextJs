import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "#0C1E2C",
        color: "#fff",
      }}
    >
      <Container sx={{ py: 3 }}>
        <Grid container justifyContent="center">
          <Grid
            item
            container
            xs={12}
            direction="column"
            alignItems="center"
            sx={{ marginBottom: { xs: 2, sm: 4, md: 6 } }}
          >
            <Typography variant="h3" align="center">
              About me
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#ff4d4d" }}>
              --Who I am--
            </Typography>
          </Grid>

          <Grid
            item
            container
            spacing={2}
            sx={{ justifyContet: "center", alignItems: "center" }}
          >
            {/* first grid item */}
            <Grid
              item
              xs={12}
              sm={5}
              // md={4}
              padding={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center", // Ensures content is centered horizontally
                  alignItems: "center", // Ensures content is centered vertically
                  width: "100%", // Ensures the Grid takes up full width
                }}
              >
                <Box
                  sx={{
                    borderRadius: "0px 25px 0px 25px",
                    width: { xs: "70%", sm: "90%", md: "66%" },
                    margin: "0 auto", // Centers the Box
                    display: "flex", // Makes Box a flex container
                    justifyContent: "center", // Centers content horizontally inside Box
                    alignItems: "center", // Centers content vertically inside Box
                    height: "auto", // Adjusts the height automatically based on content
                  }}
                >
                  <Image
                    src="/img/profile-11.jpg"
                    alt="Description"
                    width={1891}
                    height={2232}
                    layout="intrinsic" // Use intrinsic layout to maintain the aspect ratio
                    objectFit="contain" // Ensures the image fits within the Box container
                    style={{
                      borderRadius: "0px 25px 0px 25px", // Border radius on the Image
                      width: "100%", // Makes image take full width of its container
                      height: "auto", // Keeps the aspect ratio intact
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            {/* second grid item */}
            <Grid item xs={12} sm={7} sx={{ textAlign: "justify" }}>
              <Box sx={{ marginBottom: { xs: 2, sm: 3, md: 4 } }}>
                <Typography variant="h4" gutterBottom>
                  I'm Abhishek and I'm a Website Developer
                </Typography>
                {/* <br /> */}
                <Typography variant="subtitle1" gutterBottom>
                  MCA graduate passionate about Front-End Development with
                  expertise in React.js and Next.js. Skilled in building
                  responsive and interactive web applications. Seeking to
                  contribute to a dynamic team while continuously learning and
                  growing in a fast-paced environment.
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0C1E2C",
                    color: "#fff",
                    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#001219", // Hover background color
                      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.4)", // Hover shadow effect
                    },
                  }}
                >
                  Download CV
                </Button>
              </Box>
            </Grid>
            {/* </Grid> */}
          </Grid>
          {/* ............ */}
        </Grid>
      </Container>
      <Divider
        sx={{
          backgroundColor: "#ff3f34",
          width: "66%",
          margin: "0px",

          mx: "auto",
        }}
      />
    </Box>
  );
}