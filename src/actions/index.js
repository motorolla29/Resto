const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu,
  };
};

const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED',
  };
};

const addedToCart = (id) => {
  return {
    type: 'ITEM_ADD_TO_CART',
    payload: id,
  };
};

const deleteFromCart = (id) => {
  return {
    type: 'ITEM_REMOVE_FROM_CART',
    payload: id,
  };
};

const changeTotalCount = () => {
  return {
    type: 'CHANGE_TOTAL_COUNT',
  };
};

export {
  menuLoaded,
  menuRequested,
  addedToCart,
  deleteFromCart,
  changeTotalCount,
};
