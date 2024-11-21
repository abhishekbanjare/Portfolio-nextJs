// "use client"
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        paddingTop: "40px",
        paddingBottom: "40px",
        // backgroundColor: "#fefae0",
      }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid
            item
            container
            xs={12}
            direction="column"
            alignItems="center"
            sx={{ marginBottom: 2 }}
          >
            <Typography variant="h4" align="center">
              About me
            </Typography>
            <Typography>--Who I am--</Typography>
          </Grid>

          <Grid item container>
            {/* first grid item */}
            <Grid
              item
              xs={12}
              sm={5}
              // md={4}
              padding={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                // style={{ borderRadius: "0px 25px 0px 25px" }}
                sx={{ border: "1px solid #d6ccc2" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    width: "100%",
                    maxWidth: 280,
                    margin: "10px",
                  }}
                  // style={{ borderRadius: "0px 25px 0px 25px" }}
                >
                  <Image
                    src="/img/profile-11.jpg"
                    alt="Description"
                    layout="responsive"
                    width={500}
                    height={300}
                    // style={{ borderRadius: "0px 25px 0px 25px" }}
                  />
                </Box>
              </Box>
            </Grid>
            {/* second grid item */}
            <Grid
              item
              xs={12}
              sm={7}
              // md={8}
              padding={4}
              sx={{ textAlign: "justify" }}
            >
              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h5">
                  I'm Abhishek and I'm a Website Developer
                </Typography>
                <br />
                <Typography>
                  Want to be a successful Full Stack Web Developer, I am MCA
                  graduate with a strong passion for computer science and a
                  solid foundation in software development.
                </Typography>
                <br />
                <Typography>
                  Eager to kickstart my career in the tech industry and
                  contribute to innovative projects that drive digital
                  transformation.
                </Typography>
                <br />
                <Typography>
                  During my studies, I gained expertise in programming languages
                  like C , C++, Java, DSA, HTML, CSS and JavaScript as well as
                  React development.
                </Typography>
              </Box>
              <Box>
                <Button variant="contained">Download CV</Button>
              </Box>
            </Grid>
            {/* </Grid> */}
          </Grid>
          {/* ............ */}
        </Grid>
      </Container>
    </Box>
  );
}
