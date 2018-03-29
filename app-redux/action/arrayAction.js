function removeItem(index) {
  return {type: 'REMOVE_ITEM', index};
}

function addItem(item) {
  return {type:'ADD_ITEM', item}
}

module.exports = { removeItem, addItem }
