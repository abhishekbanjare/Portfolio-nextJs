import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CustomGridLayout from "../customfile/linkedinCustom";

export default function Project() {
  const projects = [
    {
      title: "Linkedin Clone",
      description: [
        "LinkedIn is a professional networking platform where individuals create profiles to showcase their skills, experiences, and accomplishments.",
        "It facilitates connections with other professionals, companies, and organizations, allowing users to network, seek job opportunities, share industry insights, and build their personal brand.",
        "LinkedIn has a robust job search feature where users can search for job openings posted by companies, as well as recruiters looking for candidates.",
      ],
      buttons: [{ text: "Live" }, { text: "Code" }],
      image: {
        src: "/img/linkedin/linkedin.png",
        alt: "LinkedIn Logo",
      },
      techStack: [
        { src: "/img/linkedin/html2.png", alt: "HTML Logo" },
        { src: "/img/linkedin/javaScript.png", alt: "JavaScript Logo" },
        { src: "/img/linkedin/reactjs.png", alt: "React Logo" },
      ],
    },
    {
      title: "Linkedin Clone",
      description: [
        "LinkedIn is a professional networking platform where individuals create profiles to showcase their skills, experiences, and accomplishments.",
        "It facilitates connections with other professionals, companies, and organizations, allowing users to network, seek job opportunities, share industry insights, and build their personal brand.",
        "LinkedIn has a robust job search feature where users can search for job openings posted by companies, as well as recruiters looking for candidates.",
      ],
      buttons: [{ text: "Live" }, { text: "Code" }],
      image: {
        src: "/img/linkedin/linkedin.png",
        alt: "LinkedIn Logo",
      },
      techStack: [
        { src: "/img/linkedin/html2.png", alt: "HTML Logo" },
        { src: "/img/linkedin/javaScript.png", alt: "JavaScript Logo" },
        { src: "/img/linkedin/reactjs.png", alt: "React Logo" },
      ],
    },
    {
      title: "Linkedin Clone",
      description: [
        "LinkedIn is a professional networking platform where individuals create profiles to showcase their skills, experiences, and accomplishments.",
        "It facilitates connections with other professionals, companies, and organizations, allowing users to network, seek job opportunities, share industry insights, and build their personal brand.",
        "LinkedIn has a robust job search feature where users can search for job openings posted by companies, as well as recruiters looking for candidates.",
      ],
      buttons: [{ text: "Live" }, { text: "Code" }],
      image: {
        src: "/img/linkedin/linkedin.png",
        alt: "LinkedIn Logo",
      },
      techStack: [
        { src: "/img/linkedin/html2.png", alt: "HTML Logo" },
        { src: "/img/linkedin/javaScript.png", alt: "JavaScript Logo" },
        { src: "/img/linkedin/reactjs.png", alt: "React Logo" },
      ],
    },
  ];

  return (
    <Box
      sx={{ paddingTop: "40px", paddingBottom: "40px" }}
      // sx={{
      //   paddingTop: "40px",
      //   backgroundImage: "url('img/background/img1.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // backgroundRepeat: "no-repeat",
      // }}
    >
      <Container id="projects">
        <Grid>
          <Typography
            variant="h4"
            align="center"
            sx={{ paddingBottom: "20px" }}
          >
            Project
          </Typography>
        </Grid>
        {/* .................. */}
        {projects.map((data, index) => (
          <Box key={index}>
            <CustomGridLayout data={data} />
          </Box>
        ))}
      </Container>
    </Box>
  );
}
