import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import { Container, Flex } from "@chakra-ui/react";

const ProfilePage = () => {
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
        <ProfileHeader />
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
