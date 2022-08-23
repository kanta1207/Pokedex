import { ArrowLeftIcon, ArrowRightIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import React, { FC, memo } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  onClickLeft? : ()=> void;
  onClickRight? : () => void;
}

export const Header: FC<Props> = memo((props) => {
  const {onClickLeft,onClickRight} = props;
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
        <Flex>
          <IconButton
            aria-label="menu-btn"
            icon={<HamburgerIcon />}
            size={{base : "md", lg : "lg"}}
            variant="unstyled"
            _hover={{ cursor: "pointer", bg: "gray.100" }}
          />
        </Flex>
        <Flex as="h1" fontWeight="bold" fontSize={{ base: "20px", lg: "30px" }} onClick={()=>navigate("/")}>
          Pokedex
        </Flex>
        <Flex>
          <IconButton
            aria-label="page-toggle-btn"
            icon={<ArrowLeftIcon />}
            size={{base : "md", sm : "sm"}}
            variant="unstyled"
            _hover={{ cursor: "pointer", bg: "gray.100" }}
            onClick={onClickLeft}
          />
          <IconButton
            aria-label="page-toggle-btn"
            icon={<ArrowRightIcon />}
            size={{base : "md", sm : "sm"}}
            variant="unstyled"
            _hover={{ cursor: "pointer", bg: "gray.100" }}
            onClick={onClickRight}
          />
        </Flex>
      </Flex>
    </Box>
  );
});
