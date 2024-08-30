import NavBar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box
        minHeight="100dvh"
        marginTop={{ xl: "6vmax", lg: "8vmax", md: "10vmax" }}
        // marginBottom={{ xl: "6vmax", lg: "8vmax", md: "10vmax", base: "5vmax" }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
