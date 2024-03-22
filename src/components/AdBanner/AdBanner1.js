import { Box } from "@mui/material";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function AdBanner() {
  return (
    <Box className="" sx={{mt:"25px", p:"10px"}}>
      <Box
        className="row"
        sx={{
          p: "10px",
          backgroundColor: "#fff7ea",
          borderRadius: "5px",
          m:"0 auto"
        }}
      >
        <Box className="col-lg-8 col-sm-12" sx={{p:"25px"}}>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              mt: "15px",
              flexDirection: { sm: "row", xs: "column" },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#6c3428",
                letterSpacing: "1px",
                borderRadius: "30px",
                p: "5px 15px",
                textAlign: "center",
                color: "white",
                fontSize: "10px",
                fontWeight: "600",
                width: "160px",
              }}
            >
              TREND PRODUCTS
            </Box>
            <Box
              sx={{
                backgroundColor: "#f4ead5",
                letterSpacing: "1px",
                borderRadius: "30px",
                p: "5px 15px",
                textAlign: "center",
                color: "black",
                fontSize: "10px",
                fontWeight: "600",
                width: "160px",
              }}
            >
              PROMOTION PRICES
            </Box>
          </Box>
          <Box component={"h4"} sx={{ color: "#7d4b3f", mt: "15px" }}>
            Get 30% discount on all engine oils!
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              color: "#7d4b3f",
              fontSize: "11px",
              fontWeight: "600",
              flexDirection: { sm: "row", xs: "column" },
            }}
          >
            <Box>
              <Box
                component={"span"}
                sx={{ color: "#7d4b3f", fontSize: "12px", mr: "10px" }}
              >
                ✓
              </Box>
              SHELL POWER
            </Box>
            <Box>
              <Box
                component={"span"}
                sx={{ color: "#7d4b3f", fontSize: "12px", mr: "10px" }}
              >
                ✓
              </Box>
              PETROLX GO
            </Box>
            <Box>
              <Box
                component={"span"}
                sx={{ color: "#7d4b3f", fontSize: "12px", mr: "10px" }}
              >
                ✓
              </Box>
              ELF SPORT
            </Box>
          </Box>
        </Box>
        <Box className="col-md-6 col-lg-4" sx={{mt:"24px"}} >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "30px",
              p: "18px 30px",
              fontSize: "15px",
              fontWeight: "600",
              backgroundColor: "#f4ead5",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            <Box>Check Discount</Box>

            <Box component={"span"}>
              <MdOutlineArrowOutward />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
