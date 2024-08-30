import { create } from "zustand";
import { persist } from "zustand/middleware";
import { plantDataType } from "../data/plants";

// Define the interface of the Cart state
interface State {
  FavoriteList: plantDataType[];
  setFavoriteList: (arg: plantDataType) => void;
  removeFav: (arg: number) => void;
}

// Create the store with Zustand, combining the status interface and actions
export const useFavoriteList = create<State>()(
  persist(
    (set) => ({
      FavoriteList: [],

      setFavoriteList: (arg) => {
        const favor = useFavoriteList.getState().FavoriteList;

        if (favor.includes(arg)) {
          let index = favor.findIndex((q) => q.id === arg.id);
          favor.splice(index, 1);
          set({
            FavoriteList: [...favor],
          });
        } else {
          set({
            FavoriteList: [...favor, arg],
          });
        }
      },
      removeFav: (arg) => {
        const favor = useFavoriteList.getState().FavoriteList;
        const index = favor.findIndex((q) => q.id === arg);
        favor.splice(index, 1);
        set({
          FavoriteList: favor,
        });
      },
    }),
    {
      name: "FavoriteList",
    }
  )
);
