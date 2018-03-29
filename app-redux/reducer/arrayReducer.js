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

module.exports = arrayReducer;
