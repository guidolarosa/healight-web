import styled from 'styled-components';
import { Flex, Box, Link } from 'rebass';
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

const Footer = (props : any) => {
    return (
        <StyledFooter alignItems="center" flexDirection="column" py={"4rem"}>
            <Flex width={['90%', '90%', '90%', '64rem']} flexDirection={["column", "column", "row"]}>
                <Flex pr={[0, 0, '2rem']} flexDirection={'column'} width={['100%', '100%', 1/2]}>
                    <Box mt="auto">
                        <Box as={'iframe'} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13133.70480775737!2d-58.3666194!3d-34.6186684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x179b4ba4cc72d3d6!2sHealight!5e0!3m2!1ses-419!2sar!4v1653662488695!5m2!1ses-419!2sar" width="100%" height="240px" style={{border: 0}} allowFullScreen={true} mb={"2rem"} sx={{borderRadius: "0.5rem"}}></Box>
                        <Flex flexDirection={"column"} mb={"4rem"} justifyContent="center">
                            <Link mb={"1rem"} href="tel:+54 9 11 3158 9030" style={{display: 'flex', alignItems: 'center'}}>
                                <AiFillPhone fontSize={"2rem"} style={{marginRight: "0.5rem"}} />
                                +54 911 6006-7739
                            </Link>
                            <Link mb={"1rem"} href="" style={{display: 'flex', alignItems: 'center'}}>
                                <MdEmail fontSize={"2rem"} style={{marginRight: "0.5rem"}} />
                                info@healight.com.ar
                            </Link>
                            <Link href="https://www.google.com/maps/place/Healight/@-34.6186684,-58.3666194,15z/data=!4m5!3m4!1s0x0:0x179b4ba4cc72d3d6!8m2!3d-34.6186634!4d-58.3665569" target="_blank" style={{display: 'flex', alignItems: 'center'}}>
                                <MdLocationOn fontSize={"2rem"} style={{marginRight: "0.5rem"}} />
                                Av. Ing. Huergo 653 piso 7 - Buenos Aires - Argentina
                            </Link>
                        </Flex>
                        <SocialLinks />
                    </Box>
                </Flex>
                <Box width={['100%', '100%', 1/2]} className="form-column" mt={["4rem", "4rem", 0]}>
                    <ContactForm/>
                </Box>
            </Flex>
        </StyledFooter>
    )
}

const StyledFooter = styled(Flex)`
    color: ${props => props.theme.color.fontInverted};
`

export default Footer;