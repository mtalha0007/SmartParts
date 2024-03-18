import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import Drawerproducts from "../DrawerProducts/Drawerproducts";

function AnchorTemporaryDrawer() {
  // *for icon change
  const [isHovered, setIsHovered] = useState(false);
  //* for drawer opening
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "15px",
                justifyContent: "flex-end",
                paddingRight: "8px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#df6a2d",
                  borderRadius: "5px",
                  height: "30px",
                  width: "30px",
                }}
              >
                <IconButton onClick={toggleDrawer(anchor, false)}>
                  <Box
                    sx={{ position: "absolute", left: "50%" ,display:"flex"}}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {!isHovered ? (
                      <CloseIcon
                        sx={{
                          fontSize: "13px",
                          color: "white",
                          transition: "transform 0.5s ease",
                        }}
                      />
                    ) : (
                      <RemoveIcon
                        sx={{
                          fontSize: "13px",
                          color: "white",
                          transition: "transform 0.5s ease",
                        }}
                      />
                    )}
                  </Box>
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ width: "350px" }}>
              <Box
                sx={{ fontSize: "18px", fontWeight: "600", padding: "10px" }}
              >
                Featured Products
              </Box>
              <Box>
                <Drawerproducts />
              </Box>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default AnchorTemporaryDrawer;
