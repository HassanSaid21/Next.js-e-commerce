import { CartStoreActionType, CartStoreStateType } from "@/types";
import { create } from "zustand";
import {persist } from 'zustand/middleware'

const useCartStore = create<CartStoreStateType & CartStoreActionType>()(
  persist(
    (set ) => ({
      cart: [],
     hasHydrated  :false ,
      addToCart: (product) =>
        set((state) => {
          const productIndex = state.cart.findIndex(
            (item) =>
              product.id === item.id &&
              item.selectedColor === product.selectedColor &&
              item.selectedSize === product.selectedSize
          );
          
          if (productIndex < 0) {
            return { cart: [...state.cart, { ...product, quantity: product.quantity || 1 }] };
          }
          
          const updatedCart = [...state.cart];
          updatedCart[productIndex]!.quantity += product.quantity || 1;
          return { cart: updatedCart };
        }),

      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) =>!(
              product.id === item.id &&
              item.selectedColor === product.selectedColor &&
              item.selectedSize === product.selectedSize)
          ),
        })),

      clearCart: () => set(() => ({ cart: [] })),
    }),
    {
      name: "cart",
      version: 1,
      partialize: (state) => ({ cart: state.cart }),
        onRehydrateStorage :()=> (state)=>{
          if(state)
          state.hasHydrated = true
        }
    }
  )
);
export default useCartStore