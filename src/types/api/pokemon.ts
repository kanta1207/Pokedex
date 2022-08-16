export type PokeApi = {
    count : number;
    next : null | string;
    previous : null | string;
    results : Array<PokemonData>
}

export type PokemonData = {
    name : string;
    url : string;
};

export type PokemonDetailedData = {
    id : number;
    name : string;
    sprites : Sprites;
    height : number;
    weight : number;
    types : Array<PokemonTypes>
};

export type PokemonTypes = {
    type : PokemonType;
};

export type PokemonType = {
    name : string;
    url : string;
};

type Sprites = {
    front_default : string;
    back_default : string;
    front_shiny : string;
    back_shiny : string;
};

export type PokemonTypeObj = {
    pokemon : PokemonData;
}