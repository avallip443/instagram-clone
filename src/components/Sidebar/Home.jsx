import { AiFillHome } from "react-icons/ai";
import { Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Tooltip
      hasArrow
      label={"Home"}
      display={{ base: "block", md: "none" }}
      placement={"right"}
      ml={1}
      openDelay={500}
    >
      <Link
        to={"/"}
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
        <AiFillHome size={25} />
        <Box display={{ base: "none", md: "block" }}>Home</Box>
      </Link>
    </Tooltip>
  );
};

export default Home;
