import styled from 'styled-components';

import { Box, Flex, Text } from 'rebass'
import Root from '../components/Root';
import { NextPage } from 'next';
import theme from './../utils/theme'
import Link from './../components/Link';
import { BsHeadset } from 'react-icons/bs'
import { FaTools, FaToolbox,  } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HiAcademicCap } from 'react-icons/hi';
import { fetchAPI } from '../lib/api';
import Card from '../components/Card';
import { getStrapiMedia } from '../lib/media';
import FadeUp from '../components/FadeUp';

const ServiceCard = (props : any) => (
    <Flex sx={{ backgroundColor: 'white', flexDirection: 'column', textAlign: 'center', alignItems: 'center', borderRadius: '0.5rem', cursor: 'pointer', '&:hover': {'.arrow-down': {transform: 'translateY(0.5rem)'}} }} {...props} pt={"2rem"} onClick={props.onClick}>
        <Flex sx={{borderRadius: '0.25rem', alignItems: 'center', justifyContent: 'center'}} mb={"2rem"} width={"4rem"} height={"4rem"} backgroundColor="lightgray">
            {props.icon}
        </Flex>
        <Text as="h3" fontSize={"1.5rem"}>
            {props.title}
        </Text>
        <Flex justifyContent={'center'} className="arrow-down" sx={{transition: '0.15s ease-in-out all'}}>
            <RiArrowDropDownLine 
                fontSize={'3rem'}
                color={"#93D4D0"}

            />
        </Flex>
        <Box height="1rem" backgroundColor={"#93D4D0"} width="100%" sx={{
            borderRadius: '0 0 0.5rem 0.5rem'
        }}/>
    </Flex>
)

