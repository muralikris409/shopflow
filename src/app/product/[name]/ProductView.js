"use client";
import { addProduct } from '@/app/service/GuestCartService';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserCartService from "../../service/UserCartService";
import { addOrRemoveProductFromWishlist } from '@/app/service/WishListService';
import { useRouter } from 'next/navigation';
import { createOrder } from '@/app/service/OrderService';

const ProductView = ({ product = {} }) => {
  const isLoggedIn = useSelector((state) => state.session.user);
  const token = useSelector((state) => state.session.token);
  const router = useRouter();

  const {
    id,
    name = "Unknown Product",
    description = "No description available.",
    actualPrice = 0,
    offerPrice = 0,
    discountPercentage = 0,
    rating = 0,
    stock = 0,
    image = "/_assets/image.png",
  } = product;

  const reviewsCount = 1209;
  const userCartService = new UserCartService();

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 3000); // Clear message after 3 seconds
  };
  const handleNavigation = (order) => {
    const data = {
      orders: order
      
    };

    // Stringify the object and encode it to make it URL-safe
    const encodedData = encodeURIComponent(JSON.stringify(data));

    router.push(`/checkout?data=${encodedData}`);
  };
  const handleBuy = async () => {
    try {
      const userId = isLoggedIn ? isLoggedIn.id : "";
      const items = [{ productId: id, quantity: 1 }];

      const order = await createOrder(userId, items);
      console.log("Order:", order);

      showMessage('Order created successfully! Redirecting to checkout...', 'success');
      handleNavigation(order);
    } catch (err) {
      console.error('Order creation failed:', err);
      showMessage('Failed to create order. Please try again.', 'error');
    }
  };

  const handleAddToCart = () => {
    console.log("Adding product to cart:", product);

    if (isLoggedIn) {
      userCartService.addItemToCart(isLoggedIn.id, id)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            showMessage('Product added to your cart!', 'success');
          } else {
            showMessage(response.message || 'Failed to add product to cart. Please try again.', 'error');
          }
        })
        .catch((error) => {
          showMessage('An unexpected error occurred. Please try again.', 'error');
          console.error("Error adding to cart:", error);
        });
    } else {
      addProduct(product);
      showMessage('Product added to your guest cart!', 'success');
    }
  };

  const handleAddorRemoveFromWishlist = async () => {
    try {
      const response = await addOrRemoveProductFromWishlist(isLoggedIn.id, id, token);
      showMessage(response?.data?.message || "Product added to Wishlist", 'success');
    } catch (error) {
      showMessage('An unexpected error occurred. Please try again.', 'error');
      console.error("Error updating wishlist:", error);
    }
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <nav className="flex">
          <ol role="list" className="flex items-center">
            <li className="text-left">
              <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 hover:text-gray-800">Home</a>
            </li>
            <li className="text-left">
              <span className="mx-2 text-gray-400">/</span>
              <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 hover:text-gray-800">Products</a>
            </li>
          </ol>
        </nav>

        {/* Product Content */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Product Image */}
          <div className="lg:col-span-3">
            <img className="h-full w-full max-w-full object-cover" src={image} alt={name} />
          </div>

          {/* Product Details */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
            <div className="mt-5 flex items-center">
              {/* Ratings */}
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    className={`block h-4 w-4 align-middle ${index < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-400'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="ml-2 text-sm font-medium text-gray-500">{reviewsCount} Reviews</p>
            </div>

            {/* Price */}
            <h2 className="mt-8 text-base text-gray-900">Price</h2>
            <div className="mt-3 flex items-center">
              <span className="text-3xl font-bold">${offerPrice.toFixed(2)}</span>
              <span className="ml-2 text-lg line-through text-gray-500">${actualPrice.toFixed(2)}</span>
              <span className="ml-2 text-sm text-green-600">({discountPercentage.toFixed(2)}% off)</span>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 grid grid-col md:grid-row lg:grid-row gap-5 items-center space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <button onClick={handleBuy} className="inline-flex items-center justify-center rounded-md bg-gray-900 px-12 py-3 text-white hover:bg-gray-800">
                Buy Now
              </button>
              <button onClick={handleAddToCart} className="inline-flex items-center justify-center rounded-md bg-gray-900 px-12 py-3 text-white hover:bg-gray-800">
                Add to Cart
              </button>
              <button onClick={handleAddorRemoveFromWishlist} className="inline-flex items-center justify-center rounded-md bg-gray-900 px-12 py-3 text-white hover:bg-gray-800">
                Add to Wishlist
              </button>
            </div>

            {/* Message Display */}
            {message && (
              <div className={`mt-4 p-2 text-sm ${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </div>
            )}

            {/* Additional Details */}
            <ul className="mt-8 space-y-2">
              <li className="flex items-center text-sm font-medium text-gray-600">
                <svg className="mr-2 block h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Free shipping worldwide
              </li>
              <li className="flex items-center text-sm font-medium text-gray-600">
                <svg className="mr-2 block h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Cancel Anytime
              </li>
            </ul>
          </div>

          {/* Product Description */}
          <div className="lg:col-span-3">
            <div className="prose max-w-none">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
