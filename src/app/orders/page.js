"use client";
import React, { useState, useEffect } from 'react';
import { getOrderByUserId, cancelOrder } from '../service/OrderService';
import { useSelector } from 'react-redux';
import withAuth from '../_routeprotector/WithAuth';
const OrderTile = ({ order, onCancel }) => {
  const handleCancel = () => {
    onCancel(order.id);
  };
 console.log(order);
  return (
    <section className="bg-white py-5 text-gray-700 sm:py-5 lg:py-5  overflow-y-hidden">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4">
        <div className="mx-auto max-w-md text-center mb-4">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Order ID <span className="text-gray-500"># {order.id}</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-1 lg:gap-4">
          <article className="relative p-4 border rounded-lg shadow-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Order Status</h3>
              <div className="flex items-center space-x-2">
                <p className={`text-sm ${order.orderStatus === 'OnDeliver' ? 'text-green-500' : 'text-red-500'}`}>
                  {order.orderStatus}
                </p>
             
              </div>
              
            </div>
           
            <div className="flex justify-between items-center mb-2">
            {order.orderStatus !== 'CANCELLED' && (
                  <button
                    className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition-colors duration-200"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                )}
              {/* <p className="text-sm text-gray-500">Estimated arrival: {order.estimatedArrival}</p> */}
            </div>
            <div className="flex items-center space-x-4 mt-4 overflow-x-auto scroll-smooth">
              {order.items.map((item) => (
                <div key={item.id} className="flex flex-col items-center min-w-[200px]">
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={item.product.imageUrl || "/_assets/image.png"}
                      alt={item.product.name}
                      className="group-hover:scale-110 h-full w-full object-cover transition-all duration-300 rounded-md"
                    />
                  </div>
                  <p className="text-sm font-semibold text-center mt-2">{item.product.name}</p>
                  <p className="text-sm text-center">
                    Rp {item.price.toLocaleString()} x {item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 font-bold text-lg">Total: Rp {order.totalAmount.toLocaleString()}</p>
            {order.orderStatus === 'Cancelled' && (
              <p className="mt-2 text-red-500 font-semibold">Order Cancelled</p>
            )}
          </article>
        </div>
      </div>
    </section>
  );
};

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!userId) return; 
      try {
        setLoading(true);
        const data = await getOrderByUserId(userId);
        setOrders(data.orders || []); 
      } catch (err) {
        setError(err?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  const handleCancelOrder = async (orderId) => {
    try {
    //   setLoading(true);
      await cancelOrder(orderId);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, orderStatus: 'Cancelled' } : order
        )
      );
    } catch (err) {
      setError(err?.message || "Failed to cancel order");
    } finally {
    //   setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center text-lg">Error: {error}</div>;
  }

  return (
    <>
    <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>

    <div className="container mx-auto p-4 max-h-lvh overflow-y-scroll my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {orders.map((order) => (
          <OrderTile key={order.id} order={order} onCancel={handleCancelOrder} />
        ))}
      </div>
    </div>
    </>
  );
};

export default withAuth(OrderPage);
