import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";
import { Container, Flex, Link, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const ProfilePage = () => {
  // username from App.jsx Route attribute
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUsername(username);
  
  const userNotFound = !isLoading && !userProfile;
  if (userNotFound) {
    return <UserNotFound />;
  }

  return (
    <Container maxW={"container.lg"} py={5}>
      <Flex
        flexDirection={"column"}
        w={"full"}
        mx={"auto"}
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
      >
        {!isLoading && userProfile && <ProfileHeader />}
        {isLoading && <ProfileHeaderSkeleton />}
      </Flex>
      <Flex
        direction={"column"}
        maxW={"full"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        mx={"auto"}
        px={{ base: 2, sm: 4 }}
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;

const UserNotFound = () => {
  return (
    <Flex flexDirection={"column"} textAlign={"center"} mx={"auto"}>
      <Text fontSize={"2xl"}>User Not Found</Text>
      <Link
        as={RouterLink}
        to={"/"}
        w={"max-content"}
        color={"blue.500"}
        mx={"auto"}
      >
        Go home
      </Link>
    </Flex>
  );
};

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SkeletonCircle size="24" />

      <VStack
        alignItems={{ base: "center", sm: "flex-start" }}
        gap={2}
        mx={"auto"}
        flex={1}
      >
        <Skeleton height="12px" width="150px" />
        <Skeleton height="12px" width="100px" />
      </VStack>
    </Flex>
  );
};
