import axios from "axios";
import { useCallback, useState, useTransition } from "react";
import {
  PokeApi,
  PokemonData,
  PokemonDetailedData,
} from "../types/api/pokemon";
import { usePokemonUrl } from "./usePokemonUrl";

export const useAllPokemon = () => {
  const [pokemons, setPokemons] = useState<Array<PokemonDetailedData>>([]);
  const [loading, setLoading] = useState(false);
  const [isPending,startTransion] = useTransition();

  const { pokemonUrl } = usePokemonUrl();

  const getAllPokemon = useCallback(() => {
    console.log("getAllPokemon");
    setLoading(true);
    return new Promise<PokeApi>((resolve, reject) => {
      axios
        .get(pokemonUrl as string)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => reject(error));
    });
  }, [pokemonUrl]);

  const loadAllData = useCallback(async (dataArr: Array<PokemonData>) => {
    if(!loading)setLoading(true);
    console.log("loadAllData");
    const pokemonData = await Promise.all(
      ///複数のpromise処理を並列で行う
      dataArr.map((data) => {
        const pokemonRecord = new Promise<PokemonDetailedData>(
          (resolve, reject) => {
            axios
              .get(data.url)
              .then((res) => resolve(res.data))
              .catch((error) => reject(error))
              .finally(() => setLoading(false));
          }
        );
        return pokemonRecord;
      })
    );
    startTransion(()=>{
      setPokemons(pokemonData);
    })
  }, []);
  return { getAllPokemon, setLoading, loading, pokemons, loadAllData,isPending};
};

//axios使わないver
// export const getAllPokemon = () => {
//   return new Promise((resolve, reject) => {
//     fetch("https://pokeapi.co/api/v2/pokemon")
//       .then((res) => res.json())
//       .then((data) => resolve(data));
//   });
// };
