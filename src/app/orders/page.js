"use client";
import React, { useState, useEffect } from "react";
import { getOrderByUserId, cancelOrder } from "../service/OrderService";
import { useSelector } from "react-redux";
import withAuth from "../_routeprotector/WithAuth";
import { useDispatch } from "react-redux";
import { setProductData } from "../_lib/utilReducer";
import { useRouter } from "next/navigation";

const ProductTile = ({ product, onCancel, cancelLoading }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNavigation = () => {
    dispatch(setProductData({ id: product.orderId }));
    router.push(`/product/${product.productName}`);
  };

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
            Placed on: {new Date(product.orderDate).toLocaleDateString()}
          </p>
        </div>
        <p
          className={`font-semibold ${
            product.status === "CONFIRMED"
              ? "text-green-600"
              : product.status === "CANCELLED"
              ? "text-red-600"
              : "text-gray-600"
          }`}
        >
          {product.status}
        </p>
      </div>

      {/* Product Details */}
      <div onClick={handleNavigation} className="flex items-start space-x-4 mb-4">
        <img
          src={product.image || "/_assets/image.png"}
          alt={product.productName}
          className="w-16 h-16 object-cover rounded-md border"
        />
        <div className="flex-1">
          <p className="text-sm font-semibold">{product.productName}</p>
          <p className="text-sm text-gray-500">
            $ {product.offerPrice.toLocaleString()} x {product.quantity}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">
          Total: $ {(product.offerPrice * product.quantity).toLocaleString()}
        </p>
        {product.status !== "CANCELLED" && (
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
        const response = await getOrderByUserId(userId);
        const data = response?.data;

        const flattenedProducts = data?.flatMap((order) =>
          order.items.map((item) => ({
            ...item,
            orderDate: order.orderDate,
            totalAmount: order.total,
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
          ? { ...product, status: "CANCELLED" }
          : product
      );
      setProducts(updatedProducts);
      setFilteredProducts(
        updatedProducts.filter((product) =>
          product.productName.toLowerCase().includes(searchQuery)
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
      product.productName.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center text-lg">Error: {error}</div>
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
  