'use client';

import React, { useState, useEffect } from 'react';
import { 
  decreaseQuantity as guestDecreaseQuantity, 
  getCart as guestGetCart, 
  increaseQuantity as guestIncreaseQuantity, 
  removeProduct as guestRemoveProduct 
} from '../service/GuestCartService';
import UserCartService from '../service/UserCartService';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { createOrder } from '../service/OrderService';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const [error, setError] = useState(null);
  const [loadingCheckout, setLoadingCheckout] = useState(false); // Checkout loading state

  const [loading, setLoading] = useState(true); // Cart loading state
  const userCartService = new UserCartService();
  const isLoggedIn = useSelector(state => state.session.user);
  const router = useRouter();

  useEffect(() => {
    const loadCart = async () => {
      setLoading(true);
      try {
        if (isLoggedIn) {
          const userCart = await userCartService.viewCart(isLoggedIn.id);
          setProducts(userCart.items);
          setTotalBill(userCart.totalAmount);
          console.log(userCart);
        } else {
          const guestCart = typeof window !== 'undefined' ? guestGetCart() : [];
          setProducts(guestCart);
        }
      } catch (err) {
        setError('Failed to load cart. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadCart();
  }, [isLoggedIn]);

  const handleIncreaseQuantity = async (productId) => {
    try {
      if (isLoggedIn) {
        await userCartService.updateCartCount(isLoggedIn.id, productId, 'increase');
        const userCart = await userCartService.viewCart(isLoggedIn.id);
        setProducts(userCart.items);
        setTotalBill(userCart.totalAmount);
      } else {
        guestIncreaseQuantity(productId);
        setProducts(guestGetCart());
      }
    } catch (err) {
      setError('Failed to update item quantity. Please try again later.');
    }
  };

  const handleDecreaseQuantity = async (productId) => {
    try {
      if (isLoggedIn) {
        await userCartService.updateCartCount(isLoggedIn.id, productId, 'decrease');
        const userCart = await userCartService.viewCart(isLoggedIn.id);
        setProducts(userCart.items);
        setTotalBill(userCart.totalAmount);
      } else {
        guestDecreaseQuantity(productId);
        setProducts(guestGetCart());
      }
    } catch (err) {
      setError('Failed to update item quantity. Please try again later.');
    }
  };

  const handleRemoveProduct = async (productId) => {
    try {
      if (isLoggedIn) {
        await userCartService.deleteFromCart(isLoggedIn.id, productId);
        const userCart = await userCartService.viewCart(isLoggedIn.id);
        
        setProducts(userCart.items);
        setTotalBill(userCart.totalAmount);
        

      } else {
        guestRemoveProduct(productId);
        setProducts(guestGetCart());
      }
    } catch (err) {
      setError('Failed to remove product from cart. Please try again later.');
    }
  };
  const handleNavigation = (order,razorpayOrder) => {
    const data = {
      orders: order
    };

    const encodedData = encodeURIComponent(JSON.stringify(data));
    // const encodedData2 = encodeURIComponent(JSON.stringify(razorpayOrder));

    router.push(`/checkout?data=${encodedData}`);
  };
  const handleCheckout = async () => {
    setLoadingCheckout(true);
    try {
      console.log(products);
      const items = products?.map(product => ({
        productId: product.productId,
        quantity: product.quantity,
      }));
      
      const {order} = await createOrder(isLoggedIn.id, items);
      
      console.log("order:",order);
      handleNavigation(order);
    } catch (err) {
      console.error(err);
      setError('Failed to proceed with checkout. Please try again later.');
    } finally {
      setLoadingCheckout(false);
    }
  };
  return (
    <section className="h-1/3 bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {loading ? (
            <div className="text-center">Loading...</div> // Show loading text for cart loading
          ) : products.length > 0 ? (
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          ) : (
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart is empty</h1>
          )}
        </div>

        {error && (
          <div className="text-center text-red-500 mt-4">
            {error}
          </div>
        )}

        <div className="mx-auto mt-8 max-w-2xl md:mt-12">
          <div className="bg-white shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <ul className="-my-8">
                  {products.map((product, index) => (
                    <CartTile
                      key={index}
                      totalBill={totalBill}
                      product={isLoggedIn ? product.product : product}
                      index={index}
                      totalPrice={product?.totalPrice}
                      onIncreaseQuantity={handleIncreaseQuantity}
                      onDecreaseQuantity={handleDecreaseQuantity}
                      onRemoveProduct={handleRemoveProduct}
                      isLoggedIn={isLoggedIn}
                      quantity={isLoggedIn ? product.quantity : null}
                    />
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Total</p>
                  <p>${isLoggedIn ? totalBill : products?.totalPrice}</p>
                </div>
                <div className="mt-6 text-center">
                <button
                    type="button"
                    onClick={handleCheckout}
                    className={`group inline-flex w-full items-center justify-center rounded-md px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow ${loadingCheckout ? 'bg-gray-400 cursor-not-allowed animate-pulse' : 'bg-gray-900 hover:bg-gray-800'}`}
                    disabled={products.length === 0 || loadingCheckout} 
                  >
                    {loadingCheckout ? 'Processing...' : 'Checkout'}
                    {!loadingCheckout && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    )}
                  </button>
                  {/* Add message if cart is empty */}
                  {products.length === 0 && !loading && (
                    <p className="mt-4 text-gray-600">Add items to your cart to checkout</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

function CartTile({
  product = [],
  isLoggedIn,
  index,
  totalPrice,
  totalBill,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveProduct,
  quantity,
}) {
  const [loadingQuantity, setLoadingQuantity] = useState(false); // Loading state for quantity change

  const handleIncrease = async (productId) => {
    setLoadingQuantity(true);
    await onIncreaseQuantity(productId);
    setLoadingQuantity(false);
  };

  const handleDecrease = async (productId) => {
    setLoadingQuantity(true);
    await onDecreaseQuantity(productId);
    setLoadingQuantity(false);
  };

  return (
    <li key={index} className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
      <div className="shrink-0">
        <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={product?.image || "/_assets/image.png"} alt={product.name} />
      </div>

      <div className="relative flex flex-1 flex-col justify-between">
        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
          <div className="pr-8 sm:pr-5">
            <p className="text-base font-semibold text-gray-900">{product.name}</p>
            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
              Quantity: {isLoggedIn ? (loadingQuantity ? '...' : quantity) : (loadingQuantity ? '...' : product.quantity)}
            </p>
          </div>

          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
              ${isLoggedIn ? totalPrice : product.totalPrice?.toFixed(2)}
            </p>

            <div className="sm:order-1">
              <div className={`mx-auto  rounded-md flex h-8 items-stretch text-gray-600 ${loadingQuantity ? 'border-2 border-blue-500  animate-pulse' : ''}`}>
                <button
                  onClick={() => handleDecrease(product.id)}
                  className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                  disabled={loadingQuantity}
                >
                -
                </button>
                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                  {loadingQuantity ? '...' : (isLoggedIn ? quantity : product.quantity)}
                </div>
                <button
                  onClick={() => handleIncrease(product.id)}
                  className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                  disabled={loadingQuantity}
                >
                   +
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
          <button
            onClick={() => onRemoveProduct(product.id)}
            type="button"
            className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}
