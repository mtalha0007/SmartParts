import { Box } from '@mui/material';
import React from 'react'
import { IoSearch } from "react-icons/io5";
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';


export default function Searchbar({display , marginTop , width}) {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
      
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),    
          paddingLeft: "5px",
          transition: theme.transitions.create('width'),
          width: '100%',
          border:"2px solid #eaebed",
          
        },
      }));
  return (
    <Search sx={{display:"flex",justifyContent:"center" ,marginTop:{marginTop}, backgroundColor:"#f7f7f8" ,
    "@media screen and (max-width:1024px)":{
        display:{display},
      }
       }}>
      <StyledInputBase
        sx={{width}}
        placeholder="Search For Products"
        inputProps={{ 'aria-label': 'search' }}
      />
      <select className='dropDown' style={{border:"2px solid #eaebed",textAlign:"center",width:"70px" ,backgroundColor:"#f7f7f8"}}>
        
        <option defaultValue={true }>ALL</option>
        <option>1 </option>
      </select>
      <Box sx={{border:"2px solid #eaebed" , color:"black" , display:"flex" ,justifyContent:"center" , alignItems:"center" , width:'40px'}}>
      <IoSearch />
      </Box>
    </Search>
  )
}
