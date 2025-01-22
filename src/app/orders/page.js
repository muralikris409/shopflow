// "use client";
// import React, { useState, useEffect } from 'react';
// import { getOrderByUserId, cancelOrder } from '../service/OrderService';
// import { useSelector } from 'react-redux';
// import withAuth from '../_routeprotector/WithAuth';
// const OrderTile = ({ order, onCancel }) => {
//   const handleCancel = () => {
//     onCancel(order.id);
//   };
//  console.log(order);
//   return (
//     <section className="bg-white py-5 text-gray-700 sm:py-5 lg:py-5  overflow-y-hidden">
//       <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4">
//         <div className="mx-auto max-w-md text-center mb-4">
//           <h2 className="font-serif text-2xl font-bold sm:text-3xl">
//             Order ID <span className="text-gray-500"># {order.id}</span>
//           </h2>
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-1 lg:gap-4">
//           <article className="relative p-4 border rounded-lg shadow-md bg-white">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-bold">Order Status</h3>
//               <div className="flex items-center space-x-2">
//                 <p className={`text-sm ${order.orderStatus === 'OnDeliver' ? 'text-green-500' : 'text-red-500'}`}>
//                   {order.orderStatus}
//                 </p>
             
//               </div>
              
//             </div>
           
//             <div className="flex justify-between items-center mb-2">
//             {order.orderStatus !== 'CANCELLED' && (
//                   <button
//                     className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition-colors duration-200"
//                     onClick={handleCancel}
//                   >
//                     Cancel
//                   </button>
//                 )}
//               {/* <p className="text-sm text-gray-500">Estimated arrival: {order.estimatedArrival}</p> */}
//             </div>
//             <div className="flex items-center space-x-4 mt-4 overflow-x-auto scroll-smooth">
//               {order.items.map((item) => (
//                 <div key={item.id} className="flex flex-col items-center min-w-[200px]">
//                   <div className="aspect-square w-full overflow-hidden">
//                     <img
//                       src={item.product.image || "/_assets/image.png"}
//                       alt={item.product.name}
//                       className="group-hover:scale-110 h-full w-full object-cover transition-all duration-300 rounded-md"
//                     />
//                   </div>
//                   <p className="text-sm font-semibold text-center mt-2">{item.product.name}</p>
//                   <p className="text-sm text-center">
//                     $ {item.price.toLocaleString()} x {item.quantity}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <p className="mt-4 font-bold text-lg">Total: $ {order.totalAmount.toLocaleString()}</p>
//             {order.orderStatus === 'Cancelled' && (
//               <p className="mt-2 text-red-500 font-semibold">Order Cancelled</p>
//             )}
//           </article>
//         </div>
//       </div>
//     </section>
//   );
// };

// const OrderPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const userId = useSelector((state) => state.session.user?.id);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       if (!userId) return; 
//       try {
//         setLoading(true);
//         const data = await getOrderByUserId(userId);
//         setOrders(data.orders || []); 
//       } catch (err) {
//         setError(err?.message || "An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [userId]);

//   const handleCancelOrder = async (orderId) => {
//     try {
//     //   setLoading(true);
//       await cancelOrder(orderId);
//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order.id === orderId ? { ...order, orderStatus: 'Cancelled' } : order
//         )
//       );
//     } catch (err) {
//       setError(err?.message || "Failed to cancel order");
//     } finally {
//     //   setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div className="text-center text-lg">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center text-lg">Error: {error}</div>;
//   }

//   return (
//     <>
//     <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>

//     <div className="container mx-auto p-4 max-h-lvh overflow-y-scroll my-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//         {orders.map((order) => (
//           <OrderTile key={order.id} order={order} onCancel={handleCancelOrder} />
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default withAuth(OrderPage);
"use client";
"use client";
import React, { useState, useEffect } from "react";
import { getOrderByUserId, cancelOrder } from "../service/OrderService";
import { useSelector } from "react-redux";
import withAuth from "../_routeprotector/WithAuth";

const ProductTile = ({ product, onCancel, cancelLoading }) => {
  const handleCancel = () => {
    onCancel(product.orderId);
  };

  return (
    <div className="product-card p-5 bg-white rounded-lg shadow-lg mb-4">
      {/* Product Header */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Order ID: <span className="text-gray-500">#{product.orderId}</span>
          </h3>
          <p className="text-sm text-gray-500">
            Placed on: {new Date(product.createdAt).toLocaleDateString()}
          </p>
        </div>
        <p
          className={`font-semibold ${
            product.orderStatus === "OnDeliver"
              ? "text-green-600"
              : product.orderStatus === "CANCELLED"
              ? "text-red-600"
              : "text-gray-600"
          }`}
        >
          {product.orderStatus}
        </p>
      </div>

      {/* Product Details */}
      <div className="flex items-start space-x-4 mb-4">
        <img
          src={product.image || "/_assets/image.png"}
          alt={product.name}
          className="w-16 h-16 object-cover rounded-md border"
        />
        <div className="flex-1">
          <p className="text-sm font-semibold">{product.name}</p>
          <p className="text-sm text-gray-500">
            $ {product.price.toLocaleString()} x {product.quantity}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">Total: $ {product.totalAmount.toLocaleString()}</p>
        {product.orderStatus !== "CANCELLED" && (
          <button
            className={`px-4 py-2 text-white text-sm rounded ${
              cancelLoading === product.orderId
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
            onClick={handleCancel}
            disabled={cancelLoading === product.orderId}
          >
            {cancelLoading === product.orderId ? "Cancelling..." : "Cancel Order"}
          </button>
        )}
      </div>
    </div>
  );
};

const OrderPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cancelLoading, setCancelLoading] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const userId = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!userId) return;
      try {
        setLoading(true);
        const data = await getOrderByUserId(userId);
        console.log(data)
        // Flatten the items array
        const flattenedProducts = data.orders.flatMap((order) =>
          order.items.map((item) => ({
            ...item.product,
            price: item.price,
            quantity: item.quantity,
            totalAmount: order.totalAmount,
            orderStatus: order.orderStatus,
            orderId: order.id,
            createdAt: order.createdAt,
          }))
        );

        setProducts(flattenedProducts || []);
        setFilteredProducts(flattenedProducts || []);
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
      setCancelLoading(orderId);
      await cancelOrder(orderId);
      const updatedProducts = products.map((product) =>
        product.orderId === orderId
          ? { ...product, orderStatus: "CANCELLED" }
          : product
      );
      setProducts(updatedProducts);
      setFilteredProducts(
        updatedProducts.filter((product) =>
          product.name.toLowerCase().includes(searchQuery)
        )
      );
    } catch (err) {
      setError(err?.message || "Failed to cancel order");
    } finally {
      setCancelLoading(null);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center text-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Orders</h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for products in your orders"
          value={searchQuery}
          onChange={handleSearch}
          className="w-96 p-3 rounded-md border border-gray-300"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-xl font-semibold text-gray-500">
            No orders found.
          </div>
        ) : (
          filteredProducts.map((product, index) => (
            <ProductTile
              key={`${product.orderId}-${index}`}
              product={product}
              onCancel={handleCancelOrder}
              cancelLoading={cancelLoading}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default withAuth(OrderPage);
