import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";

export const InProgress = () => {
  const todoList = [
    "test todo 1",
    "test todo 2",
    "test todo 3",
    "test todo 4",
    "test todo 5",
  ];
  return (
    <Box>
      <Text color="#43434D" fontSize="18" fontWeight="600" mb="7">
        InProgress
      </Text>

      <Box>
        <Flex justifyContent="space-between">
          <Text>0</Text>
          <Text>4</Text>
          <Text>8</Text>
          <Text>12</Text>
          <Text>16</Text>
          <Text>20</Text>
          <Text>24</Text>
        </Flex>
      </Box>

      <Box>
        {todoList.map((todo: string, i: number) => {
          return (
            <Box py="7px" key={i}>
              <Flex
                py="8px"
                px="10px"
                borderRadius="8px"
                bg="#FFFFFF"
                w="max-content"
                align="center"
              >
                <Box w="4px" bg="red" h="20px" mr="10px" borderRadius="2px" />
                <Text
                  color="#43434D"
                  fontSize="14px"
                  textTransform="capitalize"
                >
                  {todo}
                </Text>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
