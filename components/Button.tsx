import styled from 'styled-components';
import { Button } from 'rebass';

const CustomButton = (props : any) => {
    return (
        <StyledCustomButton {...props} />
    )
}

const StyledCustomButton = styled(Button)`
    background: ${props => (props.theme.color.buttonBackgroundDefault)};
    border-radius: 3rem;
    cursor: pointer;
`;

export default CustomButton;