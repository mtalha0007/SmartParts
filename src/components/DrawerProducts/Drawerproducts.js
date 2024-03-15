import React from 'react';
import Images from "../../assets/images/Images";
import { Box } from '@mui/material';
import ReactStars from 'react-stars'
export default function Drawerproducts() {
    const products = [
        {
            name:"Multi-Vehicle Automatic Transmission Fluid",
            image: Images.product1,
            originalPrice:"$11.49",
            discountedPrice:"$7.99",
        },
        {
            name:"Mercedes Transmission Filter",
            image: Images.product2,
            originalPrice:"$25.99",
            discountedPrice:"$21.99",
        },
        {
            name:"RIDEX 3707A0009 Gear knob 28P85",
            image: Images.product3,
            originalPrice:"$162.99",
            discountedPrice:"$151.99",
        },
    ];

    return (
        <div>
            {products.map((data, index) => (
                <Box key={index} sx={{ display: "flex",alignItems:"center", padding: "20px", gap: "10px" }}>
                    <Box>
                        <img style={{ width: "40px", border: "1px solid #eaebed", borderRadius: "5px", padding: "5px" }} src={data.image} alt={data.name} />
                    </Box>
                    <Box>
                        <Box sx={{fontSize:"13px" ,fontWeight:'600'}}>{data.name}</Box>
                        {/* Assuming you have a star rating component */}
                        <Box sx={{marginTop:"5px"}}>
                            <ReactStars count={5} size={"5px"} color1={'#ffd700'} />
                    </Box>
                        <Box sx={{display:"flex" ,gap:"5px", marginTop:"5px"}}>
                        <Box sx={{fontSize:"13px",color:"#ed4b4b",textDecoration: 'line-through' ,fontWeight:'600'}}>{data.originalPrice}</Box>
                        <Box sx={{fontSize:"13px",color:"#b20808" ,fontWeight:'600'}}>{data.discountedPrice}</Box>
                        </Box>
                    </Box>
                </Box>
            ))}
        </div>
    );
}
