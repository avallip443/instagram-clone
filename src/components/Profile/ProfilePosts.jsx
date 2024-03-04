import ProfilePost from "./ProfilePost";
import { useEffect, useState } from "react";
import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
        [0, 1, 2, 3, 4, 5].map((_, index) => (
          <VStack key={index} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <ProfilePost image="/img1.jpg" />
          <ProfilePost image="/img2.jpg" />
          <ProfilePost image="/img3.jpg" />
          <ProfilePost image="/img4.jpg" />
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;
