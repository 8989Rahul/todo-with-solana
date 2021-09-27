import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useState } from "react";

export const SidebarComponent = ({ children }: any) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <Flex bg="#FFFFFF" borderRadius="2rem">
      <Box maxW="150px" minW="250px" h="96.6vh" pl="18px" py="18px">
        <Flex align="center">
          <Image
            alt="user"
            borderRadius="6px"
            boxSize="20px"
            src="https://bit.ly/sage-adebayo"
            mr="12px"
            fontSize="8px"
          />
          <Text color="#43434D" fontSize="18px" fontWeight="bold">
            Todos
          </Text>
        </Flex>

        <Box mt="33px">
          <Flex
            align="center"
            pl="8px"
            py="12px"
            cursor="pointer"
            bg={isActive === 0 ? "#e6ecf2" : ""}
            _hover={{ bg: "#e6ecf2" }}
            borderLeftRadius="10px"
            onClick={() => setIsActive(0)}
          >
            <Image
              alt="user"
              borderRadius="6px"
              boxSize="15px"
              src="https://bit.ly/sage-adebayo"
              mr="8px"
              fontSize="7px"
            />
            <Text
              color="#43434D"
              fontSize="14px"
              fontWeight="600"
              //   _hover={{ color: "#AC72EC" }}
            >
              Dashboard
            </Text>
          </Flex>

          <Flex
            align="center"
            pl="8px"
            py="12px"
            cursor="pointer"
            bg={isActive === 1 ? "#e6ecf2" : ""}
            _hover={{ bg: "#e6ecf2" }}
            borderLeftRadius="10px"
            onClick={() => setIsActive(1)}
          >
            <Image
              alt="user"
              borderRadius="6px"
              boxSize="15px"
              src="https://bit.ly/sage-adebayo"
              mr="8px"
              fontSize="7px"
            />
            <Text
              color="#43434D"
              fontSize="14px"
              fontWeight="600"
              // _hover={{ color: "#AC72EC" }}
            >
              Settings
            </Text>
          </Flex>
        </Box>
      </Box>

      <Box bg="#e6ecf2" w="100%" borderRadius="2rem" p="6">
        {children}
      </Box>
    </Flex>
  );
};
