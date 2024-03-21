import React from "react";
import { Box } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { Images } from "../../assets/images/index";

export default function EditorReview() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: "true",
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4,
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
      image: Images.blogPost1,
      brandName: "Samsung",
      name: "John Doe",
      date: "DECEMBER 15 2021",
      title: "If You Have an Iphone, You Won’t Look for a Computer",
      desc: "We all intend to plan ahead, but too often let the day-to-day minutia get in the way of making a…",
    },
    {
      image: Images.blogPost2,
      brandName: "Uncategorized",
      name: "John Doe",
      date: "DECEMBER 15 2021",
      title: "If You Have an Iphone, You Won’t Look for a Computer",
      desc: "We all intend to plan ahead, but too often let the day-to-day minutia get in the way of making a…",
    },
    {
      image: Images.blogPost3,
      brandName: "Sony",
      name: "John Doe",
      date: "DECEMBER 15 2021",
      title: "If You Have an Iphone, You Won’t Look for a Computer",
      desc: "We all intend to plan ahead, but too often let the day-to-day minutia get in the way of making a…",
    },
    {
      image: Images.blogPost4,
      brandName: "Samsung",
      name: "John Doe",
      date: "DECEMBER 15 2021",
      title: "If You Have an Iphone, You Won’t Look for a Computer",
      desc: "We all intend to plan ahead, but too often let the day-to-day minutia get in the way of making a…",
    },
    {
      image: Images.simpleCar,
      brandName: "Huawei",
      name: "John Doe",
      date: "DECEMBER 15 2021",
      title: "If You Have an Iphone, You Won’t Look for a Computer",
      desc: "We all intend to plan ahead, but too often let the day-to-day minutia get in the way of making a…",
    },
    {
      image: Images.verticalBanner3,
      brandName: "Apple",
      name: "John Doe",
      date: "DECEMBER 15 2021",
      title: "If You Have an Iphone, You Won’t Look for a Computer",
      desc: "We all intend to plan ahead, but too often let the day-to-day minutia get in the way of making a…",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Box component={"h4"}>Editor Reviews </Box>
        <Box sx={{ fontSize: "12px", color: "#555555" }}>
          Check All Articles <FaArrowRight />
        </Box>
      </Box>
      <Box>
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
                <Box
                  sx={{
                    position: "absolute",
                    top: "6px",
                    right: "6px",
                    fontSize: "10px",
                    fontWeight: "600",
                    backgroundColor: "#df6a2d",
                    color: "white",
                    padding: "2px 9px",
                    borderRadius: "5px",
                  }}
                >
                  {elem.brandName}
                </Box>

                <Card.Img
                  style={{ margin: "0 auto", height: "400px",opacity:"0.9" }}
                  variant="top"
                  src={elem.image}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: "35px",
                    bottom:"35px"
                    
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: "20px",fontWeight: "600",
                    color: "white",
                    fontSize: "10px", }}>
                    <Box>{elem.name}</Box>
                    <Box>{elem.date}</Box>
                  </Box>
                  <Box sx={{fontWeight: "600",
                    color: "white",
                    fontSize: "15px",
                    marginTop:"15px"}}>{elem.title}</Box>
                  <Box sx={{fontWeight: "400",
                    color: "white",
                    fontSize: "11px",
                    marginTop:"15px"}}>{elem.desc}</Box>
                </Box>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
