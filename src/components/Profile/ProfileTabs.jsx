import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";

const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
      fontWeight={"bold"}
      textTransform={"uppercase"}
    >
      <Flex
        alignItems={"center"}
        gap={1}
        borderTop={"1px solid white"}
        p={3}
        cursor={"pointer"}
      >
        <Box fontSize={20}>
          <BsGrid3X3 />
        </Box>
        <Text display={{ base: "none", sm: "block" }} fontSize={12}>
          Posts
        </Text>
      </Flex>

      <Flex alignItems={"center"} gap={1} p={3} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsBookmark />
        </Box>
        <Text display={{ base: "none", sm: "block" }} fontSize={12}>
          Saved
        </Text>
      </Flex>

      <Flex alignItems={"center"} gap={1} p={3} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsSuitHeart fontWeight={"bold"} />
        </Box>
        <Text display={{ base: "none", sm: "block" }} fontSize={12}>
          Likes
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
