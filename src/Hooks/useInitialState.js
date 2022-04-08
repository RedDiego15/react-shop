import {useState} from 'react';

const initialState = {
    cart:[],
    toggleOrder:false,
    totalItems:0,
    toggleItemInfo:false

}

const useInitialState =() =>{
    const [state, setState] = useState(initialState);

    const findItem = (payload) => {
      return state.cart.filter((item) => item.id === payload.id)[0];
    };

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
    const setToggleOrder= ()=>{
        setState({
            ...state,
            toggleOrder:!state.toggleOrder
        })
        
    
    }
    const setToggleItemInfo= ()=>{
      setState({
          ...state,
          toggleItemInfo:!state.toggleItemInfo
      })
      console.log(state)
      
  
  }
    const actualizeQuantity = (payload,newQuantity) =>{
        const idx = state.cart.indexOf(payload)
        state.cart[idx].quantity=newQuantity; 
        setState({
            ...state,
            cart: [...state.cart],
          });
    }
    
    const deleteItem = (deleteItem)=>{
      setState({
        ...state,
        cart: state.cart.filter((item) => item.id !== deleteItem.id),
      });
    }

    return{
        state,
        addToCart,
        setToggleOrder,
        actualizeQuantity,
        deleteItem,
        setToggleItemInfo,
    }
}

export {useInitialState}