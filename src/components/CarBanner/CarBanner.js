import React from "react";
import { Images } from "../../assets/images/index";
import { Box } from "@mui/material";
export default function CarBanner() {
  return (
    <Box sx={{ display: "flex",justifyContent:"space-around",flexWrap:"wrap"  }}>
      <Box sx={{ display: "flex"}}>
        <Box className="col-md-6" style={{ backgroundColor: "#eae8ff", padding: "30px 10px"         }}>
          <Box
            sx={{
              backgroundColor: "#6c5ebc",
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
            NEW PRODUCT
          </Box>
          <Box
            sx={{
              color: "#6c5ebc",
              fontWeight: "600",
              fontSize: "30px",
              width: "40%",
            }}
          >
            BMW Accessories
          </Box>
          <Box
            component={"p"}
            sx={{
              color: "#6c5ebc",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            Up to 40% off Accessories
          </Box>
          <Box
            component={"p"}
            sx={{
              color: "#6c5ebc",
              fontSize: "14px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Check Details
          </Box>
        </Box>
        
        <Box className="col-md-6" sx={{
            background: `url(${Images.bmwCar})` ,
            backgroundColor:"red" ,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
             backgroundSize:"cover",
              width:"250px",
               }}>

        </Box>
       
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box className="col-md-6" style={{ backgroundColor: "#eae8ff", padding: "30px 10px"         }}>
          <Box
            sx={{
              backgroundColor: "#6c5ebc",
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
            NEW PRODUCT
          </Box>
          <Box
            sx={{
              color: "#6c5ebc",
              fontWeight: "600",
              fontSize: "30px",
              width: "40%",
            }}
          >
            BMW Accessories
          </Box>
          <Box
            component={"p"}
            sx={{
              color: "#6c5ebc",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            Up to 40% off Accessories
          </Box>
          <Box
            component={"p"}
            sx={{
              color: "#6c5ebc",
              fontSize: "14px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Check Details
          </Box>
        </Box>
        
        <Box className="col-md-6" sx={{
            background: `url(${Images.bmwCar})` ,
            backgroundColor:"red" ,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
             backgroundSize:"cover",
              width:"250px",
               }}>

        </Box>
       
      </Box>
      
    </Box>
  );
}
