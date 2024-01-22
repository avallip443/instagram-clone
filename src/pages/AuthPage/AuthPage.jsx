import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { Container, Box, Flex, Image, VStack } from "@chakra-ui/react";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          {/* left side */}
          <Box display={{ base: "none", md: "block" }}>
            {/* fix stretch */}
            <Image src="/auth.png" h={650} alt="Phone preview image" />
          </Box>

          {/* right side*/}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={10} alt="PlayStore logo" />
              <Image src="/microsoft.png" h={10} alt="Microsoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
