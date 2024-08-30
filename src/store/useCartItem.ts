import { create } from "zustand";
import { persist } from "zustand/middleware";
import { plantDataType } from "../data/plants";

// Define the interface of the Cart state
interface cartDataType extends plantDataType {
  count: number;
}

interface State {
  CartItem: cartDataType[];
  totalPrice: number;
  setCartItem: (arg: plantDataType) => void;
  setIncrement: (arg: number) => void;
  setDecrement: (arg: number) => void;
  setDeleteItem: (arg: number) => void;
}

// Create the store with Zustand, combining the status interface and actions
export const useCartItems = create<State>()(
  persist(
    (set) => ({
      CartItem: [],
      totalPrice: 0,
      setCartItem: (arg) => {
        const cart = useCartItems.getState().CartItem;
        let totalPri: number = useCartItems.getState().totalPrice;
        const findItemInCart = cart.find((q) => q.id === arg.id);
        console.log(cart);
        console.log(totalPri);
        console.log(arg);
        if (findItemInCart) {
          let itemPrice =
            findItemInCart.count *
            parseFloat(findItemInCart.price.replace("$", ""));
          let itemIndex = cart.findIndex((q) => q.id === arg.id);
          cart.splice(itemIndex, 1);
          console.log(itemPrice);
          console.log(itemIndex);
          console.log(cart);

          set({
            CartItem: [...cart],
            totalPrice: totalPri - itemPrice,
          });
        } else {
          let itemPrice = parseFloat(arg.price.replace("$", ""));
          set({
            CartItem: [...cart, { ...arg, count: 1 }],
            totalPrice: totalPri + itemPrice,
          });
        }
      },

      setIncrement: (arg) => {
        const cart = useCartItems.getState().CartItem;
        let totalPri: number = useCartItems.getState().totalPrice;

        //find item index
        let index = cart.findIndex((q) => q.id === arg);
        //increase item count for buy
        cart[index].count++;
        //change to number type
        const argPrice: number = parseFloat(cart[index].price.replace("$", ""));
        //calculate total price
        totalPri += argPrice;
        set({
          CartItem: [...cart],
          totalPrice: totalPri,
        });
      },
      setDecrement: (arg) => {
        const cart = useCartItems.getState().CartItem;
        let totalPri: number = useCartItems.getState().totalPrice;

        let index = cart.findIndex((q) => q.id === arg);

        const argPrice: number = parseFloat(cart[index].price.replace("$", ""));

        if (cart[index].count === 1) {
          totalPri -= argPrice;
          cart.splice(index, 1);
        } else {
          totalPri -= argPrice;
          cart[index].count--;
        }

        set({
          CartItem: [...cart],
          totalPrice: totalPri,
        });
      },
      setDeleteItem: (arg) => {
        console.log(arg);
        const cart = useCartItems.getState().CartItem;
        let totalPri: number = useCartItems.getState().totalPrice;
        let index = cart.findIndex((q) => q.id === arg);
        const argPrice: number = parseFloat(cart[index].price.replace("$", ""));
        console.log(argPrice);
        console.log(cart[index].count);

        totalPri -= cart[index].count * argPrice;
        console.log(totalPri);

        cart.splice(index, 1);
        set({
          CartItem: [...cart],
          totalPrice: cart.length === 0 ? 0 : totalPri,
        });
      },
    }),
    {
      name: "CartItem",
    }
  )
);
