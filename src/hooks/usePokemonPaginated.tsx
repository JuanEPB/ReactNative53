import { useEffect, useRef, useState } from "react";
import { pokeApi } from "../api/pokemonApi";
import { PokemonPaginatedResponse, Result, PokemonSimple } from "../interfaces/pokemonInterfaces";

export const usePokemonPaginated = () => {
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const [simplePokemonList, setSimplePokemonList] = useState<PokemonSimple[]>([]);

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon/?limit=40');

    const loadPokemons = async () =>{

        setIsLoading(true);
        const response = await pokeApi.get<PokemonPaginatedResponse>(nextPageUrl.current);

        nextPageUrl.current = response.data.next;

        //mapear Pokemones
        mapPokemonList(response.data.results);

    }

    const mapPokemonList = ( pokemonList: Result[] ) =>{

        const newPokemonList: PokemonSimple[] = pokemonList.map( ({name, url})  =>{
            //https://pokeapi.co/api/v2/pokemon/1/

            const urlParts = url.split("/");
            const id = urlParts[ urlParts.length - 2 ];
            const picture = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
            return { id, name, picture}
        });
        
        setSimplePokemonList( (prevSimplePokemonList) => [...prevSimplePokemonList, ...newPokemonList]);
        setIsLoading(false);
    }

    useEffect(() => {
        loadPokemons();
    },[]);

    return { isLoading, simplePokemonList, loadPokemons };

}
