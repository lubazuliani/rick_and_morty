import React from "react";
import { Routes, Route } from "react-router-dom";
import { validate } from "../validation";


export default function Form (props) {
    const [userData, setUserData] = React.useState({ 
        username: '', 
        password: '',
    });

    const [errors, setErrors] = React.useState({ 
        username: '', 
        password: '',
    });


    const handleInputChange = (e) => {  
        setUserData ({
            ...userData,
            [e.target.name]: e.target.value
        })
    
        setErrors(
            validate({
            ...userData,
            [e.target.name]: e.target.value,
        }));
    }
        
   const handleSubmit = (e) => {
        e.preventDefault(); // Como es un Form, usamos para que no se limpie y se lleve los datos.
        props.login(userData); // LE PASO EL ESTADO LOCAL
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input id="username" name="username" type="text" placeholder="Escribe tu nombre de usuario" value={userData.username} onChange={handleInputChange}></input>
            <p>{errors.username}</p>
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="text" placeholder="Escribe tu contraseña" value={userData.password} onChange={handleInputChange}></input>
            <p>{errors.password}</p>
            <button onSubmit={handleSubmit}>Login</button>
            </form>
        </div>
    )
}


//Ej. 4: ¿cómo linkeo Errores con inputs sin usar className como en la homework 01? La función ya se la pasé en onChange.
// Rpta: Elemento p
//¿p sólo se renderiza si hay algo?

//En vez de Button, se podría haber usado <input type="submit"/> 

// Nótese prop htmlFor en label y id en input. 

