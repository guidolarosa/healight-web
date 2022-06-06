import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { Box, Flex } from "rebass";
import styled from "styled-components";

const SocialLinks = (props : any) => {
    return (
        <StyledSocialLinks>
            <Box as="li" mr={"1rem"}>
                <RiLinkedinFill fontSize={"2rem"} />
            </Box>
            <Box as="li" mr={"1rem"}>
                <AiFillFacebook fontSize={"2rem"}/>
            </Box>
            <Box as="li" mr={"1rem"}>
                <AiOutlineInstagram fontSize={"2rem"}/>
            </Box>
            <Box as="li">
                <AiFillYoutube fontSize={"2rem"}/>
            </Box>
        </StyledSocialLinks>
    )
}

const StyledSocialLinks = styled(Flex)``;

export default SocialLinks;