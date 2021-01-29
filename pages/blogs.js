import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import {
    ChakraProvider,
    Container,
    Link,
    Text,
    Input,
    Button,
    useMediaQuery,
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    Drawer,
    IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useState } from 'react'



const App = () => {
    // menu drawer
    const [placement, setPlacement] = useState("left")
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <ChakraProvider resetCSS>
            <Container
                minHeight="100vh"
                minWidth="100%"
                display="flex"
                flexDirection="column"
                backgroundColor="#171b92"
            >
                <Drawer backgroundColor="#171b92" placement={placement} onClose={onClose} isOpen={isOpen} backgroundColor="#ffffff">
                    <DrawerOverlay >
                        <DrawerContent backgroundColor="#171b92" color="white">
                            <Button
                                mt='10px'
                                mb='10px'
                                backgroundColor="#171b92"
                            >
                                <Link href='/'>About</Link>
                            </Button>
                            <Button mt='10px' mb='10px' backgroundColor="#171b92">
                                <Link href='/blogs'>Blogs</Link>
                            </Button>
                            <Button mt='10px' mb='10px' backgroundColor="#171b92">
                                <Link>
                                    Projects
                </Link>
                            </Button>
                            <Button mt='10px' mb='10px' backgroundColor="#171b92">
                                <Link href='/contact'>Contact</Link>

                            </Button>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
                <Container
                    minWidth="100%"
                    minHeight="30vh"
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    
                        <IconButton
                            aria-label="icon"
                            icon={<HamburgerIcon />}
                            size="lg"
                            color='white'
                            // ml = "120px"
                            // variant="outline"
                            // colorScheme="twitter"
                            variant='ghost'
                            onClick={onOpen}
                            boxShadow="6px -6px 12px #101365,
             -6px 6px 12px #1e23bf"
                        />
                        <Container>
                            <Text
                                fontWeight="bold"
                                textAlign="center"
                                fontSize="5xl"
                                letterSpacing="widest"
                                color="White"
                            >
                                BLOGS
            </Text>
                        </Container>
                </Container>
                <Container minHeight="60vh" minWidth="100%" display="flex">
                    <Container display="flex" flexDirection="column" mt="20px">


                        <Container
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            pt="20px"
                            pb="20px"
                            boxShadow="15px 15px 0px #090b3a,-15px -15px 0px #252bea;"
                        >
                            <Container
                                display="flex"
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="flex-start"
                            >

                                <Link
                                    color="#FFF"
                                    fontSize="2xl"
                                    style={{ textDecoration: "none" }}>How to quickly deploy your Image models using Streamlit?</Link>
                                <Text color="#FFF">A hassle free approach to deploy Image models.</Text>
                            </Container>
                            <Container
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                pt="15px"
                            >

                                <Link color="#FFF" style={{ textDecoration: "none" }}>READ MORE</Link>


                            </Container>
                        </Container>



                        <Container
                            mb="20px"
                            mt="20px"
                            display="flex"
                            alignItems="flex-start"
                            flexDirection="column"
                            pt="20px"
                            pb="20px"
                            boxShadow="15px 15px 0px #090b3a,-15px -15px 0px #252bea;"
                        >
                            <Container
                                display="flex"
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Container display="flex" flexDirection="column">
                                    <Link
                                        color="#FFF"
                                        fontSize="2xl"
                                        style={{ textDecoration: "none" }}>How to quickly deploy your Image models using Streamlit?</Link>
                                    <Text color="#FFF">A hassle free approach to deploy Image models.</Text>
                                </Container>
                                <Container
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    pt="15px"
                                >

                                    <Link color="#FFF" style={{ textDecoration: "none" }}>READ MORE</Link>

                                </Container>
                            </Container>
                        </Container>


                        <Container
                            display="flex"
                            alignItems="flex-start"
                            flexDirection="column"
                            pt="20px"
                            pb="20px"
                            boxShadow="15px 15px 0px #090b3a,-15px -15px 0px #252bea;"
                            mb="20px"
                        >
                            <Container display="flex" flexDirection="column">
                                <Container display="flex" flexDirection="column">
                                    <Link
                                        color="#FFF"
                                        fontSize="2xl"
                                        style={{ textDecoration: "none" }}>How to quickly deploy your Image models using Streamlit?</Link>
                                    <Text color="#FFF">A hassle free approach to deploy Image models.</Text>
                                </Container>
                                <Container
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    pt="15px"
                                >

                                    <Link color="#FFF" style={{ textDecoration: "none" }}>READ MORE</Link>

                                </Container>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </ChakraProvider>
    )
}

export default App