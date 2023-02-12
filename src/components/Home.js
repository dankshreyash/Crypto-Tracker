import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

// import img1 from "../Asset/crypto.png";
// import img2 from "../Asset/coin.png";
// import img3 from "../Asset/coinn.jpg";
//  import img3 from "../Asset/coinn-removebg-preview.png";
 import img3 from "../Asset/coin-removebg-preview.png";





import { motion } from "framer-motion"

function Home() {
  return <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>

    <motion.div style={{
      height: "80vh",
    }}
    >
      <Image w={"full"} h={"full"} objectFit={"contain"} src={img3} marginLeft={"8"}  />
    </motion.div>
    <Text fontSize={"5xl"} textAlign={"center"} fontWeight={"medium"} color={"whiteAlpha.900"} mt={"-20"}>Crypto Tracker
    </Text>
  </Box>
}

export default Home