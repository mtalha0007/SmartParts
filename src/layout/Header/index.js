import React, { useState } from "react";
import { Box, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AnchorTemporaryDrawer from "../../components/Drawer/Drawer";
import { FaFacebookF, FaInstagram, FaTwitter, FaViber } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
import Dropdown from "../../components/DropDown/Dropdown";
import {Svgs } from "../../assets/images/index"
function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const handleHidden = () => {
    console.log("first");
    document.getElementById("discountNotify").style.display = "none";
  };

  return (
    <>
      <Box
        id="discountNotify"
        sx={{
          background: "-webkit-linear-gradient(0deg, #b7b7b7 0%, #e8e8e8 50%);",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
            minHeight: "30px",
            maxWidth: "1420px",
            fontSize: "12px",
            color: "#4e4e4e",
            transition: "height 0.5s, padding 0.5s",
            background: "none",
            position: "relative",
          }}
        >
          <p style={{ margin: "0", padding: "0" }}>
            30% discount on all products special for November!{" "}
          </p>
          <span
            onClick={handleHidden}
            style={{
              position: "absolute",
              right: "30px",
              color: "black",
              cursor: "pointer",
            }}
          >
            <Box
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {!isHovered ? (
                <CloseIcon
                  sx={{ fontSize: "13px", transition: "transform 0.5s ease" }}
                />
              ) : (
                <RemoveIcon
                  sx={{ fontSize: "13px", transition: "transform 0.5s ease" }}
                />
              )}
            </Box>
          </span>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "5px 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* ///importing Drawer */}
          <Box
            sx={{
              "@media screen and (max-width:1024px)": {
                display: "none",
              },
            }}
          >
            <AnchorTemporaryDrawer />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box>
              <FaFacebookF />
            </Box>
            <Box>
              <FaInstagram />
            </Box>
            <Box>
              <FaTwitter />{" "}
            </Box>
            <Box>
              <FaViber />
            </Box>
          </Box>
          <Box
            sx={{
              "@media screen and (max-width:1024px)": {
                display: "none",
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#e0f0ff",
                fontWeight: "bold",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                gap: "5px",
                padding: "2px 10px",
              }}
            >
              <Box sx={{ fontSize: "13px", color: "#1e96fc" }}>
                <BiMessage />
              </Box>
              <Box sx={{ fontSize: "12px", color: "#1e96fc" }}>
                FREE SHIPPING FOR ALL ORDERS OF $340
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box>
            <Dropdown
            fontSize={"10px"}
              title={"LANGUAGES"}
              keyValue1={"English"}
              keyValue2={"Hindhi"}
              keyValue3={"GERMANY"}
            />
          </Box>
          <Box>
            <Dropdown
              fontSize={"10px"}
              title={"CURRENCY"}
              keyValue1={"USD"}
              keyValue2={"GBP"}
              keyValue3={"GLB"}
            />
          </Box>
          <Box>
            <Dropdown
              fontSize={"10px"}
              title={"QUICK HELP"}
              keyValue1={"ORDER TRACKING"}
              keyValue2={"CONTACT"}
              keyValue3={"FAQ"}
              keyValue4={"FIND US"}
            />
          </Box>
          <Box sx={{ width: "20px", fontSize: "12px ", color: "black" }}>
           <Box  dangerouslySetInnerHTML={{__html:Svgs["bell"]}} ></Box>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
}

export default Header;
