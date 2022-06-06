import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = (props : any) => {
    return (
        <StyledRoot pt={"4rem"}>
            <Box as={"header"} >
                <Navbar />
                {props.header}
            </Box>
            <Box as={"main"}>
                {props.children}
            </Box>
            {props.showFooter && <Footer />}
        </StyledRoot>
    )
}

Root.defaultProps = {
    showFooter: true
}

const StyledRoot = styled(Flex)`
    background: ${props => props.theme.color.background};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    header {
        /* min-height: 100vh; */
        display: inherit;
        flex-direction: inherit;
    }
`;
    
export default Root;