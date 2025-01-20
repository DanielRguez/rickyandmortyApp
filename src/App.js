import logo from './logo.svg';
//Importamos la imagen y le asignamos un nombre
//import imageRickyMortySonrisa from './img/rick-morty.png'
import './App.css';
import { useState, useEffect, useCallback } from 'react';
//import Characters from './components/Characters';
import useFetch from './components/useFetch';

function App() {
  const [characters, setCharacters] = useState(null);
  //console.log(characters); //null
  //consultaremos los datos de los personajes en la API
  const { data, loading, error} = useFetch("https://rickandmortyapi.com/api/character")
  
  console.log("App -> Cuerpo de App")
  useEffect(() =>{
    if(!loading &&  data ) setCharacters(data.results);
    console.log('App -> useEffect en App //Cambia variable characters')
    }, [data]);

  function soloPrueba(){
    console.log('App -> función soloPrueba')
  }

  useCallback(function soloPruebaCallback(){
    console.log('App -> función soloPruebaCallback')
  }, [])

  if(loading) return (<div>loading...</div>)
  if(error) return (<div>Error...</div>)


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          //<Characters characters={characters} setCharacters={setCharacters}></Characters>
          console.log("App -> Pintados los charactereres")
        ) : (
          <>      
          <button className="btn-search">Buscar Personaje</button>
          </>
        )}
    </header>
    </div>
  );
}

export default App;
