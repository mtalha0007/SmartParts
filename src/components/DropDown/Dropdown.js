import React ,{useState} from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Box } from '@mui/material';

function Mydropdown ({title ,keyValue1,keyValue2 ,keyValue3 , keyValue4})  {
    const [isHovered, setIsHovered] = useState(false);
    const items = [
        {
          key: '1',
          label: (
            <a style={{fontSize:"10px"}} target="_blank" rel="noopener noreferrer" href="">
              {keyValue1}
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a style={{fontSize:"10px"}} target="_blank" rel="noopener noreferrer" href="">
              {keyValue2}
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a style={{fontSize:"10px"}} target="_blank" rel="noopener noreferrer" href="">
              {keyValue3}
            </a>
          ),
        },
        {
          key: '4',
          label: (
            <a style={{fontSize:"10px"}} target="_blank" rel="noopener noreferrer" href="">
              {keyValue4}
            </a>
          ),
        },
        
        
      ];
      return(
<>
          <Dropdown 
          menu={{
              items,
            }}
            >
    <a onClick={(e) => e.preventDefault()}>
    <Space
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  style={{ fontSize: "10px", cursor: "pointer", fontWeight: "600", display: "flex", alignItems: "center", transition: "transform 0.3s ease" }}
>
  <Box
    sx={{
      color: isHovered ? "#4e4e4e" : "#000000",
      transition:isHovered ? "transform 0.3s ease-in-out":"",  
    transform: isHovered ?"rotateX(360deg)":""
    
    }}
  >
    {title}
  </Box>
  <DownOutlined />
</Space>


    </a>
  </Dropdown>
  </>
      )
        }
export default Mydropdown;