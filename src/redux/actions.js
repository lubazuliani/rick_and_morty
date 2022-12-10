const ADD_CHARACTER= "ADD_CHARACTER";
const REMOVE_CHARACTER = "REMOVE_CHARACTER";
const ORDER = "ORDER";
const FILTER = "FILTER";

export function addCharacter (character) {
    return {
        type: ADD_CHARACTER,
        payload: character,
    };
};

export const removeCharacter = (id) => {
    return {
        type: REMOVE_CHARACTER,
        payload: id,
    }
}

export function filterCards (gender) {
    return{
        type: FILTER,
        payload: gender,
    }
};


export function orderCards (id) {
    return {
        type: ORDER,
        payload: id,
    }
}



// module.exports = {
//     addCharacter,
//     removeCharacter,
//   };