import React from "react";
import { Box, Typography, Link, Container, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 4, backgroundColor: "#000", color: "#ffffff", mt: "auto" }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" fontWeight="bold">
          Created By AbhishekBanjare | © {new Date().getFullYear()} All rights
          reserved.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <IconButton
            aria-label="LinkedIn"
            component={Link}
            href="https://www.linkedin.com/feed/"
            target="_blank"
            sx={{ color: "#ffffff" }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="GitHub"
            component={Link}
            href="https://github.com/abhishekbanjare"
            target="_blank"
            sx={{ color: "#ffffff" }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            component={Link}
            href="https://twitter.com/your-twitter-username"
            target="_blank"
            sx={{ color: "#ffffff" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            component={Link}
            href="https://www.instagram.com/your-instagram-username"
            target="_blank"
            sx={{ color: "#ffffff" }}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
