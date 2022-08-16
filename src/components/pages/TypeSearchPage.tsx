import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import React, { memo, useEffect } from 'react'
import { usePokemonTypeArr } from '../../hooks/usePokemonTypeArr';
import { Card } from '../organisms/Card';
import { Header } from '../organisms/Header';

export const TypeSearchPage = memo(() => {
  const {pokemonTypeArr} = usePokemonTypeArr();
  
  useEffect(()=>console.log(pokemonTypeArr),[]);


  return (
        <>
          {/* <Header/>
            <Wrap>
              {pokemons.map((pokemon) => {
                return (
                  <WrapItem key={pokemon.id}>
                    <Card pokemon={pokemon} />
                  </WrapItem>
                );
              })}
            </Wrap> */}
        </>
      );
    });
