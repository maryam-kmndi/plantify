import { create } from "zustand";
import { plantDataType } from "../data/plants";

interface plantsRenderData {
    renderSearchData: plantDataType[] | undefined
    setSearchData: (arg: plantDataType[] | undefined) => void
}

export const useSearchPlants = create<plantsRenderData>()((set) => ({
    renderSearchData: undefined,
    setSearchData(arg) {
        set({
            renderSearchData: arg
        })
    },
}))