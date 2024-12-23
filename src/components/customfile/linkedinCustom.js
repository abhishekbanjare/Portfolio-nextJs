import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import Image from "next/image"; // Assuming you are using Next.js

const CustomGridLayout = ({ data }) => {
  const { title, description, buttons, image, techStack } = data;

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#ff7675",
        color: "white",
        marginBottom: "16px",
        boxShadow:
          "1px 1px 6px rgba(0, 0, 0, 1), 1px 3px 4px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* First Grid Item */}
      <Grid item xs={12} sm={6} padding={4} sx={{ backgroundColor: "#000" }}>
        <Typography variant="h5" textAlign="center">
          {title}
        </Typography>
        <Box
          textAlign="justify"
          sx={{
            "& .MuiTypography-root": {
              mb: 2,
              // fontSize: "1.3rem",
              // lineHeight: "1.3",
            },
          }}
        >
          {description.map((text, index) => (
            <Typography key={index}>{text}</Typography>
          ))}
        </Box>

        <Box display="flex" justifyContent="center" gap={2}>
          {buttons.map((button, index) => (
            // <Button
            //   key={index}
            //   variant="contained"
            //   color="primary"
            //   sx={{
            //     fontWeight: "bold",
            //     fontSize: "16px",
            //     padding: "10px 24px",
            //   }}
            // >
            //   {button.text}
            // </Button>
            <Button key={index} variant="contained" color="primary">
              {button.text}
            </Button>
          ))}
        </Box>
      </Grid>

      {/* Second Grid Item */}
      <Grid
        item
        xs={12}
        sm={6}
        padding={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      >
        <Box>
          <Grid>
            <Image
              src={image.src}
              alt={image.alt}
              // layout="responsive"
              style={{ width: "100%", height: "auto" }} // Ensure responsive behavior
              width={500}
              height={300}
            />
          </Grid>

          <Typography variant="h5" textAlign="center">
            Tech Stack
          </Typography>

          <Grid mt={2} display="flex">
            {techStack.map((tech, index) => (
              <Grid
                key={index}
                xs={4}
                sm={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Image
                    src={tech.src}
                    alt={tech.alt}
                    // layout="responsive"
                    style={{ width: "100%", height: "auto" }} // Ensure responsive behavior
                    width={100}
                    height={100}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CustomGridLayout;
