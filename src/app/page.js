 import { useDispatch } from "react-redux";
import { Carousel } from "./_components/Carousel";
import Header from "./_components/header/Header";
import ProductCard from "./_components/ProductCard";
import { fetchData } from "./_lib/categoryReducer";
// import { getProducts } from "./data/ProductService";
import Products from "./products/Products";
import ProductCarousel from "./_components/ProductCarousel";
import { getProducts } from "./service/ProductService";
import FlashDeal from "./_components/FlashDeal"; 

export default async function Home()  {
  let products = [];
  let error = null;
  try { 
    products = await getProducts(1);
  } catch (err) {
    error = err;
    console.log(err)
  }
  products=products.data;
  console.log(products)
  return (
    <>
   <div className="flex flex-col lg:flex-row px-2">
        <Carousel />
    
        <FlashDeal/>
</div>
 
      <ProductCarousel title={"Picks for you"} href={"/products"}>
  {products && products?.length > 0 ? ( 
    products.slice(0, 10).map((product, i) => (
      <ProductCard product={product} key={product.id || i} />
    ))
  ) : (
    <p className="text-gray-500">No products available.</p>
  )}
</ProductCarousel>
    </>
  );
}
