import useAuthStore from "../../store/authStore";
import useFollowUser from "../../hooks/useFollowUser";
import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";

const SuggestedUser = ({ user, setUser }) => {
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
  const authUser = useAuthStore((state) => state.user);

  const onFollowUser = async () => {
    await handleFollowUser();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((follower) => follower.uid !== authUser.uid)
        : [...user.followers, authUser],
    });
  };

  return (
    <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={user.profilePicURL} size={"md"} />
        <VStack alignItems={"flex-start"} spacing={2}>
          <Box fontSize={12} fontWeight={"bold"}>
            {user.fullname}
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
          bg={"transparent"}
          h={"max-content"}
          fontSize={13}
          fontWeight={"medium"}
          p={0}
          color={"blue.400"}
          cursor={"pointer"}
          _hover={{ color: "white" }}
          isLoading={isUpdating}
          onClick={onFollowUser}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
