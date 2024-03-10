import EditProfile from "./EditProfile";
import useAuthStore from "../../store/authStore";
import useFollowUser from "../../hooks/useFollowUser";
import useUserProfileStore from "../../store/userProfileStore";
import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(
    userProfile?.uid
  );

  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile.username;
  const visitingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile.username;

  return (
    <Flex
      direction={{ base: "column", sm: "row" }}
      gap={{ base: 4, sm: 10 }}
      py={10}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar src={userProfile.profilePicURL} alt="user profile pic"></Avatar>
      </AvatarGroup>
      <VStack alignItems={"start"} flex={1} gap={2} mx={"auto"}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
          gap={4}
        >
          {/* change md font size to lg or md */}
          <Text fontSize={{ base: "sm", md: "md" }}>
            {userProfile.username}
          </Text>
          {visitingOwnProfileAndAuth && (
            <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
              <Button
                size={{ base: "xs", md: "sm" }}
                bg={"white"}
                color={"black"}
                _hover={{ bg: "whiteAlpha.500" }}
                onClick={onOpen}
              >
                Edit Profile
              </Button>
            </Flex>
          )}
          {visitingAnotherProfileAndAuth && (
            <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
              <Button
                size={{ base: "xs", md: "sm" }}
                bg={"blue.500"}
                color={"white"}
                _hover={{ bg: "blue.600" }}
                isLoading={ isUpdating }
                onClick={ handleFollowUser }
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
            </Flex>
          )}
        </Flex>

        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.posts.length}
            </Text>
            Posts
          </Text>

          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.followers.length}
            </Text>
            Followers
          </Text>

          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.following.length}
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {userProfile.fullname}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize={"sm"}>{userProfile.bio}</Text>
        </Flex>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default ProfileHeader;
