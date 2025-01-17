
import React from 'react'
import { getProducts } from '../service/ProductService';
import ProductCard from '../_components/ProductCard';
import Products from './Products';
import Filter from '../_components/ProductFilter';

export default async function page() {
  
  return (
    <>
    <Products/>
    </>
  )
}
