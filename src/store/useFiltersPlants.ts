import { create } from "zustand";
import { plantDataType, plantsList } from "../data/plants";
import { priceFilterType } from "../components/Shop/Filter";
import { useSearchPlants } from "./useSearchPlants";

interface FilterProductType {
    filterProductResult: plantDataType[] | undefined
    lvlFilterResult: plantDataType[] | undefined
    priceFilterResult: plantDataType[] | undefined
    filterCount: number
    setLvlFilter: (arg: number[]) => void
    setRateFilter: (arg: number) => void
    setPriceFilter: (arg: priceFilterType) => void
    resetFilterProduct: () => void
}

export const useFilterProduct = create<FilterProductType>()((set) => ({
    filterProductResult: undefined,
    lvlFilterResult: undefined,
    priceFilterResult: undefined,
    filterCount: 0,
    setLvlFilter(arg) {
        const data = useSearchPlants.getState().renderSearchData ?? plantsList
        const filterNum = useFilterProduct.getState().filterCount
        let result: plantDataType[] = []
        if (arg.length >= 1) {
            if (arg.includes(1)) {
                const filterData = data.filter(item => item.care_level === 1)
                result = [...result, ...filterData]
            }
            if (arg.includes(2)) {
                const filterData = data.filter(item => item.care_level === 2)
                result = [...result, ...filterData]
            }
            if (arg.includes(3)) {
                const filterData = data.filter(item => item.care_level === 3)
                result = [...result, ...filterData]
            }
            set({
                filterProductResult: result,
                lvlFilterResult: result,
                filterCount: filterNum + 1
            })
        } else {
            set({
                filterProductResult: undefined,
                filterCount: 0
            })
        }
    },
    setPriceFilter(arg) {
        const stateData = useFilterProduct.getState().filterProductResult
        const filterNum = useFilterProduct.getState().filterCount
        const maindata: plantDataType[] = useSearchPlants.getState().renderSearchData ?? plantsList
        const data = filterNum > 0 ? stateData : maindata
        const lastFilterResult = useFilterProduct.getState().lvlFilterResult
        let result: plantDataType[] | undefined = []
        if (arg.max || arg.min) {
            if (arg.max && arg.min) {
                const minPrice: number = arg.min
                const maxPrice: number = arg.max
                result = data?.filter(item =>
                    parseFloat(item.price.replace("$", "")) > minPrice &&
                    parseFloat(item.price.replace("$", "")) < maxPrice)
                result = result?.sort((a, b) => {
                    const priceA = parseFloat(a.price.replace("$", ""));
                    const priceB = parseFloat(b.price.replace("$", ""));
                    return priceA - priceB;
                });
            }
            else if (arg.max) {
                const maxPrice: number = arg.max
                result = data?.filter(item => parseFloat(item.price.replace("$", "")) < maxPrice)
                result = result?.sort((a, b) => {
                    const priceA = parseFloat(a.price.replace("$", ""));
                    const priceB = parseFloat(b.price.replace("$", ""));
                    return priceA - priceB;
                });
            }
            else if (arg.min) {
                const minPrice: number = arg.min
                result = data?.filter(item => parseFloat(item.price.replace("$", "")) > minPrice)
                result = result?.sort((a, b) => {
                    const priceA = parseFloat(a.price.replace("$", ""));
                    const priceB = parseFloat(b.price.replace("$", ""));
                    return priceA - priceB;
                });
            }
            set({
                filterProductResult: [...result as plantDataType[]],
                priceFilterResult: [...result as plantDataType[]],
                filterCount: filterNum + 1
            })
        } else {
            set({
                filterCount: filterNum,
                filterProductResult: lastFilterResult,
                priceFilterResult: lastFilterResult
            })
        }
    },
    setRateFilter(arg) {
        const stateData = useFilterProduct.getState().filterProductResult
        const filterNum = useFilterProduct.getState().filterCount
        const maindata: plantDataType[] = useSearchPlants.getState().renderSearchData ?? plantsList
        const data = filterNum > 0 ? stateData : maindata
        let result: plantDataType[] | undefined = []
        const lastFilterResult = useFilterProduct.getState().priceFilterResult
        if (arg > 1) {
            result = data?.filter(item => item.rate >= arg)
            set({
                filterProductResult: result,
            })
        } else {
            set({
                filterProductResult: lastFilterResult
            })
        }
        set({
            filterCount: 0
        })
    },
    resetFilterProduct() {
        set({
            filterProductResult: undefined
        })
    }
}))


{/*
     setLvlFilter(arg) {
       
    },
    setPriceFilter(arg) {

           

    },
    setRateFilter(arg) {



    },
    resetFilterProduct() {

    }
    
    */}