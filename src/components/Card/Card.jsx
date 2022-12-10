import React from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { addCharacter, removeCharacter } from "../../redux/actions";
import { useState, useEffect } from "react";


export function Card(props) { // REVISAR
   const [isFav, setFav] = useState(false); // ME FALTÓ EL CONST

   function handleFavorite() {
      if (isFav) {
         setFav(false)
         props.removeCharacter(props.id)
      }
      else {
         setFav(true)
         props.addCharacter(props) // Pasamos todas.  
      }
   }


   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setFav(true);
         }  
      });
   }, [props.myFavorites]);


   return (
      <div>
         <button onClick={() => props.onClose(props.name)}>X</button>

         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         <Link to={`/detail/${props.id}`}>
            <h2 name={props.name}></h2>
         </Link>
         <h2 species={props.species}></h2>
         <h2 gender={props.gender}></h2>
         <img src={props.image} alt={props.name} />
      </div>
   );
}


export function mapDispatchToProps(dispatch){
   return {
      addCharacter: function (character) { dispatch(addCharacter(character))},
      removeCharacter: function (id) {dispatch(removeCharacter(id))},
   }
}

export function mapStateToProps (state) {
   return {
      myFavorites: state.myFavorites,
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);

// error: <img  src={src/data.js} alt={props.name} />
// creo que mal interpreté la consigna

// Por qué onClose en Card no me anda si le paso "props.id"?
// Rta: No me funcionaba porque en Cards no me había traído esa prop (id)