import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../../hooks/useGetUserPosts";
import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";

const ProfilePosts = () => {
  const { isLoading, posts } = useGetUserPosts();
  const noPostsFound = !isLoading && posts.length == 0;

  if (noPostsFound) {
    return <NoPostsFound />;
  }

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2].map((_, index) => (
          <VStack key={index} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          {posts.map((post) => (
            <ProfilePost post={post} key={post.id} />
          ))}
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;

const NoPostsFound = () => {
  return (
    <Flex flexDirection={"column"} textAlign={"center"} mx={"auto"} mt={10}>
      <Text fontSize={"2xl"}>No Posts Found</Text>
    </Flex>
  );
};
