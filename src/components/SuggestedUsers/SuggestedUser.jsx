import { useState } from "react";
import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";

const SuggestedUser = ({ followers, name, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name={name} size={"md"} src={avatar} />
        <VStack alignItems={"flex-start"} spacing={2}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        bg={"transparent"}
        h={"max-content"}
        fontSize={13}
        fontWeight={"medium"}
        p={0}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
