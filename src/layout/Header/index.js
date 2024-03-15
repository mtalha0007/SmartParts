import React , {useState} from 'react';
import { Box, Divider } from '@mui/material';
import  CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import  AnchorTemporaryDrawer from "../../components/Drawer/Drawer"
import { FaFacebookF ,FaInstagram ,FaTwitter ,FaViber   } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
import Dropdown from "../../components/DropDown/Dropdown"

function Header() {
  
  const [isHovered, setIsHovered] = useState(false);
 const handleHidden = () =>{
    console.log("first")
    document.getElementById("discountNotify").style.display = "none";
 }

  return (
    <>
    <Box id="discountNotify" sx={{background:"-webkit-linear-gradient(0deg, #b7b7b7 0%, #e8e8e8 50%);"}}>
    <Box  sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: '100%',
      height: '100%',
      minHeight: '30px',
      maxWidth: '1420px',
      fontSize: '12px',
      color: '#4e4e4e',
      transition: 'height 0.5s, padding 0.5s',
      background: 'none',
      position: 'relative'
    }}>
      <p style={{margin:"0" , padding:"0"}}>30% discount on all products special for November! </p>
      <span onClick={handleHidden} style={{position:"absolute" , right:"30px" , top:"10px" ,color:"black" , cursor:"pointer" }} >
        <Box onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {!isHovered ? (
        <CloseIcon sx={{fontSize:"13px", transition: "transform 0.5s ease"}} />
      ) : (
        <RemoveIcon  sx={{fontSize:"13px" ,transition: "transform 0.5s ease"}} />
      )}
    </Box>
    </span>
    </Box>
      </Box>


