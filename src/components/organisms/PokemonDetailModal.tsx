import {
  Box,
  Center,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC, memo, useCallback, useState } from "react";
import { PokemonDetailedData } from "../../types/api/pokemon";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  pokemon?: PokemonDetailedData;
};

export const PokemonDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, pokemon } = props;
  const [isShiny,setIsShiny] = useState(false);

  return (
    <>
    {/*  Initial value of pokemonDetailData is undefined,but its type is confirmed to be PokemonDetailedData.  */}
      {pokemon === undefined ? (<></>) : 
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Center>{pokemon.name}</Center>
            </ModalHeader>
            <ModalCloseButton onClick={()=>setIsShiny(false)}/>
            <ModalBody>
              <Box textAlign="center">
                {pokemon.sprites.front_default !== null ? (
                  <Image
                    mx="auto"
                    src={isShiny? pokemon.sprites.front_shiny : pokemon.sprites.front_default}
                    borderRadius="full"
                    boxSize="200px"
                    _hover={{ transform : "translateY(-4px)"}}
                    onClick={()=>{setIsShiny(!isShiny)}}
                  />
                ) : (
                  <h2>No Image</h2>
                )}
                {pokemon.types.length < 2 ? (
                  <Text as="a" fontSize="lg">
                    {pokemon.types[0].type.name}
                  </Text>
                ) : (
                  <Flex justify="center">
                    <Text as="a" fontSize="lg">
                      {pokemon.types[0].type.name}
                    </Text>
                    <p>,</p>
                    <Text as="a" fontSize="lg">
                      {pokemon.types[1].type.name}
                    </Text>
                  </Flex>
                )}
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      }
    </>
  );
});
