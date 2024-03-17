import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import useGetUserProfileById from "../../hooks/useGetUserProfileByID";
import { Box, Image } from "@chakra-ui/react";

const FeedPost = ({ post }) => {
  const { userProfile } = useGetUserProfileById(post.createdBy);

  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={post.imageURL} alt={"Feed Post Image"} />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </>
  );
};

export default FeedPost;
