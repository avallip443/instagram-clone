import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";
import useAuthStore from "../../store/authStore";
import useShowToast from "../../hooks/useShowToast";
import usePostStore from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";
import { AiFillHeart } from "react-icons/ai";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import {
  Avatar,
  Button,
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
import { deleteObject, ref } from "firebase/storage";
import { FaComment } from "react-icons/fa";
import { firestore, storage } from "../../firebase/firebase";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

const ProfilePost = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDeleting, setIsDeleting] = useState(false);
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const authUser = useAuthStore((state) => state.user);
  const deletePost = usePostStore((state) => state.deletePost);
  const decrementPostCount = useUserProfileStore((state) => state.deletePost);
  const showToast = useShowToast();

  const handleDeletePost = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    if (isDeleting) return;

    try {
      const imageRef = ref(storage, `posts/${post.id}`);
      const userRef = doc(firestore, "users", authUser.uid);
      await deleteObject(imageRef);
      await deleteDoc(doc(firestore, "posts", post.id));

      await updateDoc(userRef, {
        posts: arrayRemove(post.id),
      });

      deletePost(post.id);
      decrementPostCount(post.id);
      showToast("Success", "Post deleted successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      {/* post image */}
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
                {post.likes.length}
              </Text>
            </Flex>

            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                {post.comments.length}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Image
          src={post.imageURL}
          alt="profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      {/* post pop-up */}
      <Modal
        size={{ base: "3xl", md: "5xl" }}
        isCentered={true}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              w={{ base: "90%", sm: "70%", md: "full" }}
              maxH={"90vh"}
              minH={"50vh"}
              gap={4}
              mx={"auto"}
            >
              <Flex
                flex={1.5}
                justifyContent={"center"}
                alignItems={"center"}
                overflow={"hidden"}
                border={"1px solid whiteAlpha.300"}
                borderRadius={4}
              >
                <Image src={post.imageURL} alt="profile post" />
              </Flex>
              <Flex
                display={{ base: "none", md: "flex" }}
                flex={1}
                flexDirection={"column"}
                px={10}
              >
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src={userProfile.profilePicURL}
                      name={"test user"}
                      size={"sm"}
                    />
                    <Text fontSize={12} fontWeight={"bold"}>
                      {userProfile.username}
                    </Text>
                  </Flex>

                  {/* delete */}
                  {authUser?.uid === userProfile.uid && (
                    <Button
                      size={"sm"}
                      bg={"transparent"}
                      borderRadius={4}
                      p={1}
                      _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                      isLoading={isDeleting}
                      onClick={handleDeletePost}
                    >
                      <MdDelete size={20} cursor={"pointer"} />
                    </Button>
                  )}
                </Flex>
                <Divider bg={"gray.500"} my={4} />

                {/* comments */}
                <VStack
                  w={"full"}
                  maxH={"350px"}
                  alignItems={"start"}
                  overflowY={"auto"}
                >
                  {post.comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                  ))}
                </VStack>
                <Divider bg={"gray.8000"} my={4} />
                <PostFooter isProfilePage={true} post={post} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