const Servicios: NextPage = (props : any) => {
    return (
        <Root
            header={
                <StyledHeader height="calc(30rem)">
                    <Flex mx={"auto"}
                        alignItems={["auto", "auto", "center"]}
                        flexDirection={["column"]}
                        justifyContent={'center'}
                        width={['90%', '90%', '90%', '64rem']}
                        height="100%"
                    >
                        <Text as="strong" sx={{
                            color: 'white',
                            fontSize: '3rem',
                            textAlign: 'center',
                            textShadow: '0 0 0.3rem hsla(0, 0%, 0%, 0.8)'
                            }}
                        >
                            Brindamos el servicio post-venta más completo del mercado
                        </Text>
                    </Flex>
                </StyledHeader>
            }
        >
            <StyledServiciosPage flexDirection={"column"} sx={{backgroundColor: 'whitesmoke'}}>
                <Flex mx={"auto"}
                    alignItems={["auto", "auto", "center"]}
                    flexDirection={["column"]}
                    justifyContent={'center'}
                    width={['90%', '90%', '90%', '64rem']}
                    height="100%"
                    pt={'4rem'}
                    pb={'12rem'}
                >
                    <Flex width={'100%'} mx={[0, 0, '4rem']} flexWrap={['wrap', 'wrap', 'nowrap']}>
                        <ServiceCard 
                            width={[1,1,1/3]}
                            title="Servicio Técnico"
                            mx={'1rem'}
                            mb={['2rem', '2rem', 0]}
                            icon={<FaTools fontSize={"2rem"} />}
                            onClick={() => {
                                document.querySelector('#servicio-tecnico .scroll-target')?.scrollIntoView()
                            }}
                        />
                        <ServiceCard 
                            width={[1,1,1/3]}
                            title="Marketing Kit"
                            mx={'1rem'}
                            mb={['2rem', '2rem', 0]}
                            icon={<FaToolbox fontSize={"2rem"} />}
                            onClick={() => {
                                document.querySelector('#marketing-kit .scroll-target')?.scrollIntoView()
                            }}
                        />
                        <ServiceCard 
                            width={[1,1,1/3]}
                            title="Healight Academy"
                            mx={'1rem'}
                            mb={['2rem', '2rem', 0]}
                            icon={<HiAcademicCap fontSize={"2rem"} />}
                            onClick={() => {
                                document.querySelector('#healight-academy .scroll-target')?.scrollIntoView()
                            }}
                        />
                    </Flex>
                    <Flex width="100%" mt={"8rem"} alignItems={'center'} id="servicio-tecnico" sx={{position: 'relative'}} flexWrap={['wrap', 'wrap', 'nowrap']} flexDirection={["column-reverse", "column-reverse", "row"]}>
                        <Box className="scroll-target" sx={{position: 'absolute', top: '-8rem'}}/>
                        <Box width={[1, 1, 1/2]}>
                            <Text as="h2" fontSize={"2rem"} mb={"1rem"}>Servicio Técnico</Text>
                            <Flex as="ul" flexDirection="column" sx={{
                                'li': {
                                    listStyle: 'circle',
                                    mb: '0.5rem',
                                    lineHeight: '1.5rem'
                                }
                            }}>
                                <Box as="li">
                                    Respondemos consultas en un lapso de 24hs hábiles.
                                </Box>
                                <Box as="li">
                                    Controlamos las condiciones de trabajo y recomendamos el uso óptimo del equipo en cada vista.
                                </Box>
                                <Box as="li">
                                    No realizamos ninguna reparación sin contar con la autorización correspondiente por escrito.
                                </Box>
                                <Box as="li">
                                    Garantizamos por 3 meses la mano de obra de cualquier reparación realizada en nuestro taller.
                                </Box>
                                <Box as="li">
                                    Proveemos el mejor programa de mantenimiento preventivo de equipos de nuestras marcas distribuidoras.
                                </Box>
                                <Box as="li">
                                    Brindamos asesoramiento idóneo para el adecuado mantenimientoy recambio de equipos.
                                </Box>
                            </Flex>
                        </Box>
                        <Flex width={[1, 1, 1/2]} mb={['3rem', '3rem', 0]}>
                            <Box mx={"auto"} as="img" src="/img/equipos/asclepion/mediostar_monolith/3.png" height={"20rem"}/>
                        </Flex>
                    </Flex>
                    <Flex width="100%" mt={"8rem"} id="marketing-kit" sx={{position: 'relative'}} flexWrap={['wrap', 'wrap', 'nowrap']} flexDirection={["column", "column-reverse", "row"]}>
                        <Box className="scroll-target" sx={{position: 'absolute', top: '-8rem'}}/>
                        <Box width={[1, 1, 1/2]} mb={['2rem', '2rem', 0]}>
                            <Box as="img" src={"/img/servicios/marketing_kit.png"} />
                        </Box>
                        <Box width={[1, 1, 1/2]}>
                            <Text as="h2" fontSize={"2rem"} mb={"1rem"}>Marketing Kit</Text>
                            <Text mb={"2rem"}>Con la compra de cada equipo, se entrega un Marketing Kit que contiene:</Text>
                            <Flex as="ul" flexDirection="column" sx={{
                                'li': {
                                    listStyle: 'circle',
                                    mb: '0.5rem',
                                }
                            }}>
                                <Box as="li">
                                    Pendrive con información en formato digital e instructivos sobre como utilizar el equipo.
                                </Box>
                                <Box as="li">
                                    Brochure, folletería, trípticos sobre tratamientos y equipos. - Starter pack para realizar tratamientos.
                                </Box>
                                <Box as="li">
                                    Banner para tu consultorio.
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex width="100%" mt={"8rem"} alignItems={"center"} id="healight-academy" sx={{position: 'relative'}}>
                        <Box className="scroll-target" sx={{position: 'absolute', top: '-8rem'}}/>
                        <Box width={1/2}>
                            <Text as="h2" fontSize={"2rem"} mb={"1rem"}>Healight Academy</Text>
                            <Text as="h3" mb={"1rem"}>Capacitaciones</Text>
                            <Text sx={{lineHeight: '1.5rem'}}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            </Text>
                        </Box>
                        <Flex width={1/2}>
                            <Box as="img" src={"/img/servicios/academy.png"} height={"20rem"} ml={"auto"} sx={{borderRadius: '0.5rem'}}/>
                        </Flex>
                    </Flex>
                </Flex>
            </StyledServiciosPage>
        </Root>
    )
}

const StyledHeader = styled<any>(Box)`
    background-image: url('/img/equipos/equipos_header.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const StyledServiciosPage = styled<any>(Flex)`
`;

export default Servicios;

export async function getServerSideProps(context : any) {
    const equiposProps = await fetchAPI("/makers", {
      populate: {
        Products: {
            populate: {
                MainImage: '*'
            }
        }
      }
    })
    return {
      props: { equiposProps }
    }
}