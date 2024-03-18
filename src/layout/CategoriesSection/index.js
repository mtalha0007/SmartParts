import { Box } from '@mui/material'
import React from 'react'
import TrendCategories from '../../components/Categories/TrendCategories'
import PopularCategories from '../../components/Categories/PopularCategories'

export default function index() {
  return (
    <Box sx={{display:"flex",gap:"30px" ,padding:"10px"}}>
        <Box sx={{display: {sm: 'none' ,xs:"none" ,lg:"flex"}}}><TrendCategories/></Box>
        <Box><PopularCategories/></Box>
    </Box>
  )
}
