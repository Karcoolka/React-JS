import React, { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
      axios
          .get("https://pokeapi.co/api/v2/pokemon")
          .then((result) => setData(result.data.results))
          .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <ul>
        {data.map((pokemon) => (
          <li> {pokemon.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;