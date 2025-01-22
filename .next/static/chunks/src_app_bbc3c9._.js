(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_bbc3c9._.js", {

"[project]/src/app/service/OrderService.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cancelOrder": (()=>cancelOrder),
    "checkOutOrder": (()=>checkOutOrder),
    "createOrder": (()=>createOrder),
    "getOrderByUserId": (()=>getOrderByUserId),
    "verifyPaymentAndUpdateOrder": (()=>verifyPaymentAndUpdateOrder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/axios.js [app-client] (ecmascript)");
;
const createOrder = async (userId, items)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/user/order/createOrder', {
            userId,
            items
        });
        return response.data;
    } catch (error) {
        console.error('Error creating order:', error);
        throw new Error(error?.response?.data?.message || 'Error creating order.');
    }
};
const verifyPaymentAndUpdateOrder = async (orderId, razorpayId, paymentId, paymentSignature)=>{
    console.log("order_id:", orderId);
    console.log("razorpayId:", razorpayId);
    console.log("paymentId:", paymentId);
    console.log("siign:", paymentSignature);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/user/order/verify', {}, {
            params: {
                orderId,
                razorpayId,
                paymentId,
                paymentSignature
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error verifying payment:', error);
        throw new Error(error?.response?.data?.message || 'Error verifying payment.');
    }
};
const checkOutOrder = async (orderId)=>{
    console.log("orderid:", orderId);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/user/order/checkoutOrder?orderId=${orderId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user orders:', error);
        throw new Error(error?.response?.data?.message || 'Error fetching user orders.');
    }
};
const getOrderByUserId = async (userId)=>{
    console.log("userId:", userId);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/user/order/getUserOrder?userId=${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user orders:', error);
        throw new Error(error?.response?.data?.message || 'Error fetching user orders.');
    }
};
const cancelOrder = async (orderId)=>{
    console.log(orderId);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/user/order/cancelOrder?orderId=${orderId}`);
        return response.data;
    } catch (error) {
        console.error('Error cancelling order:', error);
        throw new Error(error?.response?.data?.message || 'Error cancelling order.');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/checkout/Checkout.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// import React, { useState, useEffect } from 'react';
// import { createOrder, failedVerify, verifyPayment } from '../service/PaymentService';  
// import { checkOutOrder, getOrderById, verifyPaymentAndUpdateOrder } from '../service/OrderService';
// import { useRouter } from 'next/navigation';
// // const OrderSummary = ({ 
// //   title, 
// //   steps, 
// //   userId,
// //   orders,
// //   shippingMethods, 
// //   billingAddress,
// //   totalBill 
// // }) => {
// //     console.log(orders?.orders.id);
// //    const router=useRouter();
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [orderData, setOrderData] = useState(orders?.orders?.order?.items || orders.orders.items);
// //   console.log("orderData:", orders);
// //   useEffect(() => {
// //     const script = document.createElement('script');
// //     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
// //     script.onload = () => {
// //       // Now you can use Razorpay when the script is fully loaded
// //     };
// //     document.body.appendChild(script);
// //     return () => {
// //       document.body.removeChild(script); // Cleanup script when component unmounts
// //     };
// //   }, [userId]);
// //   const handleVerify = async (orderId,razorpay_order_id, razorpay_payment_id, razorpay_signature) => {
// //     console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature)
// //     try {
// //       const response = await verifyPaymentAndUpdateOrder(orderId,razorpay_order_id, razorpay_payment_id, razorpay_signature);
// //       return response;
// //       // Handle successful verification (e.g., redirect to confirmation page)
// //     } catch (err) {
// //       setError('Payment verification failed. Please try again.');
// //       console.error(err);
// //     }
// //   };
// //   const handlePayment = async () => {
// //     setLoading(true);
// //     setError(null); // Reset error state before starting payment
// //     try {
// //       const { razorpayOrder, ...data } = await checkOutOrder(orders?.orders?.order?.id||orders?.orders.id);
// //       console.log(razorpayOrder);
// //       const options = {
// //         key: 'rzp_test_nTbKdtgjeOQLhc', // Replace with your Razorpay Key
// //         amount: Math.ceil(totalBill * 100), // Amount in paise (multiply by 100)
// //         currency: razorpayOrder?.currency,
// //         name: 'Your Shop',
// //         description: 'Payment for your order',
// //         order_id: razorpayOrder?.id,
// //         handler: async function (response) {
// //           console.log(response);
// //           const { razorpay_payment_id, razorpay_signature, razorpay_order_id } = response;
// //           // Step 3: Verify the payment
// //           const verificationResult = await verifyPayment(orders?.orders?.order?.id||orders?.orders.id,razorpay_order_id, razorpay_payment_id, razorpay_signature);
// //           if (verificationResult.success) {
// //             const res=await handleVerify(orders?.orders?.order?.id||orders?.orders.id,razorpay_order_id, razorpay_payment_id, razorpay_signature);
// //             router.push(`/orders/success?dtrcpt=${encodeURIComponent(JSON.stringify(res?.order))}`);
// //           } else {
// //             setError('Payment verification failed. Please try again.');
// //           }
// //         },
// //         prefill: {
// //           name: 'Customer Name',
// //           email: 'customer@example.com',
// //           contact: '1234567890',
// //         },
// //         theme: {
// //           color: '#F37254',
// //         },
// //       };
// //       // Step 4: Instantiate Razorpay after script load
// //       const rzp = new window.Razorpay(options); // Use `window.Razorpay` since it's globally available after script load
// //       rzp.open();
// //     } catch (err) {
// //       setError('Payment process failed. Please try again.');
// //       console.error('Payment process failed:', err);
// //     } finally {
// //       setLoading(false); // Ensure loading state is reset
// //     }
// //   };
// //   return (
// //     <div>
// //       {/* Error Message */}
// //       {error && <div className="bg-red-500 text-white p-4 rounded mb-4">{error}</div>}
// //       {/* Order summary and steps layout */}
// //       <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
// //         <a href="#" className="text-2xl font-bold text-gray-800">{title}</a>
// //         <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
// //           <div className="relative">
// //             <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
// //               {steps.map((step, index) => (
// //                 <li key={index} className="flex items-center space-x-3 text-left sm:space-x-4">
// //                   <a className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${step.active ? 'bg-emerald-200 text-emerald-700' : 'bg-gray-600 text-white'}`} href={step.href}>
// //                     {step.icon ? (
// //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
// //                         <path strokeLinecap="round" strokeLinejoin="round" d={step.iconPath} />
// //                       </svg>
// //                     ) : step.number}
// //                   </a>
// //                   <span className={`font-semibold ${step.active ? 'text-gray-900' : 'text-gray-500'}`}>{step.label}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Order items and total */}
// //       <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 m-10">
// //         <div className="px-4 pt-8">
// //           <p className="text-xl font-medium">Order Summary</p>
// //           <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
// //           {/* Order items display */}
// //           <div className="mt-8 space-y-2 max-h-96 overflow-y-scroll rounded-lg border bg-white px-2 py-4 sm:px-6">
// //             {orderData?.map((orderItem, index) => (
// //               <div key={index} className="flex flex-col rounded-lg bg-white sm:flex-row">
// //                 <img
// //                   className="m-2 h-24 w-28 rounded-md border object-cover object-center"
// //                   src={orderItem.product?.image || "/_assets/image.png"}
// //                   alt={orderItem.product?.name || "Product Image"}
// //                 />
// //                 <div className="flex w-full flex-col px-4 py-4">
// //                   <span className="font-semibold">{orderItem?.product.name || "Product Name"}</span>
// //                   <span className="float-right text-gray-400">
// //                     {orderItem.product?.description || "No description available."}
// //                   </span>
// //                   <span className="float-right text-gray-400">
// //                     {"Quantity: " + (orderItem.quantity || 1)}
// //                   </span>
// //                   <p className="text-lg font-bold">
// //                     {"$" + (orderItem.product?.offerPrice || "0.00")}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <p className="text-lg p-2">{"Total Bill: $" + totalBill}</p>
// //           {/* Shipping Methods */}
// //           <p className="mt-8 text-lg font-medium">Shipping Methods</p>
// //           <form className="mt-5 grid gap-6">
// //             {shippingMethods.map((method, index) => (
// //               <div key={index} className="relative">
// //                 <input className="peer hidden" id={`radio_${index}`} type="radio" name="radio" defaultChecked={method.defaultChecked} />
// //                 <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
// //                 <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor={`radio_${index}`}>
// //                   <img className="w-14 object-contain" src={method.image} alt={method.name} />
// //                   <div className="ml-5">
// //                     <span className="mt-2 font-semibold">{method.name}</span>
// //                     <p className="text-slate-500 text-sm leading-6">{method.description}</p>
// //                   </div>
// //                 </label>
// //               </div>
// //             ))}
// //           </form>
// //         </div>
// //         {/* Billing Address */}
// //         <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
// //           <p className="text-xl font-medium">Address Details</p>
// //           <p className="text-gray-400">Complete your order by providing your delivery address.</p>
// //           {/* Billing Address Form */}
// //           <div>
// //             <label htmlFor="full-name" className="mt-4 mb-2 block text-sm font-medium">Full Name</label>
// //             <input type="text" id="full-name" name="full-name" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="John Doe" />
// //             <label htmlFor="street-address" className="mt-4 mb-2 block text-sm font-medium">Street Address</label>
// //             <input type="text" id="street-address" name="street-address" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="123 Main St" />
// //             <div className="flex mt-4">
// //               <div className="w-1/2 pr-2">
// //                 <label htmlFor="city" className="mb-2 block text-sm font-medium">City</label>
// //                 <input type="text" id="city" name="city" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="City" />
// //               </div>
// //               <div className="w-1/2 pl-2">
// //                 <label htmlFor="state" className="mb-2 block text-sm font-medium">State</label>
// //                 <select name="state" id="state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
// //                   <option value="State">Select State</option>
// //                   {billingAddress.states.map((state, index) => (
// //                     <option key={index} value={state}>{state}</option>
// //                   ))}
// //                 </select>
// //               </div>
// //             </div>
// //             <div className="flex mt-4">
// //               <div className="w-1/2 pr-2">
// //                 <label htmlFor="zip" className="mb-2 block text-sm font-medium">ZIP Code</label>
// //                 <input type="text" id="zip" name="zip" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP Code" />
// //               </div>
// //               <div className="w-1/2 pl-2">
// //                 <label htmlFor="country" className="mb-2 block text-sm font-medium">Country</label>
// //                 <select name="country" id="country" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
// //                   <option value="Country">Select Country</option>
// //                   {billingAddress.countries.map((country, index) => (
// //                     <option key={index} value={country}>{country}</option>
// //                   ))}
// //                 </select>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Payment Button */}
// //       <div className="py-5 sm:px-6">
// //         <button onClick={handlePayment} className="w-full rounded-md bg-green-500 text-white py-3 text-xl hover:bg-green-700">
// //           {loading ? 'Processing Payment...' : 'Pay Now'}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };
// // export default OrderSummary;
// const OrderSummary = ({ 
//   title, 
//   steps, 
//   userId,
//   orders,
//   shippingMethods, 
//   billingAddress,
//   totalBill 
// }) => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [orderData, setOrderData] = useState(orders?.orders?.order?.items || orders?.orders?.items);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     streetAddress: '',
//     city: '',
//     state: '',
//     zip: '',
//     country: '',
//   });
//   const [isFormValid, setIsFormValid] = useState(false);
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.onload = () => {};
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [userId]);
//   const validateForm = () => {
//     const { fullName, streetAddress, city, state, zip, country } = formData;
//     const isValid = fullName && streetAddress && city && state && zip && country;
//     setIsFormValid(isValid);
//   };
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const handleVerify = async (orderId,razorpay_order_id, razorpay_payment_id, razorpay_signature) => {
//     console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature)
//     try {
//       const response = await verifyPaymentAndUpdateOrder(orderId,razorpay_order_id, razorpay_payment_id, razorpay_signature);
//       return response;
//     } catch (err) {
//       setError('Payment verification failed. Please try again.');
//       console.error(JSON.stringify(err));
//     }
//   };
//   const handlePayment = async () => {
//     if (!isFormValid) {
//       setError('Please fill all the required fields.');
//       return;
//     }
//     setLoading(true);
//     setError(null);
//     try {
//       const { razorpayOrder, ...data } = await checkOutOrder(orders?.orders?.order?.id || orders?.orders.id);
//       const options = {
//         key: 'rzp_test_nTbKdtgjeOQLhc',
//         amount: Math.ceil(totalBill * 100),
//         currency: razorpayOrder?.currency,
//         name: 'Your Shop',
//         description: 'Payment for your order',
//         order_id: razorpayOrder?.id,
//         handler: async function (response) {
//           const { razorpay_payment_id, razorpay_signature, razorpay_order_id } = response;
//         //   const verificationResult = await verifyPayment(orders?.orders?.order?.id || orders?.orders.id, razorpay_order_id, razorpay_payment_id, razorpay_signature);
//         const verificationResult = await handleVerify(orders?.orders?.order?.id || orders?.orders.id, razorpay_order_id, razorpay_payment_id, razorpay_signature);
//           if (verificationResult.success) {
//             router.push(`/orders/success?dtrcpt=${encodeURIComponent(JSON.stringify(verificationResult?.order))}`);
//           } else {
//             console.log("failed");
//             await failedVerify(orders?.orders?.order?.id || orders?.orders.id);
//             setError('Payment verification failed. Please try again.');
//           }
//         },
//         prefill: {
//           name: formData.fullName,
//           email: 'customer@example.com',
//           contact: '1234567890',
//         },
//         theme: {
//           color: '#F37254',
//         },
//       };
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       setError('Payment process failed. Please try again.');
//       console.error('Payment process failed:', err);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div>
//       {error && <div className="bg-red-500 text-white p-4 rounded mb-4">{error}</div>}
//       {/* Order summary and steps layout */}
//       <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
//         <a href="#" className="text-2xl font-bold text-gray-800">{title}</a>
//         <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
//           <div className="relative">
//             <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
//               {steps.map((step, index) => (
//                 <li key={index} className="flex items-center space-x-3 text-left sm:space-x-4">
//                   <a className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${step.active ? 'bg-emerald-200 text-emerald-700' : 'bg-gray-600 text-white'}`} href={step.href}>
//                     {step.icon ? (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                         <path strokeLinecap="round" strokeLinejoin="round" d={step.iconPath} />
//                       </svg>
//                     ) : step.number}
//                   </a>
//                   <span className={`font-semibold ${step.active ? 'text-gray-900' : 'text-gray-500'}`}>{step.label}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       {/* Order items and total */}
//       <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 m-10">
//         <div className="px-4 pt-8">
//           <p className="text-xl font-medium">Order Summary</p>
//           <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
//           <div className="mt-8 space-y-2 max-h-96 overflow-y-scroll rounded-lg border bg-white px-2 py-4 sm:px-6">
//             {orderData?.map((orderItem, index) => (
//               <div key={index} className="flex flex-col rounded-lg bg-white sm:flex-row">
//                 <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={orderItem.product?.image || "/_assets/image.png"} alt={orderItem.product?.name || "Product Image"} />
//                 <div className="flex w-full flex-col px-4 py-4">
//                   <span className="font-semibold">{orderItem?.product.name || "Product Name"}</span>
//                   <span className="float-right text-gray-400">{orderItem.product?.description || "No description available."}</span>
//                   <span className="float-right text-gray-400">{"Quantity: " + (orderItem.quantity || 1)}</span>
//                   <p className="text-lg font-bold">{"$" + (orderItem.product?.offerPrice || "0.00")}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <p className="text-lg p-2">{"Total Bill: $" + totalBill}</p>
//           {/* Shipping Methods */}
//           <p className="mt-8 text-lg font-medium">Shipping Methods</p>
//           <form className="mt-5 grid gap-6">
//             {shippingMethods.map((method, index) => (
//               <div key={index} className="relative">
//                 <input className="peer hidden" id={`radio_${index}`} type="radio" name="radio" defaultChecked={method.defaultChecked} />
//                 <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
//                 <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor={`radio_${index}`}>
//                   <img className="w-14 object-contain" src={method.image} alt={method.name} />
//                   <div className="ml-5">
//                     <span className="mt-2 font-semibold">{method.name}</span>
//                     <p className="text-slate-500 text-sm leading-6">{method.description}</p>
//                   </div>
//                 </label>
//               </div>
//             ))}
//           </form>
//         </div>
//         {/* Billing Address */}
//         <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
//           <p className="text-xl font-medium">Address Details</p>
//           <p className="text-gray-400">Complete your order by providing your delivery address.</p>
//           <div>
//             <label htmlFor="full-name" className="mt-4 mb-2 block text-sm font-medium">Full Name</label>
//             <input type="text" id="full-name" name="fullName" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="John Doe" value={formData.fullName} onChange={handleInputChange} onBlur={validateForm} />
//             <label htmlFor="street-address" className="mt-4 mb-2 block text-sm font-medium">Street Address</label>
//             <input type="text" id="street-address" name="streetAddress" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="123 Main St" value={formData.streetAddress} onChange={handleInputChange} onBlur={validateForm} />
//             <label htmlFor="city" className="mt-4 mb-2 block text-sm font-medium">City</label>
//             <input type="text" id="city" name="city" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Los Angeles" value={formData.city} onChange={handleInputChange} onBlur={validateForm} />
//             <label htmlFor="state" className="mt-4 mb-2 block text-sm font-medium">State/Province</label>
//             <input type="text" id="state" name="state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="California" value={formData.state} onChange={handleInputChange} onBlur={validateForm} />
//             <label htmlFor="zip" className="mt-4 mb-2 block text-sm font-medium">ZIP/Postal Code</label>
//             <input type="text" id="zip" name="zip" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="90001" value={formData.zip} onChange={handleInputChange} onBlur={validateForm} />
//             <label htmlFor="country" className="mt-4 mb-2 block text-sm font-medium">Country</label>
//             <input type="text" id="country" name="country" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="United States" value={formData.country} onChange={handleInputChange} onBlur={validateForm} />
//           </div>
//         </div>
//       </div>
//       {/* Payment Button */}
//       <div className="mt-10 text-center">
//         <button className={`w-3/4 rounded-lg ${loading ? 'bg-gray-500' : 'bg-gray-900'} p-4 text-sm font-medium text-white`} disabled={loading} onClick={handlePayment}>
//           {loading ? 'Processing...' : 'Proceed to Payment'}
//         </button>
//       </div>
//     </div>
//   );
// };
// export default OrderSummary;
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/service/OrderService.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const OrderSummary = ({ title, steps, userId, orders, shippingMethods, totalBill, existingAddresses = [] })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orderData, setOrderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(orders?.orders?.order?.items || orders?.orders?.items);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });
    const [isFormValid, setIsFormValid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [useExistingAddress, setUseExistingAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAddress, setSelectedAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderSummary.useEffect": ()=>{
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = ({
                "OrderSummary.useEffect": ()=>{}
            })["OrderSummary.useEffect"];
            document.body.appendChild(script);
            return ({
                "OrderSummary.useEffect": ()=>{
                    document.body.removeChild(script);
                }
            })["OrderSummary.useEffect"];
        }
    }["OrderSummary.useEffect"], [
        userId
    ]);
    const validateForm = ()=>{
        if (useExistingAddress && selectedAddress) {
            setIsFormValid(true);
        } else {
            const { fullName, streetAddress, city, state, zip, country } = formData;
            setIsFormValid(fullName && streetAddress && city && state && zip && country);
        }
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({
                ...prevData,
                [name]: value
            }));
        validateForm();
    };
    const handleAddressToggle = ()=>{
        setUseExistingAddress(!useExistingAddress);
        if (useExistingAddress) {
            setFormData({
                fullName: '',
                streetAddress: '',
                city: '',
                state: '',
                zip: '',
                country: ''
            });
        } else if (selectedAddress) {
            setFormData(selectedAddress);
        }
        validateForm();
    };
    const handleAddressSelect = (e)=>{
        const addressId = e.target.value;
        const address = existingAddresses.find((addr)=>addr.id === addressId);
        setSelectedAddress(address);
        setFormData(address);
        validateForm();
    };
    const handleVerify = async (orderId, razorpay_order_id, razorpay_payment_id, razorpay_signature)=>{
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyPaymentAndUpdateOrder"])(orderId, razorpay_order_id, razorpay_payment_id, razorpay_signature);
            return response;
        } catch (err) {
            setError('Payment verification failed. Please try again.');
            console.error(JSON.stringify(err));
        }
    };
    const handlePayment = async ()=>{
        if (!isFormValid) {
            setError('Please fill all the required fields.');
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const { razorpayOrder } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkOutOrder"])(orders?.orders?.order?.id || orders?.orders.id);
            const options = {
                key: 'rzp_test_nTbKdtgjeOQLhc',
                amount: Math.ceil(totalBill * 100),
                currency: razorpayOrder?.currency,
                name: 'Your Shop',
                description: 'Payment for your order',
                order_id: razorpayOrder?.id,
                handler: async function(response) {
                    const { razorpay_payment_id, razorpay_signature, razorpay_order_id } = response;
                    const verificationResult = await handleVerify(orders?.orders?.order?.id || orders?.orders.id, razorpay_order_id, razorpay_payment_id, razorpay_signature);
                    if (verificationResult.success) {
                        router.push(`/orders/success?dtrcpt=${encodeURIComponent(JSON.stringify(verificationResult?.order))}`);
                    } else {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["failedVerify"])(orders?.orders?.order?.id || orders?.orders.id);
                        setError('Payment verification failed. Please try again.');
                    }
                },
                prefill: {
                    name: formData.fullName,
                    email: 'customer@example.com',
                    contact: '1234567890'
                },
                theme: {
                    color: '#F37254'
                }
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (err) {
            setError('Payment process failed. Please try again.');
            console.error('Payment process failed:', err);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-500 text-white p-4 rounded mb-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/Checkout.js",
                lineNumber: 581,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "text-2xl font-bold text-gray-800",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 583,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "relative flex w-full items-center justify-between space-x-2 sm:space-x-4",
                                children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center space-x-3 text-left sm:space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: `flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${step.active ? 'bg-emerald-200 text-emerald-700' : 'bg-gray-600 text-white'}`,
                                                href: step.href,
                                                children: step.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-4 w-4",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: step.iconPath
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 592,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                                    lineNumber: 591,
                                                    columnNumber: 23
                                                }, this) : step.number
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 589,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-semibold ${step.active ? 'text-gray-900' : 'text-gray-500'}`,
                                                children: step.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 596,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 588,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 586,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/checkout/Checkout.js",
                            lineNumber: 585,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 584,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/Checkout.js",
                lineNumber: 582,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 m-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-medium",
                                children: "Order Summary"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 606,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400",
                                children: "Check your items. And select a suitable shipping method."
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 607,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 space-y-2 max-h-96 overflow-y-scroll rounded-lg border bg-white px-2 py-4 sm:px-6",
                                children: orderData?.map((orderItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col rounded-lg bg-white sm:flex-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "m-2 h-24 w-28 rounded-md border object-cover object-center",
                                                src: orderItem.product?.image || "/_assets/image.png",
                                                alt: orderItem.product?.name || "Product Image"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 611,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex w-full flex-col px-4 py-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: orderItem?.product.name || "Product Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 613,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "float-right text-gray-400",
                                                        children: orderItem.product?.description || "No description available."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 614,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "float-right text-gray-400",
                                                        children: "Quantity: " + (orderItem.quantity || 1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 615,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-bold",
                                                        children: "$" + (orderItem.product?.offerPrice || "0.00")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 616,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 612,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 610,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 608,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg p-2",
                                children: "Total Bill: $" + totalBill
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 622,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-8 text-lg font-medium",
                                children: "Shipping Methods"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 624,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "mt-5 grid gap-6",
                                children: shippingMethods.map((method, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "peer hidden",
                                                id: `radio_${index}`,
                                                type: "radio",
                                                name: "radio",
                                                defaultChecked: method.defaultChecked
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 628,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 629,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4",
                                                htmlFor: `radio_${index}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "w-14 object-contain",
                                                        src: method.image,
                                                        alt: method.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 631,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ml-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-2 font-semibold",
                                                                children: method.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                                lineNumber: 633,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-500 text-sm leading-6",
                                                                children: method.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                                lineNumber: 634,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 632,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 630,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 627,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 625,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 605,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 bg-gray-50 px-4 pt-8 lg:mt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-medium",
                                children: "Payment Details"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 643,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400",
                                children: "Complete your order by providing your payment details."
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 644,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 flex flex-col sm:flex-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-medium text-sm text-gray-700",
                                                children: "Billing Address"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 647,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-auto flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "use-existing-address",
                                                        type: "checkbox",
                                                        className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500",
                                                        checked: useExistingAddress,
                                                        onChange: handleAddressToggle
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 649,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "use-existing-address",
                                                        className: "ml-2 text-sm text-gray-600",
                                                        children: "Use existing address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 650,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 648,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 646,
                                        columnNumber: 13
                                    }, this),
                                    useExistingAddress ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        onChange: handleAddressSelect,
                                        className: "mt-1 block w-full rounded-md border-gray-300 bg-white py-2 px-3 text-base leading-6 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select an existing address"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 656,
                                                columnNumber: 17
                                            }, this),
                                            existingAddresses.map((address)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: address.id,
                                                    children: `${address.fullName}, ${address.streetAddress}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}`
                                                }, address.id, false, {
                                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                                    lineNumber: 658,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 655,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2",
                                        children: [
                                            'fullName',
                                            'streetAddress',
                                            'city',
                                            'state',
                                            'zip',
                                            'country'
                                        ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: field,
                                                placeholder: field.charAt(0).toUpperCase() + field.slice(1),
                                                value: formData[field],
                                                onChange: handleInputChange,
                                                className: "w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                            }, field, false, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 664,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 662,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handlePayment,
                                        disabled: !isFormValid || loading,
                                        className: `mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`,
                                        children: loading ? 'Processing...' : 'Pay Now'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 677,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 645,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 642,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/Checkout.js",
                lineNumber: 604,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/Checkout.js",
        lineNumber: 580,
        columnNumber: 5
    }, this);
};
_s(OrderSummary, "bKWc+dahTLI0kGRoX1fLDG6QR+4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OrderSummary;
const __TURBOPACK__default__export__ = OrderSummary;
var _c;
__turbopack_refresh__.register(_c, "OrderSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/service/UserCartService.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function UserCartService() {
    _s();
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "UserCartService.useSelector[token]": (state)=>state.session.token
    }["UserCartService.useSelector[token]"]);
    const cartKey = 'shopflow';
    const getHeaders = ()=>({
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        });
    this.loadCart = function() {
        const storedCart = localStorage.getItem(cartKey);
        return storedCart ? JSON.parse(storedCart) : [];
    };
    this.saveCart = function(cart) {
        localStorage.setItem(cartKey, JSON.stringify(cart));
    };
    this.migrateCart = async function(userId) {
        const guestCart = this.loadCart();
        if (guestCart.length > 0) {
            for (const item of guestCart){
                try {
                    await this.addItemToCart(userId, item.productId, item.quantity);
                } catch (error) {
                    console.error('Error migrating cart item:', error);
                }
            }
            this.clearCart();
        }
    };
    this.addItemToCart = async function(userId, productId, quantity = 1) {
        console.log(userId);
        console.log(productId);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(// `/user/cart/addItemToCart?userId=${userId}&productId==${userId}4&quantity=${quantity}`, 
            `/user/cart/addItemToCart`, {}, {
                params: {
                    userId,
                    productId,
                    quantity
                },
                headers: getHeaders()
            });
            return response.data;
        } catch (error) {
            console.error('Error adding item to cart:', error);
            throw error.response ? error.response.data : new Error('Network or server error');
        }
    };
    this.viewCart = async function(userId) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/user/cart/viewCart', {
                params: {
                    userId
                },
                headers: getHeaders()
            });
            if (response.status === 200) {
                return response.data.data || [];
            } else {
                throw new Error(response.data.message || 'Failed to retrieve cart');
            }
        } catch (error) {
            console.error('Error viewing cart:', error);
            throw error.response ? error.response.data : new Error('Network or server error');
        }
    };
    this.deleteFromCart = async function(userId, productId) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].delete('/user/cart/deleteFromCart', {
                params: {
                    userId,
                    productId
                },
                headers: getHeaders()
            });
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error(response.data.message || 'Failed to delete item from cart');
            }
        } catch (error) {
            console.error('Error deleting item from cart:', error);
            throw error.response ? error.response.data : new Error('Network or server error');
        }
    };
    this.updateCartCount = async function(userId, productId, operation) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put('/user/cart/cartCount', {}, {
                params: {
                    userId,
                    productId,
                    operation
                },
                headers: getHeaders()
            });
            console.log(response.status);
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error(response.data || 'Failed to update cart count');
            }
        } catch (error) {
            console.error('Error updating cart count:', error);
            throw error;
        }
    };
    this.clearCart = function() {
        localStorage.removeItem(cartKey);
    };
}
_s(UserCartService, "bD5+gKbiITcJRDYAIJK4ZSEgato=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = UserCartService;
const __TURBOPACK__default__export__ = UserCartService;
var _c;
__turbopack_refresh__.register(_c, "UserCartService");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/_routeprotector/WithAuth.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
;
;
;
const withAuth = (WrappedComponent)=>{
    var _s = __turbopack_refresh__.signature();
    return _s((props)=>{
        _s();
        const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
        const isLoggedIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
            "withAuth.useSelector[isLoggedIn]": (state)=>state.session.user
        }["withAuth.useSelector[isLoggedIn]"]);
        const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // Add a loading state
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "withAuth.useEffect": ()=>{
                if (isLoggedIn !== undefined) {
                    setLoading(false);
                }
            }
        }["withAuth.useEffect"], [
            isLoggedIn
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "withAuth.useEffect": ()=>{
                if (!loading && !isLoggedIn) {
                    router.push('/auth');
                }
            }
        }["withAuth.useEffect"], [
            loading,
            isLoggedIn,
            router
        ]);
        if (loading) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading......."
            }, void 0, false, {
                fileName: "[project]/src/app/_routeprotector/WithAuth.js",
                lineNumber: 24,
                columnNumber: 14
            }, this);
        }
        return isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WrappedComponent, {
            ...props
        }, void 0, false, {
            fileName: "[project]/src/app/_routeprotector/WithAuth.js",
            lineNumber: 27,
            columnNumber: 25
        }, this) : null;
    }, "v92IOJfwe7W8oEfFynXpFVxiNds=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
        ];
    });
};
const __TURBOPACK__default__export__ = withAuth;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/checkout/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$checkout$2f$Checkout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/checkout/Checkout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserCartService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/service/UserCartService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_routeprotector$2f$WithAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_routeprotector/WithAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const fieldData = {
    title: "Order Summary",
    steps: [
        {
            number: 1,
            label: "Cart",
            active: true,
            href: "#",
            icon: null,
            iconPath: ""
        },
        {
            number: 2,
            label: "Shipping",
            active: false,
            href: "#",
            icon: null,
            iconPath: ""
        },
        {
            number: 3,
            label: "Payment",
            active: false,
            href: "#",
            icon: null,
            iconPath: ""
        }
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
        states: [
            "California",
            "Texas",
            "New York"
        ],
        countries: [
            "USA",
            "Canada",
            "UK"
        ]
    }
};
function Page() {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const userCartService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserCartService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Page.useSelector[userId]": (state)=>state.session.user?.id
    }["Page.useSelector[userId]"]);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const orders = JSON.parse(searchParams.get('data')) || [];
    const fetchProducts = async ()=>{
        if (!userId) return;
        try {
            const response = await userCartService.viewCart(userId);
            console.log(response);
            const productData = response;
            setProducts(productData);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (userId) {
                fetchProducts();
            }
        }
    }["Page.useEffect"], [
        userId
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/page.js",
            lineNumber: 68,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$checkout$2f$Checkout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: fieldData.title,
        steps: fieldData.steps,
        data: products.items,
        userId: userId,
        orders: orders,
        totalBill: products.totalAmount,
        shippingMethods: fieldData.shippingMethods,
        billingAddress: fieldData.billingAddress
    }, void 0, false, {
        fileName: "[project]/src/app/checkout/page.js",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(Page, "mX95gUcTn8V5OpyzMcXXpSVUJig=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Page;
const __TURBOPACK__default__export__ = _c1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_routeprotector$2f$WithAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Page);
var _c, _c1;
__turbopack_refresh__.register(_c, "Page");
__turbopack_refresh__.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/checkout/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_bbc3c9._.js.map