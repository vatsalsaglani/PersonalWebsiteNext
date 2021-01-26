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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      
      {isLargerThan520 ?
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
          <Container
            minWidth="80%"
            mt="10px"
            mb="15px"
            display="flex"
            border="1px black"
            borderRadius="2px"
            justifyContent="center"
            alignItems="space-between"
            pt="20px">
            <Container
              display="flex"
              flexDirection="row"
              alignItems="center"
              pr="5px"
              justifyContent="center"
            >
              <Link fontSize="lg" letterSpacing="wider" style={{ textDecoration: 'none' }}>
                About
        </Link>
            </Container>
            <Container
              pl="5px"
              pr="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Link fontSize="lg" letterSpacing="wider" textAlign="center" style={{ textDecoration: 'none' }}>
                Blogs
        </Link>
            </Container>
            <Container
              display="flex"
              justifyContent="center"
              alignItems="center"
              pl="5px"
              pr="5px"
            >
              <Link textAlign="center" fontSize="lg" letterSpacing="wider" style={{ textDecoration: 'none' }}>
                Projects
        </Link>
            </Container>
            <Container
              display="flex"
              justifyContent="center"
              alignItems="center"
              pl="5px"
            >
              <Link textAlign="center" fontSize="lg" letterSpacing="wider" style={{ textDecoration: 'none' }}>
                Contact
        </Link>
            </Container>
          </Container>
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
              justifyContent="center"
              alignItems="center"
            >
              <Text textAlign="center" fontSize="4xl" letterSpacing="wide">
                Hi there, my name is Vatsal.{' '}
              </Text>
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
              <Text mb="10px" mt="15px" textAlign="justify">
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Button
                  variant="outline"
                  size="md"
                  mt="10px"
                  ml="3px"
                  colorScheme="twitter"
                  onClick={onClickSignUp}
                >
                  SignUp
          </Button>
              </Container>
            </Container>
          </Container>
        </Container> :

        // small devices
        <>

          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
              <DrawerContent>
                <Button variant="ghost" mt = "10px"><Link fontSize="md" letterSpacing="wider" textAlign="center" style={{ textDecoration: 'none' }}>
                About
        </Link></Button>
                <Button variant="ghost" mt = "10px"><Link fontSize="md" letterSpacing="wider" textAlign="center" style={{ textDecoration: 'none' }}>
                Blogs
        </Link></Button>
                <Button variant="ghost" mt = "10px"><Link fontSize="md" letterSpacing="wider" textAlign="center" style={{ textDecoration: 'none' }}>
                Projects
        </Link></Button>
                <Button variant="ghost" mt = "10px"><Link fontSize="md" letterSpacing="wider" textAlign="center" style={{ textDecoration: 'none' }}>
                Contact
        </Link></Button>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>

          {/* content on small devices */}
          <Container
            minWidth="100%"
            minHeight="100%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Container
              minWidth="100%"
              display="flex"
              flexDirection="row-reverse"
              alignItems="flex-start"
              justifyContent="flex-end"
              mt="20px"
            >
              <IconButton
                aria-label="icon"
                icon={<HamburgerIcon />}
                size="lg"
                variant="outline"
                ml="10px"
                onClick={onOpen}
              />
            </Container>
            <Container
              mt="20px"
              minWidth="inherit"
              minHeight="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Container mt="15px">
                <Text textAlign="center" fontSize="3xl" letterSpacing="wide">
                  Hi there, my name is Vatsal.{' '}
                </Text>
              </Container>
              <Container mt="15px">
                <Text textAlign="justify" fontSize="md" letterSpacing="normal">
                  I am currently working as a Consultant - Machine Learning at
                  Quinnox. My Day job is mostly Similar to every "Day in life of a
            Data Scientist" video out there on YouTube.{' '}
                </Text>
              </Container>
              <Container mt="15px">
                <Text textAlign="justify">
                  The rest of what's left of my day goes in research and writing and
                  re-writing blogs on Medium. I regularly publish articles regarding
                  Deep Learning, Machine Learning, API Development and Deployment, and
                  sometimes JavaScript.
          </Text>
              </Container>
              <Container mt="15px">
                <Text textAlign="justify">
                  You can subscribe to my newsletter below to get informed about
                  different Deep Learning and Machine Learning methodologies for
                  Computer Vision, Natural Language Processing, and Time Series
                  analysis.
          </Text>
              </Container>

              <Container
                mt="15px"
                display="flex"
                flexDirection="column"
                alignItems="center"
              ><Text mb="10px" mt="15px" textAlign="justify">
                  {msg}
                </Text>
                <Input size="md" placeholder="Email" mt="10px" value={email}
                  onChange={e => setEmail(e.target.value)} />
                <Button variant="outline" size="md" mt="10px" mb="20px" colorScheme="twitter"
                  onClick={onClickSignUp}>
                  Sign Up
          </Button>
              </Container>
            </Container>
          </Container>
        </>
      }

    </ChakraProvider>
  )
}
