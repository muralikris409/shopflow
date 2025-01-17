"use client"
import React, { useEffect, useState } from 'react';
import OrderSummary from './Checkout';  
import UserCartService from '../service/UserCartService';
import { useSelector } from 'react-redux';

const fieldData = {
  title: "Order Summary",
  steps: [
    { number: 1, label: "Cart", active: true, href: "#", icon: null, iconPath: "" },
    { number: 2, label: "Shipping", active: false, href: "#", icon: null, iconPath: "" },
    { number: 3, label: "Payment", active: false, href: "#", icon: null, iconPath: "" }
  ],
  shippingMethods: [
    {
      name: "Standard Shipping",
      description: "5-7 business days",
      image: "https://via.placeholder.com/50",
      defaultChecked: true
    },
    {
      name: "Express Shipping",
      description: "2-3 business days",
      image: "https://via.placeholder.com/50",
      defaultChecked: false
    }
  ],
  billingAddress: {
    placeholder: "Enter your address",
    flag: "https://via.placeholder.com/20",
    states: ["California", "Texas", "New York"],
    countries: ["USA", "Canada", "UK"]
  }
};

export default function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const userCartService = new UserCartService();
  const userId = useSelector((state) => state.session.user?.id);
  
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
      title={fieldData.title} 
      steps={fieldData.steps} 
      data={products.items} 
      totalBill={products.totalAmount}
      shippingMethods={fieldData.shippingMethods} 
      billingAddress={fieldData.billingAddress}
    />
  );
}
