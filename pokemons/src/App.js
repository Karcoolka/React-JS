import React, { useState, useEffect } from "react";
import "./App.css";
import { apiGet } from "./utils/api";
import Card from "./Card";

function App() {
  const [pokemonData, setPokemonData] = useState([]); //empty array, function to change state of variable and inject new array
  const [loading, setLoading] = useState(true); //it will be called whenever we get data from PokeAPI
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchData = async () => {
        const response = await apiGet(initialURL);
        setLoading(false);
        setNextUrl(response.next);
        setPreviousUrl(response.previous);
        await loadPokemon(response.results);
    };
    fetchData();
}, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      //array of promises, send it bac when all promises resolved
      data.map(async (pokemon) => {
        let pokemonRecord = await apiGet(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData); // "_" = private variable
  };

const [nextUrl, setNextUrl] = useState('');
const [previousUrl, setPreviousUrl] = useState('');

const handleNavigation = async (url) => {
  if (!url) return;
  setLoading(true);
  const data = await apiGet(url);
  await loadPokemon(data.results);
  setNextUrl(data.next);
  setPreviousUrl(data.previous);
  setLoading(false);
};

const handleNextClick = async () => {
  await handleNavigation(nextUrl);
};

const handlePreviousClick = async () => {
  await handleNavigation(previousUrl);
};



  //response is answer from API:
  //   {
  //     "count":964,
  //     "next":"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  //     "previous":null,
  //     "results":
  //     [
  //         {"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},
  //         {"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},
  //         ...,
  //         {"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"}
  //     ]
  // }

  return (
    <div>
        {loading ? (
            <h1>Stránka se načítá</h1>
        ) : (
            <div>
                <div className="btn">
                    <button onClick={handlePreviousClick}>Previous</button>
                    <button onClick={handleNextClick}>Next</button>
                </div>
                <div className="grid-container">
                    {pokemonData.map((pokemon) => {
                        return <Card key={pokemon.name} pokemon={pokemon} />;
                    })}
                </div>
                <div className="btn">
                    <button onClick={handlePreviousClick}>Previous</button>
                    <button onClick={handleNextClick}>Next</button>
                </div>
            </div>
        )}
    </div>
);
}

export default App;
