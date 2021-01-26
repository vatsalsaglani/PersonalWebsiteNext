import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
    <ChakraProvider resetCSS>
      <Head>
        <title>Vatsal Saglani</title>
      </Head>
      <Container
        minWidth="100%"
        minHeight="100vh"
        overflow="hidden"
        backgroundColor="#f9f9f9"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <Button>
                About
        </Button>
              <Button>
                Blogs
        </Button>
              <Button>
                Projects
        </Button>
              <Button>
                Contact
        </Button>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>

        {isLargerThan520 ? <Container
          minWidth="80%"
          mt="10px"
          mb="15px"
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
            variant="outline"
            colorScheme="twitter"
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
              mb="15px"
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
                variant="outline"
                colorScheme="twitter"
                onClick={onOpen}
              /></Container>
            <Container
              minHeight="100%"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              pt = "20px"
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
        >
          <Container
            minHeight="inherit"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="stretch"
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
          <Text mb="2px" mt="25px" textAlign="justify" color = 'red'>
                {msg}
              </Text>
            <Container
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              mt="15px"
            >
             
              <Input
                placeholder="Email"
                variant="outline"
                display="block"
                mt="10px"
                size="md"
                color="twitter"
                value={email}
                onChange={e => setEmail(e.target.value)}
                
              />
              <Button
                variant="outline"
                size="md"
                mt="10px"
                ml="3px"
                colorScheme="twitter"
                onClick = {onClickSignUp}
              >
                SignUp
            </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    </ChakraProvider>
  )
}
