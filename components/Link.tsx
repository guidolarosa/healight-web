import { Link, Flex } from 'rebass';
import styled from 'styled-components';
import { RiArrowDropRightLine } from 'react-icons/ri';

const CustomLink = (props : any) => {
    return (
        <StyledLink {...props} className={`${props.className} ${props.type}`}>
            <Flex alignItems={"center"}>
                {props.children}
                {props.hasArrow && (
                    <RiArrowDropRightLine fontSize={"2rem"}/>
                )}
            </Flex>
        </StyledLink>
    )
}

CustomLink.defaultProps = {
    className: '',
    type: 'default',
    hasArrow: true
}

const StyledLink = styled(Link)`
    white-space: nowrap;
    &.default {
        color: ${props => props.theme.color.secondary};
    }
`;

export default CustomLink;