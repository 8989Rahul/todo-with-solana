import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export const Todos = () => {
  const todoList = [
    "test todo 1",
    "test todo 2",
    "test todo 3",
    "test todo 4",
    "test todo 5",
  ];

  const [key, setKey] = useState(0);
  const [isHover, setIsHover] = useState(false);
  console.log(isHover);

  return (
    <Box>
      <Text color="#43434D" fontSize="18" fontWeight="600" mb="8px">
        Todo's
      </Text>

      {todoList.map((todo: string, i: number) => {
        return (
          <Flex
            key={i}
            p="12px"
            borderBottom={
              key === i && isHover
                ? "1px solid transparent"
                : "1px solid #cccdce"
            }
            _hover={{
              bg: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "rgb(0 0 0 / 20%) 0px 24px 21px -10px",
            }}
            onMouseEnter={() => {
              setKey(i - 1);
              setIsHover(true);
            }}
            onMouseOut={() => {
              setKey(0);
              setIsHover(false);
            }}
            alignItems="center"
          >
            <RiDeleteBinLine
              color={key + 1 === i ? "red" : ""}
              cursor="pointer"
              onMouseEnter={() => {
                setKey(i - 1);
                setIsHover(true);
              }}
            />

            <Text
              color="#43434D"
              fontSize="14px"
              textTransform="capitalize"
              ml="12px"
              onMouseEnter={() => {
                setKey(i - 1);
                setIsHover(true);
              }}
            >
              {todo}
            </Text>
          </Flex>
        );
      })}
    </Box>
  );
};
