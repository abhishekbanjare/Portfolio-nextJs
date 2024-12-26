import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { styled } from "@mui/material/styles";

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

const SkillItem = ({ skill }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0.3,
    triggerOnce: false, // Allow re-triggering the animation
  });

  const [startAnimation, setStartAnimation] = useState(false);

  React.useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    } else {
      setStartAnimation(false);
    }
  }, [inView]);

  return (
    <Box ref={ref} sx={{ marginBottom: "16px", width: "100%" }}>
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
        value={startAnimation ? skill.level : 0}
        color={skill.color}
      >
        <motion.div
          className="progress-bar"
          initial={{ width: "0%" }}
          animate={{ width: startAnimation ? `${skill.level}%` : "0%" }}
          transition={{ duration: 1.5 }}
        />
      </CustomLinearProgress>
    </Box>
  );
};

export default SkillItem;
