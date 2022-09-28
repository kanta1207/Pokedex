import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";
import { useAllPokemon } from "../../hooks/useAllPokemon";
import { usePokemonDetailedView } from "../../hooks/usePokemonDetailedView";
import { usePokemonUrl } from "../../hooks/usePokemonUrl";
import { Card } from "../organisms/Card";
import { Header } from "../organisms/Header";
import { PokemonDetailModal } from "../organisms/PokemonDetailModal";

export const Home = memo(() => {
  const { getAllPokemon, loadAllData, loading, pokemons } = useAllPokemon();
  const { pokemonUrl, setPokemonUrl } = usePokemonUrl();
  const {pokemonDetailedData,onOpenDetailedView,onClose,isOpen} = usePokemonDetailedView();

  const [previous, setPrevious] = useState<string | null>(null);
  const [next, setNext] = useState<string | null>(
    "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
  );

  useEffect(() => {
    const fetchPokemonData = async () => {
      console.log("fetch");
      ///ポケモンデータ一覧を取得
      if (pokemonUrl === null) return;
      let res = await getAllPokemon();
      ///ポケモン詳細データのリストを取得＆pokemonsにセット
      loadAllData(res.results);
      setPrevious(res.previous);
      setNext(res.next);
    };
    fetchPokemonData();
  }, [getAllPokemon, loadAllData, pokemonUrl]);
  //getAllPokemonは画面表示時の一回のみ呼び出し

  return (
    <>
      <Header
        onClickLeft={() => setPokemonUrl(previous)}
        onClickRight={() => setPokemonUrl(next)}
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
                <Card pokemon={pokemon} onOpen={()=>{onOpenDetailedView(pokemon)}} loading={loading}/>
              </WrapItem>
            );
          })}
        </Wrap>
      )}
      <PokemonDetailModal onClose={onClose} isOpen={isOpen} pokemon={pokemonDetailedData}/>
    </>
  );
});
