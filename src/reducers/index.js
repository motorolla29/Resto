const initialState = {
  menu: [],
  loading: true,
  items: [],
  totalCount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        loading: true,
      };
    case 'ITEM_ADD_TO_CART':
      let newItems = {};
      const id = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        newItems = state.items.slice();
        newItems[itemIndex].quantity++;
      } else {
        const item = state.menu.find((item) => item.id === id);
        const newItem = {
          title: item.title,
          price: item.price,
          url: item.url,
          id: item.id,
          quantity: 1,
        };
        newItems = [...state.items, newItem];
      }
      return {
        ...state,
        items: newItems,
      };

    case 'ITEM_REMOVE_FROM_CART':
      const idx = action.payload;
      const itemIndexToRemove = state.items.findIndex(
        (item) => item.id === idx
      );
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndexToRemove),
          ...state.items.slice(itemIndexToRemove + 1),
        ],
      };
    case 'CHANGE_TOTAL_COUNT':
      let count = 0;
      state.items.map((item) => (count += item.price * item.quantity));
      return {
        ...state,
        totalCount: count,
      };

    default:
      return state;
  }
};

export default reducer;
