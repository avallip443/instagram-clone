import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

const useShowToast = () => {
  const toast = useToast();

  // userCallBack prevents infinite loop by caching the function
  const showToast = useCallback(
    (title, description, status) => {
      toast({
        title: title,
        description: description,
        status: status,
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );

  return showToast;
};

export default useShowToast;
