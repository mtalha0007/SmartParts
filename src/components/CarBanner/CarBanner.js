import React from "react";
import { Images } from "../../assets/images/index";
import { Box } from "@mui/material";
export default function CarBanner() {
  const carBannerDetails = [
    {
      text: "New Product",
      title: "BMW Accessories",
      desc: "Up to 40% off Accessories",
      image: Images.bmwCar,
      bgColor: "#eae8ff",
      color: "#6c5ebc",
    },
    {
      text: "Trend Product",
      title: "Trend Steel Rims",
      desc: "Up to 22% off Gimbals",
      image: Images.simpleCar,
      bgColor: "#ffeaea",
      color: "#b20808",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
      }}
    >
      {carBannerDetails.map((elem) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            width: { sm: "90%",xs:"90%" },
          }}
        >
          <Box
            style={{
              backgroundColor: `${elem.bgColor}`,
              borderRadius: "5px",
              padding: "30px 10px",
              width: { lg:"100%" ,sm: "90%" },
            }}
          >
            <Box
              sx={{
                backgroundColor: `${elem.color}`,
                letterSpacing: "1px",
                borderRadius: "30px",
                padding: "5px 15px",
                color: "white",
                fontSize: "10px",
                fontWeight: "600",
                width: "120px",
                margin: "0px auto",
              }}
            >
              {elem.text}
            </Box>
            <Box
              sx={{
                color: `${elem.color}`,
                fontWeight: "600",
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              {elem.title}
            </Box>
            <Box
              component={"p"}
              sx={{
                color: `${elem.color}`,
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              Up to 40% off Accessories
            </Box>
            <Box
              component={"p"}
              sx={{
                color: `${elem.color}`,
                fontSize: "14px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              Check Details
            </Box>
          </Box>

          <Box
            sx={{
              background: `url(${elem.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              width: { lg: "220px", md: "220px", sm: "100%" },
              height: { lg: "auto", sm: "250px", xs: "250px" },
            }}
          ></Box>
        </Box>
      ))}
    </Box>
  );
}
