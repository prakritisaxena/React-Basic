import {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  ADD_ITEM,
  REMOVE_ITEM
} from '../constants';

const initialState = {
  items: [
    {name: 'John', age: 25, avatar: 'https://randomuser.me/api/portraits/men/15.jpg'},
    {name: 'Joe', age: 35, avatar: 'https://randomuser.me/api/portraits/men/13.jpg'},
    {name: 'Andrei', age: 45, avatar: 'https://randomuser.me/api/portraits/men/10.jpg'},
    {name: 'Ted', age: 29, avatar: 'https://randomuser.me/api/portraits/men/1.jpg'},
    {name: 'Ben', age: 30, avatar: 'https://randomuser.me/api/portraits/men/2.jpg'}
  ]
};

const itemsReducer = (state = initialState, action) => {

  function increaseQuantity() {
    let newItems = [].concat(this.state.items);
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].id === action.id) {
        newItems[i].qty += 1;
        break;
      }
    }
    return {...state, items: newItems};
  }

  function decreaseQuantity() {
    let newItems = [].concat(this.state.items);
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].id === action.id) {
        newItems[i].qty -= 1;
        if (newItems[i].qty === 0) {
          removeItem(i);
        }
        break;
      }
    }
    return {...state, items: newItems};
  }

  function addItem() {
    let newItems = [].concat(state.items);
    newItems.push(action.item);
    return {...state, items: newItems};
  }

  function removeItem() {
    let newItems = [].concat(state.items);
    newItems.pop();

    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].id === action.id) {
        newItems.splice(i, 1);
        break;
      }
    }
    return {...state, items: newItems};
  }


  switch (action.type) {
    case ADD_ITEM:
      return addItem();
    case REMOVE_ITEM:
      return removeItem();
    case INCREASE_QUANTITY:
      return increaseQuantity();
    case DECREASE_QUANTITY:
      return decreaseQuantity();
  }

  return state;
};

export default itemsReducer;
