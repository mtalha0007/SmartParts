import { Box } from "@mui/material";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CategorySlider from "../../components/CategorySlider/CategorySlider";
import { Svgs } from "../../assets/images/index";
export default function PopularCategories() {
  return (
    <>
      <Box sx={{ display: "flex", gap: "15px", alignItems: "center" ,flexWrap:"wrap",}}>
        <Box component={"h4"}>Popular Categories</Box>
        <Box sx={{
            gap: "18px", alignItems: "center" ,cursor:"pointer",
             display:{xs:"none",sm:"flex"}
    
        }}>
        <Box
          sx={{
            textTransform: "upperCase",
            fontSize: "12px",
            fontWeight: "500",
            cursor:"pointer"
          }}
        >
          All Products
        </Box>
        <Box sx={{display: "flex", gap: "8px", alignItems: "center" ,cursor:"pointer"}}>
        <Box  dangerouslySetInnerHTML={{__html:Svgs["suspension"]}} ></Box>
          <Box
            sx={{
              textTransform: "upperCase",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            Suspension
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center",cursor:"pointer" }}>
        
           
              <Box  dangerouslySetInnerHTML={{__html:Svgs["brake"]}} ></Box>
         
          <Box
            sx={{
              textTransform: "upperCase",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            Brake Calipers
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center",cursor:"pointer" }}>
        <Box  dangerouslySetInnerHTML={{__html:Svgs["engine"]}} ></Box>
          <Box
            sx={{
              textTransform: "upperCase",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            Engine Oil
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center",cursor:"pointer" }}>
        <Box  dangerouslySetInnerHTML={{__html:Svgs["fans"]}} ></Box>
          <Box
            sx={{
              textTransform: "upperCase",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            Fans
          </Box>
        </Box>
      </Box>
        <Box sx={{borderRadius:"20px",p:"7px 13px",cursor:"pointer" ,color:"white",fontSize:"13px",fontWeight:"400" ,backgroundColor:"#df6a2d",display:"flex",gap:"8px",alignItems:"center", "&:hover": {
              backgroundColor: "#1e96fc",
              color:"white"
            },}}><Box>All Categories</Box> <Box sx={{color:"white"}} component={"span"}><FaArrowRight/></Box>
            </Box>
      </Box>

      <Box sx={{width:"90%"  ,m:"25px auto"}}>
 
        <CategorySlider imgWidth="150px" slidesToShow={4} backgroundColor="#f7f7f8" color="black"/>
        
        </Box>
    </>
  );
}