(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_dda8f6._.js", {

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
"[project]/src/app/_routeprotector/WithoutAuth.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
"use client";
;
;
;
;
const withoutAuth = (WrappedComponent)=>{
    var _s = __turbopack_refresh__.signature();
    return _s((props)=>{
        _s();
        const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
        const isLoggedIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
            "withoutAuth.useSelector[isLoggedIn]": (state)=>state.session.user
        }["withoutAuth.useSelector[isLoggedIn]"]);
        const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "withoutAuth.useEffect": ()=>{
                const checkAuth = {
                    "withoutAuth.useEffect.checkAuth": async ()=>{
                        setLoading(false);
                    }
                }["withoutAuth.useEffect.checkAuth"];
                checkAuth();
            }
        }["withoutAuth.useEffect"], []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "withoutAuth.useEffect": ()=>{
                if (!loading && isLoggedIn) {
                    router.back();
                }
            }
        }["withoutAuth.useEffect"], [
            loading,
            isLoggedIn,
            router
        ]);
        if (loading) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading......."
            }, void 0, false, {
                fileName: "[project]/src/app/_routeprotector/WithoutAuth.js",
                lineNumber: 27,
                columnNumber: 14
            }, this);
        }
        return isLoggedIn ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WrappedComponent, {
            ...props
        }, void 0, false, {
            fileName: "[project]/src/app/_routeprotector/WithoutAuth.js",
            lineNumber: 30,
            columnNumber: 32
        }, this);
    }, "v92IOJfwe7W8oEfFynXpFVxiNds=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
        ];
    });
};
const __TURBOPACK__default__export__ = withoutAuth;
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
"[project]/src/app/(authentication)/auth/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_lib$2f$sessionReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_lib/sessionReducer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/service/UserService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_routeprotector$2f$WithoutAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_routeprotector/WithoutAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserCartService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/service/UserCartService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const AuthForm = ()=>{
    _s();
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const userCartService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserCartService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const historyRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "AuthForm.useSelector[historyRoute]": (state)=>state?.utils?.history?.route
    }["AuthForm.useSelector[historyRoute]"]);
    console.log("historyRoute", historyRoute);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const toggleForm = ()=>{
        setIsLogin(!isLogin);
        setFormData({});
        setErrors({});
        setSuccess(null);
    };
    const handleChange = (field, value)=>{
        setFormData({
            ...formData,
            [field]: value
        });
        setErrors({
            ...errors,
            [field]: ""
        });
    };
    const syncUser = ()=>{
        const userData = localStorage.getItem("shopflow_session");
        if (userData) {
            try {
                const parsedData = JSON.parse(userData);
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_lib$2f$sessionReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSession"])(parsedData));
            } catch (error) {
                console.error("Failed to parse user data:", error);
            }
        }
    };
    const validate = ()=>{
        const validationErrors = {};
        const requiredFields = isLogin ? [
            "email",
            "password"
        ] : [
            "email",
            "password",
            "confirmPassword",
            "username"
        ];
        requiredFields.forEach((field)=>{
            if (!formData[field]) {
                validationErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            } else if (field === "email") {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formData[field])) {
                    validationErrors[field] = "Invalid email format";
                }
            } else if (field === "confirmPassword" && formData.password !== formData.confirmPassword) {
                validationErrors[field] = "Passwords do not match";
            }
        });
        return validationErrors;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccess(null);
            return;
        }
        try {
            setErrors({});
            if (isLogin) {
                setLoading(true);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["login"])(formData);
                syncUser();
                console.log("check", historyRoute);
                if (historyRoute) {
                    historyRoute.includes("product") ? router.push(`${historyRoute}`) : router.push("/cart");
                    router.push(`${historyRoute}`);
                } else {
                    router.push("/");
                }
            } else {
                setLoading(true);
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signUp"])(formData);
                // await userCartService.migrateCart(response?.data?.id);
                setSuccess(response?.message || "Registration successful! Please sign in.");
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setErrors({
                form: error.message || "An unexpected error occurred. Please try again."
            });
            setSuccess(null);
        }
    };
    const handleGoogleLogin = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])("google");
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["googleOAuth"])(session.user);
            syncUser();
            router.push("/");
        } catch (error) {
            console.error("Google login error:", error);
            setErrors({
                form: "An unexpected error occurred. Please try again."
            });
            setSuccess(null); // Clear success message if Google login fails
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthForm.useEffect": ()=>{
            if (status === "authenticated") {
                syncUser();
            }
        }
    }["AuthForm.useEffect"], [
        status
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center min-h-screen bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow-md w-full max-w-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `flex-1 text-center py-2 font-semibold ${isLogin ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"}`,
                            onClick: ()=>setIsLogin(true),
                            children: "SIGN IN"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authentication)/auth/page.js",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `flex-1 text-center py-2 font-semibold ${!isLogin ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"}`,
                            onClick: ()=>setIsLogin(false),
                            children: "REGISTER"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authentication)/auth/page.js",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                errors.form && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-100 text-red-700 p-3 rounded mb-4",
                    children: errors.form
                }, void 0, false, {
                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                    lineNumber: 152,
                    columnNumber: 11
                }, this),
                success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-green-100 text-green-700 p-3 rounded mb-4",
                    children: success
                }, void 0, false, {
                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                    lineNumber: 159,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "username",
                                    className: "block text-sm font-medium text-gray-600",
                                    children: "Username"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    id: "username",
                                    name: "username",
                                    value: formData.username || "",
                                    onChange: (e)=>handleChange("username", e.target.value),
                                    className: "border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                errors.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-500",
                                    children: errors.username
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                                    lineNumber: 178,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(authentication)/auth/page.js",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: "block text-sm font-medium text-gray-600",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    id: "email",
                                    name: "email",
                                    value: formData.email || "",
                                    onChange: (e)=>handleChange("email", e.target.value),
                                    className: "border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-500",
                                    children: errors.email
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                                    lineNumber: 194,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(authentication)/auth/page.js",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "password",
                                    className: "block text-sm font-medium text-gray-600",
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    id: "password",
                                    name: "password",
                                    value: formData.password || "",
                                    onChange: (e)=>handleChange("password", e.target.value),
                                    className: "border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-500",
                                    children: errors.password
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                                    lineNumber: 209,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(authentication)/auth/page.js",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "confirmPassword",
                                    className: "block text-sm font-medium text-gray-600",
                                    children: "Confirm Password"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    id: "confirmPassword",
                                    name: "confirmPassword",
                                    value: formData.confirmPassword || "",
                                    onChange: (e)=>handleChange("confirmPassword", e.target.value),
                                    className: "border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this),
                                errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-500",
                                    children: errors.confirmPassword
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                                    lineNumber: 225,
                                    columnNumber: 42
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(authentication)/auth/page.js",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-full mb-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg hover:from-orange-600 hover:to-red-600",
                            children: loading ? "loading" : isLogin ? "Sign in" : "Register"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authentication)/auth/page.js",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                    lineNumber: 164,
                    columnNumber: 9
                }, this),
                isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "user/forgetpwd",
                        className: "text-sm text-gray-500 hover:text-orange-500",
                        children: "Forgot your password?"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(authentication)/auth/page.js",
                        lineNumber: 240,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                    lineNumber: 239,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-400 mt-1",
                            children: "Quick Access With"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authentication)/auth/page.js",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex flex-row justify-center mt-2",
                            onClick: handleGoogleLogin,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGoogle"], {
                                size: 24,
                                color: "#FFC107"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(authentication)/auth/page.js",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authentication)/auth/page.js",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(authentication)/auth/page.js",
                    lineNumber: 246,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(authentication)/auth/page.js",
            lineNumber: 134,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(authentication)/auth/page.js",
        lineNumber: 133,
        columnNumber: 5
    }, this);
};
_s(AuthForm, "jcS6PUGOgFD5XUhBCS1IzX4zoDg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthForm;
const __TURBOPACK__default__export__ = _c1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_routeprotector$2f$WithoutAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(AuthForm);
var _c, _c1;
__turbopack_refresh__.register(_c, "AuthForm");
__turbopack_refresh__.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(authentication)/auth/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_dda8f6._.js.map