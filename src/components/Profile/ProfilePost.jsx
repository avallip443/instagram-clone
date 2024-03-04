import Comment from "../Comment/Comment";
import PostFooter from '../FeedPosts/PostFooter'
import {
  Avatar,
  Box,
  Divider,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProfilePost = ({ image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem
        position={"relative"}
        border={"1px solid whiteAlpha.300"}
        borderRadius={4}
        aspectRatio={1 / 1}
        overflow={"hidden"}
        cursor={"pointer"}
        onClick={onOpen}
      >
        <Flex
          justifyContent={"center"}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          opacity={0}
          _hover={{ opacity: 1 }}
          transition={"all 0.3s ease"}
        >
          <Flex justifyContent={"center"} alignItems={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>

            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Image
          src={image}
          alt="profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              w={{ base: "90%", sm: "70%", md: "full" }}
              gap={4}
              mx={"auto"}
            >
              <Box
                flex={1.5}
                overflow={"hidden"}
                border={"1px solid whiteAlpha.300"}
                borderRadius={4}
              >
                <Image src={image} alt="profile post" />
              </Box>
              <Flex
                display={{ base: "none", md: "flex" }}
                flex={1}
                flexDirection={"column"}
                px={10}
              >
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src="/profilepic.png"
                      name={"test user"}
                      size={"sm"}
                    />
                    <Text fontSize={12} fontWeight={"bold"}>
                      Test user
                    </Text>
                  </Flex>
                  <Box
                    borderRadius={4}
                    p={1}
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                  >
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>
                <Divider bg={"gray.500"} my={4} />
                <VStack
                  w={"full"}
                  maxH={"350px"}
                  alignItems={"start"}
                  overflowY={"auto"}
                >
                  <Comment
                    username="test user"
                    profilePic="./profilepic.png"
                    createdAt="1d ago"
                    text={"sample images"}
                  />
                  <Comment
                    username="test user 2"
                    profilePic="./profilepic.png"
                    createdAt="12h ago"
                    text={"sample"}
                  />
                  <Comment
                    username="test user 3"
                    profilePic="./profilepic.png"
                    createdAt="1w ago"
                    text={"images"}
                  />
                </VStack>
                <Divider bg={'gray.8000'} my={4} />
                <PostFooter isProfilePage={true} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
