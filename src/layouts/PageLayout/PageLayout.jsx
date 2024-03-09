import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import { Box, Flex, Spinner } from "@chakra-ui/react";

{
  /* 
    child either homepage content or authpage content
    uses sidebar only once in PageLayout to wrap the children with it instead of adding one to every page except the AuthPage
  */
}
const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  /* use null if not authenticated  */
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";

  const checkUserIsAuth = !user && loading;
  if (checkUserIsAuth) return <PageLayoutSpinner />;

  return (
    <Flex flexDirection={canRenderNavbar ? "column" : "row"}>
      {/* left side bar */}
      {/* displays sidebar it not auth page */}
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* Navbar for unauthenticated users */}
      {canRenderNavbar ? <Navbar /> : null}
      {/* page on right */}
      <Box
        flex={1}
        w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDirection={"column"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Spinner size={"xl"} />
    </Flex>
  );
};
