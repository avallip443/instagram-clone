import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";
import { Box, Container, Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
          mr={20}
        >
          {/*<SuggestedUsers /> */}
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
