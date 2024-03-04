import { useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Input
        size={"sm"}
        fontSize={14}
        placeholder="Full name"
        type="text"
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
      />
      <Input
        size={"sm"}
        fontSize={14}
        placeholder="Username"
        type="text"
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <Input
        size={"sm"}
        fontSize={14}
        placeholder="Email"
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <InputGroup>
        <Input
          size={"sm"}
          fontSize={14}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button
            size={"sm"}
            variant={"ghost"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button size={"sm"} w={"full"} fontSize={14} colorScheme="blue">
        Sign up
      </Button>
    </>
  );
};

export default Signup;
