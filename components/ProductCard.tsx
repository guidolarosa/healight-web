import { Flex, Box, Text } from "rebass";
import styled from "styled-components";
import { getStrapiMedia } from "../lib/media";
import Card from './Card';

const ProductCard = (props : any) => (
    <StyledProductCard
        dark
        sx={{
            backgroundColor: 'hsla(240, 2%, 8%, 1) !important',
            width: "33%",
            border: '1px solid hsla(0, 0%, 44%, 1) !important',
            color: 'white !important',
            borderRadius: '1rem'
        }}
        {...props}
    >
        <Flex flexDirection={"column"} p="1rem">
            <Text mb={"0.5rem !important"} as="h3">{props.product.attributes.Name}</Text>
            <Text>{props.product.attributes.ShortDescription}</Text>
        </Flex>
        <Box px={"1rem"}>
            <Box sx={{
                backgroundImage: `url(${getStrapiMedia(props.product.attributes.MainImage)})`,
                height: '20rem',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom center'
                }}
            />
        </Box>
    </StyledProductCard>
);

const StyledProductCard = styled(Card)``;

export default ProductCard;