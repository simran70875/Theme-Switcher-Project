import { Box, Flex } from "@chakra-ui/react";
import SidebarMain from "../../components/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import { HeaderMain } from "../../components/header";
import { Footer } from "../../components/style/Footer.styled";

export default function Layout() {
  return (
    <Box pos={"fixed"} w="100%" h="100%">
      <HeaderMain />
      <Flex w="100%" h="100%">
        <SidebarMain />
        <Box w="100%">
          <Box h="85%">
            <Outlet />
          </Box>
          <Footer>
            Made with love by <a href=""> Simran</a>
          </Footer>
        </Box>
      </Flex>
    </Box>
  );
}
