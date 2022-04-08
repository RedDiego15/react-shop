import {useState} from 'react';

const initialState = {
    cart:[],
    toggleOrder:false,
    totalItems:0,

}

const useInitialState =() =>{
    const [state, setState] = useState(initialState);

    const findItem = (payload) => {
      return state.cart.filter((item) => item.id === payload.id)[0];
    };
    // const calculateTotalItems =() =>{
    //   const newTotal= state.cart.reduce((prev, actual) => prev + actual.quantity, 0);
    //   setState({
    //     ...state,
    //     totalItems: newTotal
    // })
    // }

    const addToCart = (payload) => {
      const item = findItem(payload);
      if (item && item.quantity < 10) {
        item.quantity = item.quantity + 1;
        item.totalPrice = payload.price * item.quantity;
        setState({
          ...state,
          cart: [...state.cart],
        });
      }else if(item && item.quantity==10){
          alert('cannot buy more than 10 of the same item ')
      } 
      else {
        payload.quantity = 1;
        payload.totalPrice = payload.price * payload.quantity;
        setState({
          ...state,
          cart: [...state.cart, payload],
        });
      }
    };
    const setToggleOrder= (payload)=>{
        setState({
            ...state,
            toggleOrder:payload
        })
        
    
    }
    const actualizeQuantity = (payload,newQuantity) =>{
        const idx = state.cart.indexOf(payload)
        state.cart[idx].quantity=newQuantity; 
        setState({
            ...state,
            cart: [...state.cart],
          });
    }
    
    const deleteItem = (item)=>{
      const idx = state.cart.indexOf(item);
      state.cart.splice(idx,1);
      setState({
        ...state,
        cart: [...state.cart],
      });

    }

    return{
        state,
        addToCart,
        setToggleOrder,
        actualizeQuantity,
        deleteItem,

    }
}

export {useInitialState}