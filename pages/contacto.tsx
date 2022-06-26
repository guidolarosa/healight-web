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
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const BottomFormLink = (props : any) => (
    <Flex sx={{alignItems: 'center'}}>
        <Flex
            sx={{
                width: '3rem',
                height: '3rem',
                background: '#222222',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '2rem',
                mr: '1rem'
            }}
        >
            {props.icon}
        </Flex>
        {props.content}
    </Flex>
)

const Equipos: NextPage = (props : any) => {
    return (
        <Root showFooter={false}>
            <StyledEquiposPage flexDirection={"column"}>
                <Flex 
                    mx={"auto"}
                    py={"2rem"}
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
                            <Flex pt={'2rem'} width={[1,1,'50%']} flexDirection={'column'}>
                                <ContactForm/>
                                <Flex className="bottom-form-links" mt={'2rem'} flexDirection={'column'}>
                                    <Flex sx={{
                                        width: '100%',
                                        justifyContent: 'space-between',
                                        mb: '1rem'
                                    }}>
                                        <BottomFormLink 
                                            icon={<AiFillPhone />}
                                            content={<Text>+54 911 6006-7739</Text>}
                                        />
                                        <BottomFormLink 
                                            icon={
                                                <MdEmail />
                                            }
                                            content={
                                                <Text>info@healight.com.ar</Text>
                                            }
                                        />
                                    </Flex>
                                    <Flex>
                                        <BottomFormLink
                                            icon={<MdLocationOn />}
                                            content={'Av. Ing. Huergo 653 piso 7 - Buenos Aires - Argentina'}
                                        />
                                    </Flex>
                                </Flex>
                            </Flex>
                        </FadeUp>
                    </Flex>
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