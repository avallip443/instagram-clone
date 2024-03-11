import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { CreatePostLogo } from "../../assets/constants";

const CreatePost = () => {
  return (
    <>
      <Tooltip
        hasArrow
        label={"Create"}
        display={{ base: "block", md: "none" }}
        placement={"right"}
        ml={1}
        openDelay={500}
      >
        <Flex
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          alignItems={"center"}
          gap={4}
          borderRadius={6}
          p={2}
          _hover={{ bg: "whiteAlpha.400" }}
        >
          <CreatePostLogo />
          <Box display={{ base: "none", md: "block" }}>Create</Box>
        </Flex>
      </Tooltip>
    </>
  );
};

export default CreatePost;
