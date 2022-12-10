import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function Detail (){
    const {detailId} = useParams();
    console.log(detailId);
    const [character, setCharacter] = useState();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

    return (
        <div>
            {character ? (
                <div>
                    <button></button>
                    <h1>{character.name}</h1>
                    <h5>{character.status}</h5>
                    <h5>{character.specie}</h5>
                    <h5>{character.gender}</h5>
                    <h5>{character.origin?.name}</h5>
                    <h5>{character.image}</h5>
                </div>
            ) : (
              ""
            )}
        </div>
    )   
}


// Línea 15 - Seteo el estado que luego uso de condicional para retornar efectivamente el detalle de personajes
// ME FALTA CONFIGURAR BUTTON - PENDIENTE HW ROUTING