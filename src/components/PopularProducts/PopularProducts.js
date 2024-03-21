import React from "react";
import CategorySlider from "../CategorySlider/CategorySlider";
import { Box } from "@mui/material";
import { Svgs } from "../../assets/images/index";
import { FaArrowRight } from "react-icons/fa";
export default function PopularProducts() {
  return (
    <Box sx={{ marginTop: "30px" }}>
      <Box
        sx={{
          display: "flex",
          padding: "0 10px",
          gap: "25px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box component={"h4"}>Popular Products</Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            cursor: "pointer",
            "@media screen and (max-width:767px)": {
              display: "none",
            },
          }}
        >
          <Box
            sx={{
              fontSize: "11px",
              fontWeight: "500",
              cursor: "pointer",
              border:"1px solid #eaebed",
              borderRadius:"20px",
              padding:"6px 14px"
            }}
          >
            ALL PRODUCTS
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              cursor: "pointer",
              border:"1px solid #eaebed",
              borderRadius:"20px",
              padding:"3px 12px"
           
            }}
          >
            <Box dangerouslySetInnerHTML={{ __html: Svgs["featured"] }}></Box>
            <Box
              sx={{
                fontSize: "11px",
                fontWeight: "500",
                marginTop:'6px'
              }}
            >
              FEATURED
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              cursor: "pointer",
              border:"1px solid #eaebed",
              borderRadius:"20px",
              padding:"3px 12px"
            }}
          >
            <Box dangerouslySetInnerHTML={{ __html: Svgs["bestSeller"] }}></Box>

            <Box
              sx={{
                fontSize: "11px",
                fontWeight: "500",
                marginTop:'6px'
              }}
            >
              BEST SELLER
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              cursor: "pointer",
              border:"1px solid #eaebed",
              borderRadius:"20px",
              padding:"3px 12px"
            }}
          >
            <Box dangerouslySetInnerHTML={{ __html: Svgs["topRated"] }}></Box>

            <Box
              sx={{
                fontSize: "11px",
                fontWeight: "500",
                marginTop:'6px'
              }}
            >
              TOP RATED
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              cursor: "pointer",
              border:"1px solid #eaebed",
              borderRadius:"20px",
              padding:"3px 12px"
            }}
          >
            <Box dangerouslySetInnerHTML={{ __html: Svgs["sale"] }}></Box>
            <Box
              sx={{
                fontSize: "11px",
                fontWeight: "500",
                marginTop:'6px'
              }}
            >
              ON SALE
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              cursor: "pointer",
              border:"1px solid #eaebed",
              borderRadius:"20px",
              padding:"3px 12px"
            }}
          >
            <Box dangerouslySetInnerHTML={{ __html: Svgs["stock"] }}></Box>
            <Box
              sx={{
                fontSize: "11px",
                fontWeight: "500",
                marginTop:'6px'
              }}
            >
              ON STOCK
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "20px",
            border:"1px solid #eaebed",
            padding: "7px 15px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "400",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "#f7f7f8",
            
            },
          }}
        >
          <Box>Check All Categories</Box>
          <Box  component={"span"}>
            <FaArrowRight />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ width: { md: "90%", sm: "85%", xs: "85%" }, margin: "30px auto" }}
      >
        <CategorySlider imgWidth="200px" slidesToShow={4} backgroundColor="#df6a2d"  color="white" />
      </Box>
    </Box>
  );
}
