import styled from 'styled-components';

import { Box, Flex, Text } from 'rebass'
import Root from '../components/Root';
import { NextPage } from 'next';
import theme from './../utils/theme'
import Link from './../components/Link';
import { BsHeadset } from 'react-icons/bs'
import { fetchAPI  } from '../lib/api';
import { getStrapiMedia } from '../lib/media';
import Card from './../components/Card';
import FadeUp from '../components/FadeUp';

const Nosotros: NextPage = (props : any) => {
    console.log(props.nosotrosProps);

    return (
        <StyledNosotrosPage flexDirection={"column"}>
            <Root
                header={
                    <Box className={"hero-nosotros"} height="calc(100vh - 4rem)">
                    </Box>
                }
                >
                <Flex flexDirection={"column"} backgroundColor={"white"} pb={"8rem"}>
                    <Flex 
                        mx={"auto"}
                        py={"10rem"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        width={['90%', '90%', '90%', '64rem']}
                    >
                        <Box width={['100%', '100%', "50rem"]}>
                            <FadeUp>
                                <Text mb={"1rem"} as="h1" fontSize={"3.5rem"}>
                                    Misión, visión y propósito
                                </Text>
                            </FadeUp>
                            <FadeUp>
                                <Text as={"p"} sx={{lineHeight: '2.25rem'}} fontSize={"1.5rem"} mb={"2rem"}>
                                    Somos una empresa especializada en tecnología médica de alta complejidad con más de 10 años de experiencia en la industria, brindando una solución integral a nuestros clientes y sus pacientes. 
                                </Text>
                                <Text as={"p"} sx={{lineHeight: '2.25rem'}} fontSize={"1.5rem"}>
                                    Nuestros productos se encuentran certificados, testados y aprobados por los organismos más importantes vinculados a la Salud mundial. (A.M.A.T. y F.D.A.)
                                </Text>
                            </FadeUp>
                        </Box>
                    </Flex>
                    <Flex 
                        mx={"auto"}
                        py={"4rem"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        width={['90%', '90%', '90%', '64rem']}
                       
                    >
                        <FadeUp>
                            <Flex mx={"-1rem"} width={"100%"}>
                                {props.nosotrosProps.data.map((associate : any, index : number) => (
                                    <Card key={index} dark width={"100%"} mx={"1rem"}>
                                        <Box mx={"auto"} as="img" width={"8rem"} mb={"1rem"} src={getStrapiMedia(associate.attributes.Portrait)}/>
                                        <Text textAlign={"center"} fontSize={"1.5rem"} as="h3" sx={{mb: '1rem'}} height={"4rem"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                            {associate.attributes.Name}
                                        </Text>
                                        <Text m={"0"} textAlign={"center"} fontSize={"1rem"}>
                                            {associate.attributes.Position}
                                        </Text>
                                        <Text 
                                            mt={"1rem"} 
                                            sx={{
                                                lineHeight: '1.25rem',
                                                fontSize: '0.8rem',
                                                opacity: 0.7
                                            }} 
                                            textAlign={"center"} 
                                            as="p"
                                        >
                                            {associate.attributes.Description}
                                        </Text>
                                    </Card>
                                ))}
                            </Flex>
                        </FadeUp>
                    </Flex>
                </Flex>
            </Root>
        </StyledNosotrosPage>
    )
}

const StyledNosotrosPage = styled<any>(Flex)`
    header {
        .hero-nosotros {
            background-image: url('/img/nosotros/hero.jpeg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: left bottom;
        }
    }
`;

export default Nosotros;

export async function getStaticProps(context : any) {
    const nosotrosProps = await fetchAPI("/associates", {
      populate: {
        Portrait: '*'
      }
    })
    return {
      props: { nosotrosProps }
    }
  }