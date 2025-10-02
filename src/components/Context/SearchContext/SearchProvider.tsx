import { useState } from "react";
import { SearchContext } from "./SearchContext";

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchRestaurant, setSearchRestaurant] = useState<string>("");
  const [searchForCategory, setSearchForCategory] = useState<string>("");

  const [searchForCapacity, setSearchForCapacity] = useState<number>(0);
  const [searchForPrice, setSearchForPrice] = useState<number>(0);


  return (
    <SearchContext.Provider
      value={{
        searchRestaurant,
        searchForCapacity,
        setSearchRestaurant,
        setSearchForCapacity,
        searchForCategory,
        setSearchForCategory,
        searchForPrice,
        setSearchForPrice
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
