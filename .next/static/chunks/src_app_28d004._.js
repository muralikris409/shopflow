(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_28d004._.js", {

"[project]/src/app/service/PaymentService.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createOrder": (()=>createOrder),
    "failedVerify": (()=>failedVerify),
    "verifyPayment": (()=>verifyPayment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/axios.js [app-client] (ecmascript)");
;
const createOrder = async (userId, items)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post("user/order/createOrder", {
            userId,
            items
        });
        console.log(response);
        if (response.status !== 201) {
            throw new Error("Error creating order");
        }
        return response.data; // Return the response data directly
    } catch (error) {
        console.error("Error in createOrder:", error);
        throw error;
    }
};
const verifyPayment = async (orderId, razorpayId, paymentId, paymentSignature)=>{
    console.log(orderId);
    console.log(paymentId);
    console.log(paymentSignature);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post("user/order/verify", {}, {
            params: {
                razorpayId,
                orderId,
                paymentId,
                paymentSignature
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error in verifyPayment:", error);
        throw error;
    }
};
const failedVerify = async (orderId)=>{
    console.log("orderid:", orderId);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/user/order/failedVerify?orderId=${orderId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user orders:', error);
        throw new Error(error?.response?.data?.message || 'Error fetching user orders.');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/service/OrderService.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cancelOrder": (()=>cancelOrder),
    "checkOutOrder": (()=>checkOutOrder),
    "createOrder": (()=>createOrder),
    "getOrderById": (()=>getOrderById),
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
const getOrderById = async (orderId)=>{
    console.log("userId:", orderId);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/user/order/getOrderById?orderId=${orderId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching user orders:', error);
        throw new Error(error?.response?.data?.message || 'Error fetching user orders.');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/service/UserService.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addAddress": (()=>addAddress),
    "fetchUserAddresses": (()=>fetchUserAddresses),
    "forgotPassword": (()=>forgotPassword),
    "getProfileInfo": (()=>getProfileInfo),
    "googleOAuth": (()=>googleOAuth),
    "login": (()=>login),
    "makeAddressPrimary": (()=>makeAddressPrimary),
    "removeAddress": (()=>removeAddress),
    "resetPassword": (()=>resetPassword),
    "signUp": (()=>signUp),
    "updateAddress": (()=>updateAddress),
    "updateProfileInfo": (()=>updateProfileInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/axios.js [app-client] (ecmascript)");
;
async function login(formdata) {
    const { email, password } = formdata;
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post("user/login", {
            email: email,
            password: password
        });
        const { token, data } = response.data;
        localStorage.setItem("shopflow_session", JSON.stringify({
            user: data,
            token
        }));
        return {
            data,
            token
        };
    } catch (error) {
        throw new Error(error.response.data.message || "An error occurred during login.");
    }
}
async function signUp(formdata) {
    const { username: name, email, password } = formdata;
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post("user/signup", {
            name,
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || "An error occurred during sign-up.");
    }
}
async function googleOAuth(data) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post("user/oauth", {
            name: data.name,
            email: data.email,
            image: data.image,
            id: data.id
        });
        const { token, data: user } = response.data;
        localStorage.setItem("shopflow_session", JSON.stringify({
            user: user,
            token
        }));
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || "An error occurred during Google OAuth.");
    }
}
async function forgotPassword(email) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`user/forgotPassword?email=${email}`);
        console.log(response);
        if (response.status === 200) {
            return {
                ok: true,
                data: response.data
            };
        }
        return {
            ok: false,
            message: response.data?.message || "Something went wrong."
        };
    } catch (err) {
        console.log(err);
        throw err;
    }
}
async function resetPassword(token, password) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`user/resetPassword?token=${token}&newPassword=${password}`);
        return response;
        "TURBOPACK unreachable";
    } catch (err) {
        console.log(err);
    }
}
async function getProfileInfo(token, userId) {
    try {
        console.log("test");
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`user/userProfileInfo?userId=${userId}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
    }
}
async function updateProfileInfo(token, userId, data) {
    try {
        console.log("test");
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`user/updateUserProfile?userId=${userId}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
    }
}
async function fetchUserAddresses(token, userId) {
    try {
        console.log("token", token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`user/getAllAddress?userId=${userId}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error fetching addresses:", error);
        return {
            error: error.message || "Something went wrong!"
        };
    }
}
;
const makeAddressPrimary = async (token, userId, addressId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`user/makePrimaryAddress`, {}, {
            params: {
                userId,
                addressId
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error fetching addresses:", error);
        return {
            error: error.message || "Something went wrong!"
        };
    }
};
const addAddress = async (token, userId, addressData)=>{
    try {
        const { street, city, state, country, zip, isPrimary } = addressData;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('user/addAddress', {}, {
            params: {
                userId,
                street,
                city,
                state,
                country,
                zip,
                isPrimary
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error adding address:", error);
        return {
            error: error.response?.data?.message || "Something went wrong!"
        };
    }
};
const updateAddress = async (token, userId, addressId, addressData)=>{
    try {
        const { street, city, state, country, zip, isPrimary } = addressData;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('user/editAddress', {}, {
            params: {
                userId,
                addressId,
                street,
                city,
                state,
                country,
                zip,
                isPrimary
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error adding address:", error);
        return {
            error: error.response?.data?.message || "Something went wrong!"
        };
    }
};
const removeAddress = async (token, userId, addressId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('user/deleteAddress', {}, {
            params: {
                userId,
                addressId
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error adding address:", error);
        return {
            error: error.response?.data?.message || "Something went wrong!"
        };
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
// const OrderSummary = ({ 
//   title, 
//   userId,
//   orders,
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
//   const [formErrors, setFormErrors] = useState({});
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [userId]);
//   const validateField = (name, value) => {
//     let error = '';
//     if (!value.trim()) {
//       error = `${name.replace(/([A-Z])/g, ' $1')} is required.`;
//     } else {
//       switch (name) {
//         case 'zip':
//           if (!/^[0-9]{5,6}$/.test(value)) {
//             error = 'ZIP code must be 5-6 digits.';
//           }
//           break;
//         case 'fullName':
//           if (value.length < 3) {
//             error = 'Full Name must be at least 3 characters long.';
//           }
//           break;
//         default:
//           break;
//       }
//     }
//     setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
//     return !error;
//   };
//   const validateForm = () => {
//     const fields = Object.keys(formData);
//     let isValid = true;
//     fields.forEach((field) => {
//       const valid = validateField(field, formData[field]);
//       if (!valid) isValid = false;
//     });
//     return isValid;
//   };
//   const handleSuccess=()=>{
//     router.push(`/orders/success`);
//   }
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     validateField(name, value);
//   };
//   const handlePayment = async () => {
//     if (!validateForm()) {
//       setError('Please fix the highlighted errors before proceeding.');
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
//           try {
//             const verificationResult = await verifyPaymentAndUpdateOrder(
//               orders?.orders?.order?.id || orders?.orders.id,
//               razorpay_order_id,
//               razorpay_payment_id,
//               razorpay_signature
//             );
//             if (verificationResult.success) {
//               handleSuccess();
//             } else {
//               await failedVerify(orders?.orders?.order?.id || orders?.orders.id);
//               setError('Payment verification failed. Please try again.');
//             }
//           } catch (error) {
//             setError('An unexpected error occurred during verification. Please try again.');
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
//         modal: {
//           ondismiss: async () => {
//             try {
//               // await failedVerify(orders?.orders?.order?.id || orders?.orders.id);
//               setError('Payment was cancelled by the user. Please try again.');
//             } catch (error) {
//               setError('An error occurred while handling payment cancellation. Please contact support.');
//             }
//           },
//         },
//       };
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       setError('Payment process failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="bg-gray-100">
//       {error && <div className="bg-red-500 text-white p-4 rounded mb-4">{error}</div>}
//       <div className="p-6 shadow-md bg-white">
//         <h1 className="text-xl font-semibold">{title}</h1>
//         <div className="mt-4 grid lg:grid-cols-12 gap-4">
//           <div className="lg:col-span-7 bg-white p-4 shadow-sm rounded">
//             <h2 className="text-lg font-medium mb-4">Delivery Address</h2>
//             {Object.keys(formData)?.map((key) => (
//               <div key={key} className="mb-3">
//                 <label className="block text-sm font-medium capitalize" htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')}</label>
//                 <input
//                   type="text"
//                   id={key}
//                   name={key}
//                   className={`w-full rounded border p-2 text-sm ${formErrors[key] ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-400`}
//                   placeholder={`Enter ${key}`}
//                   value={formData[key]}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors[key] && <p className="text-sm text-red-500 mt-1">{formErrors[key]}</p>}
//               </div>
//             ))}
//           </div>
//           <div className="lg:col-span-5 bg-white p-4 shadow-sm rounded">
//             <h2 className="text-lg font-medium mb-4">Order Summary</h2>
//             {orderData?.map((item, index) => (
//               <div key={index} className="flex items-center mb-4">
//                 <img
//                   className="w-20 h-20 object-cover rounded border"
//                   src={item.product?.image || '/_assets/image.png'}
//                   alt={item.product?.name}
//                 />
//                 <div className="ml-4">
//                   <h3 className="text-sm font-medium">{item.product?.name}</h3>
//                   <p className="text-sm text-gray-500">{item.product?.description}</p>
//                   <p className="text-sm font-bold">${item.product?.offerPrice}</p>
//                 </div>
//               </div>
//             ))}
//             <div className="border-t pt-4">
//               <p className="font-medium text-lg">Total: ${totalBill}</p>
//             </div>
//           </div>
//         </div>
//         <div className="mt-6 text-center">
//           <button
//             className={`w-full p-3 rounded text-white ${loading ? 'bg-gray-500' : 'bg-gray-900'} hover:bg-gray-800`}
//             disabled={loading}
//             onClick={handlePayment}
//           >
//             {loading ? 'Processing...' : 'Proceed to Payment'}
//           </button>
//         </div>
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$PaymentService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/service/PaymentService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/service/OrderService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/service/UserService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const OrderSummary = ({ title, userId, orders, totalBill })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const phoneNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "OrderSummary.useSelector[phoneNumber]": (state)=>state?.session?.user?.phone
    }["OrderSummary.useSelector[phoneNumber]"]);
    const [orderData, setOrderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(orders?.orders?.order?.items || orders?.orders?.items);
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(phoneNumber || '');
    const [phoneError, setPhoneError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [addresses, setAddresses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAddress, setSelectedAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "OrderSummary.useSelector[token]": (state)=>state?.session?.token
    }["OrderSummary.useSelector[token]"]);
    const [newAddress, setNewAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        street: '',
        city: '',
        state: '',
        country: '',
        zip: ''
    });
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderSummary.useEffect": ()=>{
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            document.body.appendChild(script);
            loadAddresses();
            return ({
                "OrderSummary.useEffect": ()=>{
                    document.body.removeChild(script);
                }
            })["OrderSummary.useEffect"];
        }
    }["OrderSummary.useEffect"], [
        userId
    ]);
    const loadAddresses = async ()=>{
        setLoading(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserAddresses"])(token, userId);
        console.log(result);
        if (result.status === "success") {
            setAddresses(result.data);
            const primaryAddress = result.data.find((addr)=>addr.isPrimary);
            if (primaryAddress) setSelectedAddress(primaryAddress);
        } else {
            console.error(result?.message || "Error retrieving address");
        }
        setLoading(false);
    };
    const validatePhone = ()=>{
        if (!phone.trim() || !/^\d{10}$/.test(phone)) {
            return 'Valid phone number is required (10 digits).';
        }
        return '';
    };
    const validateField = (name, value)=>{
        let error = '';
        if (!value?.trim()) {
            error = `${name.replace(/([A-Z])/g, ' $1')} is required.`;
        } else {
            switch(name){
                case 'zip':
                    if (!/^[0-9]{5,6}$/.test(value)) {
                        error = 'ZIP code must be 5-6 digits.';
                    }
                    break;
                default:
                    break;
            }
        }
        setFormErrors((prevErrors)=>({
                ...prevErrors,
                [name]: error
            }));
        return !error;
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setNewAddress((prevData)=>({
                ...prevData,
                [name]: value
            }));
        validateField(name, value);
    };
    const handleAddAddress = async ()=>{
        const isValid = Object.keys(newAddress).every((field)=>validateField(field, newAddress[field]));
        if (!isValid) return;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAddress"])(token, userId, newAddress);
            if (result.status === "success") {
                loadAddresses();
                setShowForm(false);
                setNewAddress({
                    street: '',
                    city: '',
                    state: '',
                    country: '',
                    zip: ''
                });
            } else {
                console.error(result.message);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handlePayment = async ()=>{
        const phoneValidationError = validatePhone();
        if (phoneValidationError || !selectedAddress) {
            setError('Please provide a valid phone number and select an address.');
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const { razorpayOrder, ...data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkOutOrder"])(orders?.orders?.order?.id || orders?.orders.id);
            const options = {
                key: 'rzp_test_HLBu4adubXpVrg',
                amount: Math.ceil(totalBill * 100),
                currency: razorpayOrder?.currency,
                name: 'Your Shop',
                description: 'Payment for your order',
                order_id: razorpayOrder?.id,
                handler: async function(response) {
                    const { razorpay_payment_id, razorpay_signature, razorpay_order_id } = response;
                    try {
                        const verificationResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyPaymentAndUpdateOrder"])(orders?.orders?.order?.id || orders?.orders.id, razorpay_order_id, razorpay_payment_id, razorpay_signature);
                        if (verificationResult.success) {
                            router.push(`/orders/success`);
                        } else {
                            setError('Payment verification failed. Please try again.');
                        }
                    } catch (error) {
                        setError('An unexpected error occurred during verification. Please try again.');
                    }
                },
                prefill: {
                    name: selectedAddress.fullName,
                    email: 'customer@example.com',
                    contact: phone
                },
                theme: {
                    color: '#F37254'
                },
                modal: {
                    ondismiss: async ()=>{
                        setError('Payment was cancelled by the user. Please try again.');
                    }
                }
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (err) {
            setError('Payment process failed. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderSummary.useEffect": ()=>{
            const phoneValidationError = validatePhone();
            setPhoneError(phoneValidationError);
        }
    }["OrderSummary.useEffect"], [
        phone
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-100",
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-500 text-white p-4 rounded mb-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/Checkout.js",
                lineNumber: 400,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 shadow-md bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-semibold border-b pb-4",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 403,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-semibold text-gray-700 mb-1",
                                children: "Phone Number"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 407,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: phone,
                                onChange: (e)=>setPhone(e.target.value),
                                className: `w-full rounded-lg border p-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${phoneError ? "border-red-500 ring-red-500" : "border-gray-300"}`,
                                placeholder: "Enter your 10-digit phone number"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 410,
                                columnNumber: 3
                            }, this),
                            phoneError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-500 mt-2 italic",
                                children: phoneError
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 420,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 406,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-medium text-gray-700",
                                children: "Select Delivery Address"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 427,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 border rounded p-4",
                                children: addresses.map((address)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center mb-4 p-4 rounded-lg border-2 ${selectedAddress?.id === address.id ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"} shadow-sm hover:shadow-md transition-shadow duration-200`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "radio",
                                                name: "address",
                                                checked: selectedAddress?.id === address.id,
                                                onChange: ()=>setSelectedAddress(address),
                                                className: "mr-4 h-5 w-5 accent-blue-500 cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 438,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base text-blue-700 font-semibold",
                                                        children: address.street
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 446,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600",
                                                        children: `${address.city}, ${address.state}, ${address.zip}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 449,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 445,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, address.id, true, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 430,
                                        columnNumber: 11
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 428,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-blue-600 underline mt-2",
                                onClick: ()=>setShowForm(!showForm),
                                children: showForm ? 'Cancel' : '+ Add New Address'
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 458,
                                columnNumber: 7
                            }, this),
                            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 border rounded p-4 bg-gray-50",
                                children: [
                                    Object.keys(newAddress).map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium capitalize text-gray-600",
                                                    htmlFor: key,
                                                    children: key.replace(/([A-Z])/g, ' $1')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                                    lineNumber: 469,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: key,
                                                    name: key,
                                                    value: newAddress[key],
                                                    onChange: handleInputChange,
                                                    className: `w-full rounded border p-2 text-sm ${formErrors[key] ? 'border-red-500' : 'border-gray-300'}`,
                                                    placeholder: `Enter ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                                    lineNumber: 470,
                                                    columnNumber: 15
                                                }, this),
                                                formErrors[key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-red-500 mt-1",
                                                    children: formErrors[key]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                                    lineNumber: 479,
                                                    columnNumber: 35
                                                }, this)
                                            ]
                                        }, key, true, {
                                            fileName: "[project]/src/app/checkout/Checkout.js",
                                            lineNumber: 468,
                                            columnNumber: 13
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-gray-800 text-white py-2 px-4 rounded mt-2 hover:bg-gray-700",
                                        onClick: handleAddAddress,
                                        children: "Save Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 482,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 466,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 426,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-4 ${!selectedAddress || phoneError ? 'opacity-50 pointer-events-none' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-medium text-gray-700 mb-4 border-b pb-2",
                                children: "Order Summary"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 494,
                                columnNumber: 7
                            }, this),
                            orderData?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "w-20 h-20 object-cover rounded border",
                                            src: item.product?.image || '/_assets/image.png',
                                            alt: item.product?.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/checkout/Checkout.js",
                                            lineNumber: 497,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-medium text-gray-800",
                                                    children: item.product?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                                    lineNumber: 503,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: item.product?.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                                    lineNumber: 504,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-gray-800",
                                                    children: [
                                                        "$",
                                                        item.product?.offerPrice
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                                    lineNumber: 505,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/checkout/Checkout.js",
                                            lineNumber: 502,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                    lineNumber: 496,
                                    columnNumber: 9
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium text-lg text-gray-800",
                                    children: [
                                        "Total: $",
                                        totalBill
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                    lineNumber: 510,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 509,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 493,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `w-full p-3 rounded text-white ${loading ? 'bg-gray-500' : 'bg-gray-600 hover:bg-gray-700'}`,
                            disabled: !selectedAddress || phoneError || loading,
                            onClick: handlePayment,
                            children: loading ? 'Processing...' : 'Proceed to Payment'
                        }, void 0, false, {
                            fileName: "[project]/src/app/checkout/Checkout.js",
                            lineNumber: 516,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 515,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/Checkout.js",
                lineNumber: 402,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/Checkout.js",
        lineNumber: 399,
        columnNumber: 5
    }, this);
};
_s(OrderSummary, "SMPUbCMqSTGO6T1dxlmb5ZmDitk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
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
        console.log(guestCart, userId);
        if (guestCart.length > 0) {
            for (const item of guestCart){
                try {
                    const res = await this.addItemToCart(userId, item.id, item.quantity);
                    console.log("migrated", res);
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
            console.log(error);
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
function Page() {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const userCartService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserCartService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    const reduxOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Page.useSelector[reduxOrders]": (state)=>state?.utils?.product?.orders
    }["Page.useSelector[reduxOrders]"]);
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Page.useSelector[userId]": (state)=>state.session.user?.id
    }["Page.useSelector[userId]"]);
    const fetchProducts = async ()=>{
        if (!userId) return;
        try {
            const response = await userCartService.viewCart(userId);
            console.log(response);
            setProducts(response);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (reduxOrders) {
                localStorage.setItem("orders", JSON.stringify(reduxOrders));
                setOrders(reduxOrders);
            } else {
                const storedOrders = localStorage.getItem("orders");
                if (storedOrders) {
                    setOrders(JSON.parse(storedOrders));
                }
            }
        }
    }["Page.useEffect"], [
        reduxOrders
    ]);
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
            lineNumber: 49,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$checkout$2f$Checkout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        data: products.items || [],
        userId: userId,
        orders: orders,
        totalBill: products.totalAmount || 0
    }, void 0, false, {
        fileName: "[project]/src/app/checkout/page.js",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(Page, "EFR+AraHkEknsnFmDY96DHaE6x8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
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

//# sourceMappingURL=src_app_28d004._.js.map