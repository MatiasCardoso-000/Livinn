import { createContext, type SetStateAction, type Dispatch } from "react";

interface SearchContextType {
  searchRestaurant: string;
  searchForCapacity: number;
  searchForCategory: string;
  searchForPrice: number;
  isAvailable: boolean;
  setIsAvaiable: Dispatch<SetStateAction<boolean>>;
  setSearchForPrice: Dispatch<SetStateAction<number>>;
  setSearchForCategory: Dispatch<SetStateAction<string>>;
  setSearchRestaurant: Dispatch<SetStateAction<string>>;
  setSearchForCapacity: Dispatch<SetStateAction<number>>;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);
