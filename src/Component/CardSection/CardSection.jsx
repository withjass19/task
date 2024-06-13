import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CardSection() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=5"
        );
        const pokemonList = response.data.results;
        // console.log(pokemonList);
        const pokemonDetails = [];

        for (const poke of pokemonList) {
          const res = await axios.get(poke.url);
        //   console.log(res);
          pokemonDetails.push({
            id: res.data.id,
            name: res.data.name,
            image: res.data.sprites.front_default,
            height: res.data.height,
            weight: res.data.weight,
          });
        }

        // console.log(pokemonDetails);
        setPokemon(pokemonDetails);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="container pb-20">
      <h1 className="text-center text-3xl font-bold mb-8">Pokemon</h1>
      <div className="flex justify-center">
        {pokemon.map(poke => (
          <div key={poke.id} className="w-64 max-w-xs m-4">
            <div className="border border-gray-300 rounded-md p-4 text-center">
              <h2 className="text-lg font-semibold mb-2">{poke.name}</h2>
              <img
                src={poke.image}
                alt={poke.name}
                className="mx-auto"
              />
              <p className="mt-2">Height: {poke.height}</p>
              <p>Weight: {poke.weight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
