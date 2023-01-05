
export const cartReducer = (state, action) => {
    switch (action.type) {
        case "init_stored":
            return action.payload;

        case 'ADD_TO_CART':
            console.log(state.cart);
            if(state.cart.find(item => item.id === action.payload.id)){
                state.cart[state.cart.findIndex((item) => item.id === action.payload.id)
                ].qty = action.payload.qty;
            }else{
                state.cart.push({
                    ...action.payload,
                  });
            }
            return {
                ...state,
                cart: [...state.cart]
            };
            case "INCREASE":
                    const state2 = state.cart.slice();
                    state2[state2.findIndex((item) => item.id === action.payload.id)
                    ].qty =  state2[state2.findIndex((item) => item.id === action.payload.id)
                    ].qty + 1;
                    console.log(state2[state2.findIndex((item) => item.id === action.payload.id)
                    ].qty)

                return {
                    ...state,
                    cart:[...state2]

                };
            case "DECREASE":
                let state3 = state.cart.slice();
                if(state3.find((item) => item.id === action.payload.id).qty < 2){
                    state3 = state3.filter((item) => item.id !== action.payload.id)
            }
                else {
                    state3[state3.findIndex((item) => item.id === action.payload.id)
                    ].qty =  state3[state3.findIndex((item) => item.id === action.payload.id)
                    ].qty - 1;
                    console.log(state3[state3.findIndex((item) => item.id === action.payload.id)
                    ].qty)
                }

                return {
                    ...state,
                    cart:[...state3]

                };
            case "REMOVE":
                return {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload.id),
                };
            case "CHECKOUT":
                return {
                 cart: [],
                 checkout: true,
                };

    default:
    return state;
    }
}





export const storeReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_QUERY":
            return {...state, searchQuery: action.payload};
        case "SORT_BY_CATEGORY":
            return {...state, sort: action.payload};
            case "FILTER_BY_CATEGORY":
                return {...state,  filter:action.payload};
        case "FILTER_BY_PRICE":
            return {...state, price: action.payload};
        case "FILTER_BY_PRICE_RANGE":
            return {...state, minVal: action.payload.min, maxVal: action.payload.max};
        case "CLEAR_FILTERS":
            return {...state, price: 0, filter: "", sort: "", searchQuery: "",minVal: 0, maxVal: 1000, filters: {checkbox1: false, checkbox2: false, checkbox3: false, checkbox4: false,}};
        case 'TOGGLE_CHECKBOX':
            return {
             ...state,
            filters: {
            ...state.filters,
            [action.name]: !state.filters[action.name]
            }
                  };
    default:
    return state;
    }
}