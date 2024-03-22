import { Box, Input } from "@mui/material";
import React from "react";
import { Svgs } from "../../assets/images";

export default function FeedBack() {
  return (
    <Box sx={{ p: "10px" ,mt:"60px" ,position:"absolute" ,width:"100%" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#efefef",
          borderRadius:{lg:"50px" ,md:"50px" ,sm:"0px"},
          p: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box dangerouslySetInnerHTML={{ __html: Svgs["message"] }}></Box>
          <Box sx={{ fontWeight: "500", fontSize: "21px" }}>
            Sign Up to Newsletter
          </Box>
          <Box sx={{ color: "#4e4e4e", fontSize: "15px", fontWeight: "500" }}>
            ...and receive $20 coupon for first shopping
          </Box>
        </Box>

        <Box sx={{ pt: "10px", display: "flex"  }}>
          <input
            style={{
              border: "none",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              p: "5px",
              pr: "0",
              backgroundColor:"white",
            //   width:{lg:"auto" ,md:"100%"}
            }}
            placeholder="Your Email"
          />
          <Box
            component={"span"}
            sx={{
              backgroundColor: "#df6a2d",
              color: "white",
              borderBottomRightRadius: "20px",
              borderTopRightRadius: "20px",
              fontWeight: "bold",
              fontSize: "10px",
              p: "9px",
              pl: "5px",
            }}
          >
            SUBMIT
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
