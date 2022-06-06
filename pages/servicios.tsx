import styled from 'styled-components';

import { Box, Flex, Text } from 'rebass'
import Root from '../components/Root';
import { NextPage } from 'next';
import theme from './../utils/theme'
import Link from './../components/Link';
import { BsHeadset } from 'react-icons/bs'
import { fetchAPI } from '../lib/api';
import Card from '../components/Card';
import { getStrapiMedia } from '../lib/media';
import FadeUp from '../components/FadeUp';

const Equipos: NextPage = (props : any) => {
    console.log(props.equiposProps)
    return (
        <StyledEquiposPage flexDirection={"column"}>
            <Root
                header={
                    <Box className={"hero-equipos"} height="calc(100vh - 4rem)">
                    </Box>
                }
                >
                <Flex flexDirection={"column"} sx={{background: 'black', color: 'white'}} pb={"10rem"}>
                    <FadeUp>
                        <Flex 
                            mx={"auto"}
                            py={"4rem"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            width={['90%', '90%', '90%', '64rem']}
                        >
                            <Box width={"44rem"}>
                                <Text 
                                    fontSize={"2rem"}
                                    color={"white"}
                                ><strong>Somos representantes oficiales </strong>de las empresas líder en tecnología médica láser</Text>
                            </Box>
                            <Flex className="need-help" alignItems={"center"}>
                                <Flex 
                                    sx={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '3.5rem',
                                        height: '3.5rem',
                                        background: 'hsla(0, 0%, 7%, 1)',
                                        mr: '0.5rem',
                                        borderRadius: '3.5rem'
                                    }}
                                >
                                    <BsHeadset fontSize={"1.5rem"} color={"white"} />
                                </Flex>
                                <Flex flexDirection={'column'}>
                                    <Text color={"white"}>¿Necesitás ayuda?</Text>
                                    <Link color={theme.color.primary}>
                                        +54 9 11 3158 9030
                                    </Link>
                                </Flex>
                            </Flex>
                        </Flex>
                    </FadeUp>
                    {/* Makers top List */}
                    <Flex></Flex>
                    <FadeUp>
                        <Flex flexDirection={"column"}  mx={"auto"} width={['90%', '90%', '90%', '64rem']}>
                            {props.equiposProps.data.map((maker : any, index : any) => (
                                <Flex>
                                    <Flex flexDirection={"column"} width={"100%"}>
                                        <Text as="h2" mb={"2rem"}>{maker.attributes.Name}</Text>
                                        <Flex width={"100%"}>
                                            {maker.attributes.Products.data.map((product : any, index : number) => (
                                                <Card 
                                                    key={index}
                                                    sx={{
                                                        backgroundColor: 'hsla(240, 2%, 8%, 1) !important',
                                                        width: "33%",
                                                        border: '1px solid hsla(0, 0%, 44%, 1) !important',
                                                        color: 'white',
                                                        borderRadius: '1rem'
                                                    }}
                                                >
                                                    <Flex flexDirection={"column"} p="1rem">
                                                        <Text mb={"0.5rem !important"} as="h3">{product.attributes.Name}</Text>
                                                        <Text>{product.attributes.ShortDescription}</Text>
                                                    </Flex>
                                                    <Box px={"1rem"}>
                                                        <Box sx={{
                                                            backgroundImage: `url(${getStrapiMedia(product.attributes.MainImage)})`,
                                                            height: '20rem',
                                                            backgroundSize: 'contain',
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundPosition: 'bottom center'
                                                            }}
                                                        />
                                                    </Box>
                                                </Card>
                                            ))}
                                        </Flex>
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>
                    </FadeUp>
                </Flex>
            </Root>
        </StyledEquiposPage>
    )
}

const StyledEquiposPage = styled<any>(Flex)`
    header {
        .hero-equipos {
            background-image: url('/img/equipos/equipos_header.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
`;

export default Equipos;

export async function getStaticProps(context : any) {
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