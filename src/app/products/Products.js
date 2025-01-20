
// "use client";
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import ProductCard from "../_components/ProductCard";
// import { axiosInstance as axios } from "../api/axios";
// import { getFilteredProducts, getProducts, getSearchedProduct } from "../data/ProductService";

// export default function Products(props) {
//   const {filter,search} = useSelector((state) => state.generic.data);
//   console.log(filter);
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   console.log(search);
//   useEffect(() => {
//     const fetchFilteredProducts = async () => {
//       try {
//         let response;
//         if(search){
//         response=await getSearchedProduct(search);
//         }
//         else if (filter) {
//           response = await getFilteredProducts(filter);
//           console.log(filter.selectedCategory)
//           console.log("filtered products:"+response)
         
//         } else {
//           response = await getProducts();
//           console.log(response);
//         }
//         setProducts(response);
//         console.log(response);
//       } catch (err) {
//         setError(err);
//         console.log(err);
//       }
//     };

//     fetchFilteredProducts();
//   }, [filter,search]);
//   return (
//     <div className="w-min-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 max-w-7xl gap-4">
//       {error ? (
//         <p>Failed to load products. Please try again later.</p>
//       ) : products?.length > 0 ? (
//         products?.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../_components/ProductCard";
import { axiosInstance as axios } from "../api/axios";
import { getFilteredProducts, getProducts, getSearchedProduct } from "../service/ProductService";
import Pagination from "../_components/Pagination"; 

export default function Products(props) {
  const { filter, search } = useSelector((state) => state.generic.data);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;
  
  useEffect(() => {
    const fetchFilteredProducts = async () => {
      setLoading(true); 
      try {
        let response;
        if (search) {
          response = await getSearchedProduct(search);
        } else if (filter) {
          response = await getFilteredProducts(filter);
        } else {
          response = await getProducts(currentPage);
        }
      
        setProducts(response.data);
        setTotalPages(response.totalPages);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchFilteredProducts();
  }, [filter, search, currentPage]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-min-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p>Failed to load products. Please try again later.</p>
        ) : products?.length > 0 ? (
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={(page) => setCurrentPage(page)} 
        />
      </div>
    </div>
  );
}


// export async function getSearchedProduct(query, page) {
//   const response = await axios.get("/products/getProductBySearch", {
//     params: {
//       query: query,
//       page: page,
    
//     }
//   });
//   return response.data;
// }



// export const getFilteredProducts = async (filters, page) => {
//   try {
//     const response = await axios.get('/products/filteredProducts', {
//       params: {
//         categoryName: filters?.selectedCategory,
//         subCategoryNames: filters?.selectedSubcategories,
//         sort: filters?.sortOption,
//         page: page,
        
//       },
//     });
//     return response.data;
//   } catch (err) {
//     throw err;
//   }
// };
