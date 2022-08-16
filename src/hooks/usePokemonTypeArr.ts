import { useContext } from "react";
import { PokemonTypeArrContext } from "../providers/PokemonTypeArrProvider";

export const usePokemonTypeArr = () => useContext(PokemonTypeArrContext);