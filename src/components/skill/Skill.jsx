"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import theme from "@/theme/theme";

export default function Skill() {
  // Skills data
  const skills = [
    { name: "HTML", level: 80, color: "#f44336" },
    { name: "CSS", level: 60, color: "#2196f3" },
    { name: "JavaScript", level: 50, color: "#eb3b5a" },
    { name: "ReactJs", level: 65, color: "#26de81" },
    { name: "NextJs", level: 75, color: "#006266" },
    { name: "DSA", level: 45, color: "#EA2027" },
    { name: "MUI", level: 85, color: "#18dcff" },
  ];

  // Styled Progress Bar
  const CustomLinearProgress = styled(Box)(({ value, color }) => ({
    height: 8,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
    overflow: "hidden",
    position: "relative",

    "& .progress-bar": {
      position: "absolute",
      height: "100%",
      width: `${value}%`,
      backgroundColor: color,
      borderRadius: 5,
    },
  }));

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
            sx={{ marginBottom: { xs: 3, sm: 4, md: 5 } }}
          >
            <Typography variant="h3" align="center">
              Skills Set
            </Typography>
            <Typography variant="subtitle1" sx={{ color: theme.palette.crimson.main }}>
              --What I know--
            </Typography>
          </Grid>

          <Grid item container spacing={4}>
            {/* Left Text Section */}
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                textAlign: { xs: "center", sm: "left" },
                display: "flex",
                flexDirection: "column",
                justifyContent: { xs: "center", sm: "left" },
              }}
            >
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
                MCA graduate passionate about Front-End Development, skilled in
                creating responsive and interactive websites using Next.js,
                React.js, and Material-UI (MUI). Seeking to grow and contribute
                to a dynamic team.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" }, // Responsive alignment
                  alignItems: "center",
                  marginTop: { xs: 2, sm: 3 },
                }}
              >
                <Button
                  variant="contained"
                  // width: { xs: "80%", sm: "70%", md: "40%" },
                  sx={{
                    width: { xs: "80%", sm: "80%", md: "30%" },
                    backgroundColor: theme.palette.charcoalBlue.main,
                    color: "#fff",
                    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: theme.palette.crimson.main,
                      backgroundColor: theme.palette.blackPearl.main,
                      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.4)",
                    },
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Grid>

            {/* Right Progress Bars */}
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
              {skills.map((skill, index) => {
                // Hook for viewport visibility detection
                const { ref, inView } = useInView({
                  triggerOnce: false, // Trigger multiple times
                  threshold: 0.3, // Trigger at 30% visibility
                });

                return (
                  <Box
                    ref={ref}
                    key={index}
                    sx={{ marginBottom: "16px", width: "100%" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="subtitle2">{skill.name}</Typography>
                      <Typography variant="subtitle2">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <CustomLinearProgress
                      value={skill.level}
                      color={skill.color}
                    >
                      <motion.div
                        className="progress-bar"
                        initial={{ width: "0%" }}
                        animate={{ width: inView ? `${skill.level}%` : "0%" }}
                        transition={{ duration: 1.5 }}
                      />
                    </CustomLinearProgress>
                  </Box>
                );
              })}
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
