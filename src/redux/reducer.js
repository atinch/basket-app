import { REMOVE_ITEM, REMOVE_ALL_ITEM, CHANGE_QUANTITY } from './constants';

const initialState = { 
  products : [
    {price: '49.99', name: 'Football', id : 1, quantity : 1},
    {price: '9.99', name: 'Baseball', id: 2, quantity : 3},
    {price: '29.99', name: 'Basketball', id: 3, quantity : 5}
  ]
}
export default function reducer(state = initialState, action ) {
  switch (action.type) {
    case REMOVE_ITEM:
      return {
        products: state.products.filter(item => item.id !== action.id)
      };
    case REMOVE_ALL_ITEM:
      return {
        products : []
      };
    case CHANGE_QUANTITY: 
      return { 
        products: state.products.map(item => ({
          ...item, 
          quantity : item.id === action.payload.id ? action.payload.quantity : item.quantity}
        ))
      };
    default:
      return state;
  }
} 