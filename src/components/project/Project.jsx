"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import React from "react";
import CustomGridLayout from "../customfile/linkedinCustom";
import theme from "@/theme/theme";
const projectsObj = [
  {
    title: "Portfolio Website",
    image: "/img/myWorks_img/project1.jpg",
    live: "https://raj-landing-page.netlify.app/",
    source: "https://example.com/ecommerce",
  },
  {
    title: "E-Commerce App",
    image: "/img/myWorks_img/project2.jpg",
    live: "https://gouthami-landing-page.netlify.app/",
    source: "https://example.com/ecommerce",
  },
  {
    title: "E-Commerce App",
    image: "/img/myWorks_img/project3.png",
    live: "https://example.com/ecommerce",
    source: "https://example.com/ecommerce",
  },
  {
    title: "E-Commerce App",
    image: "/img/myWorks_img/project4.jpg",
    live: "https://example.com/ecommerce",
    source: "https://example.com/ecommerce",
  },
  {
    title: "E-Commerce App",
    image: "/img/myWorks_img/project5.jpg",
    live: "https://example.com/ecommerce",
    source: "https://example.com/ecommerce",
  },
];
export default function Project() {
  const handleButtonLive = (live) => {
    window.open(live, "_blank");
  };
  const handleButtonSourceCode = (source) => {
    window.open(source, "_blank");
  };
  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: "#0C1E2C",
        color: "#fff",
      }}
    >
      <Container sx={{ py: 7 }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: { xs: 3, sm: 4, md: 6 },
          }}
        >
          <Typography variant="h3" align="center">
            Selected Works
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.crimson.main }}
          >
            --Explore My Work--
          </Typography>
        </Grid>
        {/* .................. */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
          sx={{ display: "flex", flexDirection: "row" }}
        >
          {projectsObj.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px) scale(1.00)",
                    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                {/* Heading Text */}
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    sx={{ color: theme.palette.charcoalBlue.main }}
                  >
                    {project.title}
                  </Typography>
                </CardContent>

                {/* Image */}
                <CardMedia
                  component="img"
                  height="250"
                  image={project.image}
                  alt="Project Image"
                />

                {/* Buttons */}
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Button
                      variant="outlined"
                      sx={{
                        // width: { xs: "80%", sm: "80%", md: "30%" },
                        backgroundColor: theme.palette.charcoalBlue.main,
                        color: "#fff",
                        textTransform: "none",
                        transition: "all 0.7s ease-in-out",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: theme.palette.charcoalBlue.main,
                          borderColor: theme.palette.charcoalBlue.main,
                          boxShadow: "none",
                          transition: "all 0.3s ease-in-out",
                        },
                      }}
                      onClick={() => handleButtonLive(project.live)}
                    >
                      Live
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        color: theme.palette.charcoalBlue.main,
                        borderColor: theme.palette.charcoalBlue.main,
                        "&:hover": {
                          color: theme.palette.crimson.main,
                          borderColor: theme.palette.crimson.main,
                        },
                      }}
                      onClick={() => handleButtonSourceCode(project.source)}
                    >
                      Source Code
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
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
