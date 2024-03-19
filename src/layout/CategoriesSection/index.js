import { Box } from '@mui/material'
import React from 'react'
import TrendCategories from '../../components/Categories/TrendCategories'
import PopularCategories from '../../components/Categories/PopularCategories'

export default function index() {
  return (
    <Box sx={{display:"flex",gap:"30px" ,padding:"10px"}}>
        <Box sx={{display: {sm: 'none' ,xs:"none" ,lg:"flex"}}}><TrendCategories/></Box>
        <Box sx={{
          width:"80%",
          margin:"0 auto" ,
          display:"flex",
          flexDirection:"column",
          '@media screen and (max-width:1030px)':{
            width:"100%",
        }}}>
          <PopularCategories/>
          </Box>
    </Box>
  )
}
