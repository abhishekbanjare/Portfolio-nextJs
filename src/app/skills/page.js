"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 80, color: "#f44336" },
    { name: "CSS", level: 60, color: "#2196f3" },
    { name: "JavaScript", level: 50, color: "#ffeb3b" },
    { name: "ReactJs", level: 65, color: "#00bcd4" },
    { name: "NextJs", level: 75, color: "#9c27b0" },
    { name: "DSA", level: 45, color: "#4caf50" },
    { name: "CPP", level: 85, color: "#ff9800" },
    { name: "C Language", level: 95, color: "#607d8b" },
  ];

  const CustomLinearProgress = styled(LinearProgress)({
    height: 8,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
  });

  return (
    <Box
      id="skills"
      sx={{
        paddingTop: "40px",
        paddingBottom: "40px",
        backgroundColor: "#edede9",
      }}
      // sx={{
      //   paddingTop: "40px",
      //   backgroundImage: "url('img/background/img6.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            sx={{ marginBottom: "20px" }}
          >
            <Typography variant="h4" align="center">
              My Skills
            </Typography>
            <Typography>--What I know--</Typography>
          </Grid>
          <Grid item container>
            {/* first grid item */}
            <Grid item xs={12} sm={6} padding={4} sx={{ textAlign: "justify" }}>
              <Typography variant="h5">
                My creative skills & experiences
              </Typography>
              <br />
              <Typography>
                Welcome to my portfolio, where I showcase my creative skills and
                experiences gained throughout my journey.
              </Typography>
              <br />
              <Typography>
                As a passionate individual dedicated to creativity and
                innovation, I've accumulated a diverse set of skills and
                valuable experiences across various domains.
              </Typography>
              <br />
              <Typography>
                Proficient in HTML, CSS, and JavaScript, with experience in
                building responsive and interactive web applications.
              </Typography>
              <Box sx={{ marginTop: 2 }}>
                <Button variant="contained">Read More</Button>
              </Box>
            </Grid>
            {/* second grid item */}
            <Grid item xs={12} sm={6} padding={4}>
              {skills.map((skill, index) => (
                <Box key={index} sx={{ marginBottom: "8px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>{skill.name}</Typography>
                    <Typography>{skill.level}%</Typography>
                  </Box>
                  <CustomLinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      marginTop: "0px",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: skill.color,
                      },
                    }}
                  />
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
