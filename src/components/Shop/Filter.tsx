import { Heading, Divider } from "@chakra-ui/react";
import Discount from "./Discount";
import LevelSelector from "./LevelSelector";
import PriceSelector from "./PriceSelector";
import RateSelector from "./RateSelector";
import { useEffect, useState } from "react";
import { useFilterProduct } from "../../store/useFiltersPlants";
import { useActiveFilters } from "../../store/useActiveFilter";
import { useSearchPlants } from "../../store/useSearchPlants";

export interface priceFilterType {
  min: undefined | number
  max: undefined | number
}

const Filter = () => {
  const [careLevelFilter, setCareLevelFilter] = useState<number[]>([]);
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [priceRangeFilter, setPriceRangeFilter] = useState<priceFilterType>({ min: undefined, max: undefined })

  const { setLvlFilter, setPriceFilter, setRateFilter, resetFilterProduct } = useFilterProduct()
  const { activeFilters } = useActiveFilters()
  const { renderSearchData } = useSearchPlants()
  useEffect(() => {
    callFiltersOnProduct()
  }, [careLevelFilter, ratingFilter, priceRangeFilter, renderSearchData])

  const callFiltersOnProduct = () => {
    if (activeFilters.length >= 1) {
      console.log("hello");

      setLvlFilter([...careLevelFilter])
      setPriceFilter({ ...priceRangeFilter })
      setRateFilter(ratingFilter)
    } else {
      resetFilterProduct()
    }
  }
  const handlePriceFilter = (arg: priceFilterType) => {
    setPriceRangeFilter(arg)
  }
  const handleRateFilter = (arg: number) => {
    setRatingFilter(arg)
  }
  const handleCareLvlFilter = (param: number[]) => {
    setCareLevelFilter([...param])
  }
  return (
    <>
      <Heading fontSize="1.5rem" color="textColor" my="1rem" pl="1rem">
        Filter
      </Heading>
      <Divider />
      <LevelSelector filters={careLevelFilter} setFilters={handleCareLvlFilter} />
      <Divider />
      <PriceSelector passPrice={handlePriceFilter} />
      <Divider />
      <RateSelector rateFilterFunc={handleRateFilter} />
      <Divider />
      <Discount />
    </>
  );
};

export default Filter;
