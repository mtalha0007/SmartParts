import React ,{useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { TbRotateClockwise } from "react-icons/tb";
import { FaRegHeart ,FaRegUserCircle  } from "react-icons/fa";
import Images from "../../assets/images/Images";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    border:"1px solid black",
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

 function PrimarySearchAppBar() {

  return (
    <Box sx={{ flexGrow: 1 , backgroundColor:"none" }}>
      <AppBar position="static" sx={{backgroundColor:"white"}}>
        <Toolbar>
          <IconButton 
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ "@media screen and (max-width:1024px)":{
              display:"block"
            },mr: 2 ,display:"none"}}
          >
            <MenuIcon />
          </IconButton>
          
            <img style={{maxWidth:"180px"}} src={Images.logo} />
         
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search For Products"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex'  }}>
            <IconButton>
              <Badge badgeContent={4} color="error">
                <LiaShoppingBagSolid  />
              </Badge>
            </IconButton>
            <IconButton
              >
              <Badge badgeContent={1} color="error">
                <TbRotateClockwise/>
              </Badge>
            </IconButton>
            <IconButton >
              <Badge badgeContent={1} color="error">
                <FaRegHeart />
              </Badge>
            </IconButton>
            <IconButton  >
              <FaRegUserCircle  />
            </IconButton>
          </Box>
          
        </Toolbar>
      </AppBar>
   
    
    </Box>
  );
}
export default PrimarySearchAppBar