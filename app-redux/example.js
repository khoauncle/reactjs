import {createStore, combineReducers} from 'redux';

// var defaultState = { array: ['Android', 'iOS', 'NodeJS'],
// isAdding: false }
//
// var reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'TOGGLE_IS_ADDING':
//       return {...state, isAdding: true}
//       break;
//     case 'ADD_ITEM':
//       return {...state, array: [...state.array, action.item]}
//       break;
//     case 'REMOVE_ITEM':
//       return {...state, array: state.array.filter((e, i) => i != action.index) }
//     default:
//     return state;
//   }
//
// }

var arrayReducer = (state = ['Android', 'iOS', 'NodeJS', 'ABC'], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
      break;
    case 'REMOVE_ITEM':
      return state.filter((e, i) => i != action.index);
    default:
    return state;
  }
}

var toggleReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_ADDING':
      return !state;
      break;
    default:
    return state;
  }
}

var reducer = combineReducers({
  array: arrayReducer,
  isAdding: toggleReducer
})

var store = createStore(reducer);

store.subscribe(() => console.log('Change:', store.getState()));

// store.dispatch({type: 'TOGGLE_IS_ADDING'});
// store.dispatch({type: 'ADD_ITEM', item: 'JavaScript'});
// store.dispatch({type: 'REMOVE_ITEM', index: 1});
//
// console.log(store.getState());

module.exports = store;
