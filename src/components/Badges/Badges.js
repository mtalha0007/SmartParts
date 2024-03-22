import { Box } from '@mui/material'
import React from 'react'
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { TbRotateClockwise } from "react-icons/tb";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";

export default function Badges() {
  return (
    <Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <IconButton sx={{ maxWidth: "24px" }}>
              <Badge  badgeContent={4} color="error">
                <LiaShoppingBagSolid />
              </Badge>
            </IconButton>
            <IconButton
              sx={{
                display:{lg:"flex",xs:"none"},
                maxWidth: "24px",
              }}
            >
              <Badge badgeContent={1} color="error">
                <TbRotateClockwise />
              </Badge>
            </IconButton>
            <IconButton sx={{ maxWidth: "24px" }}>
              <Badge badgeContent={1} color="error">
                <FaRegHeart />
              </Badge>
            </IconButton>
            <IconButton>
              <FaRegUserCircle />
            </IconButton>
          </Box>
    </Box>
  )
}
