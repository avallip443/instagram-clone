import SuggestedUser from "../SuggestedUsers/SuggestedUser";
import useSearchUser from "../../hooks/useSearchUser";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchLogo } from "../../assets/constants";
import { useRef } from "react";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchRef = useRef(null);
  const { user, isLoading, getUserProfile, setUser } = useSearchUser();

  const handleSearchUser = (e) => {
    e.preventDefault();
    getUserProfile(searchRef.current.value);
  };

  console.log(user);

  return (
    <>
      <Tooltip
        hasArrow
        label={"Search"}
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
          <SearchLogo />
          <Box display={{ base: "none", md: "block" }}>Search</Box>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset={"slideLeft"}>
        <ModalOverlay />
        <ModalContent bg={"black"} maxW={"400px"} border={"1px solid gray"}>
          <ModalHeader>Search user</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSearchUser}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder="user name" ref={searchRef} />
              </FormControl>
              <Flex w={"full"} justifyContent={"flex-end"}>
                <Button
                  type="submit"
                  size={"sm"}
                  my={4}
                  ml={"auto"}
                  isLoading={isLoading}
                >
                  Search
                </Button>
              </Flex>
            </form>
            {user && <SuggestedUser user={user} setUser={setUser} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;
