import { Box } from "@mui/material";
import React from "react";
import Images from "../../assets/images/Images";
export default function TrendCategories() {
const trendCategories = [
    {
        title:"All Products",
        image: Images.NolathaneSwayBar,
        count:"1",  
    },
    {
        title:"Brakes",
        image: Images.brakes,
        count:"5",  
    },
    {
        title:"Electrical",
        image: Images.electrical,
        count:"5",  
    },
    {
        title:"Engine",
        image: Images.engine,
        count:"5",  
    },
    {
        title:"Heating And Cooling",
        image: Images.heatingandCooling,
        count:"5",  
    },
    {
        title:"Steering",
        image: Images.steeringWheel,
        count:"4",  
    },
    {
        title:"Suspension",
        image: Images.suspension,
        count:"5",  
    },
]
  return (
    <Box>
      <Box component={"h4"}>Trend Categories</Box>
      <Box sx={{ 
        marginTop: "10px" ,
        display:"flex" ,
         flexDirection:"column" ,
         gap:"5px"
        }}>
      {trendCategories.map((elem)=>(
        <Box
          sx={{
            border: " 1px solid #eaebed",
            borderRadius: "50px",
            padding: "5px",
            cursor:"pointer",
            "&:hover": {
              backgroundColor: "#df6a2d",
              color:"white"
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              flex: 1,
              
            }}
          >
            <Box
              sx={{
                backgroundColor: "#f7f7f8",
                padding: "3px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50px",
                width: "53px",
                height: "47px",
              }}
            >
              <img
                style={{
                  padding: "30px",
                  borderRadius: "5px",
            
                }}
                height="100"
                src={elem.image}
              />
            </Box>
            <Box component={"span"} sx={{ flex: "1 0 auto" ,fontSize:"13px",textAlign:"center" }}>
              {elem.title}
            </Box>
            <Box
              component={"span"}
              sx={{
                backgroundColor: "#ffe8e8",
                color: "#b20808",
                fontSize: "11px",
                textAlign:"center",
                padding:'16px',
                borderRadius:"50%",
                width: "45px"
              }}
            >
              {elem.count}
            </Box>
          </Box>
        </Box>
        ))}
        </Box>
    </Box>
  );
}
