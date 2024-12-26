"use client";
import React from "react";
import Image from "next/image";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from "@/theme/theme";

const images = [
  { src: "/img/gallery/img1.jpg", alt: "Gallery Image 1" },
  { src: "/img/gallery/img2.jpg", alt: "Gallery Image 2" },
  { src: "/img/gallery/img3.jpg", alt: "Gallery Image 3" },
  { src: "/img/gallery/img4.jpg", alt: "Gallery Image 4" },
  { src: "/img/gallery/img5.jpg", alt: "Gallery Image 5" },
  { src: "/img/gallery/img6.jpg", alt: "Gallery Image 6" },
  { src: "/img/gallery/img8.jpg", alt: "Gallery Image 7" },
];

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 425, // Small devices
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Medium devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024, // Large devices
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box
      id="gallery"
      sx={{
        backgroundColor: theme.palette.charcoalBlue.main,
        color: "#fff",
        pt: 7,
      }}
    >
      {/* Title Section */}
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ mb: { xs: 2, sm: 4, md: 6 } }}
      >
        <Typography variant="h3" align="center">
          My Gallery
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ color: theme.palette.crimson.main }}
        >
          --A glimpse of my journey--
        </Typography>
      </Grid>

      {/* Image Slider */}
      <Box sx={{ mb: 7 }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: 3,
                // border: "1px solid blue",
                width: { xs: "90%", sm: "70%", md: "80%" },
                margin: "0 auto", // Center horizontally
                padding: "1rem", // Internal spacing
                marginRight: index === images.length - 1 ? "0" : "1rem", // Space between images
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={700} // Adjust width
                height={447}
                layout="responsive"
                objectFit="contain"
                style={
                  {
                    // borderRadius: "4px",
                  }
                }
              />
              <Typography
                variant="subtitle1"
                textAlign="center"
                sx={{
                  marginTop: "0.5rem",
                  fontWeight: "500",
                }}
              >
                {image.alt}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Divider */}
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
};

export default Gallery;
