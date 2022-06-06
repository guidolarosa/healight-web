import styled from 'styled-components';
import { Box, Flex} from 'rebass';

const Card = (props : any) => {
    return (
        <StyledCard flexDirection={"column"} sx={{
            borderRadius: '0.75rem',
            p: props.padding ? '2rem' : 0
        }} {...props}>
            {props.children}
        </StyledCard>
    )
}

Card.defaultProps = {
    padding: true
}

const StyledCard = styled<any>(Flex)`
    background: ${props => props.dark ? 'black' : 'white'};
    color: ${props => props.dark ? 'white' : 'black'};
    background-image: ${props =>  props.backgroundImage ?`url(${props.backgroundImage})` : 'none'};
    background-position: center;
    background-size: cover;
    h1, h2, h3, h4, h5, h6 {
        margin-bottom: 1rem;
    }
`;

export default Card;