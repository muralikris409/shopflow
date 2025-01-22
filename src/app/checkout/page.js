"use client"
import React, { useEffect, useState } from 'react';
import OrderSummary from './Checkout';  
import UserCartService from '../service/UserCartService';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import withAuth from '../_routeprotector/WithAuth';



function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const userCartService = new UserCartService();
  const userId = useSelector((state) => state.session.user?.id);
  const searchParams = useSearchParams();
  const orders = useSelector(state=>state?.utils?.product?.orders);
console.log(orders);
  const fetchProducts = async () => {
    if (!userId) return;  
    try {
      const response = await userCartService.viewCart(userId);
      console.log(response)
      const productData = response; 
      setProducts(productData);
      
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchProducts();
    }
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <OrderSummary 
      data={products.items} 
      userId={userId}
      orders={orders}
      totalBill={products.totalAmount}
    
    />
  );
}
export default withAuth(Page);