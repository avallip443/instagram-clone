import {timeAgo} from "../../utils/timeAgo";
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
import useLikePost from "../../hooks/useLikePost";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const { handleLikePost, isLiked, likes } = useLikePost(post);

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex w={"full"} alignItems={"center"} gap={4} mb={2} mt={4} pt={0}>
        {/* Like button */}
        <Box fontSize={18} cursor={"pointer"} onClick={handleLikePost}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        {/* Comment button */}
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

      {isProfilePage && (
        <Text fontSize={12} color={"gray"}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}

      {!isProfilePage && (
        <>
          <Text fontSize={"sm"} fontWeight={700}>
            {creatorProfile?.username}
            <Text as="span" fontWeight={400}>
              {post.caption}
            </Text>
          </Text>
          {post.comments.length > 0 && (
            <Text fontSize={"sm"} color={"gray"} cursor={"pointer"}>
              View all {post.comments.length} comments
            </Text>
          )}
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
