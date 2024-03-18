import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Images from "../../assets/images/Images"



export default function CarCards() {
 const cardsData = [
    {
        title:"Car Rims",
        desc:"Free Shipping On Over $50",
        linkText:"See More Products",
        image:Images.carRims,
        bg:"#fcefe3",
        color:"#91563a"
    },
    
    {
        title:"Car Tires",
        desc:"Save 20% Today Limited",
        linkText:"See More Products",
        image:Images.carTyre,
        bg:"#e0f0ff",
        color:"#072ac8"
    },
    
    {
        title:"Brake Discs",
        desc:"Up to 20% off Apple Devices",
        linkText:"Buy Products",
        image:Images.carBrake,
        bg:"#ffeaea",
        color:"#BB1C1C"
    },
    
    {
        title:"Air Conditioner Cables",
        desc:"Up to 20% off Apple Devices",
        linkText:"Buy Products",
        image:Images.carCables,
        bg:"#f7f7f8",
        color:"#000000 "
    },
    
    {
        title:"Spare Parts",
        desc:"Up to 20% off Apple Devices",
        linkText:"Buy Products",
        image:Images.carParts,
        bg:"#dffff8",
        color:"#019267"
    },
    
 ]

  return (
    <Box sx={{ width: "100%", padding: "15px" }}>
      <Grid
        sx={{placeContent:"center"}}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
            {cardsData.map((elem,index)=>(
        <Grid item xs={12} md={index == 4 ? 12 : 6} lg={2.4} sx={{position:"relative" , overflow:"hidden"}}>

            
          <Box sx={{backgroundColor:`${elem.bg}` ,minHeight:"365px", padding:"15px", width:"100%",position:"relative" , overflow:"hidden"}} >
            <Box sx={{padding:"15px" }}>
              <Box component={"h4"} sx={{color:`${elem.color}`}}>{elem.title}</Box>
              <Box component={"p"} sx={{color:`${elem.color}` ,fontSize:"12px" ,fontWeight:"500"}}>{elem.desc}</Box>
              <Box  component={"p"}  sx={{color:`${elem.color}`,fontSize:"12px" ,fontWeight:"500",cursor:"pointer"}}>{elem.linkText}</Box>
            </Box>
            

            <img
              style={{position:"absolute" ,left:"-45px",bottom:"-60px", maxWidth:"100%" , height:"auto"}}
              src={elem.image}
              alt=""
              
              />
            
          </Box>
        </Grid>
          ))}
        </Grid>
    </Box>
  );
}
