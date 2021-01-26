import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  ChakraProvider,
  Container,
  Link,
  Text,
  Input,
  Button
} from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider resetCSS>
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
          pt="20px"
        >
          <Container
            display="flex"
            flexDirection="row"
            alignItems="center"
            pr="5px"
            justifyContent="center"
          >
            <Link fontSize="lg" letterSpacing="wider">
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
            <Link fontSize="lg" letterSpacing="wider" textAlign="center">
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
            <Link textAlign="center" fontSize="lg" letterSpacing="wider">
              Projects
          </Link>
          </Container>
          <Container
            display="flex"
            justifyContent="center"
            alignItems="center"
            pl="5px"
          >
            <Link textAlign="center" fontSize="lg" letterSpacing="wider">
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
              />
              <Button
                variant="outline"
                size="md"
                mt="10px"
                ml="3px"
                colorScheme="twitter"
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
