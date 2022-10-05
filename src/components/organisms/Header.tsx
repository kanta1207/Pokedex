import { ArrowLeftIcon, ArrowRightIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import React, { FC, memo } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  onClickLeft?: () => void;
  onClickRight?: () => void;
};

export const Header: FC<Props> = memo((props) => {
  const { onClickLeft, onClickRight } = props;
  const navigate = useNavigate();
  return (
    <Box>
      <Flex
        bg="white"
        color="gray.700"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
        justify="space-between"
      >
        <Flex
          as="h1"
          fontWeight="bold"
          fontSize={{ base: "20px", lg: "30px" }}
          onClick={() => navigate("/")}
          _hover={{ cursor: "pointer",transform : "translateY(-4px)"}}
        >
          Pokedex
        </Flex>
        <Flex>
          <IconButton
            aria-label="page-toggle-btn"
            icon={<ArrowLeftIcon />}
            size={{ base: "md", sm: "sm" }}
            variant="unstyled"
            _hover={{ cursor: "pointer",transform : "translateY(-4px)"}}
            onClick={onClickLeft}
          />
          <IconButton
            aria-label="page-toggle-btn"
            icon={<ArrowRightIcon />}
            size={{ base: "md", sm: "sm" }}
            variant="unstyled"
            _hover={{ cursor: "pointer",transform : "translateY(-4px)"}}
            onClick={onClickRight}
          />
        </Flex>
      </Flex>
    </Box>
  );
});
