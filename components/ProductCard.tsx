import { Flex, Box, Text } from "rebass";
import styled from "styled-components";
import { getStrapiMedia } from "../lib/media";
import Card from './Card';

const ProductCard = (props : any) => (
    <Flex as="a" href={`/equipos/${props.product.attributes.Name}`} width={'100%'} {...props}>
        <StyledProductCard
            dark
            sx={{
                backgroundColor: 'hsla(240, 2%, 8%, 1) !important',
                width: '100%',
                border: '1px solid hsla(0, 0%, 44%, 1) !important',
                color: 'white !important',
                borderRadius: '1rem',
                transition: '0.15s ease-in-out all',
                '&:hover': {
                    border: '1px solid white !important',
                    '.product-thumbnail': {
                        backgroundPosition: 'center bottom',
                    }
                }
            }}
            >
            <Flex flexDirection={"column"} p="2rem">
                <Text mb={"0.5rem !important"} as="h3">{props.product.attributes.Name}</Text>
                <Text sx={{opacity: 0.5}}>{props.product.attributes.ShortDescription}</Text>
            </Flex>
            <Box px={"1rem"}>
                <Box sx={{
                    backgroundImage: `url(${getStrapiMedia(props.product.attributes.MainImage)})`,
                    height: '20rem',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center calc(100% + 1rem)',
                    transition: '0.15s ease-in-out all'
                    }}
                    className="product-thumbnail"
                />
            </Box>
        </StyledProductCard>
    </Flex>
);

const StyledProductCard = styled(Card)``;

export default ProductCard;