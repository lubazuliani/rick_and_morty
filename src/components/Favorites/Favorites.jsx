import React from "react";
import { mapStateToProps } from "../Card/Card";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";


function Favorites ({myFavorites}) {
    const dispatch = useDispatch();

    // Nótese que handleOrder la hacemos afuera y filterCards la hacemos dentro mismo - 23  
    function handleOrder(e) {
        dispatch(orderCards(e.target.value))
    }

    return (
        <div>
            <div>
                <select name="order" onChange={handleOrder}>
                    <option value="ascendente" >Ascendente</option>
                    <option value="descendente">Descendente</option>
                </select>
                <select name="filter" onChange={(e) => {dispatch(filterCards(e.target.value))}}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>   
                </select>
            </div>
            <div>
            {myFavorites?.map((char) => (
                <div key={char.id}  >
                    <h2>{char.name}</h2>
                    <h2>{char.gender}</h2>
                    <img src={char.image} alt={char.name}></img>
                </div>
            ))}
            </div>
        </div>
    );  
}

function mapStateToProps (state) {
    return {
        myFavorites: state.myFavorites, 
    }
}

export default connect(mapStateToProps)(Favorites);