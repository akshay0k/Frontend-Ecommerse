import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  const existingCartItemIndex = state.items.findIndex(
    (item) => item?.id === action?.payload?.id
  );
  const existingCartItem = state.items[existingCartItemIndex];

  let updatedItems;
  let newTotalAmount;
  
  switch (action.type) {
    case "ADD_ITEM":
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
          totalPrice: (existingCartItem.quantity + 1) * existingCartItem.new_price,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
        newTotalAmount = state.totalAmount + existingCartItem.new_price;
      } else {
        updatedItems = state.items.concat({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.new_price,
        });
        newTotalAmount = state.totalAmount + action.payload.new_price;
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: newTotalAmount,
      };

    case "DECREMENT_ITEM":
      if (!existingCartItem) {
        return state;
      }
      
      if (existingCartItem.quantity > 1) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
          totalPrice: (existingCartItem.quantity - 1) * existingCartItem.new_price,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
        newTotalAmount = state.totalAmount - existingCartItem.new_price;
      } else {
        updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        newTotalAmount = state.totalAmount - existingCartItem.new_price;
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: newTotalAmount,
      };

      case "REMOVE_ITEM":
        if (!existingCartItem) {
          return state;
        }
        
          updatedItems = state.items.filter(
            (item) => item.id !== action.payload.id
          );
          newTotalAmount = state.totalAmount - existingCartItem.new_price;

  
        return {
          ...state,
          items: updatedItems,
          totalAmount: newTotalAmount,
        };

        case "CLEAR_CART" : 
         return {
          items: [],
          totalAmount: 0,
        }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  };

  const decrementItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "DECREMENT_ITEM", payload: { id } });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", payload: { id } });
  };

  const clearCartFromCartHandler = ()=>{
    dispatchCartAction({type: "CLEAR_CART"})
  }


  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        addItem: addItemToCartHandler,
        decrementItem: decrementItemFromCartHandler,
        removeItem:removeItemFromCartHandler,
        totalAmount: cartState.totalAmount,
        clearCart: clearCartFromCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
