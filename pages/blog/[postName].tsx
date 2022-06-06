import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import Root from "../../components/Root";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import ReactMarkdown from 'react-markdown';
import FadeUp from "../../components/FadeUp";

const Post = (props : any) => {
    return (
        <StyledPostPage flexDirection={"column"}>
            <Root>
                <Flex width={"100%"} sx={{background: 'white'}} py={"4rem"}>
                    <Flex flexDirection={"column"} width={['90%', '90%', '90%', '64rem']} mx={"auto"} pt={'2rem'} pb={'2rem'} sx={{background: 'white'}}>
                        <Text as="h1" mb={"1.5rem"}>{props.postProps.data.attributes.Title}</Text>
                        <Text as="strong" fontSize={"1.25rem"} fontWeight={400} color={"hsla(0,0%,0%,0.7)"} lineHeight={"2rem"}>{props.postProps.data.attributes.Subtitle}</Text>
                    </Flex>
                </Flex>
                <Box className={"header-blog"} height="calc(40vh)" sx={{
                    backgroundImage: `url(${getStrapiMedia(props.postProps.data.attributes.HeaderImage)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}/>
                <Flex width={"100%"} sx={{background: 'white'}} pt={"4rem"}>
                    <Flex flexDirection={"column"} width={['90%', '90%', '90%', '64rem']} mx={"auto"} pt={'2rem'} pb={'2rem'} sx={{background: 'white'}}>
                        <Box className={"post-content"} width={[1,1,"42rem"]}>
                            <ReactMarkdown>
                                {props.postProps.data.attributes.PostContent}
                            </ReactMarkdown>
                        </Box>
                    </Flex>
                </Flex>
            </Root>
        </StyledPostPage>
    )
}

const StyledPostPage = styled(Flex)`
    .post-content {
        img {
            width: 100%;
        }
        h1,h2,h3,h4,h5,h6 {
            margin-bottom: 1rem;
        }
        p {
            margin-bottom: 2rem;
            line-height: 1.75rem;
            color: hsla(0,0%,0%,0.7);
            font-weight: 300;
        }
    }
`;

export default Post;

export async function getStaticPaths() {
    const posts = await fetchAPI("/posts");

    const paths = posts.data.map((post : any) => ({params: { postName: post.id.toString()} }));

    return {
        paths: paths,
        fallback: true,
    }
}

export async function getStaticProps(context : any) {
    const postProps = await fetchAPI(`/posts/${context.params.postName}`, {
        populate: {
            HeaderImage: '*'
        }
    })
    return {
      props: { postProps }
    }
  }