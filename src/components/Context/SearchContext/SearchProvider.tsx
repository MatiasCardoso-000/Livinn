import { useState } from "react";
import { SearchContext } from "./SearchContext";

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchRestaurant, setSearchRestaurant] = useState<string>("");
  const [searchForCategory, setSearchForCategory] = useState<string>("");

  const [searchForCapacity, setSearchForCapacity] = useState<number>(0);
  const [searchForPrice, setSearchForPrice] = useState<number>(0);
  const [isAvailable, setIsAvaiable] = useState<boolean>(false);

  return (
    <SearchContext.Provider
      value={{
        searchRestaurant,
        searchForCapacity,
        searchForCategory,
        searchForPrice,
        isAvailable,
        setIsAvaiable,
        setSearchRestaurant,
        setSearchForCapacity,
        setSearchForCategory,
        setSearchForPrice
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
