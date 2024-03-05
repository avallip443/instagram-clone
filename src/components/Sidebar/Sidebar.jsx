import { Avatar, Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="John Doe" src="/profilepic.png" />,
      text: "Profile",
      link: "/asaprogrammerc",
    },
  ];

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
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              display={{ base: "block", md: "none" }}
              placement="right"
              m1={1}
              openDelay={500}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
                alignItems={"center"}
                gap={4}
                borderRadius={6}
                p={2}
                _hover={{ bg: "whiteAlpha.400" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
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
