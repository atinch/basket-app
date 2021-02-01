import { REMOVE_ITEM, REMOVE_ALL_ITEM, CHANGE_QUANTITY } from './constants';

export function deleteItem(id) {
  return {
    type : REMOVE_ITEM,
    id
  }
}
export function deleteAllItems() {
  return {
    type : REMOVE_ALL_ITEM
  }
}
export function changeQuantity(id, quantity){
  return {
    type : CHANGE_QUANTITY,
    payload : {
      id,
      quantity
    }
  }
}