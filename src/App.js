import logo from './logo.svg';
//Importamos la imagen y le asignamos un nombre
import imageRickyMortySonrisa from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  //console.log(characters); //null
  //consultaremos los datos de los personajes en la API
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json();
    setCharacters(characterApi.results);
    
  }

  console.log(characters); // resultados

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}></Characters>
        ) : (
          <>
          <img src={imageRickyMortySonrisa} alt="Rick & Morty" className="img-home"></img>
          <button onClick={reqApi} className="btn-search">Buscar Personaje</button>
          </>
        )}
    </header>
    </div>
  );
}

export default App;
