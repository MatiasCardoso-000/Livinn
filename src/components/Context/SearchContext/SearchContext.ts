import { createContext, type SetStateAction, type Dispatch } from "react";

interface SearchContextType {
  searchValue : string;
  setSearchValue: Dispatch<SetStateAction<string>>
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined)