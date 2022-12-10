import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Favorites from './components/Favorites/Favorites'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


function App () {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "luba.zuliani@gmail.com";
  const password = "123456789";
  const location = useLocation(); // NO olvidar los paréntesis ni crear las const.
  const navigate = useNavigate();



  function onSearch(character) {
  /*   const example = {
      name: 'Morty Smith',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
   }; */

    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  };

  function onClose (id) {
    setCharacters (oldChars => oldChars.filter(data => data.name != id));

  }

  function login (userData) {
      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navigate('/home');
      }
   }

   //Cada vez que se monte el componente, va a hacer esta validación.
   useEffect(() => {
      !access && navigate('/'); 
   }, [access]);

   // Si lo primero es true, es decir, access=true (está negando el estado inicial false), entonces te envía a la app. 
   // Si es false (access no es true), te envía a "/" que es la pantalla de login

   

  return (
      <div className='App' style={{ padding: '25px' }}>
        <div>
         {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
        </div>
        <hr />
        <div>
        <Routes>
          <Route path="/" element={<Form login={login}/>}></Route>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/detail/:detailId" element={<Detail/>}></Route>
          <Route path="/favorites" element={<Favorites/>}></Route>
        </Routes>
        </div>
        <hr /> 
      </div>
    )
  }

export default App


// Ejercicio 2 Forms PENDIENTE - Resuelto, ver línea 57