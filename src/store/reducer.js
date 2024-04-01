const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let exists = false;
      state.cart_items = state.cart_items.map((val) => {
        if (val.productId === action.payload.productId) {
          val.quantity += action.payload.quantity;
          exists = true;
        }
        return val;
      });

      state.cart_items = !exists
        ? [...state.cart_items, action.payload]
        : state.cart_items;
      return { ...state };

    case "INCREMENT_PRODUCT":
      state.cart_items = state.cart_items.map((item) => {
        if (item._id === action.payload._id) {
          item.quantity += 1;
        }
        return item;
      });
      return { ...state };

    case "DECREMENT_PRODUCT":
      state.cart_items = state.cart_items.map((item) => {
        if (item._id === action.payload._id) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          }
        }
        return item;
      });
      return { ...state };

    case "DELETE_PRODUCT":
      state.cart_items = state.cart_items.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state };

    default:
      return state;
  }
};
export default Reducer;
