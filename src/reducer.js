const initialState = {
    basket: [],
    user: null,
};

//Selector
const getBasketTotal = (basket) =>
    basket?.reduce((acc, curr) => acc + +curr.price, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id),
            };
        case "SET_USER" :
            return {
                ...state,
                user:action.user
            }; 
        case "EMPTY_BASKET":
            return {
                ...state,
                basket:[]
            }
        default:
            return state;
    }

};

export { reducer, initialState, getBasketTotal };