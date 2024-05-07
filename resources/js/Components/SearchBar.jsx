import { memo } from "react"
export default memo(function SearchBar(){
    return (
        <input  className="w-full px-5 font-light border rounded-full text-start bg-marshland-950 bg-opacity-70 placeholder:text-ecru-white-100 focus:ring-green-yellow-600 focus:border-green-yellow-600 placeholder:font-light text-ecru-white-100 focus:bg-opacity-80" type="text" name="searchbar"  placeholder="Search" />
    )
}
)
