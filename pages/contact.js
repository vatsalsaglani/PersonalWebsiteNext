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
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}