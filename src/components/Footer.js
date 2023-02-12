import {  Box, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
    return (
        <Box bgColor={"blackAlpha"} color={"blackAlpha.700"} minH={"48"} px={"16"} py={["16", "8"]}>
            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>


                <VStack w={"full"} alignItems={["center", "flex-start"]}>
                    <Text fontWeight={"bold"}>About us</Text>
                    <Text
                        fontSize={"medium"}
                        letterSpacing={"wide"}
                        textAlign={["center", "left"]}>
                        Welcome to CryptoTrackr, your go-to platform for tracking real-time cryptocurrency prices and market trends.
                    </Text>

                </VStack>


            </Stack>
        </Box>
    )
}

export default Footer