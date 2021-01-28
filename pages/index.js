import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import '../styles/globals.css'
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

export default function Home() {

  const [email, setEmail] = useState(String)
  const [msg, setMsg] = useState(String)

  // menu drawer
  const [placement, setPlacement] = useState("left")
  const { isOpen, onOpen, onClose } = useDisclosure()


  const [isLargerThan520] = useMediaQuery("(min-width: 520px)")

  // sign me up to news letters functions
  const onClickSignUp = () => {
    const url = 'https://flask-backend-newsletter.herokuapp.com/api/addEmail'
    fetch(`${url}/${email}`).then(response => response.json()).then(data => setMsg(data['message']))
    setEmail('')
  }

  return (
    <ChakraProvider>
      <Head>
        <title>Vatsal Saglani</title>
      </Head>
      <Container
        minWidth="100%"
        minHeight="100vh"
        overflow="hidden"
        backgroundColor="#171b92"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        color="white"
      >
        <Drawer backgroundColor="#171b92" placement={placement} onClose={onClose} isOpen={isOpen} backgroundColor="#ffffff">
          <DrawerOverlay >
            <DrawerContent backgroundColor="#171b92" color = "white">
              <Button 
              mt='10px' 
              mb='10px' 
              backgroundColor="#171b92"
              >
                <Link>About</Link>
              </Button>
              <Button mt='10px' mb='10px' backgroundColor="#171b92">
                <Link>Blogs</Link>
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

        {isLargerThan520 ? <Container
          minWidth="80%"
          mt="10px"
          mb="25px"
          display="flex"
          border="1px black"
          borderRadius="2px"
          justifyContent="flex-start"
          alignItems="center"
          pt="20px"
          flexDirection="row"
        >
          <IconButton
            aria-label="icon"
            icon={<HamburgerIcon />}
            size="lg"
            // variant="outline"
            // colorScheme="twitter"
            variant='ghost'
            boxShadow="6px -6px 12px #101365,
            -6px 6px 12px #1e23bf"
            onClick={onOpen}
          />
          <Container
            minHeight="100%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text textAlign="justify" fontSize="2xl" letterSpacing="wider">
              Hey there, my name is Vatsal
          </Text>
          </Container>
        </Container> :
          <>
            <Container
              minWidth="80%"
              mt="10px"
              mb="25px"
              display="flex"
              border="1px black"
              borderRadius="2px"
              justifyContent="flex-start"
              alignItems="center"
              pt="20px"
              flexDirection="row"
            >
              <IconButton
                aria-label="icon"
                icon={<HamburgerIcon />}
                size="lg"
                variant='ghost'
                boxShadow="6px -6px 12px #101365,
            -6px 6px 12px #1e23bf"
                // colorScheme="twitter"
                onClick={onOpen}
              /></Container>
            <Container
              minHeight="100%"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              pt="20px"
            >
              <Text textAlign="justify" fontSize="2xl" letterSpacing="wider">
                Hey there, my name is Vatsal
          </Text>
            </Container>

          </>

        }

        <Container
          display="flex"
          flexDirection="column"
          minWidth="80%"
          overflow="hidden"
          minHeight="70vh"
          justifyContent="center"
          alignItems="center"
          mt="20px"

        >
          <Container
            minHeight="inherit"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="stretch"
            pb='20px'
            boxShadow="23px 23px 0px #131676, -23px -23px 0px #1b20ae"
            borderRadius="10px"
            pt="20px"
          >
            <Text
              fontSize="md"
              textAlign="justify"
              letterSpacing="normal"
              mt="15px"
            >
              I am currently working as a Consultant - Machine Learning at
              Quinnox. My Day job is mostly Similar to every "Day in life of a
            Data Scientist" video out there on YouTube.{' '}
            </Text>
            <Text
              fontSize="md"
              letterSpacing="normal"
              textAlign="justify"
              mt="15px"
            >
              The rest of what's left of my day goes in research and writing and
              re-writing blogs on Medium. I regularly publish articles regarding
              Deep Learning, Machine Learning, API Development and Deployment, and
              sometimes JavaScript.
          </Text>
            <Text mb="10px" mt="15px" textAlign="justify">
              You can subscribe to my newsletter below to get informed about
              different Deep Learning and Machine Learning methodologies for
              Computer Vision, Natural Language Processing, and Time Series
              analysis.
          </Text>
            <Text mb="2px" mt="25px" textAlign="justify" color='red'>
              {msg}
            </Text>
            <Container
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              mt="15px"
              pb="20px"
            >

              <Input
                placeholder="Email"
                variant="ghost"
                display="block"
                mt="10px"
                size="lg"
                color="twitter"
                value={email}
                onChange={e => setEmail(e.target.value)}
                backgroundColor="#4c4ade"
                borderRadius="10px"
                boxShadow="inset 27px -27px 54px #4442c6,inset -27px 27px 54px #5452f6"
              />
              <Button
                variant="ghost"
                size="lg"
                mt="10px"
                ml="5px"

                // colorScheme="twitter"
                onClick={onClickSignUp}
                backgroundColor="#4c4ade"
                borderRadius="10px"
                boxShadow="inset 15px -15px 66px #323193,
                inset -15px 15px 66px #6663ff"
              >
                Sign Up
            </Button>
            </Container>
          </Container>
        </Container>
      </Container>

    </ChakraProvider>
  )
}
