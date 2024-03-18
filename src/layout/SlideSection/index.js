import React from "react";
import Slider from "../../components/Slider/Slider";
import Slider2 from "../../components/Slider/Slider2";
import { Box } from "@mui/material";
import ProductFrom from "../../components/ProductForm/ProductFrom";

export default function () {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        padding: "30px",
        "@media screen and (max-width:1024px)": {
          flexDirection: "column-reverse",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap:"20px",
          "@media screen and (max-width:1024px)": {
            flexDirection: "row-reverse",
          },
          "@media screen and (max-width:600px)": {
            flexDirection: "column-reverse",
          },
        }}
      >
        <Box
          sx={{
            width: "60%",
            "@media screen and (max-width:600px)": {
              width: "100%",
            },
          }}
        >
          <Slider />
        </Box>
        <Box
          sx={{
            width: "80%",
            "@media screen and (max-width:600px)": {
              width: "100%",
            },
          }}
        >
          <ProductFrom />
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Slider2 />
      </Box>
    </Box>
  );
}
