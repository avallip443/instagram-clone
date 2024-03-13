import useAuthStore from "../../store/authStore";
import usePostComment from "../../hooks/usePostComment";
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
import { useRef, useState } from "react";

const PostFooter = ({ post, username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex w={"full"} alignItems={"center"} gap={4} mb={2} mt={4} pt={0}>
        <Box fontSize={18} cursor={"pointer"} onClick={handleLike}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box
          fontSize={18}
          cursor={"pointer"}
          onClick={() => {
            commentRef.current.focus();
          }}
        >
          <CommentLogo />
        </Box>
      </Flex>

      <Text fontSize={"sm"} fontWeight={600}>
        {likes} likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontSize={"sm"} fontWeight={700}>
            {username}{" "}
            <Text as="span" fontWeight={400}>
              Very nice test
            </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            View all 1,000 comments
          </Text>
        </>
      )}

      {/* only authorized users can comment */}
      {authUser && (
        <Flex
          w={"full"}
          justifyContent={"space-betwee"}
          alignItems={"center"}
          gap={2}
        >
          <InputGroup>
            <Input
              value={comment}
              ref={commentRef}
              variant={"flushed"}
              placeholder={"Add a comment..."}
              fontSize={14}
              onChange={(e) => setComment(e.target.value)}
            />
            <InputRightElement>
              <Button
                bg={"transparent"}
                fontSize={14}
                fontWeight={600}
                color={"blue.500"}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                isLoading={isCommenting}
                onClick={handleSubmitComment}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
