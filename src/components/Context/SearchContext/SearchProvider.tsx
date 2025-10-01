import { useState } from "react"
import { SearchContext } from "./SearchContext"



export const SearchProvider = ({children}: {children: React.ReactNode}) => {
 
    const [searchValue, setSearchValue] = useState<string>("")


  return (
    <SearchContext.Provider value={{searchValue,setSearchValue}}>
      {children}
    </SearchContext.Provider>
  )
}