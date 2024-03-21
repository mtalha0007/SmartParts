import { Box } from '@mui/material'
import React from 'react'
import TrendCategories from '../../components/Categories/TrendCategories'
import PopularCategories from '../../components/Categories/PopularCategories'

export default function index() {
  return (
    <Box sx={{display:"flex",gap:"15px" ,padding:"10px"}}>
        <Box sx={{display: {sm: 'none' ,xs:"none" ,md:"flex"}}}><TrendCategories/></Box>
        <Box sx={{
          width:"76%",
          margin:"0 auto" ,
          display:"flex",
          flexDirection:"column",
          '@media screen and (max-width:900px)':{
            width:"100%",
        }}}>
          <PopularCategories/>
          </Box>
    </Box>
  )
}
