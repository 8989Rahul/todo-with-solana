import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";

interface HeaderInterface {
  BrandText: string;
}

export const Header = ({ BrandText }: HeaderInterface) => {
  return (
    <Flex justifyContent="space-between" mb="9">
      <Text fontSize="20px" fontWeight="bold">
        {BrandText}
      </Text>
      <Image
        alt="user"
        borderRadius="6px"
        boxSize="30px"
        src="https://bit.ly/sage-adebayo"
        fontSize="7px"
      />
    </Flex>
  );
};
