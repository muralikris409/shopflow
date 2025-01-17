import React from "react";
import ProductCard from "./ProductCard";
import getFlashDeals from "../service/ProductService";
export const revalidate = 3600; 
 async function FlashDeals() {

  let products=[];
  let error="";
  try{
    products=await getFlashDeals();
  }
  catch(err){
    error=err;
  }
  products=products.data;
  return (
    <div className="mt-5 bg-orange-500 h-1/6 overflow-hidden rounded-lg shadow-lg max-w-96 w-5/5 sm:w-3/4 md:w-2/3 lg:w-2/6">
    <div className="flex justify-center">
      <img 
        src="/_assets/fsale.png" 
        alt="Flash Deals" 
        className="m-1 h-15 w-20" 
      />
    </div>
    {
    (products?.length>0)?
    (<div className="relative flex-col justify-center w-full max-h-80 overflow-y-scroll scrollbar-hide overflow-x-hidden">
      {
      products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))
      }
    </div>):
    (
     <div className="p-4 text-gray-50">No deals available</div>
    )
    }
    
  </div>
  
  );
};

export default FlashDeals;
