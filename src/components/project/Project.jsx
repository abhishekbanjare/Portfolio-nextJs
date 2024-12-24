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
const projectsObj = [
  {
    title: "Portfolio Website",
    image: "/img/myWorks_img/project1.jpg",
    link: "https://example.com/portfolio",
  },
  {
    title: "E-Commerce App",
    image: "/img/myWorks_img/project2.jpg",
    link: "https://example.com/ecommerce",
  },
  {
    title: "E-Commerce App",
    image: "/img/myWorks_img/project3.png",
    link: "https://example.com/ecommerce",
  },
  {
    title: "E-Commerce App",
    image: "/img/myWorks_img/project4.jpg",
    link: "https://example.com/ecommerce",
  },
  {
    title: "E-Commerce App",
    image: "/img/myWorks_img/project5.jpg",
    link: "https://example.com/ecommerce",
  },
];
export default function Project() {
  return (
    <Box
      id="projects"
      sx={{
       
        backgroundColor: "#0C1E2C",
        color: "#fff",
      }}
    >
      <Container sx={{ py: 7 }}>
        <Grid>
          <Typography
            variant="h3"
            align="center"
            sx={{ paddingBottom: "20px" }}
          >
            Selected Works
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
                    sx={{ color: "#0C1E2C" }}
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
                      variant="contained"
                      sx={{
                        fontSize: "16px",
                        backgroundColor: "#0C1E2C",
                        color: "#fff",
                        px: 3,
                        textTransform: "none",
                        // boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.3)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#001219", // Hover background color
                          boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.3)", // Hover shadow effect
                        },
                      }}
                    >
                      Live
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#0C1E2C",
                        borderColor: "#0C1E2C",
                        "&:hover": {
                          color: "#0C1E2C",
                          borderColor: "#0C1E2C",
                        },
                      }}
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
