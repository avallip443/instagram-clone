import { timeAgo } from "../../utils/timeAgo";
import useGetUserProfileByID from "../../hooks/useGetUserProfileByID";
import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Comment = ({ comment }) => {
  const { userProfile, isLoading } = useGetUserProfileByID(comment.createdBy);

  if (isLoading) {
    return <CommentSkeleton />;
  }

  return (
    <Flex gap={4}>
      <Link to={`/${userProfile.username}`}>
        <Avatar src={userProfile.profilePicURL} size={"sm"} />
      </Link>
      <Flex direction={"column"}>
        <Flex alignItems={"center"} gap={2}>
          <Link to={`/${userProfile.username}`}>
            <Text fontSize={12} fontWeight={"bold"}>
              {userProfile.username}
            </Text>
          </Link>
          <Text fontSize={14}>{comment.comment}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {timeAgo(comment.createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;

const CommentSkeleton = () => {
  return (
    <Flex w={"full"} alignItems={"center"} gap={1}>
      <SkeletonCircle h={10} w="10" />
      <Flex flexDirection={"column"} gap={1}>
        <Skeleton height={2} width={100} />
        <Skeleton height={2} width={50} />
      </Flex>
    </Flex>
  );
};
