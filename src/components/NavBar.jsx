import React from "react";
import { HStack, Image, Text, Switch } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { useColorMode } from "@chakra-ui/color-mode";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <nav>
      <HStack justify="space-between" pr={3}>
        <Image src={logo} alt="logo" w="60px"></Image>
        <HStack>
          <Switch colorScheme="green" onChange={toggleColorMode}></Switch>
          <Text>Dark Mode</Text>
        </HStack>
      </HStack>
    </nav>
  );
};

export default NavBar;
