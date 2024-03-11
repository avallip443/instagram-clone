import useLogout from "../../hooks/useLogout";
import { Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";
import { Link as RouterLink } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const { handleLogout, isLoggingOut } = useLogout();

  return (
    <Box
      top={0}
      left={0}
      position={"sticky"}
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        {/* desktop display */}
        <Link
          to={"/"}
          as={RouterLink}
          display={{ base: "none", md: "block" }}
          pl={2}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>

        {/* mobile display */}
        <Link
          to={"/"}
          as={RouterLink}
          display={{ base: "block", md: "none" }}
          w={10}
          borderRadius={6}
          p={2}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems />
        </Flex>

        {/* Logout button */}

        <Tooltip
          hasArrow
          label={"Logout"}
          display={{ base: "block", md: "none" }}
          placement="right"
          m1={1}
          openDelay={500}
        >
          <Flex
            w={{ base: 10, md: "full" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems={"center"}
            gap={4}
            borderRadius={6}
            mt={"auto"}
            p={2}
            _hover={{ bg: "whiteAlpha.400" }}
            onClick={handleLogout}
          >
            <TbLogout2 size={25} />
            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading={isLoggingOut}
            >
              Logout
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
