import useLogin from "../../hooks/useLogin";
import { useState } from "react";
import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, error, login } = useLogin();

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

      {error && (
        <Alert status="error" borderRadius={4} fontSize={13} p={2}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      <Button
        size={"sm"}
        w={"full"}
        fontSize={14}
        colorScheme="blue"
        isLoading={loading}
        onClick={() => login(inputs)}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