<Box sx={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-between" , padding:"5px 20px" }}>
  <Box sx={{display:"flex" ,justifyContent:"space-between" , alignItems:"center" , gap:"10px"}}>
    {/* ///importing Drawer */}
    <Box  sx={{"@media screen and (max-width:1024px)":{
      display:"none"
    }}}><AnchorTemporaryDrawer/></Box>
    <Box sx={{display:"flex" ,justifyContent:"space-between" , alignItems:"center" , gap:"10px"}}>
      <Box><FaFacebookF /></Box>
       <Box><FaInstagram /></Box>
        <Box><FaTwitter /> </Box>
        <Box><FaViber  /></Box>
        </Box>
    <Box sx={{"@media screen and (max-width:1024px)":{
      display:"none"
    }}} >
     <Box sx={{backgroundColor:"#e0f0ff" ,fontWeight:"bold",alignItems:"center",display:"flex" ,justifyContent:"center",gap: "5px" ,padding:"2px 10px" }}>
       <Box sx={{fontSize:"13px",color:"#1e96fc" }}><BiMessage/></Box>
       <Box sx={{fontSize:"12px",color:"#1e96fc"}}>FREE SHIPPING FOR ALL ORDERS OF $340</Box>
     </Box>
    </Box>
  </Box>
  <Box  sx={{display:"flex" ,justifyContent:"space-around"  , alignItems:"center" , gap:"10px"}} >
    <Box>
    <Dropdown title={"LANGUAGES"} keyValue1={"English"} keyValue2={"Hindhi"} keyValue3={"GERMANY"} />
    </Box>
    <Box>
    <Dropdown title={"CURRENCY"} keyValue1={"USD"} keyValue2={"GBP"} keyValue3={"GLB"}/>
    </Box>
    <Box>
    <Dropdown title={"QUICK HELP"} keyValue1={"ORDER TRACKING"} keyValue2={"CONTACT"} keyValue3={"FAQ"}  keyValue4={"FIND US"}/>
    </Box>
    <Box sx={{width:"20px" , fontSize:"12px " , color:"black"}}>
    <svg className="svgNotification fitment-svg-icon" height="20px" viewBox="0 0 512 512" width="20px"><g clipRule="evenodd" fillRule="evenodd"><path d="m328.084 422.916c-5.04 37.808-37.451 66.165-75.592 66.165s-70.552-28.355-75.601-66.161l-2.432-18.208h156.052z" fill="#e4404d"></path><path d="m241.242 488.243c-33.1-4.935-59.807-31.3-64.351-65.324l-2.432-18.208h133.552l-2.427 18.204c-4.536 34.027-31.243 60.393-64.342 65.328z" fill="#fd4755"></path><path d="m85.729 189.68c0-91.962 74.801-166.76 166.763-166.76 91.963 0 166.753 74.798 166.753 166.76v180.95h-333.516z" fill="#e6bd5c"></path><path d="m85.729 189.68c0-49.496 21.676-94.011 56.026-124.577 24.848-14.719 53.819-23.183 84.736-23.183 91.963 0 166.753 74.798 166.753 166.76v161.95h-307.515z" fill="#ffd266"></path><path d="m420.819 354.471c18.314 0 33.199 14.885 33.199 33.2 0 18.314-14.886 33.199-33.199 33.199h-336.655c-18.313 0-33.199-14.886-33.199-33.199 0-18.314 14.884-33.2 33.199-33.2z" fill="#e6bd5c"></path><path d="m430.211 419.516c-2.979.88-6.13 1.354-9.392 1.354h-336.655c-18.313 0-33.199-14.886-33.199-33.199 0-5.941 1.568-11.52 4.309-16.348 2.978-.879 6.129-1.352 9.39-1.352h336.655c18.314 0 33.199 14.885 33.199 33.2.001 5.939-1.566 11.518-4.307 16.345z" fill="#ffd266"></path><path d="m230.068 138.4c0-63.686 51.793-115.48 115.479-115.48 63.687 0 115.488 51.791 115.488 115.48 0 63.693-51.794 115.491-115.488 115.491-63.693-.001-115.479-51.801-115.479-115.491z" fill="#d7d7d7"></path><path d="m230.068 138.4c0-63.184 50.983-114.654 113.979-115.461 62.997.807 113.988 52.273 113.988 115.461 0 63.192-50.984 114.665-113.988 115.471-63.003-.807-113.979-52.283-113.979-115.471z" fill="#efefef"></path><path d="m245.187 138.4c0-55.341 45.018-100.36 100.359-100.36 55.342 0 100.369 45.017 100.369 100.36 0 55.348-45.02 100.371-100.369 100.371-55.347 0-100.359-45.026-100.359-100.371z" fill="#e4404d"></path><path d="m348.797 38.098c53.843 1.722 97.118 46.047 97.118 100.302 0 54.26-43.269 98.591-97.118 100.313-53.848-1.722-97.11-46.056-97.11-100.313 0-54.253 43.268-98.58 97.11-100.302z" fill="#fd4755"></path><path d="m345.546 157.521c4.419 0 8-3.581 8-8.002v-62.35c0-4.419-3.581-8-8-8-4.41 0-8 3.581-8 8v62.35c.001 4.421 3.59 8.002 8 8.002zm8 27.41c0-4.421-3.581-8.002-8-8.002-4.41 0-8 3.58-8 8.002v4.709c0 4.41 3.59 8 8 8 4.419 0 8-3.59 8-8z" fill="#d7d7d7"></path><path d="m345.546 157.521c.617 0 1.218-.07 1.795-.202 1.447-1.448 2.343-3.448 2.343-5.658v-62.35c0-4.419-3.581-8-8-8-.616 0-1.216.07-1.793.202-1.448 1.448-2.345 3.447-2.345 5.655v62.35c.001 4.422 3.59 8.003 8 8.003zm4.138 29.552c0-4.421-3.581-8.002-8-8.002-.616 0-1.216.07-1.792.202h-.001c-1.448 1.448-2.345 3.447-2.345 5.657v4.709c0 4.41 3.59 8 8 8 .616 0 1.216-.07 1.791-.202 1.449-1.449 2.346-3.449 2.346-5.656v-4.708z" fill="#efefef"></path></g></svg>
    
    </Box>
    </Box>
</Box>
<Divider />
      </>
  );
}

export default Header;