import React from "react";
import { HStack, Image, Switch, FormLabel } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { useColorMode } from "@chakra-ui/color-mode";

const NavBar = () => {
  const { ColorMode, toggleColorMode } = useColorMode();
  return (
    <nav>
      <HStack justify="space-between" pr={3}>
        <Image src={logo} alt="logo" w="60px"></Image>
        <HStack>
          <Switch
            defaultChecked
            colorScheme="green"
            onChange={toggleColorMode}
          ></Switch>
          <FormLabel>Dark Mode</FormLabel>
        </HStack>
      </HStack>
    </nav>
  );
};

export default NavBar;
