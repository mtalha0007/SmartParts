import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {Images} from "../../assets/images/index";
import Avatar from "@mui/material/Avatar";
import { GrHomeRounded } from "react-icons/gr";
import "../../App.css";
import Searchbar from "../SearchBar/Searchbar";
import { Divider } from "@mui/material";
import Badges from "../Badges/Badges";
import  AnchorTemporaryDrawer from "../Drawer/Drawer"
import { useNavigate } from "react-router-dom";

function PrimarySearchAppBar() {

  const navigate = useNavigate()

  const handleNavigate = () => {
   navigate("/")
  }
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "none" }}>
      <AppBar position="static" sx={{ backgroundColor: "white" , padding:"15px" , boxShadow:"none" }}>
        {/* SearchBar and IconButton for Mobile */}
        <Box
          sx={{
            display: "none",
            "@media screen and (max-width:1024px)": {
              display: "block",
        
            },
          }}
        >
          <Searchbar marginTop="10px" width="90ch" />
        </Box>
        <Toolbar
          sx={{
            padding:"0px",
            gap: "15px",
            "@media screen and (max-width:1024px)": {
              gap: "0px",
              marginTop:'15px'
            },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{
              "@media screen and (max-width:1024px)": {
                display: "block",
                
                padding: "0px",
              },
              mr: 2,
              display: "none",
            }}
          >
             <AnchorTemporaryDrawer />
          </IconButton>
          {/* SearchBar and IconButton for Mobile */}
          <img
           onClick={handleNavigate}
            className="logo"
            style={{ maxWidth: "180px" ,cursor:"pointer" }}
            src={Images.logo}
          />

          {/* SearchBar for Desktop */}
          <Box
            sx={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <Searchbar display="none" width="40ch" />
            <Avatar
              sx={{
                bgcolor: "#df6a2d",
                borderRadius: "5px",
                "@media screen and (max-width:1024px)": {
                  position: "absolute",
                  right: "136px",
                  top: "10px",
                },
                "@media screen and (max-width:600px)": {
                  top: "6px",
                },
                "@media screen and (max-width:480px)": {
                  width: "28px",
                  height: "30px",
                  top: "10px",
                },
              }}
              variant="square"
            >
              <IconButton sx={{ maxWidth: "30px", color: "white" }}>
                <GrHomeRounded />
              </IconButton>
            </Avatar>
          </Box>
         {/* ICONS with Badge */}
         <Badges />
      

        </Toolbar>
      </AppBar>
      <Divider />
    </Box>
  );
}
export default PrimarySearchAppBar;