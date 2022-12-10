
const initialState = {
    myFavourites: [],
    allCharacters: [],
}

export default function rootReducer (state = initialState, action) {
    switch(action.type) {
        case "ADD_CHARACTER":
            //state.myFavourites.push(action.payload)
            return {
                ...state, // NO OLVIDAR COPIAR ESTADO
                //myFavourites: state.myFavourites.push(action.payload),
                myFavourites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload],
            };
        case "REMOVE_CHARACTER":
            return {
                ...state,   
                // TA CHEQUEADO ESTO?
                myFavourites: state.myFavourites.filter(data => data.name != action.id)
            };
        case "FILTER":
            return {
                ...state,
                myFavourites: state.allCharacters.filter(char => char.gender === action.payload),
            };
        case "ORDER":
            const orderChar = state.allCharacters.sort((a,b) => { // orderChar es un tipo de dato ARRAY
                if (action.payload === "ascendente") {
                    if (a.id < b.id) return -1
                    if (b.id < a.id) return 1
                    return 0;
                } 
                else {
                    if (a.id < b.id) return 1
                    if (b.id < a.id) return -1
                }
            })
            return {
                ...state,
                myFavourites: [...orderChar]
            }

        default: 
            return state;
    };
};


// function onClose (id) {
//     setCharacters (oldChars => oldChars.filter(data => data.name != id));}