import React, { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
      axios
          .get("https://pokeapi.co/api/v2/pokemon") //HTTP GET method 
          .then((result) => setData(result.data.results)) //set data variable to value from get url
          .catch((error) => console.log(error));//in case of any error
  }, []);

  return (
    <div className="container">
      <ul>
        {data.map((pokemon) => ( //maps data and render the unorder list to browser
          <li> {pokemon.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;