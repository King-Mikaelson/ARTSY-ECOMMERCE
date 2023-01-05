import { useState, createContext, useReducer, useEffect } from "react";
import axios from "axios";
import useSwR from 'swr';
import { cartReducer, storeReducer } from "./useReducer";


const AppContext = createContext();

export default AppContext;


export const AuthProvider = ({children}) => {
    const address = "https://fakestoreapi.com/products";
    const fetcher = (url) => axios.get(url).then((res) => res.data);
    const {data, error} = useSwR(address, fetcher);
    const[qty, setQty] = useState(1);




const initialState = {
    cart: [],
    checkout:false
}

const storeInitialState = {
    searchQuery:"",
    sort:"",
    price:0,
    filter:"",
    minVal:0,
    maxVal:1000,
    filters: { // object that stores the values of the checkboxes
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
    }
}


    const addToCart = (payload) => {
        dispatch({type: 'ADD_TO_CART', payload: payload});
    }

   
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const [storeState, dispatchStore] = useReducer(storeReducer, storeInitialState);


    useEffect(() => {
        if (localStorage.getItem("state")) { 
        
           //checking if there already is a state in localstorage
           //if yes, update the current state with the stored one
           dispatch({ 
              type: "init_stored", 
              payload: JSON.parse(localStorage.getItem("state")),
           });
        }
     }, []);
    
    
    
     useEffect(() => {
        if (state !== initialState) {
           
           localStorage.setItem("state", JSON.stringify(state)); 
        
           //create and/or set a new localstorage variable called "state"
        }
     }, [state]);


     const sumCartTotal = (cart) => {
        let cartCount = cart.reduce((total, item) => total + item.qty, 0);
        let cartTotal = cart.reduce((total, item) => total + item.qty * item.price, 0).toFixed(2)
        return {cartCount, cartTotal}
    }

         let {cartCount, cartTotal} =  sumCartTotal(state.cart);

         const increaseCart = (payload) => {
            dispatch({type: "INCREASE", payload: payload});
            console.log(payload.qty)
        }
    
    
        const decreaseCart = (payload) => {
            dispatch({type: "DECREASE", payload: payload});
            console.log(payload.qty)
        }
    
        const remove = (payload) => {
            dispatch({type: "REMOVE", payload: payload});
        }




    const contextData = {
        data,
        qty,
        state,
        dispatch,
        addToCart,
        setQty,
        cartCount, 
        cartTotal,
        increaseCart,
        decreaseCart,
        remove,
        storeState, 
        dispatchStore, 
    }

    return (
        <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
      );

}
