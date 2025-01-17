import { useDispatch, useSelector } from "react-redux";
import SearchTag from "./SearchTag";
import { updateSearch } from "@/app/_lib/genericReducer";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Router from "next/router";

export default function SearchBar() {
  const state=useSelector(state=>state.generic.data.search);
  const dispatch=useDispatch();

  const ref=useRef(null);
    const handleSearch=()=>{
    console.log()
    dispatch(updateSearch(ref.current.value));
    Router.reload("/products");
    
  }
  return (
    <div className="flex-grow mx-3 p-1">
      <div className="relative">
        <input
          ref={ref}
          type="text"
          placeholder="Search for products..."
          className="w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
        />
        <button
          onClick={()=>{
            dispatch(updateSearch(ref.current.value));console.log(state)
            // handleSearch
          }}
          type="submit"
          className="absolute right-0 top-0 h-full px-4 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600"
        >
          <span className="sr-only">Search</span>
          <FaSearch/>
        </button>
      </div>
      <SearchTag />
    </div>
  );
}
