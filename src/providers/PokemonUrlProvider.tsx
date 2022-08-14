import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

type PokemonUrlContextType = {
    pokemonUrl : string | null;
    setPokemonUrl : Dispatch<SetStateAction<string | null>>;
}

export const PokemonUrlContext = createContext<PokemonUrlContextType>({} as PokemonUrlContextType);

export const PokemonUrlProvider = (props : {children : ReactNode}) => {
    const {children} = props;

    const [pokemonUrl,setPokemonUrl] = useState<string | null>("https://pokeapi.co/api/v2/pokemon/")
  return (
    <PokemonUrlContext.Provider value={{pokemonUrl,setPokemonUrl}}>
        {children}
    </PokemonUrlContext.Provider>
  )
}
