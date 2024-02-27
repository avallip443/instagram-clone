import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";

const PostFooter = ({ username }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box mb={10}>
      <Flex alignItems={"center"} w={"full"} gap={4} mb={2} mt={4} pt={0}>
        <Box fontSize={18} cursor={"pointer"} onClick={handleLike}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box fontSize={18} cursor={"pointer"}>
          <CommentLogo />
        </Box>
      </Flex>

      <Text fontSize={"sm"} fontWeight={600}>
        {likes} likes
      </Text>
      <Text fontSize={"sm"} fontWeight={700}>
        {username}{" "}
        <Text as="span" fontWeight={400}>
          Very nice test
        </Text>
      </Text>
      <Text fontSize={"sm"} color={"gray"}>
        View all 1,000 comments
      </Text>
      <Flex
        justifyContent={"space-betwee"}
        alignItems={"center"}
        w={"full"}
        gap={2}
      >
        <InputGroup>
          <Input
            fontSize={14}
            variant={"flushed"}
            placeholder={"Add a comment..."}
          />
          <InputRightElement>
            <Button
              bg={"transparent"}
              fontSize={14}
              fontWeight={600}
              color={"blue.500"}
              cursor={"pointer"}
              _hover={{ color: "white" }}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
