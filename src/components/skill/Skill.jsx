"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Skill() {
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
        backgroundColor: "#0C1E2C",
        color: "#fff",
      }}
    >
      <Container sx={{ py: 7 }}>
        <Grid container justifyContent="center">
          <Grid
            item
            container
            xs={12}
            direction="column"
            alignItems="center"
            sx={{ marginBottom: 2 }}
          >
            <Typography variant="h3" align="center">
              Skills Set
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#ff4d4d" }}>
              --What I know--
            </Typography>
          </Grid>
          <Grid item container spacing={4}>
            {/* first grid item */}
            <Grid item xs={12} sm={6} sx={{ textAlign: "justify" }}>
              <Typography variant="h4">
                My creative skills & experiences
              </Typography>
              <br />
              <Typography variant="subtitle1">
                Welcome to my portfolio, where I showcase my creative skills and
                experiences gained throughout my journey.
              </Typography>
              <br />
              <Typography variant="subtitle1">
                As a passionate individual dedicated to creativity and
                innovation, I&apos;ve accumulated a diverse set of skills and
                valuable experiences across various domains.
              </Typography>
              <br />
              <Typography variant="subtitle1">
                Proficient in HTML, CSS, and JavaScript, with experience in
                building responsive and interactive web applications.
              </Typography>
              <Box sx={{ marginTop: 2 }}>
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
                  Read More
                </Button>
              </Box>
            </Grid>
            {/* second grid item */}
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {skills.map((skill, index) => (
                <Box key={index} sx={{ marginBottom: "8px", width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="subtitle2">{skill.name}</Typography>
                    <Typography variant="subtitle2">{skill.level}%</Typography>
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
