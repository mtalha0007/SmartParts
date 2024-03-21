import { Box } from "@mui/material";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
export default function AdBanner() {
  return (
    <Box sx={{ marginTop: "25px", padding: "10px" }}>
      <Box
        sx={{
          backgroundColor: "#fee9ed",
          borderRadius: "5px",
          margin: "0 auto",
          paddingTop:"10px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap:"wrap"
        }}
      >
        <Box >
          <Box component={"h4"} sx={{ color: "#b20808", fontSize: "76px" }}>
            <Box>
              40
              <Box
                component={"span"}
                sx={{
                  fontSize: "45px",
                  position: "absolute",
                  marginleft: "7px",
                }}
              >
                %
              </Box>
              <Box
                component={"span"}
                sx={{ fontSize: "18px", left: "inherit", marginLeft: "7px" }}
              >
                OFF
              </Box>
            </Box>
          </Box>
        </Box>
        <Box >
          <Box sx={{ color: "#b20808", fontSize: "25px", fontWeight: "500",width:"300px" }}>
            Discount valid on all car accessories for November!
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "30px",
              padding: "18px 30px",
              fontSize: "15px",
              fontWeight: "600",
              backgroundColor: "#b20808",
              cursor: "pointer",
              color: "white",
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
