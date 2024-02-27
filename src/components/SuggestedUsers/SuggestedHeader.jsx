import { Link as RouterLink } from "react-router-dom";
import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="test_user" size={"lg"} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          test_user
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.500"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Log Out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
