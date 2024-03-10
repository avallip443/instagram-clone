import GoogleAuth from "./GoogleAuth";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src="/logo.png"
            alt="Instagram logo"
            h={85}
            cursor={"pointer"}
          />
          {/* Email login/signin */}
          {isLogin ? <Login /> : <Signup />}

          {/* OR login text divisor */}
          <Flex
            w={"full"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            my={4}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text>OR</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          {/* Google signin */}
          <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box fontSize={16} mx={2}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Login"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
