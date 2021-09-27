import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";

export const Completed = () => {
  const todoList = [
    {
      tag: "test todo 1",
      title: "brief description about test todo 1",
    },
    {
      tag: "test todo 2",
      title: "brief description about test todo 2",
    },
    {
      tag: "test todo 3",
      title: "brief description about test todo 3",
    },
    {
      tag: "test todo 4",
      title: "brief description about test todo 4",
    },
    {
      tag: "test todo 5",
      title: "brief description about test todo 5",
    },
  ];
  return (
    <Box>
      <Text color="#43434D" fontSize="18" fontWeight="600" mb="8px">
        Completed
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap="1rem">
        {todoList.map((todo: any, i: number) => {
          return (
            <GridItem>
              <Box
                key={i}
                bg="#FFFFFF"
                p="1rem"
                borderRadius="8px"
                h="8rem"
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px" }}
                className="__todo_row"
              >
                <Box>
                  <Flex justifyContent="space-between">
                    <Flex
                      py="3px"
                      px="5px"
                      bg={i % 2 === 0 ? "#a4b4fc" : "#cdb8ef"}
                      borderRadius="8px"
                      w="max-content"
                    >
                      <Image
                        alt="user"
                        borderRadius="6px"
                        boxSize="15px"
                        src="https://bit.ly/sage-adebayo"
                        mr="5px"
                        fontSize="7px"
                      />
                      <Text color="#43434D" fontSize="12px">
                        {todo?.tag}
                      </Text>
                    </Flex>

                    <RiDeleteBinLine color="red" cursor="pointer" />
                  </Flex>

                  <Text
                    color="#43434D"
                    fontSize="14px"
                    textTransform="capitalize"
                    fontWeight="600"
                    mt="10px"
                  >
                    {todo?.title}
                  </Text>
                </Box>

                <Flex
                  alignSelf="flex-end"
                  ml="auto"
                  w="max-content"
                  alignItems="center"
                  py="3px"
                  px="5px"
                  bg={i % 2 === 0 ? "#cdb8ef" : "#a4b4fc"}
                  borderRadius="8px"
                >
                  <AiOutlineClockCircle color="#FFFFFF" size="14px" />
                  <Text fontSize="12px" color="#FFFFFF" ml="4px">
                    Dec {i + 1}
                  </Text>
                </Flex>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
