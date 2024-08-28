import { create } from "zustand";

interface ActiveFiltersType {
    activeFilters: string[]
    setActiveFilters: (arg: string) => void
    removeActiveFilters: (arg: string) => void
}
export const useActiveFilters = create<ActiveFiltersType>()((set) => ({
            activeFilters: [],
            setActiveFilters: (arg) => {
                let filters = useActiveFilters.getState().activeFilters
                if (!filters.includes(arg)) {
                    set({
                        activeFilters: [...filters, arg]
                    })
                }                
            },
            removeActiveFilters: (arg) => {
                let filters = useActiveFilters.getState().activeFilters
                const removeItemIndex = filters.indexOf(arg)
                filters.splice(removeItemIndex, 1)                
                set({
                    activeFilters: [...filters]
                })
            }
        })
)