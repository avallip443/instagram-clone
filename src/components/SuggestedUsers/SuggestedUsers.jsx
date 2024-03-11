import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  if (isLoading) {
    return null;
  }

  return (
    <VStack gap={4} py={8} px={6}>
      <SuggestedHeader />
      {suggestedUsers.length !== 0 && (
        <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={12}
            fontWeight={"bold"}
            _hover={{ color: "gray.500" }}
          >
            See all
          </Text>
        </Flex>
      )}

      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} />
      ))}

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
