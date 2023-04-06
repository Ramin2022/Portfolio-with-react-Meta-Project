import * as React from "react"; 
import { VStack } from "@chakra-ui/react"; 
 
// Full screen section ,this modal
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => { 
 return ( 
   <VStack 
     backgroundColor={boxProps.backgroundColor} 
     color={isDarkBackground ? "white" : "black"} 
   > 
     <VStack id="meee"  minHeight="100vh" {...boxProps}> 
       {children} 
     </VStack> 
   </VStack> 
 ); 
}; 
 
export default FullScreenSection;