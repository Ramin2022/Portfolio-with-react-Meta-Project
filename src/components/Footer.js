import React from "react"; 
import {Box, Flex} from "@chakra-ui/react"; 

// Footer component
const Footer = () => { 
 return ( 
   <Box backgroundColor="#18181b"> 
     <footer> 
       <Flex 
         margin="0 auto" 
         px={12} 
         color="white" 
         justifyContent="center" 
         alignItems="center" 
         
         height={16} 
       > 
         <p>Ramin • © 2023</p> 
       </Flex> 
     </footer> 
   </Box> 
 ); 
}; 
 
export default Footer; 