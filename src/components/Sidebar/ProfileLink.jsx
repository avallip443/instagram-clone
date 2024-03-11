import useAuthStore from "../../store/authStore";
import { Avatar, Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const ProfileLink = () => {
  const authUser = useAuthStore((state) => state.user);

  return (
    <Tooltip
      hasArrow
      label={"Profile"}
      display={{ base: "block", md: "none" }}
      placement="right"
      ml={1}
      openDelay={500}
    >
      <Link
        to={`/${authUser?.username}`}
        as={RouterLink}
        display={"flex"}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        alignItems={"center"}
        gap={4}
        borderRadius={6}
        p={2}
        _hover={{ bg: "whiteAlpha.400" }}
      >
        <Avatar size={"sm"} src={authUser?.profilePicURL || ""} />
        <Box display={{ base: "none", md: "block" }}>Profile</Box>
      </Link>
    </Tooltip>
  );
};

export default ProfileLink;
