// "use client";
// // pages/slider-gallery.js
// import React from "react";
// import { Box, Divider, Grid, Typography } from "@mui/material";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import theme from "@/theme/theme";

// // const images = [
// //   { src: "/img/gallery/galleryimg1.JPG", alt: "Gallery Image 1" },
// //   { src: "/img/gallery/galleryimg2.JPG", alt: "Gallery Image 2" },
// //   { src: "/img/gallery/galleryimg3.JPG", alt: "Gallery Image 3" },
// //   { src: "/img/gallery/galleryimg4.JPG", alt: "Gallery Image 4" },
// //   { src: "/img/gallery/galleryimg5.JPG", alt: "Gallery Image 5" },
// //   { src: "/img/gallery/galleryimg6.JPG", alt: "Gallery Image 6" },
// //   { src: "/img/gallery/galleryimg7.JPG", alt: "Gallery Image 7" },
// // ];
// const images = [
//   { src: "/img/gallery/img1.jpg", alt: "Gallery Image 1" },
//   { src: "/img/gallery/img2.jpg", alt: "Gallery Image 2" },
//   { src: "/img/gallery/img3.jpg", alt: "Gallery Image 3" },
//   { src: "/img/gallery/img4.jpg", alt: "Gallery Image 4" },
//   { src: "/img/gallery/img5.jpg", alt: "Gallery Image 5" },
//   { src: "/img/gallery/img6.jpg", alt: "Gallery Image 6" },
//   { src: "/img/gallery/img7.jpg", alt: "Gallery Image 7" },
//   { src: "/img/gallery/img8.jpg", alt: "Gallery Image 8" },
// ];
// const Gallery = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768, // For small devices
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 1024, // For medium devices
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <Box
//       id="gallery"
//       sx={{
//         backgroundColor: theme.palette.charcoalBlue.main,
//         color: "#fff",
//         pt: 7,
//       }}
//     >
//       <Grid
//         container
//         direction="column"
//         alignItems="center"
//         sx={{ mb: { xs: 2, sm: 4, md: 6 } }}
//       >
//         <Typography variant="h3" align="center">
//           My Gallery
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           sx={{ color: theme.palette.crimson.main }}
//         >
//           --A glimpse of my journey--
//         </Typography>
//       </Grid>
//       <Box sx={{ mb: 7 }}>
//         <Slider {...settings}>
//           {images.map((image, index) => (
//             <Box
//               key={index}
//               sx={{
//                 padding: "1rem",
//                 textAlign: "center",
//               }}
//             >
//               <img
//                 src={image.src}
//                 alt={image.title}
//                 style={{
//                   width: "100%",
//                   height: "250px",
//                   objectFit: "cover",
//                   borderRadius: "10px",
//                 }}
//               />
//               <Typography
//                 variant="subtitle1"
//                 sx={{ marginTop: "0.5rem", fontWeight: "500" }}
//               >
//                 {image.alt}
//               </Typography>
//             </Box>
//           ))}
//         </Slider>
//       </Box>

//       <Divider
//         sx={{
//           backgroundColor: "#ff3f34",
//           width: "66%",
//           margin: "0px",
//           mx: "auto",
//         }}
//       />
//     </Box>
//   );
// };

// export default Gallery;

// .....................................................................
"use client";
// pages/slider-gallery.js
import React from "react";
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
  { src: "/img/gallery/img7.jpg", alt: "Gallery Image 7" },
  { src: "/img/gallery/img8.jpg", alt: "Gallery Image 8" },
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
            breakpoint: 425, // For small devices
            settings: {
              slidesToShow: 1,
            },
          },
      {
        breakpoint: 768, // For small devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024, // For medium devices
        settings: {
          slidesToShow: 2, // Show 2 images on medium screens
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
      <Box sx={{ mb: 7 }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <img
                src={image.src}
                alt={image.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{ marginTop: "0.5rem", fontWeight: "500" }}
              >
                {image.alt}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>

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
