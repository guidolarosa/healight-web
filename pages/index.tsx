import type { NextPage } from 'next'
import Root from '../components/Root'
import styled from 'styled-components'
import { Flex, Box, Text, Button } from 'rebass'
import theme from './../utils/theme'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { getStrapiMedia } from '../lib/media'
import { fetchAPI } from '../lib/api'
import ReactPlayer from 'react-player'
import Card from '../components/Card'
import Link from '../components/Link'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import FadeUp from '../components/FadeUp';
import particleConfig from './../config/particlesConfig.json';
import ReactMarkdown from 'react-markdown'


const HomepageHero = (props : any) => {
  const [isSSR, setIsSSR] = useState(true);

  const particleRef = useRef(null);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <StyledHomepageHero background={"black"} height={"50rem"}>
      {/* <video loop autoPlay={true} muted src={'./video/portada.mp4'} /> */}
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
                {props.featuredEquipmentProps.data.map((equipment : any) => (
                  <Flex width={['100%', '100%', 1/2]} mx={[0,0,3]} mb={['4rem', '4rem', 0]} pb={0} key={equipment.id} flexDirection={"column"} href={`/equipos/${equipment.attributes.Name}`}>
                    <Card pb={0}>
                      <h2>{equipment.attributes.Name}</h2>
                      <p>{equipment.attributes.ShortDescription}</p>
                      <Flex justifyContent={"center"} width={"100%"} mt={"2rem"}>
                        <Link className="more-information-link" href={`/equipos/${equipment.attributes.Name}`}>
                          Más información
                        </Link>
                      </Flex>
                      <Box mt={'auto'} width={'100%'} height="20rem" sx={{
                        backgroundImage: `url(${getStrapiMedia(equipment.attributes.MainImage)})`,
                        backgroundPosition: 'bottom center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                      }}/>
                    </Card>
                  </Flex>
                ))}
              </Flex>
              <Flex justifyContent={"center"} width={"100%"} mt={"2rem"}>
                <Link className="see-all-link" href="/equipos">
                  Ver todos los equipos
                </Link>
              </Flex>
            </Box>
          </FadeUp>
          <FadeUp>
            {props.featuredSpecialEquipmentProps.data.map((equipment : any) => (
              <Box className="homepage-section featured-equipment-bottom" key={equipment.id}>
                <Card dark className="large-featured-bottom-card" height={["auto", "auto", "36rem"]} flexDirection={['column', 'column', 'row']} pb={0}>
                  <Flex width={[1,1,'50%']} flexDirection={"column"} pt={"3rem"}>
                    <Text fontWeight={"600"} opacity={0.5} sx={{textTransform: 'uppercase'}}>{equipment.attributes.Maker.data.attributes.Name}</Text>
                    <Text as={"h3"} fontSize={"3rem"}>{equipment.attributes.Name}</Text>
                    <Box sx={{
                      opacity: 0.8, 
                      'p': { 
                        mb: '1rem'
                        }
                      }}>
                      <ReactMarkdown>
                        {equipment.attributes.LongDescription}
                      </ReactMarkdown>
                    </Box>
                    <Button as="a" href={`/equipos/${equipment.attributes.Name}}`} sx={{
                      background: theme.color.buttonBackgroundDefault, 
                      borderRadius: '10rem', 
                      mt: '2rem', 
                      height: '3rem', 
                      lineHeight: '3rem', 
                      p: '0 2rem', 
                      width: 'fit-content',
                      mb: ['2rem', '2rem', 0]
                    }}>
                      Quiero saber más
                    </Button>
                  </Flex>
                  <Box mt={'auto'} width={[1, 1, '50%']} height={['30rem', '30rem', '100%']} sx={{
                    backgroundImage: `url(${getStrapiMedia(equipment.attributes.MainImage)})`,
                    backgroundPosition: 'bottom center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                  }}/>
                </Card>
              </Box>
            ))}
          </FadeUp>
        </Flex>
        <StyledSplideContainer mt="4rem" width={"calc(100vw - 4rem)"}>
          <FadeUp>
            <Splide 
              aria-label="featured-equipment"
              style={{width: '100% !important'}}
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
              {props.equipmentProps.data.map((equipment : any) => (
                <SplideSlide key={equipment.id}>
                  <Box key={equipment.id}>
                      <Card dark height={'30rem'} pb={0}>
                        <Flex pb={0} height={"100%"} flexDirection={"column"}>
                          <Box height={'100%'} as="a" sx={{display: 'flex', flexDirection: 'column'}} href={`/equipos/${equipment.attributes.Name}`} pb={0}>
                            <h2>{equipment.attributes.Name}</h2>
                            <Text sx={{opacity: 0.7}}>{equipment.attributes.ShortDescription}</Text>
                            <Box mt={'auto'} width={'100%'} height="20rem" sx={{
                              backgroundImage: `url(${getStrapiMedia(equipment.attributes.MainImage)})`,
                              backgroundPosition: 'bottom center',
                              backgroundSize: 'contain',
                              backgroundRepeat: 'no-repeat'
                            }}/>
                          </Box>
                        </Flex>
                      </Card>
                  </Box>
                </SplideSlide>
              ))}
            </Splide>
          </FadeUp>
        </StyledSplideContainer>
        <FadeUp>
          <Box width={['90%', '90%', '90%', '64rem']} pt={'2rem'} pb={"2rem"} mx={"auto"}>
            <Box className="homepage-section lower-banner">
              <Card backgroundImage="/img/woman.png" height="30rem">
                <Box></Box>
              </Card>
            </Box>
          </Box>
        </FadeUp>
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
    height: 50rem;
    margin-bottom: auto;
    background-position: center;
    background-size: cover;
  }
`;

const StyledSplideContainer = styled(Box)`
  width: calc(100% - 4rem);
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
  });

  const featuredEquipmentProps = await fetchAPI("/equipments", {
    populate: {
      MainImage: '*',
    },
    filters: {
      IsFeatured: {
        $eq: true
      }
    }
  });

  const featuredSpecialEquipmentProps = await fetchAPI("/equipments", {
    populate: {
      MainImage: '*',
      Maker: '*'
    },
    filters: {
      IsSpecialFeature: {
        $eq: true
      }
    }
  });

  const equipmentProps = await fetchAPI("/equipments", {
    populate: {
      MainImage: '*',
    }
  });

  return {
    props: { 
      homepageProps, 
      featuredEquipmentProps, 
      equipmentProps , 
      featuredSpecialEquipmentProps
    }
  }
}
