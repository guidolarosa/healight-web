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
import ProductCard from '../components/ProductCard';

const Equipos: NextPage = (props : any) => {
    console.log(props);
    return (
        <Root
            header={
                <Box className={"hero-equipos"} height="calc(100vh - 4rem)">
                    {/* <Flex width={['90%', '90%', '90%', '64rem']} mx={"auto"} alignItems={"center"} height={"100%"}>
                        <Text as="h1" mb={"2rem"} fontSize={"4rem"} color={"white"} sx={{textShadow: '0 0.25rem 10px hsla(0, 0%, 0%, 0.5)'}}>Nuestros equipos</Text>
                    </Flex> */}
                </Box>
            }
            >
                <StyledEquiposPage flexDirection={"column"}>
                    <Flex flexDirection={"column"} sx={{background: 'black', color: 'white'}} pb={"10rem"}>
                    <FadeUp>
                        <Flex 
                            mx={"auto"}
                            py={"4rem"}
                            alignItems={["auto", "auto", "center"]}
                            flexDirection={["column", "column", "row"]}
                            justifyContent={"space-between"}
                            width={['90%', '90%', '90%', '64rem']}
                        >
                            <Box width={[1, 1, "44rem"]} mb={["2rem", "1rem", 0, 0]}>
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
                            {props.equiposProps.data.map((maker : any, index : number) => {
                                return (
                                    <Flex key={index} flexDirection={"column"} width={"100%"}>
                                        <Text as="h2" mb={"2rem"}>{maker.attributes.Name}</Text>
                                        <Flex width={"100%"}>
                                            {maker.attributes.Products.data.map((product : any, index : number) => (
                                                <ProductCard 
                                                    key={index} 
                                                    product={product} 
                                                    width={[1,1,"calc(100% / 3)"]}
                                                />
                                            ))}
                                        </Flex>
                                    </Flex>
                                )
                            }
                            )}
                        </Flex>
                    </FadeUp>
                </Flex>
            </StyledEquiposPage>
        </Root>
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