(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_7b4485._.js", {

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
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$PaymentService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/service/PaymentService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/service/OrderService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const OrderSummary = ({ title, steps, userId, orders, shippingMethods, billingAddress, totalBill })=>{
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
        const { fullName, streetAddress, city, state, zip, country } = formData;
        const isValid = fullName && streetAddress && city && state && zip && country;
        setIsFormValid(isValid);
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({
                ...prevData,
                [name]: value
            }));
    };
    const handleVerify = async (orderId, razorpay_order_id, razorpay_payment_id, razorpay_signature)=>{
        console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature);
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
            const { razorpayOrder, ...data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkOutOrder"])(orders?.orders?.order?.id || orders?.orders.id);
            const options = {
                key: 'rzp_test_nTbKdtgjeOQLhc',
                amount: Math.ceil(totalBill * 100),
                currency: razorpayOrder?.currency,
                name: 'Your Shop',
                description: 'Payment for your order',
                order_id: razorpayOrder?.id,
                handler: async function(response) {
                    const { razorpay_payment_id, razorpay_signature, razorpay_order_id } = response;
                    //   const verificationResult = await verifyPayment(orders?.orders?.order?.id || orders?.orders.id, razorpay_order_id, razorpay_payment_id, razorpay_signature);
                    const verificationResult = await handleVerify(orders?.orders?.order?.id || orders?.orders.id, razorpay_order_id, razorpay_payment_id, razorpay_signature);
                    if (verificationResult.success) {
                        router.push(`/orders/success?dtrcpt=${encodeURIComponent(JSON.stringify(verificationResult?.order))}`);
                    } else {
                        console.log("failed");
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$PaymentService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["failedVerify"])(orders?.orders?.order?.id || orders?.orders.id);
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
                lineNumber: 116,
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
                        lineNumber: 119,
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
                                                        lineNumber: 128,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                                    lineNumber: 127,
                                                    columnNumber: 23
                                                }, this) : step.number
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-semibold ${step.active ? 'text-gray-900' : 'text-gray-500'}`,
                                                children: step.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/checkout/Checkout.js",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/Checkout.js",
                lineNumber: 118,
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
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400",
                                children: "Check your items. And select a suitable shipping method."
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 144,
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
                                                lineNumber: 148,
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
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "float-right text-gray-400",
                                                        children: orderItem.product?.description || "No description available."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "float-right text-gray-400",
                                                        children: "Quantity: " + (orderItem.quantity || 1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-bold",
                                                        children: "$" + (orderItem.product?.offerPrice || "0.00")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg p-2",
                                children: "Total Bill: $" + totalBill
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-8 text-lg font-medium",
                                children: "Shipping Methods"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 162,
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
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 167,
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
                                                        lineNumber: 169,
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
                                                                lineNumber: 171,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-500 text-sm leading-6",
                                                                children: method.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                                lineNumber: 172,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/checkout/Checkout.js",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 bg-gray-50 px-4 pt-8 lg:mt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-medium",
                                children: "Address Details"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400",
                                children: "Complete your order by providing your delivery address."
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "full-name",
                                        className: "mt-4 mb-2 block text-sm font-medium",
                                        children: "Full Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "full-name",
                                        name: "fullName",
                                        className: "w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",
                                        placeholder: "John Doe",
                                        value: formData.fullName,
                                        onChange: handleInputChange,
                                        onBlur: validateForm
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "street-address",
                                        className: "mt-4 mb-2 block text-sm font-medium",
                                        children: "Street Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "street-address",
                                        name: "streetAddress",
                                        className: "w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",
                                        placeholder: "123 Main St",
                                        value: formData.streetAddress,
                                        onChange: handleInputChange,
                                        onBlur: validateForm
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "city",
                                        className: "mt-4 mb-2 block text-sm font-medium",
                                        children: "City"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "city",
                                        name: "city",
                                        className: "w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",
                                        placeholder: "Los Angeles",
                                        value: formData.city,
                                        onChange: handleInputChange,
                                        onBlur: validateForm
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "state",
                                        className: "mt-4 mb-2 block text-sm font-medium",
                                        children: "State/Province"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "state",
                                        name: "state",
                                        className: "w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",
                                        placeholder: "California",
                                        value: formData.state,
                                        onChange: handleInputChange,
                                        onBlur: validateForm
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "zip",
                                        className: "mt-4 mb-2 block text-sm font-medium",
                                        children: "ZIP/Postal Code"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "zip",
                                        name: "zip",
                                        className: "w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",
                                        placeholder: "90001",
                                        value: formData.zip,
                                        onChange: handleInputChange,
                                        onBlur: validateForm
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "country",
                                        className: "mt-4 mb-2 block text-sm font-medium",
                                        children: "Country"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "country",
                                        name: "country",
                                        className: "w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",
                                        placeholder: "United States",
                                        value: formData.country,
                                        onChange: handleInputChange,
                                        onBlur: validateForm
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/Checkout.js",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `w-3/4 rounded-lg ${loading ? 'bg-gray-500' : 'bg-gray-900'} p-4 text-sm font-medium text-white`,
                    disabled: loading,
                    onClick: handlePayment,
                    children: loading ? 'Processing...' : 'Proceed to Payment'
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/Checkout.js",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/Checkout.js",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/Checkout.js",
        lineNumber: 115,
        columnNumber: 5
    }, this);
};
_s(OrderSummary, "FnnCMaZwFbOwsB8yQV9wv5VpB9U=", false, function() {
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
 // import React, { useState, useEffect } from 'react';
 // import { createOrder, failedVerify, verifyPayment } from '../service/PaymentService';  
 // import { checkOutOrder, getOrderById, verifyPaymentAndUpdateOrder } from '../service/OrderService';
 // import { useRouter } from 'next/navigation';
 // const OrderSummary = ({ 
 //   title, 
 //   steps, 
 //   userId,
 //   orders,
 //   shippingMethods, 
 //   billingAddress,
 //   totalBill,
 //   existingAddresses = [
 //     {
 //       id: '1',
 //       fullName: 'John Doe',
 //       streetAddress: '123 Main St',
 //       city: 'Los Angeles',
 //       state: 'California',
 //       zip: '90001',
 //       country: 'United States',
 //     },
 //     {
 //       id: '2',
 //       fullName: 'Jane Smith',
 //       streetAddress: '456 Elm St',
 //       city: 'San Francisco',
 //       state: 'California',
 //       zip: '94101',
 //       country: 'United States',
 //     },
 //     {
 //       id: '3',
 //       fullName: 'Alice Johnson',
 //       streetAddress: '789 Oak St',
 //       city: 'New York',
 //       state: 'New York',
 //       zip: '10001',
 //       country: 'United States',
 //     },
 //     {
 //       id: '4',
 //       fullName: 'Bob Brown',
 //       streetAddress: '321 Pine St',
 //       city: 'Chicago',
 //       state: 'Illinois',
 //       zip: '60601',
 //       country: 'United States',
 //     },
 //   ]
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
 //   const [useExistingAddress, setUseExistingAddress] = useState(false);
 //   const [selectedAddress, setSelectedAddress] = useState(null);
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
 //     if (useExistingAddress && selectedAddress) {
 //       setIsFormValid(true);
 //     } else {
 //       const { fullName, streetAddress, city, state, zip, country } = formData;
 //       const isValid = fullName && streetAddress && city && state && zip && country;
 //       setIsFormValid(isValid);
 //     }
 //   };
 //   const handleInputChange = (e) => {
 //     const { name, value } = e.target;
 //     setFormData((prevData) => ({
 //       ...prevData,
 //       [name]: value,
 //     }));
 //   };
 //   const handleAddressToggle = () => {
 //     setUseExistingAddress(!useExistingAddress);
 //     if (useExistingAddress) {
 //       setFormData({
 //         fullName: '',
 //         streetAddress: '',
 //         city: '',
 //         state: '',
 //         zip: '',
 //         country: '',
 //       });
 //     } else if (selectedAddress) {
 //       setFormData(selectedAddress);
 //       console.log("address",selectedAddress);
 //     }
 //     validateForm(); 
 //   };
 //   const handleAddressSelect = (e) => {
 //     const addressId = e.target.value;
 //     const address = existingAddresses.find(addr => addr.id === addressId);
 //     setSelectedAddress(address);
 //     setFormData(address);
 //     validateForm(); 
 //   };
 //   const handleVerify = async (orderId,razorpay_order_id, razorpay_payment_id, razorpay_signature) => {
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
 //           const verificationResult = await handleVerify(orders?.orders?.order?.id || orders?.orders.id, razorpay_order_id, razorpay_payment_id, razorpay_signature);
 //           if (verificationResult.success) {
 //             router.push(`/orders/success?dtrcpt=${encodeURIComponent(JSON.stringify(verificationResult?.order))}`);
 //           } else {
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
 //           {/* Toggle for existing address */}
 //           {existingAddresses?.length > 0 && (
 //             <div className="flex items-center mb-4">
 //               <input 
 //                 type="checkbox" 
 //                 id="useExistingAddress" 
 //                 checked={useExistingAddress} 
 //                 onChange={handleAddressToggle} 
 //                 className="mr-2" 
 //               />
 //               <label htmlFor="useExistingAddress" className="text-sm">Use existing address</label>
 //             </div>
 //           )}
 //           {/* Address selection */}
 //           {useExistingAddress && (
 //             <select 
 //               onChange={handleAddressSelect} 
 //               className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
 //             >
 //               <option value="">Select an address</option>
 //               {existingAddresses.map((address) => (
 //                 <option key={address.id} value={address.id}>{`${address.fullName}, ${address.streetAddress}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}`}</option>
 //               ))}
 //             </select>
 //           )}
 //           {/* Always show the form fields */}
 //           <div className="mt-4">
 //             <label htmlFor="full-name" className="mt-4 mb-2 block text-sm font-medium">Full Name</label>
 //             <input type="text" id="full-name" name="fullName" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="John Doe" value={formData.fullName} onChange={handleInputChange} onBlur={validateForm} disabled={useExistingAddress} />
 //             <label htmlFor="street-address" className="mt-4 mb-2 block text-sm font-medium">Street Address</label>
 //             <input type="text" id="street-address" name="streetAddress" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="123 Main St" value={formData.streetAddress} onChange={handleInputChange} onBlur={validateForm} disabled={useExistingAddress} />
 //             <label htmlFor="city" className="mt-4 mb-2 block text-sm font-medium">City</label>
 //             <input type="text" id="city" name="city" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Los Angeles" value={formData.city} onChange={handleInputChange} onBlur={validateForm} disabled={useExistingAddress} />
 //             <label htmlFor="state" className="mt-4 mb-2 block text-sm font-medium">State/Province</label>
 //             <input type="text" id="state" name="state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="California" value={formData.state} onChange={handleInputChange} onBlur={validateForm} disabled={useExistingAddress} />
 //             <label htmlFor="zip" className="mt-4 mb-2 block text-sm font-medium">ZIP/Postal Code</label>
 //             <input type="text" id="zip" name="zip" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="90001" value={formData.zip} onChange={handleInputChange} onBlur={validateForm} disabled={useExistingAddress} />
 //             <label htmlFor="country" className="mt-4 mb-2 block text-sm font-medium">Country</label>
 //             <input type="text" id="country" name="country" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="United States" value={formData.country} onChange={handleInputChange} onBlur={validateForm} disabled={useExistingAddress} />
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

//# sourceMappingURL=src_app_7b4485._.js.map