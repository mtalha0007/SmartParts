import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Images, Svgs } from "../../assets/images/index";
import Badges from "../Badges/Badges";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "../DropDown/Dropdown";
export default function FixedHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const shouldBeVisible = scrollTop > 0;
      setIsVisible(shouldBeVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        position: "fixed",
        top: "0",
        left: "0",
        opacity: isVisible ? "1" : "0",
        width: "100%",
        height: "auto",
        minHeight: "70px",
        zIndex: "105",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "opacity 0.3s ease",
        boxShadow: "0 15px 30px -4px rgb(0 0 0 /17%) ",
        transition:
          "opacity 0.4s cubic-bezier(.19,1,.22,1), transform 0.4s cubic-bezier(.19,1,.22,1)",
      }}
    >
      <Box sx={{ display: "flex", ml: "35px" }}>
        <IconButton
          size="large"
          edge="start"
          aria-label="open drawer"
          sx={{
            display:{md:"none",xs:"block"},
            padding:{lg:"auto",xs:"0px"},   
            mr: 2,
        
          }}
        >
          <MenuIcon />
        </IconButton>
        <img className="logo" style={{ maxWidth: "180px" }} src={Images.logo} />
      </Box>
     
        <Box
          sx={{
            // display: "flex",
            display:{md:"flex",sm:"none" ,xs:"none",},
            justifyContent: "space-around",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Box>
            <Dropdown
            fontSize={"13px"}
              title={"HOMEPAGES"}
              keyValue1={"English"}
              keyValue2={"Hindhi"}
              keyValue3={"GERMANY"}
            />
          </Box>
          <Box>
            <Dropdown
            fontSize={"13px"}
              title={"SHOP"}
              keyValue1={"USD"}
              keyValue2={"GBP"}
              keyValue3={"GLB"}
            />
          </Box>
          <Box>
            <Dropdown
            fontSize={"13px"}
              title={"PAGES"}
              keyValue1={"ORDER TRACKING"}
              keyValue2={"CONTACT"}
              keyValue3={"FAQ"}
              keyValue4={"FIND US"}
            />
          </Box>
          <Box>
            <Dropdown
            fontSize={"13px"}
              title={"FEATURES"}
              keyValue1={"ORDER TRACKING"}
              keyValue2={"CONTACT"}
              keyValue3={"FAQ"}
              keyValue4={"FIND US"}
            />
          </Box>
          <Box>
            <Dropdown
            fontSize={"13px"}
              title={"CAMPAIGNS"}
              keyValue1={"ORDER TRACKING"}
              keyValue2={"CONTACT"}
              keyValue3={"FAQ"}
              keyValue4={"FIND US"}
            />
          </Box>
        </Box>
    
      <Box>
        <Badges />
      </Box>
    </Box>
  );
}
