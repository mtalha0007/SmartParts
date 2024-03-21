import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Box } from "@mui/material";
import {Images} from "../../assets/images/index";
import ReactStars from "react-stars";

export default function CategorySlider({backgroundColor ,color,slidesToShow,imgWidth}) {

   
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: "true",
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            infinite: true,
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
        title:"Bling Rhinestones Car Steering Wheel",
        image: Images.sliderImage1,
        discountedPrice:"$9.99",
        originalPrice: "$41.99",
      },
      {
        title:"Multi-Vehicle Automatic Transmission Fluid",
        image: Images.sliderImage2,
        discountedPrice:"$11.99",
        originalPrice: "$7.99",
      },
      {
        title:"Mercedes Transmission Filter",
        image: Images.sliderImage3,
        discountedPrice:"$25.99",
        originalPrice: "$21.99",
      },
      {
        title:"RIDEX 3707A0009 Gear knob 28P85",
        image: Images.sliderImage4,
        discountedPrice:"$162.99",
        originalPrice: "$151.99",
      },
      {
        title:"Duralast Clutch NU31023B023B 23B",
        image: Images.sliderImage5,
        discountedPrice:"$89.99",
        originalPrice: "$120.99",
      },
      {
        title:"Duralast Gold Tie Rod End GES3663",
        image: Images.sliderImage6,
        discountedPrice:"$51.99",
        originalPrice: "$57.99",
      },
    ];
    return (
      <Box>
        <Slider {...settings}>
        {CardDetails.map((elem ,index)=>(
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
              <Box sx={{position:"absolute",top:"6px",left:"6px",fontSize:"10px",fontWeight:"600" ,backgroundColor:"#ed4b4b",color:"white",padding:"2px 9px" ,borderRadius:"5px"}}>
                Sale!
              </Box>
              <Box sx={{position:"absolute",left:"6px",top:"33px",fontSize:"10px",fontWeight:"600" ,backgroundColor:"#ffe8e8",color:"#ed4b4b",padding:"2px 9px" ,borderRadius:"5px"}}>
              15%
              </Box>
              <Card.Img
              style={{width:imgWidth ,margin:"0 auto"}}
                variant="top"
                src={elem.image}
              />
              <Card.Body>
                <Card.Title>
                  <Box
                    sx={{
                      padding: "10px",
                      width: "100%",
                      borderTop: "1px solid #eaebed ",
                    }}
                  >
                    <Box>
                      <Box sx={{ fontSize: "12px" }}>
                        {elem.title}
                      </Box>
                      <Box
                        sx={{ display: "flex", gap: "5px", marginTop: "10px" }}
                      >
                        <Box
                          sx={{
                            fontSize: "14px",
                            color: "#b20808",
                            textDecoration: "line-through",
                            fontWeight: "600",
                          }}
                        >
                          {elem.discountedPrice}
                        </Box>
                        <Box
                          sx={{
                            fontSize: "14px",
                            color: "#b20808",
                            fontWeight: "600",
                          }}
                        >
                         {elem.originalPrice}
                        </Box>
                      </Box>
                      <Box sx={{ marginTop: "10px" }}>
                        <ReactStars count={5} size={15} color1={"#ffd700"} />
                      </Box>
                      <Box
                        sx={{
                          fontSize: "12px",
                          paddingTop: "7px",
                          lineHeight: "18px",
                        }}
                      >
                        <Box>
                          <Box
                            component={"span"}
                            sx={{ color: "#5db99e", fontSize: "12px" }}
                          >
                            ✓
                          </Box>{" "}
                          5 Years Guarantee
                        </Box>
                        <Box>
                          <Box
                            component={"span"}
                            sx={{ color: "#5db99e", fontSize: "12px" }}
                          >
                            ✓
                          </Box>{" "}
                          Free Returns
                        </Box>
                        <Box>
                          <Box
                            component={"span"}
                            sx={{ color: "#5db99e", fontSize: "12px" }}
                          >
                            ✓
                          </Box>{" "}
                          Installment Options
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Card.Title>
                  <Button style={{width:"100%" ,border:"none", backgroundColor:backgroundColor ,color:color,fontSize:"13px"}}> Add to Cart</Button>
              </Card.Body>
            </Card>
          </Box>
          
          ))}
        </Slider>
      </Box>
    );
  
}
