import type { NextPage } from 'next'
import Root from '../components/Root'
import styled from 'styled-components'
import { Flex, Box, Text } from 'rebass'
import theme from './../utils/theme'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getStrapiMedia } from '../lib/media'
import { fetchAPI } from '../lib/api'
import ReactPlayer from 'react-player'
import Card from '../components/Card'
import Link from '../components/Link'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import FadeUp from '../components/FadeUp'


const HomepageHero = (props : any) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <StyledHomepageHero>
      {/* <div className="background-image" style={{backgroundImage: `url(${getStrapiMedia(props.backgroundImage)})`}} /> */}
      <video loop autoPlay={true} muted src={'./video/portada.mp4'} />
    </StyledHomepageHero>
  )
}

const Home: NextPage = (props : any) => {
  console.log(props);
  return (
    <Root
      header={
        <HomepageHero backgroundImage={props.homepageProps.data.attributes.HeroImage} />
      }
    >
      <StyledHomepage flexDirection={"column"} alignItems={'center'}>
        <Flex flexDirection={"column"} width={['90%', '90%', '90%', '64rem']} pt={'4rem'} pb={'2rem'}>
          <FadeUp>
            <Box className="homepage-section who-we-are">
              <h1>Quiénes Somos</h1>
              <Card>
                <Box>
                  <p>
                    Somos una empresa especializada en tecnología médica de alta complejidad con más de 10 años de experiencia en la industria, brindando una solución integral a nuestros clientes y sus pacientes. 
                  </p>
                  <p>
                    Nuestros productos se encuentran certificados, testados y aprobados por los organismos más importantes vinculados a la Salud mundial. (A.M.A.T. y F.D.A.) 
                  </p>
                </Box>
                <Box className="">

                </Box>
              </Card>
            </Box>
          </FadeUp>
          <FadeUp>

            <Box className="homepage-section featured-equipment">
              <Box mb={'3rem'}>
                <Text as="h1" fontSize="3rem">Equipos destacados</Text>
              </Box>
              <Flex 
                justifyContent={'space-between'} 
                mx={[0, 0, -3]}
                flexDirection={["column", "column", "row"]}
              >
                <Card width={['100%', '100%', 1/2]} mx={[0,0,3]} mb={['4rem', '4rem', 0]}>
                  <h2>Mediostar Monolith</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sit, laborum mollitia deserunt delectus amet tempore iure eos molestias blanditiis neque quod.
                  </p>
                  <Flex justifyContent={"center"} width={"100%"} mt={"2rem"}>
                    <Link className="more-information-link">
                      Más información
                    </Link>
                  </Flex>
                  <Flex>
                    <Box height="20rem"/>
                  </Flex>
                </Card>
                <Card width={['100%', '100%', 1/2]} mx={[0,0,3]}>
                  <h2>Discovery Pico</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, suscipit sed labore nisi pariatur impedit atque unde molestiae saepe ad esse quibusdam ea.
                  </p>
                  <Flex justifyContent={"center"} width={"100%"} mt={"2rem"}>
                    <Link className="more-information-link">
                      Más información
                    </Link>
                  </Flex>
                  <Flex>
                    <Box height="20rem"/>
                  </Flex>
                </Card>
              </Flex>
              <Flex justifyContent={"center"} width={"100%"} mt={"2rem"}>
                <Link className="see-all-link">
                  Ver todos los equipos
                </Link>
              </Flex>
            </Box>
          </FadeUp>
          <Box className="homepage-section featured-equipment-bottom">
            <Card dark className="large-featured-bottom-card" height={"40rem"}>
              <Text fontWeight={"600"} opacity={0.5} sx={{textTransform: 'uppercase'}}>Candela</Text>
              <Box>
                <Text as={"h3"} fontSize={"3rem"}>Nordlys</Text>
                <Text as={"p"} sx={{opacity: 0.7}}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </Text>
              </Box>
            </Card>
          </Box>
        </Flex>
        <Flex mt="4rem" width={"calc(100% - 4rem)"}>
          <Splide 
            aria-label="featured-equipment" 
            options={ {
              rewind: true,
              gap: '1rem',
              perPage: 5,
              width: '100%',
              breakpoints: {
                1520: {
                  perPage: 4
                },
                1280: {
                  perPage: 3
                },
                1080: {
                  perPage: 2
                },
                720: {
                  perPage: 1
                },
              }
            } }
          >
            <SplideSlide>
              <Card dark height={'30rem'}>
                <h2>Coolshaping</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </Card>
            </SplideSlide>
            <SplideSlide>
              <Card dark height={'30rem'}>
                <h2>Coolshaping</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </Card>
            </SplideSlide>
            <SplideSlide>
              <Card dark height={'30rem'}>
                <h2>Q-Plus Series</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </Card>
            </SplideSlide>
            <SplideSlide>
              <Card dark height={'30rem'}>
                <h2>Coolshaping</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </Card>
            </SplideSlide>
            <SplideSlide>
              <Card dark height={'30rem'}>
                <h2>Coolshaping</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </Card>
            </SplideSlide>
            <SplideSlide>
              <Card dark height={'30rem'}>
                <h2>Q-Plus Series</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </Card>
            </SplideSlide>
            <SplideSlide>
              <Card dark height={'30rem'}>
                <h2>Coolshaping</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </Card>
            </SplideSlide>
            <SplideSlide>
              <Card dark height={'30rem'}>
                <h2>Coolshaping</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </Card>
            </SplideSlide>
            <SplideSlide>
              <Card dark height={'30rem'}>
                <h2>Q-Plus Series</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </Card>
            </SplideSlide>
          </Splide>
        </Flex>
        <Box width={['90%', '90%', '90%', '64rem']} pt={'2rem'} pb={"2rem"}>
          <Box className="homepage-section lower-banner">
            <Card backgroundImage="/img/woman.png" height="30rem">
              <Box></Box>
            </Card>
          </Box>
        </Box>
        <video loop autoPlay={true} muted src={'./video/300.mp4'} width={"100%"}/>
      </StyledHomepage>
    </Root>
  )
}

const StyledHomepageHero = styled(Flex)<any>`
  flex-grow: 1;
  .background-image,
  video {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
`;

const StyledHomepage = styled(Flex)<any>`
  background: ${props => props.theme.color.lightBackground};
  min-height: 100vh;
  h1 {
    margin-bottom: 1rem;
  }
  p {
    line-height: 2rem;
  }
  .homepage-section {
    margin-bottom: 5rem;
  }
  .featured-equipment {
    h1, h2, p {
      text-align: center;
    }
  }
`;

export default Home;

export async function getStaticProps(context : any) {
  const homepageProps = await fetchAPI("/homepage", {
    populate: {
      HeroImage: '*'
    }
  })
  return {
    props: { homepageProps }
  }
}
