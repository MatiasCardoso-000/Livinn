import { useContext } from "react"
import { SearchContext } from "../components/Context/SearchContext/SearchContext"

export const useSearch = () => {
  const ctx = useContext(SearchContext)
  if (!ctx) throw new Error('useSearch must be used within SearchProvider')
  return ctx
}

export default useSearch
