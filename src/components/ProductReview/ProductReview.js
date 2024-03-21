import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Box } from "@mui/material";
import { Images } from "../../assets/images/index";
import ReactStars from "react-stars";
import { FaArrowRight } from "react-icons/fa";
export default function ProductReview() {
  var settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
          dots: false,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const CardDetails = [
    {
      title: "John Doe",
      image:Images.brakes,
      disc:"Fitment Auto Parts is the indispensable address for high-end automotive parts that meet th",
      imgName:"AutoShack Front and Brake Rotors Silver",
      
    },
    {
        title: "John Doe",
        disc:"Fitment Auto Parts is the indispensable address for high-end automotive parts that meet th",
        image:Images.sliderImage6,
        imgName:"AutoShack Front and Brake Rotors Silver",
    },
    {
      title: "John Doe",
      disc:"Fitment Auto Parts is the indispensable address for high-end automotive parts that meet th",
      image:Images.sliderImage6,
      imgName:"AutoShack Front and Brake Rotors Silver",
    },
    {
        title: "John Doe", 
        disc:"Fitment Auto Parts is the indispensable address for high-end automotive parts that meet th",
        image:Images.sliderImage5,
        imgName:"AutoShack Front and Brake Rotors Silver",
    },
    {
        title: "John Doe",
        disc:"Fitment Auto Parts is the indispensable address for high-end automotive parts that meet th",
        image:Images.sliderImage3,
        imgName:"AutoShack Front and Brake Rotors Silver",
    },
    
  ];
  return (
    <Box sx={{padding:"10px",margin:"25px auto "}}>
       <Box
        sx={{
          display: "flex",
          alignItems:"center",
          // padding: "0 10px",
          gap: "40px",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent:"space-between "
        }}
      >
        <Box sx={{ display: "flex",
          alignItems:"center",}}>

        <Box component={"h4"}>Products Reviews</Box>
        <Box sx={{color:"#808080" ,fontSize:"12px" ,paddingLeft:"20px",marginLeft:"20px" ,borderLeft:"2px solid #eee" }}>Our references are very valuable, the result of a great effort...</Box>
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
          <Box>All Reviews</Box>
          <Box  component={"span"}>
            <FaArrowRight />
          </Box>
        </Box>
      </Box>

      <Box sx={{width:"90% ",margin:"10px auto"}}>
      <Slider {...settings}>
        {CardDetails.map((elem, index) => (
          <Box key={index}>
            <Card
              className="col-md-11 col-sm-12 "
              style={{
                margin: "0 auto",
                // width: "13rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
                
            
              <Card.Body>
                <Card.Title>
                  <Box
                    sx={{
                      padding: "10px",
                      width: "100%",
                    
                    }}
                  >
                    <Box>
                        <Box sx={{display:"flex" ,alignItems:"center" ,gap:"10px"}}>

                      <Box sx={{ fontSize: "15px" }}>{elem.title}</Box>
                      <Box sx={{ fontSize: "8px",borderRadius:"5px",border:"1px solid #df6a2d",padding:"3px 7px",textTransform:"uppercase" ,color:"#df6a2d"}}>Reviewer</Box>
                        </Box>
                      
                      <Box sx={{ marginTop: "10px" ,display:"flex" ,alignItems:"center" ,gap:"15px"}}>
                        <ReactStars count={5} size={15} color1={"#ffd700"} />
                        <Box sx={{ fontSize: "9px",borderRadius:"5px",padding:"3px 7px",color:"white",backgroundColor:"#019267"}}>5/5</Box>
                      </Box>
                       <Box sx={{fontSize:"13px",lineHeight:"20px",marginTop:"10px"}}>
                           {elem.disc}
                    </Box>
                       <Box sx={{fontSize:"11px",lineHeight:"20px",marginTop:"10px"}}>
                           2 months ago
                    </Box>
                    <Box sx={{display:"flex",padding:"10px 0px 0px 0px",borderTop: "1px solid #eaebed ",gap:"10px"}}>
                       <Box><img width={50} src={elem.image}/></Box>
                       <Box sx={{fontSize:"13px"}}>{elem.imgName}</Box>
                    </Box>
                    </Box>
                  </Box>
                </Card.Title>
              </Card.Body>
            </Card>
          </Box>
        ))}
      </Slider>
      </Box> 
    </Box>
  );
}
