import React from "react";
import Card from '../Card/Card';

export default function Cards({ characters, onClose }) {
   // const { characters, onClose } = props;
   
   return (
   <div>
      {characters.map((char, index) => 
         <Card 
            key={index} 
            id={char.id}
            name= {char.name}
            species= {char.species}
            gender= {char.gender}
            image= {char.image}
            onClose={() => onClose(char.id)}
         />)}
   </div>
   );
}

// onClose NO viene como parte de props
//la traemos nosotros
// en vez de pasarle todas las props, podríamos usar spread operator {...char}


// error: 
// onClose={onClose}