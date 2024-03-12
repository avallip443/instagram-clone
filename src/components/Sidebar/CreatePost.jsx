import useAuthStore from "../../store/authStore";
import usePostStore from "../../store/postStore";
import usePreviewImg from "../../hooks/usePreviewImg";
import useShowToast from "../../hooks/useShowToast";
import useUserProfileStore from "../../store/userProfileStore";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillImageFill } from "react-icons/bs";
import { CreatePostLogo } from "../../assets/constants";
import { firestore, storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, handleCreatePost } = useCreatePost();
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
  const [caption, setCaption] = useState("");
  const imageRef = useRef(null);
  const showToast = useShowToast();

  const handlePostCreation = async () => {
    try {
      await handleCreatePost(selectedFile, caption);
      onClose();
      setCaption("");
      setSelectedFile(null);
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return (
    <>
      <Tooltip
        hasArrow
        label={"Create"}
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
          onClick={onOpen}
        >
          <CreatePostLogo />
          <Box display={{ base: "none", md: "block" }}>Create</Box>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent bg={"black"} border={"1px solid gray"}>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Textarea
              placeholder="Post caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />

            <Input
              type="file"
              hidden
              ref={imageRef}
              onChange={handleImageChange}
            />

            <BsFillImageFill
              style={{
                marginTop: "15px",
                marginLeft: "5px",
                cursor: "pointer",
              }}
              size={16}
              onClick={() => imageRef.current.click()}
            />
            {selectedFile && (
              <Flex
                w={"full"}
                justifyContent={"center"}
                position={"relative"}
                mt={5}
              >
                <Image src={selectedFile} alt="Selected image" />
                <CloseButton
                  position={"absolute"}
                  top={2}
                  right={2}
                  onClick={() => {
                    setSelectedFile("");
                  }}
                />
              </Flex>
            )}
          </ModalBody>

          <ModalFooter>
            <Button mr={3} isLoading={isLoading} onClick={handlePostCreation}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;

function useCreatePost() {
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const createPost = usePostStore((state) => state.createPost);
  const addPost = useUserProfileStore((state) => state.addPost);
  const { pathname } = useLocation();
  const showToast = useShowToast();

  const handleCreatePost = async (selectedFile, caption) => {
    if (isLoading) {
      return;
    }

    if (!selectedFile) {
      throw new Error("Please select an image");
    }

    setIsLoading(true);

    const newPost = {
      caption: caption,
      likes: [],
      comments: [],
      createdAt: Date.now(),
      createdBy: authUser.uid,
    };

    try {
      const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
      const userDocRef = doc(firestore, "users", authUser.uid);
      const imageRef = ref(storage, `posts/${postDocRef.id}`);

      await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
      await uploadString(imageRef, selectedFile, "data_url");
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(postDocRef, { imageURL: downloadURL });

      newPost.imageURL = downloadURL;

      if (userProfile.uid === authUser.uid) {
        createPost({ ...newPost, id: postDocRef.id });
      }

      if (pathname !== "/" && userProfile.uid === authUser.uid) {
        addPost({ ...newPost, id: postDocRef.id });
      }

      showToast("Success", "Post created successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleCreatePost };
}
