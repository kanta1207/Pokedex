import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import React, { memo, useCallback, useEffect, useState } from "react";
import { useAllPokemon } from "../../hooks/useAllPokemon";
import { usePokemonDetailedView } from "../../hooks/usePokemonDetailedView";
import { usePokemonTypeArr } from "../../hooks/usePokemonTypeArr";
import { PokemonData } from "../../types/api/pokemon";
import { Card } from "../organisms/Card";
import { Header } from "../organisms/Header";
import { PokemonDetailModal } from "../organisms/PokemonDetailModal";

export const TypeSearchPage = memo(() => {
  const [arrIndex, setArrIndex] = useState(0);

  const { pokemonTypeArr } = usePokemonTypeArr();
  const { loadAllData, pokemons, loading } = useAllPokemon();
  const { pokemonDetailedData, onOpenDetailedView, onClose, isOpen } =
    usePokemonDetailedView();

  const compartPokemons = useCallback((dataArr: Array<PokemonData>) => {
    console.log("compart");
    let parent = [];
    let child = [];
    for (let i = 0; i < dataArr.length; i++) {
      child.push(dataArr[i]);
      if (i % 20 === 19 || i === dataArr.length - 1) {
        parent.push(child);
        child = [];
      }
    }
    console.log(parent);
    return parent;
  }, []);

  useEffect(() => {
    const compartedArr = compartPokemons(pokemonTypeArr);
    console.log(compartedArr);
    loadAllData(compartedArr[arrIndex]);
  }, [pokemonTypeArr, arrIndex, compartPokemons, loadAllData]);

  return (
    <>
      <Header
        onClickLeft={() => {
          if (arrIndex > 0) setArrIndex(arrIndex - 1);
        }}
        onClickRight={() => {
          if (arrIndex < pokemonTypeArr.length - 2) setArrIndex(arrIndex + 1);
        }}
      />
      {loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Wrap>
          {pokemons.map((pokemon) => {
            return (
              <WrapItem key={pokemon.id}>
                <Card
                  pokemon={pokemon}
                  onOpen={() => {
                    onOpenDetailedView(pokemon);
                  }}
                  loading={loading}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      )}
      <PokemonDetailModal
        onClose={onClose}
        isOpen={isOpen}
        pokemon={pokemonDetailedData}
      />
    </>
  );
});
