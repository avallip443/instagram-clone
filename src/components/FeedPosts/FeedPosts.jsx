import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";
import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2].map((_, index) => (
          <VStack key={index} alignItems={"flex=start"} gap={4} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack alignItems={"flex-start"} gap={2}>
                <Skeleton w={"200px"} height={"10px"} />
                <Skeleton w={"200px"} height={"10px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"400px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post} />)}
      {!isLoading && posts.length === 0 && (
        <>
          <Text textAlign={"center"} fontSize={"lg"} color={"red.400"}>
            Looks like you don't have any friends ...
          </Text>
          <Text textAlign={"center"} color={"red.400"}>
            Let's go make some!
          </Text>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
