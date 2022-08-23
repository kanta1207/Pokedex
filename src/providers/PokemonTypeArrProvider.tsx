import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"
import { PokemonData } from "../types/api/pokemon";

type PokemonTypeArrContextType = {
    pokemonType : string;
    setPokemonType : Dispatch<SetStateAction<string>>
    pokemonTypeArr : Array<PokemonData>;
    setPokemonTypeArr : Dispatch<SetStateAction<Array<PokemonData>>>;
}

export const PokemonTypeArrContext = createContext<PokemonTypeArrContextType>({} as PokemonTypeArrContextType);

export const PokemonTypeArrProvider = (props : {children : ReactNode}) => {
    const {children} = props;
    const [pokemonType,setPokemonType] = useState("")
    const [pokemonTypeArr,setPokemonTypeArr] = useState<Array<PokemonData>>([])
  return (
    <PokemonTypeArrContext.Provider value={{pokemonTypeArr,setPokemonTypeArr,pokemonType,setPokemonType}}>
        {children}
    </PokemonTypeArrContext.Provider>
  )
}
