import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Comment = ({ username, profilePic, createdAt, text }) => {
  return (
    <Flex gap={4}>
      <Avatar src={profilePic} name={username} size={"sm"} />
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Text fontSize={12} fontWeight={"bold"}>
            {username}
          </Text>
          <Text fontSize={14}>{text}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
