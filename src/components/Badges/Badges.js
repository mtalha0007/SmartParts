import { IconButton, Menu, MenuItem, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { ContextApi } from "../../store/context";

export default function Badges() {
  ///For Hover
  const [anchorEl, setAnchorEl] = useState(null);
  const { state, dispatch } = useContext(ContextApi);

  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  ///navigate t0 login page
  const handleNavigate = () => {
    navigate("/account");
    handleMenuClose();
  };

  ////NAvigate to Cart Page
  const handleNavigateToCart = () => {
    navigate("/cart");
  };
  const handleNavigateToOrders = () => {
    navigate("/orders");
  };
  return (
    <Box>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <IconButton onClick={handleNavigateToCart} sx={{ maxWidth: "24px" }}>
          <Badge
            badgeContent={
              state?.cart_items?.length > 0 ? state?.cart_items?.length : "0"
            }
            color="error"
          >
            <LuShoppingCart />
          </Badge>
        </IconButton>
        <IconButton onClick={handleNavigateToOrders} sx={{ maxWidth: "24px" }}>
          <Badge
            badgeContent={
              state?.orderedDetails?.data?.count > 0
                ? state?.orderedDetails?.data?.count
                : "0"
            }
            color="error"
          >
            <LiaShoppingBagSolid />
          </Badge>
        </IconButton>
        <IconButton onClick={handleMenuOpen}>
          <FaRegUserCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <Box sx={{ display: "flex", gap: "10px", padding: "10px" }}>
            <MenuItem
              onClick={handleNavigate}
              sx={{
                fontSize: "12px",
                color: "white",
                backgroundColor: "#df6a2d",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "#df6a2d",
                  color: "white",
                },
              }}
            >
              Login
            </MenuItem>

            <MenuItem
              onClick={handleNavigate}
              sx={{
                fontSize: "12px",
                color: "white",
                backgroundColor: "#df6a2d",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "#df6a2d",
                  color: "white",
                },
              }}
            >
              Register
            </MenuItem>
          </Box>
        </Menu>
      </Box>
    </Box>
  );
}
