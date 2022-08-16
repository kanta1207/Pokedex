import { PokemonData, PokemonTypeObj, PokemonTypes } from './../types/api/pokemon';
import  axios  from 'axios';
import { useCallback } from 'react';
import { usePokemonTypeArr } from './usePokemonTypeArr';
export const usePokemonTypes = () => {

  const {setPokemonType,setPokemonTypeArr} = usePokemonTypeArr();

  //ある特定のタイプのポケモンをPokemonDataのリストにして返す関数
  const createPokemonTypeArr = (url : string) => {
    console.log("createPokemonTypeArr");
    return new Promise<Array<PokemonData>>((resolve) => {
        axios.get(url).then((res) => {
            const pokemonArr : Array<PokemonTypeObj> = res.data.pokemon;
            const pokemonDataArr = pokemonArr.map((pokemon)=> pokemon.pokemon);
            resolve(pokemonDataArr);
        })
    });
  };

  //タイプaタグクリック時にcreatepokemonTypeArrを実行し、typeとそのタイプの配列を更新する関数
  const setTypeAndTypeArr = useCallback(async(types : PokemonTypes) => {
    setPokemonType(types.type.name);
    const pokemonTypeArr = await createPokemonTypeArr(types.type.url);
    setPokemonTypeArr(pokemonTypeArr);
  },[]);

    return {createPokemonTypeArr}
};

