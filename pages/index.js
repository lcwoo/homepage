import { useState } from 'react';
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  Collapse
} from '@chakra-ui/react'
import { ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoMailUnread, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Home = () => {
  const [showOldNews, setShowOldNews] = useState(false);
  const [showMap, setShowMap] = useState(false);
  return (
  <Layout>
    <Container maxW="container.2xl">

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lee Chung-woo
          </Heading>
          <p>Prospective Gradute Student</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ base: 0, md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src={`${basePath}/images/chungwoo.jpg`}
              alt="Profile image"
              width="150"
              height="150"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          I graduated from the Department of Automotive Engineering at Hanyang University. 
          While I am not yet part of a research lab, I am actively preparing for my future in AI and 3D computer vision. 
          I look forward to sharing my progress with you soon!
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/publications"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            publications
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          News
        </Heading>
        <BioSection>
          <BioYear>2025</BioYear>
          Graduated in Feb 2025 from Automotive Engineering, Hanyang University.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading
          as="h3"
          variant="section-subtitle"
          fontSize="lg"
          fontWeight="normal"
          cursor="pointer"
          onClick={() => setShowOldNews(!showOldNews)}
          display="flex"
        >
          Old News
          {showOldNews ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Heading>
        <Collapse in={showOldNews} animateOpacity>
          {/* <BioSection>
            <BioYear>2023.05</BioYear>
            non.
          </BioSection> */}
        </Collapse>
      </Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Info
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/lcwoo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                GitHub
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto: canwooj@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMailUnread />}
              >
                e-mail
              </Button>
            </Link>
          </ListItem>
         
          <ListItem>
            <Link href="https://www.instagram.com/_is_jw?igsh=MTFna2U2bGh5aHZr&utm_source=qr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @_is_jw
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>  

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2019</BioYear>
          Boin High School
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          B.S., Hanyang University, Dept. of Automotive Engineering
        </BioSection>
        
      </Section>

      <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
        Experience
      </Heading>
      
      <BioSection>
        <BioYear>2023.08 – 2024.10</BioYear>
        Undergraduate Researcher, Intelligent Robotics & Computer Vision Lab
      </BioSection>

      <BioSection>
        <BioYear>2021.04 – 2022.01</BioYear>
        Squad Leader, ROK Army, (Logistics Command)
      </BioSection>

      <BioSection>
        <BioYear>2019.02 – 2020.07</BioYear>
        Autory Automotive Club, Sejong University
      </BioSection>
    </Section>

      <Box align="center" h="5em">
      </Box>


    </Container>
  </Layout>
  );
};


export default Home
export { getStaticProps } from '../components/chakra'