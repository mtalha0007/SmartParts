import React from "react";
import { Divider,IconButton,Box,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Svgs } from "../../assets/images";
import Dropdown from "../DropDown/Dropdown";
import { FaViber } from "react-icons/fa";
import TrendCategories from "./TrendCategories";

export default function NavigationBar() {
  return (
    <>
      <Box
        sx={{
          display:{md:"flex" ,xs:"none"},
          justifyContent: "space-beetween",
          padding: "12px",
          alignItems:"center"
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#df6a2d",
              padding: "0 10px 0 10px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>

            <Dropdown
              color="white"
              title={"ALL CATEGORIES"}
              keyValue1={<TrendCategories display="none"  borderBottom="1px solid #eaebed" />}
            />
          </Box>
          <Box
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              justifyContent: "space-around",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Box dangerouslySetInnerHTML={{ __html: Svgs["home"] }}></Box>
              <Box>
                <Dropdown
                  fontSize={"13px"}
                  title={"HOMEPAGES"}
                  keyValue1={"English"}
                  keyValue2={"Hindhi"}
                  keyValue3={"GERMANY"}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Box dangerouslySetInnerHTML={{ __html: Svgs["shopIcon"] }}></Box>
              <Box>
                <Dropdown
                  fontSize={"13px"}
                  title={"SHOP"}
                  keyValue1={"USD"}
                  keyValue2={"GBP"}
                  keyValue3={"GLB"}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Box dangerouslySetInnerHTML={{ __html: Svgs["gift"] }}></Box>
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
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Box dangerouslySetInnerHTML={{ __html: Svgs["speaker"] }}></Box>
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
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Box dangerouslySetInnerHTML={{ __html: Svgs["campaign"] }}></Box>
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
          </Box>
          {/* Other menu items */}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            mt: "15px",
          }}
        >
          <Box sx={{ color: "#1e96fc", fontSize: "28px" }}>
            <FaViber />
          </Box>
          <Box>
            <Box sx={{ fontSize: "15px", fontWeight: "500" }}>
              {" "}
              CALL ANYTIME
            </Box>
            <Box sx={{ fontSize: "15px", fontWeight: "500", color: "#1e96fc" }}>
              280 900 3434
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
}