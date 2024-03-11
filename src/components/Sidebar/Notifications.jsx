import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { NotificationsLogo } from "../../assets/constants";

const Notifications = () => {
  return (
    <Tooltip
      hasArrow
      label={"Notifications"}
      display={{ base: "block", md: "none" }}
      placement={"right"}
      ml={1}
      openDelay={500}
    >
      <Flex
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        alignItems={"center"}
        gap={4}
        borderRadius={6}
        p={2}
        _hover={{ bg: "whiteAlpha.400" }}
      >
        <NotificationsLogo />
        <Box display={{ base: "none", md: "block" }}>Notifications</Box>
      </Flex>
    </Tooltip>
  );
};

export default Notifications;
