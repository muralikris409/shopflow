"use client";
import React, { useEffect, useState } from 'react';
import { getProductByID } from '@/app/service/ProductService';
import ProductView from './ProductView';
import { useSelector } from 'react-redux';

export default function Page() {
  const pId = useSelector(state => state?.utils?.product?.id);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && pId) {
      localStorage.setItem("persistedData", JSON.stringify({ product: { id: pId } }));
    }
  }, [isClient, pId]);

  let id = null;
  if (isClient) {
    const persistedData = JSON.parse(localStorage.getItem("persistedData"));
    id = persistedData?.product?.id;
  }

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      async function loadProduct() {
        try {
          const product = await getProductByID(id);
          setProduct(product.data);
        } catch (error) {
          console.error('Error fetching product:', error);
        } finally {
          setLoading(false);
        }
      }
      loadProduct();
    } else {
      setLoading(false); // If no product ID, stop loading
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductView product={product} />
  );
}
