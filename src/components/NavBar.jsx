import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <nav>
      <HStack justify="space-between" pr={3}>
        <Image src={logo} alt="logo" w="60px"></Image>
        <Text>NavBar</Text>
      </HStack>
    </nav>
  );
};

export default NavBar;
