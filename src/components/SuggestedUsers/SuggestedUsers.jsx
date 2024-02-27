import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";
import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.500" }}
          cursor={"pointer"}
        >
          See all
        </Text>
      </Flex>

      <SuggestedUser
        name="John 1"
        followers={123}
        avatar="https://unsplash.com/photos/low-angle-photography-of-purple-sky-NvesrDbsrL4"
      />
      <SuggestedUser
        name="Jane 1"
        followers={456}
        avatar="https://unsplash.com/photos/calm-sea-during-golden-hour-BCx6t5pJwVw"
      />
      <SuggestedUser
        name="Joe 1"
        followers={789}
        avatar="https://unsplash.com/photos/white-flowers-6gPwolpX7jg"
      />

      <Box alignSelf={"start"} fontSize={12} color={"gray.500"} mt={5}>
        © 2024 Built By{" "}
        <Link
          href="https://github.com/avallip443"
          target={"_blank"}
          fontSize={12}
          color={"gray.500"}
        >
          avallip443
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
