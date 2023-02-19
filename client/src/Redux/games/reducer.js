import * as types from "./actionTypes";

const initial = {
  games: [],
  error: "",
 

  cart: [],
 
};

const GameReducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_DATA_REQ:
      return {
        ...state,
        error: "",
        
      };
    case types.FETCH_DATA_SUCC:
      return {
        ...state,
        games: payload,
        error: "",
        
      };
    case types.FETCH_DATA_FAIL:
      return {
        ...state,

        error: payload,
        
      };
 
   
    case types.ADD_TO_CART_REQ:
      return {
        ...state,
        error: "",

        loading: true,
      };
    case types.ADD_TO_CART_SUCC:
      return {
        ...state,
        cart: [...state.cart, payload],
        error: "",
        loading: false,
      };
    case types.ADD_TO_CART_FAIL:
      return {
        ...state,

        error: payload,
        loading: false,
      };
    case types.FETCH_CART_REQ:
      return {
        ...state,
        error: "",

        loading: true,
      };
    case types.FETCH_CART_SUCC:
      return {
        ...state,
        cart: [...payload],
        error: "",
        loading: false,
      };
    case types.FETCH_CART_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case types.DELET_CART_REQ:
      return {
        ...state,
        error: "",

        loading: true,
      };
    case types.DELET_CART_SUCC:
      return {
        ...state,
        cart: [...state.cart, payload],
        error: "",
        loading: false,
      };
    case types.DELET_CART_FAIL:
      return {
        ...state,

        error: payload,
        loading: false,
      };
  
  
    default:
      return state;
  }
};

export default GameReducer;
