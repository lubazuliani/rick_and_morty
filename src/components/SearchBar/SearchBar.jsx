import React from "react";
import { useState } from "react";

export default function SearchBar(props) {
   const { onSearch } = props;
   const [userInput, setUserInput] = useState("");

   function onChange(e) {
      setUserInput([e.target.value]);
   }

   return (
      <div>
         <input type='search' placeholder='Character...'  value={userInput}  onChange={(e) => onChange(e)} />
         <button onClick={() => onSearch (userInput)}>Add</button>
      </div>
   );
}

// error: <button onClick={props("Frula")}>Agregar</button>
//ni idea qué flasheé

//error: Le había agregado llaves a userInput cuando la array function ya está englobada en llaves
// <button onClick={() => onSearch ({userInput})}>Add</button>