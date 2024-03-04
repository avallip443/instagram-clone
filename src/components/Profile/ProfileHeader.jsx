import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProfileHeader = () => {
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
        <Avatar
          src="/profilepic.png"
          name="test_profile"
          alt="test_profile logo"
        ></Avatar>
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
          <Text fontSize={{ base: "sm", md: "md" }}>test_profile</Text>
          <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
            <Button
              size={{ base: "xs", md: "sm" }}
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as="span" fontWeight={"bold"} mr={1}>4</Text>
            Posts
          </Text>

          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as="span" fontWeight={"bold"} mr={1}>149</Text>
            Followers
          </Text>

          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as="span" fontWeight={"bold"} mr={1}>203</Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>userName</Text>
        </Flex>
        <Flex>
          <Text fontSize={'sm'}>This is my IG profile</Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
