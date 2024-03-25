import React, { useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Box } from "@mui/material";

function Mydropdown({color, title, keyValue1, keyValue2, keyValue3, keyValue4 ,fontSize }) {
  //*for Hovered Text
  const [isHovered, setIsHovered] = useState(false);

  const items = [
    {
      key: "1",
      label: (
        <Box
          style={{ fontSize: fontSize}}
          target="_blank"
          rel="noopener noreferrer"
          href=""
        >
          {keyValue1}
        </Box>
      ),
    },
    {
      key: "2",
      label: (
        <Box
          style={{ fontSize: fontSize}}
          target="_blank"
          rel="noopener noreferrer"
          href=""
        >
          {keyValue2}
        </Box>
      ),
    },
    {
      key: "3",
      label: (
        <Box
          style={{ fontSize: fontSize}}
          target="_blank"
          rel="noopener noreferrer"
          href=""
        >
          {keyValue3}
        </Box>
      ),
    },
    {
      key: "4",
      label: (
        <Box
          style={{ fontSize: fontSize}}
          target="_blank"
          rel="noopener noreferrer"
          href=""
        >
          {keyValue4}
        </Box>
      ),
    },
  ];
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
      >
        <Box onClick={(e) => e.preventDefault()}>
          <Space
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              fontSize: fontSize,
              cursor: "pointer",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              transition: "transform 0.3s ease",
            }}
          >
            <Box
              sx={{
                color: color,
                transition: isHovered ? "transform 0.3s ease-in-out" : "",
                transform: isHovered ? "rotateX(360deg)" : "",
                textDecoration: "none",
              }}
            >
              {title}
            </Box>
            <DownOutlined />
          </Space>
        </Box>
      </Dropdown>
    </>
  );
}
export default Mydropdown;