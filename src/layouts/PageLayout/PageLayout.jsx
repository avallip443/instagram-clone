import Sidebar from "../../components/Sidebar/Sidebar";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

{
  /* 
    child either homepage content or authpage content
    uses sidebar only once in PageLayout to wrap the children with it instead of adding one to every page except the AuthPage
  */
}
const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  /* use null if not authenticated  */
  const [user, loading, error] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  return (
    <Flex>
      {/* left side bar */}
      {/* displays sidebar it not auth page */}
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* page on right */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
