import { useContext } from "react";
import { PokemonUrlContext } from "../providers/PokemonUrlProvider";

export const usePokemonUrl = () => useContext(PokemonUrlContext);