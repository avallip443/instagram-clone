import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <>
      <Input
        size={"sm"}
        fontSize={14}
        placeholder="Username or email"
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        size={"sm"}
        fontSize={14}
        placeholder="Password"
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <Button size={"sm"} w={"full"} fontSize={14} colorScheme="blue">
        Log in
      </Button>
    </>
  );
};

export default Login;
