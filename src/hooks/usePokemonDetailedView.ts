import { PokemonDetailedData } from "./../types/api/pokemon";
import { useCallback, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
export const usePokemonDetailedView = () => {
  const [pokemonDetailedData, setPokemonDetailedData] =
    useState<PokemonDetailedData>();
  const { onOpen, onClose, isOpen } = useDisclosure();

  const onOpenDetailedView = useCallback((pokemon : PokemonDetailedData)=>{
    setPokemonDetailedData(pokemon);
    onOpen();
  },[])

  return {pokemonDetailedData,onOpenDetailedView,onClose,isOpen};
};
