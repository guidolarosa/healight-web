import styled from 'styled-components';

import { Box, Flex, Text } from 'rebass'
import Root from '../../components/Root';
import { NextPage } from 'next';
import Link from '../../components/Link';
import { fetchAPI } from '../../lib/api';
import { getStrapiMedia } from '../../lib/media';
import { FaSearchPlus } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';


const Equipo: NextPage = (props : any) => {
    const equipment = props.equipoProps.data[0].attributes;
    return (
        <Root
        header={
            <StyledHeader className={"hero-equipos"} />
        }
        >
            <StyledEquipoPage flexDirection={"column"} backgroundColor={"white"}>
                <Flex 
                    mx={"auto"}
                    py={"4rem"}
                    alignItems={["auto", "auto", "center"]}
                    flexDirection={["column"]}
                    justifyContent={"space-between"}
                    width={['90%', '90%', '90%', '64rem']}
                >
                    <Flex sx={{
                        background: 'whitesmoke',
                        p: '2rem',
                        width: '100%',
                        textAlign: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        pb: '0',
                        mb: '4rem'
                    }}>
                        <Text as="h1" fontSize={'3rem'}>{equipment.Name}</Text>
                        <Link>Ver brochure</Link>
                        <Box sx={{
                            backgroundImage: `url(${getStrapiMedia(equipment.MainImage)})`,
                            height: '30rem',
                            width: '100%',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center calc(100% + 1rem)',
                            }}
                        />
                    </Flex>
                    <Flex>
                        <Box sx={{
                            width: '66.66%',
                            mr: "auto",
                            lineHeight: '2.2rem',
                            'p': {
                                mb: '2rem',
                                fontSize: '1.2rem'
                            }
                        }}>
                            <ReactMarkdown>
                                {equipment.LongDescription}
                            </ReactMarkdown>
                        </Box>
                    </Flex>
                    <Flex width="100%" sx={{position: 'relative'}}>
                        <Box sx={{
                            backgroundImage: `url(${getStrapiMedia(equipment.HotspotImage.data)})`,
                            height: '40rem',
                            width: '100%',
                            backgroundSize: 'auto 90%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            position: 'relative',
                            my: '4rem',
                            backgroundColor: 'whitesmoke',
                            backgroundBlendMode: 'multiply'
                            }}>
                        </Box>
                        <Box sx={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                            {equipment.MainImageHotspots.map((hotspot : any) => (
                                <Box key={hotspot.id} sx={{
                                    position: 'absolute',
                                    top: (hotspot.TooltipPositionY * 100) + '%',
                                    left: (hotspot.TooltipPositionX * 100) + '%',
                                    width: '3rem',
                                    height: '3rem',
                                    backgroundColor: 'hsla(248, 88%, 70%, 0.5)',
                                    borderRadius: '3rem',
                                    zIndex: 2,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: '0.15s ease-in-out all',
                                    '&:hover': {
                                        backgroundColor: 'hsla(248, 88%, 70%, 1)',
                                        '.tooltip': {
                                            opacity: 1,
                                            top: `calc(${(hotspot.TooltipPositionY * 100)}% + 2rem)`
                                        }
                                    }
                                }}>
                                    <FaSearchPlus color="white" fontSize={'1.5rem'}/>
                                    <Box className="tooltip" sx={{
                                        position: 'absolute',
                                        width: '15rem',
                                        top: 'calc(100% + 1rem)',
                                        left: '0',
                                        backgroundColor: 'white',
                                        p: '1rem',
                                        boxShadow: '0.1rem 0.2rem 1rem hsla(0, 0%, 0%, 0.3)',
                                        borderRadius: '0.25rem',
                                        pointerEvents: 'none',
                                        opacity: 0,
                                        transition: '0.15s ease-in-out all'
                                        }}>
                                        <Box sx={{
                                            position: 'absolute',
                                            transform: 'rotate(135deg)',
                                            borderRadius: '0 0 0 0.15rem',
                                            width: '1rem',
                                            height: '1rem',
                                            top: '-0.5rem',
                                            backgroundColor: 'white'
                                        }}
                                        />
                                        {hotspot.TooltipContent}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Flex>
                    <Flex width="100%" mb={"6rem"}>
                        <Box sx={{
                            width: '66.66%',
                            mr: "auto",
                            lineHeight: '2.2rem',
                            'p, ul, li': {
                                mb: '1rem',
                                fontSize: '1.2rem',
                                p: 0,
                                listStyle: 'circle'
                            }
                        }}>
                            <ReactMarkdown>
                                {equipment.Features}
                            </ReactMarkdown>
                        </Box>
                    </Flex>
                    <Flex>
                        
                    </Flex>
                    <Flex flexDirection={'column'} width={'100%'}>
                        <Text as="h2" mb={"4rem"} fontSize={'2.2rem'}>Accesorios</Text>
                        <Box>
                            <Flex as="ul" flexWrap={'wrap'} flexDirection={['column', 'column', 'row']} mx={'-2rem'}>
                                {equipment.Accessories.map((accessory : any) => (
                                    <Flex as="li" flexDirection={'column'} key={accessory.id} width={[1, 1, 'calc((100% / 3) - 4rem)']} mx={'2rem'} mb={"4rem"}>
                                        <Box sx={{
                                            backgroundImage: `url(${getStrapiMedia(accessory.Image)})`,
                                            height: '10rem',
                                            width: '100%',
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center bottom',
                                        }}></Box>
                                        <Text as="h3" mb={"1rem"}>
                                            {accessory.Name}
                                        </Text>
                                        <Box sx={{
                                            'p': {
                                                lineHeight: '1.75rem'
                                            }
                                        }}>
                                            <ReactMarkdown>
                                                {accessory.Description}
                                            </ReactMarkdown>
                                        </Box>
                                    </Flex>
                                ))}
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>
            </StyledEquipoPage>
        </Root>
    )
}

const StyledEquipoPage = styled(Flex)``;

const StyledHeader = styled(Flex)``;

export async function getServerSideProps(context : any) {
    const equipoProps = await fetchAPI("/equipments", {
        populate: {
            MainImage: '*',
            Gallery: '*',
            HotspotImage: '*',
            MainImageHotspots: '*',
            Accessories: {
                populate: {
                    Image: '*'
                }
            }
        },
        filters: {
            Name: {
                $eq: context.params.equipment
            }
        }
    });
    return {
      props: { equipoProps }
    }
}

export default Equipo;