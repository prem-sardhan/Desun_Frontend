import Axios from "axios";
import * as types from "./actionTypes";


const FetchDataReq = (payload) => {
  return {
    type: types.FETCH_DATA_REQ,
    payload,
  };
};
const FetchDataSucc = (payload) => {
  return {
    type: types.FETCH_DATA_SUCC,
    payload,
  };
};
const FetchDataFail = (payload) => {
  return {
    type: types.FETCH_DATA_FAIL,
    payload,
  };
};


export const FetchData = (payload) => {
  return (dispatch, token) => {
    dispatch(FetchDataReq);

    Axios.get("https://gold-worried-cockroach.cyclic.app/game", {
      params: {
        ...payload,
        token,
      },
    })

    //   .then((res) => console.log(res.data.games))
      .then((r) => dispatch(FetchDataSucc(r.data.games)))

      .catch((e) => dispatch(FetchDataFail(e)));
  };
};


const Add_Game_Req = (payload) => {
  return {
    type: types.ADD_TO_CART_REQ,
    payload,
  };
};
const Add_Game_Succ = (payload) => {
  return {
    type: types.ADD_TO_CART_SUCC,
    payload,
  };
};
const Add_Game_Fail = (payload) => {
  return {
    type: types.ADD_TO_CART_FAIL,
    payload,
  };
};

export const AddToCart = (game) => (dispatch) => {
  dispatch(Add_Game_Req());
    Axios.post(`https://gold-worried-cockroach.cyclic.app/cart`, game)
     
    .then((r) => dispatch(Add_Game_Succ(r.data)))
    .then(() => alert("Added"))
    .catch((e) => {
      alert("already Added");
      dispatch(Add_Game_Fail(e.message));
    });
};

const Fetch_Cart_Req = (payload) => {
  return {
    type: types.FETCH_CART_REQ,
    payload,
  };
};
const Fetch_Cart_Succ = (payload) => {
  return {
    type: types.FETCH_CART_SUCC,
    payload,
  };
};
const Fetch_Cart_Fail = (payload) => {
  return {
    type: types.FETCH_CART_FAIL,
    payload,
  };
};

export const fetchCart = (payload) => (dispatch) => {
  dispatch(Fetch_Cart_Req);
  Axios.get("https://gold-worried-cockroach.cyclic.app/cart", {
    params: {
      ...payload,
    },
  })
    .then((r) => dispatch(Fetch_Cart_Succ(r.data.cartItems)))

    .catch((e) => dispatch(Fetch_Cart_Fail(e)));
};

const delet_Cart_Req = (payload) => {
  return {
    type: types.DELET_CART_REQ,
    payload,
  };
};
const delet_Cart_Succ = (payload) => {
  return {
    type: types.DELET_CART_SUCC,
    payload,
  };
};
const delet_Cart_Fail = (payload) => {
  return {
    type: types.DELET_CART_FAIL,
    payload,
  };
};


export const deletCartItmes = (id) => (dispatch) => {
  dispatch(delet_Cart_Req());
  Axios.delete(`https://gold-worried-cockroach.cyclic.app/cart/${id}`)
    .then((r) => {
      dispatch(delet_Cart_Succ(r.data));
    })
    .then((r) => {
      dispatch(fetchCart());
    })

    .catch((e) => dispatch(delet_Cart_Fail(e.message)));
};