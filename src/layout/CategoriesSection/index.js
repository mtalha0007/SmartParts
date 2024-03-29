import { Box } from '@mui/material'
import React from 'react'
import TrendCategories from '../../components/Categories/TrendCategories'
import PopularCategories from '../../components/Categories/PopularCategories'

export default function index({data}) {
  return (
    <Box sx={{display:"flex",gap:"10px" ,padding:"10px"}}>
        <Box sx={{display: {sm: 'none' ,xs:"none" ,md:"flex"}}}><TrendCategories padding="5px" border="1px solid #eaebed" borderRadius="50px"/></Box>
        <Box sx={{
          width:{ xs:"100%", md:"78%"},
          margin:"0 auto" ,
          display:"flex",
          flexDirection:"column",
        }}>
          <PopularCategories  data={data}/>
          </Box>
    </Box>
  )
}
