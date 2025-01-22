module.exports = {

"[project]/src/app/service/PaymentService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createOrder": (()=>createOrder),
    "failedVerify": (()=>failedVerify),
    "verifyPayment": (()=>verifyPayment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/axios.js [app-ssr] (ecmascript)");
;
const createOrder = async (userId, items)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post("user/order/createOrder", {
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post("user/order/verify", {}, {
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/user/order/failedVerify?orderId=${orderId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user orders:', error);
        throw new Error(error?.response?.data?.message || 'Error fetching user orders.');
    }
};
}}),
"[project]/src/app/service/OrderService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cancelOrder": (()=>cancelOrder),
    "checkOutOrder": (()=>checkOutOrder),
    "createOrder": (()=>createOrder),
    "getOrderByUserId": (()=>getOrderByUserId),
    "verifyPaymentAndUpdateOrder": (()=>verifyPaymentAndUpdateOrder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/axios.js [app-ssr] (ecmascript)");
;
const createOrder = async (userId, items)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/user/order/createOrder', {
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/user/order/verify', {}, {
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/user/order/checkoutOrder?orderId=${orderId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user orders:', error);
        throw new Error(error?.response?.data?.message || 'Error fetching user orders.');
    }
};
const getOrderByUserId = async (userId)=>{
    console.log("userId:", userId);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/user/order/getUserOrder?userId=${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user orders:', error);
        throw new Error(error?.response?.data?.message || 'Error fetching user orders.');
    }
};
const cancelOrder = async (orderId)=>{
    console.log(orderId);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/user/order/cancelOrder?orderId=${orderId}`);
        return response.data;
    } catch (error) {
        console.error('Error cancelling order:', error);
        throw new Error(error?.response?.data?.message || 'Error cancelling order.');
    }
};
}}),
"[project]/src/app/checkout/Checkout.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$PaymentService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/service/PaymentService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$OrderService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/service/OrderService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
;
;
;
;
const OrderSummary = ({ title, userId, orders, totalBill })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orderData, setOrderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(orders?.orders?.order?.items || orders?.orders?.items);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullName: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        document.body.appendChild(script);
        return ()=>{
            document.body.removeChild(script);
        };
    }, [
        userId
    ]);
    const validateField = (name, value)=>{
        let error = '';
        if (!value.trim()) {
            error = `${name.replace(/([A-Z])/g, ' $1')} is required.`;
        } else {
            switch(name){
                case 'zip':
                    if (!/^[0-9]{5,6}$/.test(value)) {
                        error = 'ZIP code must be 5-6 digits.';
                    }
                    break;
                case 'fullName':
                    if (value.length < 3) {
                        error = 'Full Name must be at least 3 characters long.';
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
    const validateForm = ()=>{
        const fields = Object.keys(formData);
        let isValid = true;
        fields.forEach((field)=>{
            const valid = validateField(field, formData[field]);
            if (!valid) isValid = false;
        });
        return isValid;
    };
    const handleSuccess = ()=>{
        router.push(`/orders/success`);
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({
                ...prevData,
                [name]: value
            }));
        validateField(name, value);
    };
    const handlePayment = async ()=>{
        if (!validateForm()) {
            setError('Please fix the highlighted errors before proceeding.');
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const { razorpayOrder, ...data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$OrderService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkOutOrder"])(orders?.orders?.order?.id || orders?.orders.id);
            const options = {
                key: 'rzp_test_nTbKdtgjeOQLhc',
                amount: Math.ceil(totalBill * 100),
                currency: razorpayOrder?.currency,
                name: 'Your Shop',
                description: 'Payment for your order',
                order_id: razorpayOrder?.id,
                handler: async function(response) {
                    const { razorpay_payment_id, razorpay_signature, razorpay_order_id } = response;
                    try {
                        const verificationResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$OrderService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyPaymentAndUpdateOrder"])(orders?.orders?.order?.id || orders?.orders.id, razorpay_order_id, razorpay_payment_id, razorpay_signature);
                        if (verificationResult.success) {
                            handleSuccess();
                        } else {
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$PaymentService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["failedVerify"])(orders?.orders?.order?.id || orders?.orders.id);
                            setError('Payment verification failed. Please try again.');
                        }
                    } catch (error) {
                        setError('An unexpected error occurred during verification. Please try again.');
                    }
                },
                prefill: {
                    name: formData.fullName,
                    email: 'customer@example.com',
                    contact: '1234567890'
                },
                theme: {
                    color: '#F37254'
                },
                modal: {
                    ondismiss: async ()=>{
                        try {
                            // await failedVerify(orders?.orders?.order?.id || orders?.orders.id);
                            setError('Payment was cancelled by the user. Please try again.');
                        } catch (error) {
                            setError('An error occurred while handling payment cancellation. Please contact support.');
                        }
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-100",
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-500 text-white p-4 rounded mb-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/Checkout.js",
                lineNumber: 154,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 shadow-md bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-semibold",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid lg:grid-cols-12 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 bg-white p-4 shadow-sm rounded",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-medium mb-4",
                                        children: "Delivery Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    Object.keys(formData)?.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium capitalize",
                                                    htmlFor: key,
                                                    children: key.replace(/([A-Z])/g, ' $1')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: key,
                                                    name: key,
                                                    className: `w-full rounded border p-2 text-sm ${formErrors[key] ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-400`,
                                                    placeholder: `Enter ${key}`,
                                                    value: formData[key],
                                                    onChange: handleInputChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this),
                                                formErrors[key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-red-500 mt-1",
                                                    children: formErrors[key]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                                    lineNumber: 174,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, key, true, {
                                            fileName: "[project]/src/app/checkout/Checkout.js",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 bg-white p-4 shadow-sm rounded",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-medium mb-4",
                                        children: "Order Summary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    orderData?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    className: "w-20 h-20 object-cover rounded border",
                                                    src: item.product?.image || '/_assets/image.png',
                                                    alt: item.product?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ml-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-sm font-medium",
                                                            children: item.product?.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/checkout/Checkout.js",
                                                            lineNumber: 189,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: item.product?.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/checkout/Checkout.js",
                                                            lineNumber: 190,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-bold",
                                                            children: [
                                                                "$",
                                                                item.product?.offerPrice
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/checkout/Checkout.js",
                                                            lineNumber: 191,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/checkout/Checkout.js",
                                                    lineNumber: 188,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/checkout/Checkout.js",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t pt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-lg",
                                            children: [
                                                "Total: $",
                                                totalBill
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/checkout/Checkout.js",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/Checkout.js",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/Checkout.js",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `w-full p-3 rounded text-white ${loading ? 'bg-gray-500' : 'bg-gray-900'} hover:bg-gray-800`,
                            disabled: loading,
                            onClick: handlePayment,
                            children: loading ? 'Processing...' : 'Proceed to Payment'
                        }, void 0, false, {
                            fileName: "[project]/src/app/checkout/Checkout.js",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/Checkout.js",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/Checkout.js",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/Checkout.js",
        lineNumber: 153,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = OrderSummary;
}}),
"[project]/src/app/service/UserCartService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function UserCartService() {
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.session.token);
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
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post(// `/user/cart/addItemToCart?userId=${userId}&productId==${userId}4&quantity=${quantity}`, 
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
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/user/cart/viewCart', {
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
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].delete('/user/cart/deleteFromCart', {
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
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put('/user/cart/cartCount', {}, {
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
const __TURBOPACK__default__export__ = UserCartService;
}}),
"[project]/src/app/_routeprotector/WithAuth.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
;
;
;
;
const withAuth = (WrappedComponent)=>{
    return (props)=>{
        const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
        const isLoggedIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.session.user);
        const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true); // Add a loading state
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (isLoggedIn !== undefined) {
                setLoading(false);
            }
        }, [
            isLoggedIn
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (!loading && !isLoggedIn) {
                router.push('/auth');
            }
        }, [
            loading,
            isLoggedIn,
            router
        ]);
        if (loading) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading......."
            }, void 0, false, {
                fileName: "[project]/src/app/_routeprotector/WithAuth.js",
                lineNumber: 24,
                columnNumber: 14
            }, this);
        }
        return isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WrappedComponent, {
            ...props
        }, void 0, false, {
            fileName: "[project]/src/app/_routeprotector/WithAuth.js",
            lineNumber: 27,
            columnNumber: 25
        }, this) : null;
    };
};
const __TURBOPACK__default__export__ = withAuth;
}}),
"[project]/src/app/checkout/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$checkout$2f$Checkout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/checkout/Checkout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserCartService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/service/UserCartService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_routeprotector$2f$WithAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_routeprotector/WithAuth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Page() {
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const userCartService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserCartService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.session.user?.id);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const orders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state?.utils?.product?.orders);
    console.log(orders);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userId) {
            fetchProducts();
        }
    }, [
        userId
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/page.js",
            lineNumber: 41,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$checkout$2f$Checkout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        data: products.items,
        userId: userId,
        orders: orders,
        totalBill: products.totalAmount
    }, void 0, false, {
        fileName: "[project]/src/app/checkout/page.js",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_routeprotector$2f$WithAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Page);
}}),
"[project]/src/app/checkout/page.js [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_app_f56e92._.js.map