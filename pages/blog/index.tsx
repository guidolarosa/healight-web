import styled from 'styled-components';

import { Box, Flex, Text } from 'rebass'
import Root from '../../components/Root';
import { NextPage } from 'next';
import { fetchAPI  } from '../../lib/api';
import Card from './../../components/Card';
import { getStrapiMedia } from '../../lib/media';
import Link from './../../components/Link';

const Blog: NextPage = (props : any) => {
    const formatTimestamp = (timestamp : string) => {
        let newDate = new Date(timestamp).toLocaleDateString('es');
        return newDate;
    }

    return (
        <StyledBlogPage flexDirection={"column"}>
            <Root
                header={
                    <Box className={"hero-blog"} height="calc(100vh - 4rem)">
                        <Flex width={['90%', '90%', '90%', '64rem']} mx={"auto"} alignItems={"center"} height={"100%"}>
                            <Text as="h1" mb={"2rem"} fontSize={"4rem"} color={"white"}>Lo último del blog</Text>
                        </Flex>
                    </Box>
                }
                >
                <Flex flexDirection={"column"} backgroundColor={"hsla(0, 0%, 95%, 1)"}>
                    <Flex 
                        mx={"auto"}
                        py={"4rem"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        flexDirection={"column"}
                        width={['90%', '90%', '90%', '64rem']}
                        textAlign={"center"}
                    >
                        {/* <Text as="h1" mb={"2rem"}>Lo último del blog</Text> */}
                        <Flex mx={"-1rem"} width={"100%"} flexDirection={["column", "column", "row"]}>
                            {props.postsProps.data.map((post : any, index : number) => (
                                <Card 
                                    key={index}
                                    padding={false} 
                                    width={['100%', '100%', "calc(100% / 3)"]}
                                    sx={{
                                        mx: [0,0, '1rem'],
                                        borderRadius: '0.5rem',
                                        boxShadow: '0 0.2rem 0.2rem lightgray',
                                        mb: ['2rem', '2rem', 0, 0],
                                        maxHeight: "18rem",
                                        transition: '0.15s ease-in-out all',
                                        '&:hover': {
                                            boxShadow: '0 0.5rem 0.5rem lightgray',
                                        }
                                    }}
                                >
                                    <Box 
                                        sx={{
                                            backgroundImage: `url(${getStrapiMedia(post.attributes.Thumbnail)})`,
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            height: '14rem',
                                            borderRadius: '0.5rem 0.5rem 0 0',
                                        }}
                                    />
                                    <Flex height={"100%"} flexDirection={'column'} p={"1rem"}>
                                        <Flex 
                                            flexDirection={"column"} 
                                           
                                            pb={"1rem"}
                                        >
                                            <Text as="h2" fontSize={"1rem"}>{post.attributes.Title}</Text>
                                            <Text opacity={0.5} fontSize={"0.8rem"}>
                                                {formatTimestamp(post.attributes.createdAt)}
                                            </Text>
                                        </Flex>
                                        <Flex  sx={{borderTop: '1px solid whitesmoke'}} mt={"auto"} justifyContent={"center"} pt={"1rem"}>
                                            <Link href={`/blog/${post.id}`}>
                                                Ver artículo
                                            </Link>
                                        </Flex>
                                    </Flex>
                                </Card>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
            </Root>
        </StyledBlogPage>
    )
}

const StyledBlogPage = styled<any>(Flex)`
    header {
        .hero-blog {
            background-image: url('/img/blog/header.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: left bottom;
        }
    }
`;

export default Blog;

export async function getStaticProps(context : any) {
    const postsProps = await fetchAPI("/posts", {
      populate: {
        Thumbnail: '*',
        HeaderImage: '*'
      }
    })
    return {
      props: { postsProps }
    }
  }