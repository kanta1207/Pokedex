import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { FC, memo } from "react";
import { PokemonDetailedData } from "../../types/api/pokemon";

type Props = {
  pokemon: PokemonDetailedData;
};

export const Card: FC<Props> = memo((props) => {
  const { pokemon } = props;
  return (
    <Box
      bg="white"
      borderRadius="20px"
      shadow="md"
      w={{base : 150,md : 180,lg : 250}}
      ml={{base : 5 , md : 15, lg : 25}}
      mt="2"
      p="3"
    >
      <Stack textAlign="center">
        <Image
          m="auto"
          src={pokemon.sprites.front_default}
          borderRadius="full"
        />
        <Text fontSize="lg">{pokemon.name}</Text>
        <Text fontSize="sm">
          {pokemon.types.length < 2
            ? "#" + pokemon.types[0].type.name
            : "#" +
              pokemon.types[0].type.name +
              " #" +
              pokemon.types[1].type.name}
        </Text>
      </Stack>
    </Box>
  );
});
