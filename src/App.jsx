import { useState, useEffect } from "react";
import "./App.css";
import Heroview from "./Heroview";
const API_KEY = "c3f3e7e447850084611e6e75e63037b3";
function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=${API_KEY}`
    ).then((data) => {
      if (data.status === 200) {
        data.json().then((data) => {
          console.log(data.data.results);
          setCharacters(data.data.results);
        });
      }
    });
  }, []);

  return (
    <div className="App">
      {characters.map((hero) => {
        return <Heroview hero={hero} />;
      })}
    </div>
  );
}

export default App;
