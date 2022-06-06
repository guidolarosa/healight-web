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
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

const Equipos: NextPage = (props : any) => {
    return (
        <StyledEquiposPage flexDirection={"column"}>
            <Root showFooter={false}>
                <Flex 
                    mx={"auto"}
                    py={"4rem"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    width={['90%', '90%', '90%', '64rem']}
                >
                    <Flex color="white" flexDirection={"column"} width="100%">
                        <FadeUp>
                            <Flex justifyContent={"space-between"} pb="1rem" sx={{borderBottom: '1px solid hsla(180, 9%, 32%, 1)'}}>
                                <Text as={"h1"}>Contacto</Text>
                                <SocialLinks />
                            </Flex>
                        </FadeUp>
                        <FadeUp>
                            <Flex pt={'2rem'} width={[1,1,'50%']}>
                                <ContactForm/>
                            </Flex>
                        </FadeUp>
                    </Flex>
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
    .form {
        .form-title {
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }
        .form-subtitle {
            margin-bottom: 1.5rem;
        }
        textarea {
            margin-bottom: 3.5rem;
        }
        .form-submit {
            height: 3rem;
        }
    }
`;

export default Equipos;

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