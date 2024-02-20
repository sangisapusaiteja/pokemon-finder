import React, { useState } from "react";

function Game2() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);

      // if (!response.ok) {
      //   throw new Error("Could not fetch resource");
      // }

      const data = await response.json();
      setPokemonData(data);
      setError(null);
    }
     catch (error) {
      setPokemonData(null);
      setError("Pokemon not found");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-purple-800 text-white p-8">
      <label  className="text-xl mb-2">
        Enter Pokemon Name:
      </label>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        className=" p-2 mb-4 w-full max-w-md text-black text-center"
      />
      <button
        onClick={fetchPokemon}
        className="hover:bg-black bg-[purple] text-white px-4 py-2 rounded "
      >
        Fetch
      </button>

      {pokemonData && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-center">{pokemonData.name}</h2>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            className="mt-2 w-64"
          />
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

export default Game2;




