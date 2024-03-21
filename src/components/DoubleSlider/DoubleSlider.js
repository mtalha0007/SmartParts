import React from "react";
import CategorySlider from "../CategorySlider/CategorySlider";
import { Box } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
export default function DoubleSlider() {
  return (
    <Box sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        padding: "10px",
      }}
    >
      <Box sx={{ width: { md: "50%", sm: "85%", xs: "85%" }, margin: "30px auto" }} >
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Box component={"h4"}>Bestseller</Box>
          <Box sx={{ fontSize: "12px", color: "#555555" }}>
            All Products <FaArrowRight />
          </Box>
        </Box>
        <CategorySlider
          imgWidth="120px"
          slidesToShow={3}
          backgroundColor="#df6a2d"
          color="white"
        />
      </Box>
      <Box sx={{ width: { md: "50%", sm: "85%", xs: "85%" }, margin: "30px auto" }} >
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box component={"h4"}>Best Rated</Box>
          <Box sx={{ fontSize: "12px", color: "#555555" }}>
            All Products <FaArrowRight />
          </Box>
        </Box>
        <CategorySlider
          imgWidth="120px"
          slidesToShow={3}
          backgroundColor="#df6a2d"
          color="white"
        />
      </Box>
    </Box>
  );
}
