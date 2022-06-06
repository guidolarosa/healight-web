import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { MainNavigationContext } from '../pages/_app';
import theme from './../utils/theme';
import Image from 'next/image';
import {Link} from 'rebass';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = (props : any) => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    type value = any;
    return (
        <StyledNavbar justifyContent={'center'} sx={{
            backgroundColor: !isMobileNavOpen ? 'hsla(0,0%,0%,0.5)' : 'hsla(0,0%,0%,1)',
            backdropFilter: 'blur(10px)',
            transition: '0.15s ease-in-out all'
        }}>
            <Flex className="navbar-inner-content" alignItems={"center"} width={['90%', '90%', '90%', '64rem']}>
                <Box width={110}>
                    <Link href="/">
                        <Image src={'/logos/healight-a.svg'} width={300} height={80} layout="intrinsic" />
                    </Link>
                </Box>
                <Box onClick={() => {setIsMobileNavOpen(!isMobileNavOpen)}} ml={"auto"} display={['inline-block', 'none', 'none']}>
                    <AiOutlineMenu color={"white"}/>
                </Box>
                <MainNavigationContext.Consumer>
                    {(value : any) => (
                        <>
                            <Flex 
                                as={"ul"}
                                ml={'auto'} 
                                className="navigation" 
                                alignItems={'center'}
                                display={['none !important', 'flex !important']}
                            >
                                {value.MainNavigationLinks.map((link : any) => (
                                    <Box 
                                        key={link.Label}
                                        as="li" 
                                        fontSize={['0.8rem', '0.8rem', '1rem']}
                                        ml={['1rem', '2rem', '3rem']}
                                    >
                                        <a href={link.URL}>
                                            {link.Label}
                                        </a>
                                    </Box>
                                ))}
                            </Flex>
                            <Flex 
                                as={"ul"}
                                ml={'auto'} 
                                className="navigation" 
                                alignItems={'center'}
                                flexDirection={"column"}
                                sx={{
                                    position: 'absolute',
                                    top: isMobileNavOpen ? '4rem' : '10rem',
                                    height: 'calc(100vh - 4rem)',
                                    width: '100%',
                                    left: 0,
                                    pt: '2rem',
                                    backgroundColor: 'hsla(0,0%,0%,1)',
                                    opacity: !isMobileNavOpen ? 0 : 1,
                                    zIndex: 1
                                }}
                                display={
                                    [
                                        isMobileNavOpen ? 'block' : 'none !important',
                                        'none !important'
                                    ]
                                }
                            >
                                {value.MainNavigationLinks.map((link : any) => (
                                    <Box 
                                        key={link.Label}
                                        as="li" 
                                        fontSize={'2rem'}
                                        mb={"2rem"}
                                    >
                                        <a href={link.URL}>
                                            {link.Label}
                                        </a>
                                    </Box>
                                ))}
                            </Flex>
                        </>
                    )}
                </MainNavigationContext.Consumer>
            </Flex>
        </StyledNavbar>
    )
}

const StyledNavbar = styled(Flex)`
    height: 4rem;
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
    .navbar-inner-content {
        .navigation {
            li {
                color: ${props => props.theme.color.fontInverted};
                cursor: pointer;
                opacity: 0.7;
                &:hover {
                    opacity: 1;
                }
            }
        }
    }
`;

export default Navbar;