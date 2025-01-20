import { useDispatch, useSelector } from "react-redux";
import SearchTag from "./SearchTag";
import { updateSearch } from "@/app/_lib/genericReducer";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import {useRouter} from "next/navigation";
import { useEffect } from "react";

export default function SearchBar() {
  const state = useSelector(state => state.generic.data.search);
  const dispatch = useDispatch();
  const router=useRouter();
  const ref = useRef(null);

  const handleSearch = () => {
    const searchQuery = ref.current.value;
    dispatch(updateSearch(searchQuery)); 
    router.push(`/products`); 
  };
  useEffect(()=>{
    ref.current.value=state;
  },[state]);
  return (
    <div className="flex-grow mx-3 px-10 ">
      <div className="relative">
        <input
          ref={ref}
          type="text"
          placeholder="Search for products..."
          className="w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="absolute right-0 top-0 h-full px-4 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600"
        >
          <span className="sr-only">Search</span>
          <FaSearch />
        </button>
      </div>
      <SearchTag />
    </div>
  );
}
