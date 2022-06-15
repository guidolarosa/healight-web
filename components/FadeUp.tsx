import { Box } from 'rebass'

const FadeUp = (props : any) => {
    return (
        <Box data-aos="fade-up" width={"100%"}>
            {props.children}
        </Box>
    )
};

export default FadeUp;