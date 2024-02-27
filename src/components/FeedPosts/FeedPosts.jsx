import { useEffect, useState } from "react";
import FeedPost from "./FeedPost";
import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 20000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, index) => (
          <VStack key={index} alignItems={"flex=start"} gap={4} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack alignItems={"flex-start"} gap={2}>
                <Skeleton w={"200px"} height={"10px"} />
                <Skeleton w={"200px"} height={"10px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <FeedPost
            img="./img1.jpg"
            username="test_user1"
            avatar="./img1.jpg"
          />
          <FeedPost
            img="./img2.jpg"
            username="test_user2"
            avatar="./img2.jpg"
          />
          <FeedPost
            img="./img3.jpg"
            username="test_user3"
            avatar="./img3.jpg"
          />
          <FeedPost
            img="./img4.jpg"
            username="test_user4"
            avatar="./img4.jpg"
          />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
