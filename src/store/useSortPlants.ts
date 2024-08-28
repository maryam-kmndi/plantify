import { create } from "zustand";
import { plantDataType, plantsList } from "../data/plants";

interface sortPlants {
    sortPlantsResult: plantDataType[] | undefined
    setSortData: (arg: plantDataType[]) => void
    resetSortData: () => void

}


export const useSortPlants = create<sortPlants>()((set) => ({
    sortPlantsResult: undefined,
    setSortData(arg) {
        set({
            sortPlantsResult: [...arg]
        })
    },
    resetSortData() {
        set({
            sortPlantsResult: undefined
        })
    },

}))