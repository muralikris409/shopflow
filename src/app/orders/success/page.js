"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { Suspense } from 'react';


const OrderCard = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderCardComponent />
    </Suspense>
  );
};
export default OrderCard;

const OrderCardComponent = () => {
  const searchParams = useSearchParams();
  let order = null;

  try {
    const orderData = searchParams.get("dtrcpt");
    order = orderData ? JSON.parse(orderData) : null;
    
  } catch (error) {
    console.error("Invalid order data:", error);
  }

  const orderDate = order?.orderDate ? new Date(order.orderDate).toLocaleDateString() : 'N/A';
  const formattedAmount = order?.totalAmount ? order.totalAmount.toLocaleString() : 'N/A';

  if (!order) {
    return (
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-2xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
            Oops! Something went wrong.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
            We couldn't retrieve your order details. Please try again later or contact support.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Return to shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
  
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-2xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
          Thanks for your order!
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
          Your order{' '}
          <a
            href="#"
            className="font-medium text-gray-900 dark:text-white hover:underline"
          >
            #{order.id || 'N/A'}
          </a>{' '}
          will be processed within 24 hours during working days. We will notify
          you by email once your order has been shipped.
        </p>
        <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Order Date
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {orderDate}
            </dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Order Status
            </dt>
            <dd
              className={`font-medium sm:text-end ${
                order.orderStatus === 'CONFORMED'
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {order.orderStatus || 'N/A'}
            </dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Payment Status
            </dt>
            <dd
              className={`font-medium sm:text-end ${
                order.paymentStatus === 'COMPLETED'
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {order.paymentStatus || 'N/A'}
            </dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Total Amount
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              Rp {formattedAmount}
            </dd>
          </dl>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Return to shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

