import { Box } from "@mui/material";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CategorySlider from "../../components/CategorySlider/CategorySlider"
export default function PopularCategories() {
  return (
    <>
      <Box sx={{ display: "flex", gap: "27px", alignItems: "center" }}>
        <Box component={"h4"}>Popular Categories</Box>
        <Box
          sx={{
            textTransform: "upperCase",
            fontSize: "12px",
            fontWeight: "500",
            cursor:"pointer"
          }}
        >
          All Products
        </Box>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" ,cursor:"pointer"}}>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              width="18"
              height="18"
            >
              <path d="M400.575,228.89l-8.39-.808a28.958,28.958,0,0,1-24-17.853l-.405-.966a29.175,29.175,0,0,1,4.2-30.109l5.087-6.142a6,6,0,0,0-.351-8.043L347.273,135.15a6,6,0,0,0-8.1-.405l-6.192,5.127a29.147,29.147,0,0,1-30.166,4.175l-.93-.393a28.978,28.978,0,0,1-17.776-23.969l-.814-8.355a5.919,5.919,0,0,0-5.973-5.33H235.051a5.92,5.92,0,0,0-5.973,5.33l-.808,8.345a28.926,28.926,0,0,1-17.855,23.978l-.964.391a29.178,29.178,0,0,1-30.108-4.207l-6.143-5.089a6,6,0,0,0-8.069.377l-29.819,29.818a6,6,0,0,0-.378,8.069l5.114,6.177a29.175,29.175,0,0,1,4.185,30.185c-.131.307-.261.614-.382.907a29.018,29.018,0,0,1-24,17.8l-8.43.812A6,6,0,0,0,106,234.862v42.276a6,6,0,0,0,5.425,5.972l8.39.808a28.958,28.958,0,0,1,24,17.853l.405.966a29.174,29.174,0,0,1-4.2,30.109l-5.087,6.143a6,6,0,0,0,.378,8.069l29.819,29.819a6,6,0,0,0,8.068.379l6.194-5.128a29.143,29.143,0,0,1,30.166-4.175l.929.393a28.978,28.978,0,0,1,17.776,23.969l.814,8.355a5.919,5.919,0,0,0,5.973,5.33h42.275a5.92,5.92,0,0,0,5.973-5.33l.808-8.345a28.922,28.922,0,0,1,17.849-23.975l.97-.394a29.176,29.176,0,0,1,30.108,4.207l6.143,5.089a6,6,0,0,0,8.069-.377l29.819-29.818a6,6,0,0,0,.379-8.069l-5.128-6.191a29.151,29.151,0,0,1-4.17-30.175l.4-.951A28.98,28.98,0,0,1,392.481,283.9l8.1-.79A6,6,0,0,0,406,277.138V234.862A6,6,0,0,0,400.575,228.89ZM251.823,394l-.042-108.345A4.162,4.162,0,0,1,253,282.634a4.4,4.4,0,0,1,3-1.239v.012a4.541,4.541,0,0,1,4.35,4.241L260.437,394Zm30.466-82.533.049,56.5a40.765,40.765,0,0,0-9.9,21.183l-.04-103.613A16.516,16.516,0,0,0,256.093,269h0a16.68,16.68,0,0,0-16.307,16.648l.039,102.559a40.724,40.724,0,0,0-10.35-20.938l-.049-55.965a99.892,99.892,0,0,0-18.081-57.022,53.972,53.972,0,0,1-9.546-30.874,54.631,54.631,0,0,1,27.644-47.574l.01,35.2a6,6,0,0,0,6,6l40.774.01h0a6,6,0,0,0,6-6l-.009-35.1a55.174,55.174,0,0,1,27.934,44.989,53.829,53.829,0,0,1-9.964,34.081A97.746,97.746,0,0,0,282.289,311.467ZM394,271.694l-2.684.262a40.964,40.964,0,0,0-33.851,25.112l-.36.852a41.107,41.107,0,0,0,5.969,42.531l1.644,1.985-22.094,22.093-1.936-1.6a41.135,41.135,0,0,0-42.44-6.009l-.872.365c-1.043.431-2.054.913-3.046,1.421l-.041-47.243a85.653,85.653,0,0,1,15.655-49.473,65.721,65.721,0,0,0,12.192-41.6c-1.2-26.4-18.824-50.293-43.866-59.445a6,6,0,0,0-8.06,5.638l.01,38.459-28.774-.007-.01-38.517a6,6,0,0,0-8.036-5.643,66.668,66.668,0,0,0-31.925,100.249,87.986,87.986,0,0,1,15.946,50.2l.041,47.023c-.772-.379-1.554-.743-2.355-1.076l-.838-.354a41.1,41.1,0,0,0-42.53,5.968l-1.985,1.644-22.095-22.094,1.6-1.936a41.136,41.136,0,0,0,6.007-42.444l-.363-.867a40.932,40.932,0,0,0-33.94-25.214L118,271.688V240.312l3.007-.29a41.005,41.005,0,0,0,33.926-25.137c.107-.258.215-.516.333-.788a41.141,41.141,0,0,0-5.976-42.562l-1.631-1.97,22.094-22.094,1.936,1.6a41.132,41.132,0,0,0,42.441,6.008l.871-.364a40.794,40.794,0,0,0,25.214-33.845L240.5,118h31.377l.291,2.931a40.888,40.888,0,0,0,25.1,33.846l.839.33a41.109,41.109,0,0,0,42.531-5.981L342.6,147.5l21.765,22.042-1.625,1.961a41.136,41.136,0,0,0-6.007,42.444l.363.867a40.931,40.931,0,0,0,33.94,25.213l2.967.286Z"></path>
              <path d="M231.34,252.288a53.417,53.417,0,0,1-6.017-11.44,6,6,0,0,0-11.219,4.26,65.464,65.464,0,0,0,7.37,14.011,91.638,91.638,0,0,1,8.238,14.58,6,6,0,0,0,10.947-4.916A103.706,103.706,0,0,0,231.34,252.288Z"></path>
              <path d="M216.464,232.315a6,6,0,0,0,5.507-6.456c-.117-1.474-.177-2.97-.177-4.446a6,6,0,0,0-12,0c0,1.791.072,3.607.214,5.4a6,6,0,0,0,5.974,5.525C216.142,232.334,216.3,232.328,216.464,232.315Z"></path>
              <path d="M483.224,235.349l-20.818-1.983a205.159,205.159,0,0,0-7.47-36.768l18.352-9.9a20.751,20.751,0,0,0-16.066-38.061l-20.024,6.29a208.018,208.018,0,0,0-19.267-28.444l13.333-16.109a20.767,20.767,0,0,0-29.2-29.269L385.841,94.473a208.433,208.433,0,0,0-31.3-20.767l5.967-19.956a20.783,20.783,0,0,0-38.327-15.572l-9.653,18.481A206.659,206.659,0,0,0,278.675,50.1L276.69,29.371a20.789,20.789,0,0,0-41.38,0L233.325,50.1a206.481,206.481,0,0,0-36.891,7.46L186.491,39.21a20.782,20.782,0,0,0-38.083,16.156l6.277,19.878a208.535,208.535,0,0,0-28.526,19.229L109.933,81.109a20.767,20.767,0,0,0-29.2,29.269l13.333,16.109A207.872,207.872,0,0,0,73.261,157.7l-20.1-5.979a20.669,20.669,0,0,0-25.133,12.074c-.008.022-.017.045-.027.068a20.653,20.653,0,0,0,9.676,26.159l18.49,9.609a205.268,205.268,0,0,0-6.571,33.737l-20.818,1.983a20.745,20.745,0,0,0,0,41.3l20.818,1.983a205.159,205.159,0,0,0,7.47,36.768L38.717,325.3a20.761,20.761,0,0,0,9.792,39.031,20.89,20.89,0,0,0,6.275-.969L74.8,357.069a208.018,208.018,0,0,0,19.267,28.444L80.74,401.618a20.762,20.762,0,0,0,29.2,29.269l16.221-13.36a208.484,208.484,0,0,0,31.3,20.767L151.5,458.245a20.779,20.779,0,0,0,38.327,15.572l9.65-18.476a206.659,206.659,0,0,0,33.853,6.563l1.985,20.719a20.788,20.788,0,0,0,41.38,0l1.985-20.72a206.481,206.481,0,0,0,36.891-7.46l9.94,18.34a20.652,20.652,0,0,0,18.2,10.876,20.991,20.991,0,0,0,8.169-1.667,20.662,20.662,0,0,0,11.719-25.365l-6.275-19.872a208.535,208.535,0,0,0,28.526-19.229l16.221,13.36a20.767,20.767,0,0,0,29.2-29.269l-13.329-16.105A207.872,207.872,0,0,0,438.739,354.3l20.1,5.979a20.922,20.922,0,0,0,5.973.875,20.66,20.66,0,0,0,19.16-12.949c.008-.022.017-.045.027-.068a20.653,20.653,0,0,0-9.676-26.159l-18.49-9.609a205.268,205.268,0,0,0,6.571-33.737l20.818-1.983a20.745,20.745,0,0,0,0-41.3ZM48.613,266.486l-18.7-1.781a8.744,8.744,0,0,1,0-17.41l18.7-1.781q-.262,5.211-.264,10.486T48.613,266.486Zm412.2-106.4a8.751,8.751,0,0,1,6.776,16.051l-16.5,8.9a205.523,205.523,0,0,0-8.226-19.308ZM409.7,90.372a8.767,8.767,0,0,1,12.324,12.355l-12,14.494a209.092,209.092,0,0,0-14.89-14.855ZM332.817,43.733a8.783,8.783,0,0,1,16.193,6.579l-5.361,17.931a206.034,206.034,0,0,0-19.5-7.914ZM247.255,30.515a8.789,8.789,0,0,1,17.49,0l1.781,18.606Q261.3,48.858,256,48.856t-10.526.265Zm-82.4,10.523a8.711,8.711,0,0,1,11.087,3.89l8.917,16.454A206.653,206.653,0,0,0,165.485,69.6l-5.633-17.843A8.722,8.722,0,0,1,164.853,41.038ZM89.98,102.727A8.767,8.767,0,0,1,102.3,90.372l14.563,11.994a209.092,209.092,0,0,0-14.89,14.855ZM43.208,179.371a8.706,8.706,0,0,1-4.068-11.05l.02-.052a8.709,8.709,0,0,1,10.577-5.048l18.036,5.365a205.257,205.257,0,0,0-7.924,19.433Zm7.98,172.538a8.751,8.751,0,0,1-6.776-16.052L60.9,326.965a205.523,205.523,0,0,0,8.226,19.308Zm51.121,69.715a8.767,8.767,0,0,1-12.325-12.355l11.993-14.49a209.092,209.092,0,0,0,14.89,14.855Zm76.877,46.637a8.782,8.782,0,0,1-16.194-6.579l5.359-17.925a206.3,206.3,0,0,0,19.5,7.914Zm85.559,13.218a8.788,8.788,0,0,1-17.49,0l-1.781-18.6q5.231.262,10.526.265t10.526-.265Zm82.407-10.52a8.716,8.716,0,0,1-11.095-3.892l-8.914-16.449a206.653,206.653,0,0,0,19.372-8.214l5.631,17.837A8.724,8.724,0,0,1,347.152,470.959Zm74.864-61.69a8.767,8.767,0,0,1-12.325,12.355l-14.558-11.99a209.092,209.092,0,0,0,14.89-14.855ZM256,451.144C148.117,451.144,60.349,363.6,60.349,256S148.117,60.856,256,60.856,451.651,148.4,451.651,256,363.883,451.144,256,451.144ZM468.792,332.629a8.706,8.706,0,0,1,4.068,11.05l-.02.052a8.711,8.711,0,0,1-10.577,5.048l-18.036-5.365a205.257,205.257,0,0,0,7.924-19.433Zm13.293-67.924-18.7,1.781q.262-5.211.264-10.486t-.264-10.486l18.7,1.781a8.744,8.744,0,0,1,0,17.41Z"></path>
              <path d="M256,76.3C156.527,76.3,75.6,156.911,75.6,256S156.527,435.7,256,435.7,436.4,355.089,436.4,256,355.473,76.3,256,76.3ZM256,423.7c-92.855,0-168.4-75.231-168.4-167.7S163.145,88.3,256,88.3,424.4,163.528,424.4,256,348.855,423.7,256,423.7Z"></path>
            </svg>
          </Box>
          <Box
            sx={{
              textTransform: "upperCase",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            Suspension
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center",cursor:"pointer" }}>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              width="18"
              height="18"
            >
              <path d="M136.362,252H95.809c-9.423,0-17.089,8.054-17.089,17.5S86.386,287,95.809,287h40.553c9.424,0,17.09-8.054,17.09-17.5S145.786,252,136.362,252ZM110,275H95.809c-2.807,0-5.089-2.671-5.089-5.5S93,264,95.809,264H110Zm26.362,0H122V264h14.362c2.806,0,5.09,2.671,5.09,5.5S139.168,275,136.362,275Z"></path>
              <path d="M414.511,252H373.957c-9.423,0-17.089,8.054-17.089,17.5s7.666,17.5,17.089,17.5h40.554c9.423,0,17.089-8.054,17.089-17.5S423.934,252,414.511,252ZM388,275H373.957c-2.806,0-5.089-2.671-5.089-5.5s2.283-5.5,5.089-5.5H388Zm26.511,0H400V264h14.511c2.806,0,5.089,2.671,5.089,5.5S417.317,275,414.511,275Z"></path>
              <path d="M276,294H236a26,26,0,0,0-26,26v6a26,26,0,0,0,26,26h40a26,26,0,0,0,26-26v-6A26,26,0,0,0,276,294Zm14,32a14,14,0,0,1-14,14H236a14,14,0,0,1-14-14v-6a14,14,0,0,1,14-14h40a14,14,0,0,1,14,14Z"></path>
              <path d="M233.066,149.422a6.042,6.042,0,0,0,1.2-.12c1.833-.371,3.7-.7,5.538-.973a6,6,0,1,0-1.77-11.869c-2.045.3-4.113.668-6.148,1.08a6,6,0,0,0,1.184,11.882Z"></path>
              <path d="M216.578,147.908a6,6,0,0,0-7.87-3.171,120.639,120.639,0,0,0-63.291,62.4A6,6,0,1,0,156.391,212a108.674,108.674,0,0,1,57.016-56.217A6,6,0,0,0,216.578,147.908Z"></path>
              <path d="M256,20A236,236,0,0,0,89.123,422.877,236,236,0,1,0,422.877,89.123,234.452,234.452,0,0,0,256,20Zm0,12A222.313,222.313,0,0,1,390.092,76.529l-7.515,25.713a198.866,198.866,0,0,0-259.99,5.908l-7.614-26.2A222.3,222.3,0,0,1,256,32ZM430.456,290.26a128.494,128.494,0,0,0-41.847,7.022c-48.409,16.639-87.082,61.2-103.45,119.209a219.76,219.76,0,0,0-5.524,25.265,187.947,187.947,0,0,1-45.9.157,218.542,218.542,0,0,0-5.8-26.2c-16.267-56.527-54.213-100.479-101.5-117.57a129.475,129.475,0,0,0-44.137-7.67,102.418,102.418,0,0,0-10.233.56A187.415,187.415,0,0,1,68.758,256q0-4.527.22-9H184.593a6,6,0,0,0,6-5.974C190.75,204.508,219.48,175.9,256,175.9s65.25,28.606,65.407,65.124a6,6,0,0,0,6,5.974H443.022q.213,4.475.22,9a187.509,187.509,0,0,1-3.275,34.9A83.267,83.267,0,0,0,430.456,290.26Zm6.894,12.429A187.851,187.851,0,0,1,292.144,439.728c1.2-6.778,2.728-13.471,4.564-19.978,15.3-54.22,51.113-95.759,95.8-111.119a116.513,116.513,0,0,1,37.947-6.371A65.544,65.544,0,0,1,437.35,302.689ZM221.247,440A187.838,187.838,0,0,1,74.689,302.836c2.614-.23,5.1-.367,7.6-.367a117.526,117.526,0,0,1,40.058,6.955c43.684,15.788,78.843,56.762,94.049,109.6A205.837,205.837,0,0,1,221.247,440ZM122.118,235a135.524,135.524,0,0,1,267.764,0H333.161a77.4,77.4,0,0,0-154.322,0Zm279.888,0a147.51,147.51,0,0,0-292.012,0H69.942C80.415,141.6,159.854,68.758,256,68.758S431.585,141.6,442.058,235Zm12.386,179.392A224,224,0,0,1,97.608,97.608q3.617-3.617,7.373-7.039l7.851,27.016A198.56,198.56,0,0,0,56.758,256c0,109.862,89.38,199.242,199.242,199.242S455.242,365.862,455.242,256a198.708,198.708,0,0,0-62.727-144.983l7.717-26.4q7.3,6.168,14.16,13a224,224,0,0,1,0,316.784Z"></path>
              <path d="M256,278.278A39.082,39.082,0,1,0,216.918,239.2,39.126,39.126,0,0,0,256,278.278Zm0-66.164A27.082,27.082,0,1,1,228.918,239.2,27.113,27.113,0,0,1,256,212.114Z"></path>
            </svg>
          </Box>
          <Box
            sx={{
              textTransform: "upperCase",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            Brake Calipers
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center",cursor:"pointer" }}>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="18"
              height="18"
              data-name="Layer 1"
            >
              <path d="m131.421 271.739c0 76.92 62.579 139.5 139.5 139.5s139.5-62.58 139.5-139.5-62.579-139.5-139.5-139.5-139.5 62.579-139.5 139.5zm139.5-127.5a127.5 127.5 0 1 1 -127.5 127.5 127.644 127.644 0 0 1 127.5-127.5z"></path>
              <path d="m270.921 304.438a32.7 32.7 0 1 0 -32.7-32.7 32.736 32.736 0 0 0 32.7 32.7zm0-53.4a20.7 20.7 0 1 1 -20.7 20.7 20.723 20.723 0 0 1 20.7-20.699z"></path>
              <path d="m270.952 373.114a101.376 101.376 0 1 0 -101.375-101.375 101.49 101.49 0 0 0 101.375 101.375zm-89.169-95.114h31.162a59.834 59.834 0 0 0 12.829 30.717l-22.016 22.083a89.27 89.27 0 0 1 -21.975-52.8zm83.217 82.918a89.342 89.342 0 0 1 -52.827-21.84l22.042-22.016a56.716 56.716 0 0 0 30.785 12.769zm12-.02v-31.085a56.975 56.975 0 0 0 30.824-12.819l21.911 21.939a89.384 89.384 0 0 1 -52.735 21.967zm61.291-30.264-21.937-22a59.7 59.7 0 0 0 12.76-30.634h31.007a89.071 89.071 0 0 1 -21.83 52.634zm21.83-64.634h-31.007a57.19 57.19 0 0 0 -12.76-30.891l21.937-21.874a89.445 89.445 0 0 1 21.83 52.765zm-83.121-83.421a89.384 89.384 0 0 1 52.735 21.965l-21.911 21.939a56.983 56.983 0 0 0 -30.824-12.819zm-5.971 42.769a46.391 46.391 0 1 1 -46.391 46.391 46.445 46.445 0 0 1 46.391-46.391zm-6.029-42.788v31.087a56.715 56.715 0 0 0 -30.785 12.768l-22.042-22.015a89.335 89.335 0 0 1 52.827-21.84zm-61.242 30.446 22.016 22.081a57.121 57.121 0 0 0 -12.829 30.913h-31.162a89.829 89.829 0 0 1 21.975-52.994z"></path>
              <path d="m229.42 131.521a5.99 5.99 0 0 0 1.2-.121c2.139-.433 4.314-.815 6.465-1.135a6 6 0 1 0 -1.77-11.869c-2.355.351-4.736.769-7.077 1.244a6 6 0 0 0 1.184 11.881z"></path>
              <path d="m133.524 203.376a6 6 0 0 0 8.017-2.78 127.367 127.367 0 0 1 64.72-61.632 6 6 0 0 0 -4.7-11.042 139.363 139.363 0 0 0 -70.818 67.437 6 6 0 0 0 2.781 8.017z"></path>
              <path d="m16.715 272h24.051a230.259 230.259 0 0 0 393.077 162.558 230.619 230.619 0 0 0 -162.82-393.558h-.023v-25a6 6 0 0 0 -6-6c-67.393 0-131.1 26.776-179.4 75.4s-74.885 112.752-74.885 180.6a6 6 0 0 0 6 6zm254.285-170.413v-48.587h.023a218.556 218.556 0 0 1 154.334 373.013 218.235 218.235 0 0 1 -372.591-154.013h49.534a6 6 0 0 0 6-6 158.018 158.018 0 0 1 46.23-112.1c29.684-29.864 68.916-46.311 110.468-46.311a6 6 0 0 0 6.002-6.002zm-176.886-7.733c44.586-44.888 102.941-70.239 164.886-71.779v73.618c-88.28 3.136-159.526 75.12-162.595 164.307h-73.617c1.519-62.431 26.712-121.231 71.326-166.146z"></path>
              <path d="m67 197.77a21 21 0 1 0 21 21 21.023 21.023 0 0 0 -21-21zm0 30a9 9 0 1 1 9-9 9.011 9.011 0 0 1 -9 9z"></path>
              <path d="m86 185.77a21 21 0 1 0 -21-21 21.023 21.023 0 0 0 21 21zm0-30a9 9 0 1 1 -9 9 9.011 9.011 0 0 1 9-9z"></path>
              <path d="m121 138.77a21 21 0 1 0 -21-21 21.023 21.023 0 0 0 21 21zm0-30a9 9 0 1 1 -9 9 9.011 9.011 0 0 1 9-9z"></path>
              <path d="m163 103.77a21 21 0 1 0 -21-21 21.023 21.023 0 0 0 21 21zm0-30a9 9 0 1 1 -9 9 9.011 9.011 0 0 1 9-9z"></path>
              <path d="m217 82.77a21 21 0 1 0 -21-21 21.023 21.023 0 0 0 21 21zm0-30a9 9 0 1 1 -9 9 9.011 9.011 0 0 1 9-9z"></path>
            </svg>
          </Box>
          <Box
            sx={{
              textTransform: "upperCase",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            Engine Oil
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center",cursor:"pointer" }}>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              viewBox="0 0 512 512"
              width="18"
              data-name="Layer 1"
            >
              <path d="m256 235a21 21 0 1 0 21 21 21.024 21.024 0 0 0 -21-21zm0 30a9 9 0 1 1 9-9 9.01 9.01 0 0 1 -9 9z"></path>
              <path d="m409.271 146.376a6 6 0 0 0 7.7.665l30.229-21.279a6.042 6.042 0 0 0 .789-.664l42.254-42.254a6 6 0 0 0 0-8.486l-52.6-52.6a6 6 0 0 0 -8.486 0l-42.257 42.253a6.169 6.169 0 0 0 -.663.789l-21.277 30.233a6 6 0 0 0 .664 7.7l4.431 4.431-79.825 79.82-5.365-5.365a6 6 0 0 0 -8.484 0l-11.229 11.228a14 14 0 0 1 -19.8 0l-11.972-11.973a6 6 0 0 0 -8.486 0l-4.619 4.619-78.33-78.333 4.431-4.431a6 6 0 0 0 .664-7.7l-21.279-30.229a6.169 6.169 0 0 0 -.663-.789l-41.507-41.511a6 6 0 0 0 -8.486 0l-52.605 52.6a6 6 0 0 0 0 8.486l41.512 41.514a6.042 6.042 0 0 0 .789.664l30.232 21.279a6 6 0 0 0 7.7-.665l4.431-4.431 78.332 78.332-5.365 5.365a6 6 0 0 0 0 8.485l11.969 11.971a14 14 0 0 1 0 19.8l-11.974 11.974a6 6 0 0 0 0 8.485l5.365 5.365-78.331 78.331-4.431-4.431a6 6 0 0 0 -7.7-.665l-30.229 21.279a6.042 6.042 0 0 0 -.789.664l-42.253 42.254a6 6 0 0 0 0 8.486l52.6 52.6a6 6 0 0 0 8.486 0l42.256-42.253a6.169 6.169 0 0 0 .663-.789l21.279-30.233a6 6 0 0 0 -.664-7.7l-4.431-4.431 78.332-78.332 4.619 4.619a6 6 0 0 0 8.486 0l11.972-11.973a14 14 0 0 1 19.8 0l11.228 11.227a6 6 0 0 0 8.484 0l5.365-5.365 79.825 79.824-4.431 4.431a6 6 0 0 0 -.664 7.7l21.276 30.233a6.169 6.169 0 0 0 .663.789l41.507 41.511a6 6 0 0 0 8.486 0l52.6-52.6a6 6 0 0 0 0-8.486l-41.507-41.514a6.042 6.042 0 0 0 -.789-.664l-30.232-21.279a6 6 0 0 0 -7.7.665l-4.431 4.431-79.82-79.823 4.619-4.618a6 6 0 0 0 0-8.486l-11.228-11.226a14 14 0 0 1 0-19.8l11.228-11.227a6 6 0 0 0 0-8.486l-4.619-4.618 79.824-79.825zm24.129-111.891 44.115 44.115-33.769 33.77-44.116-44.116zm-41.454 43.055 42.514 42.514-20.272 14.268-36.51-36.51zm-356.715 1.807 44.117-44.116 33.022 33.023-44.116 44.116zm62.581 54.975-20.272-14.268 42.513-42.514 14.269 20.272zm17.833-.862 17.815-17.815 78.332 78.332-17.815 17.816zm-37.045 344.055-44.115-44.115 33.769-33.77 44.116 44.116zm41.452-43.055-42.512-42.514 20.272-14.268 36.51 36.51zm13.406-38.1-17.813-17.82 78.332-78.332 17.815 17.815zm343.309 36.3-44.117 44.116-33.021-33.023 44.115-44.116zm-62.581-54.975 20.272 14.268-42.512 42.507-14.268-20.272zm-17.833.862-17.813 17.808-79.825-79.824 17.816-17.816zm-86.43-140.932a26 26 0 0 0 0 36.77l6.984 6.984-36.284 36.284-6.984-6.984a26 26 0 0 0 -36.771 0l-7.729 7.731-36.285-36.284 7.731-7.73a26 26 0 0 0 0-36.77l-7.731-7.73 36.285-36.286 7.73 7.731a26 26 0 0 0 36.769 0l6.985-6.985 36.284 36.284zm6.608-24.33-17.816-17.816 79.825-79.824 17.815 17.815z"></path>
              <path d="m172.291 114.682a6 6 0 0 0 0 8.485l46.609 46.607a6 6 0 0 0 8.485-8.485l-46.607-46.607a6 6 0 0 0 -8.487 0z"></path>
              <path d="m155.625 98.017a6 6 0 0 0 0 8.485l3.454 3.454a6 6 0 1 0 8.484-8.485l-3.454-3.454a6 6 0 0 0 -8.484 0z"></path>
            </svg>
          </Box>
          <Box
            sx={{
              textTransform: "upperCase",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            Fans
          </Box>
        </Box>
        <Box sx={{borderRadius:"20px",padding:"7px 15px",cursor:"pointer" ,color:"white",fontSize:"13px",fontWeight:"400" ,backgroundColor:"#df6a2d",display:"flex",gap:"10px",alignItems:"center", "&:hover": {
              backgroundColor: "#1e96fc",
              color:"white"
            },}}><Box>All Categories</Box> <Box sx={{color:"white"}} component={"span"}><FaArrowRight/></Box></Box>
      </Box>

      <Box sx={{width:"20%"}}><CategorySlider/></Box>
    </>
  );
}
