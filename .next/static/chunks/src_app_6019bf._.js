(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_6019bf._.js", {

"[project]/src/app/service/UserService.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "forgotPassword": (()=>forgotPassword),
    "getProfileInfo": (()=>getProfileInfo),
    "googleOAuth": (()=>googleOAuth),
    "login": (()=>login),
    "resetPassword": (()=>resetPassword),
    "signUp": (()=>signUp),
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
        if (error.response) {
            throw new Error(error.response.data.message || "An error occurred during login.");
        } else if (error.request) {
            throw new Error("Network error: No response received.");
        } else {
            throw new Error(error.message || "An unknown error occurred during login.");
        }
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
        if (error.response) {
            throw new Error(error.response.data.message || "An error occurred during sign-up.");
        } else if (error.request) {
            throw new Error("Network error: No response received.");
        } else {
            throw new Error(error.message || "An unknown error occurred during sign-up.");
        }
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
        if (error.response) {
            throw new Error(error.response.data.message || "An error occurred during Google OAuth.");
        } else if (error.request) {
            throw new Error("Network error: No response received.");
        } else {
            throw new Error(error.message || "An unknown error occurred during Google OAuth.");
        }
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
} // export async function fetchUserAddresses (token,userId){
 //   try {
 //     const response = await axiosInstance.post(`user/getAllAddress?userId=${userId}`,{}, {
 //       headers:{
 //         Authorization:`Bearer ${token}`
 //     }
 //     });
 //     console.log(response)
 //     return response.data; 
 //   } catch (error) {
 //     console.error("Error fetching addresses:", error);
 //     return { error: error.message || "Something went wrong!" };
 //   }
 // };
 // export const makeAddressPrimary = async (token,userId,addressId) => {
 //     try {
 //       const response = await axiosInstance.post(`user/makePrimaryAddress`,{}, {
 //         params: { userId,addressId },
 //         headers:{
 //           Authorization:`Bearer ${token}`
 //       }
 //       });
 //       console.log(response)
 //       return response.data.data; 
 //     } catch (error) {
 //       console.error("Error fetching addresses:", error);
 //       return { error: error.message || "Something went wrong!" };
 //     }
 //   };
 // export const addAddress = async (token, userId, addressData) => {
 //   try {
 //     const { street, city, state, country, zip, isPrimary } = addressData;
 //     const response = await axiosInstance.post(
 //       'user/addAddress',
 //       {},
 //       {
 //         params: {
 //           userId,
 //           street,
 //           city,
 //           state,
 //           country,
 //           zip,
 //           isPrimary,
 //         },
 //         headers: {
 //           Authorization: `Bearer ${token}`,
 //         },
 //       }
 //     );userProfileInfo
 //     return response.data.data; 
 //   } catch (error) {
 //     console.error("Error adding address:", error);
 //     return { error: error.response?.data?.message || "Something went wrong!" };
 //   }
 // };
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
"[project]/src/app/user/profile/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/service/UserService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
const UserProfile = ()=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        profileImage: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "UserProfile.useSelector[userId]": (state)=>state?.session?.user?.id
    }["UserProfile.useSelector[userId]"]);
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "UserProfile.useSelector[token]": (state)=>state?.session?.token
    }["UserProfile.useSelector[token]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserProfile.useEffect": ()=>{
            const fetchProfileInfo = {
                "UserProfile.useEffect.fetchProfileInfo": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$UserService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProfileInfo"])(token, userId);
                        setUser(response.data.data);
                    } catch (err) {
                        setError("Failed to load profile data.");
                        console.error(err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["UserProfile.useEffect.fetchProfileInfo"];
            if (userId && token) {
                fetchProfileInfo();
            }
        }
    }["UserProfile.useEffect"], [
        userId,
        token
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/user/profile/page.js",
            lineNumber: 43,
            columnNumber: 12
        }, this); // Display loading message or spinner
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-red-500",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/app/user/profile/page.js",
            lineNumber: 47,
            columnNumber: 12
        }, this); // Display error message
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md m-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center",
                        children: user.profile_pic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: user?.profile_pic,
                            alt: "Profile",
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/profile/page.js",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-3xl font-bold text-gray-500",
                            children: user?.name?.charAt(0)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/profile/page.js",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/profile/page.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-gray-800",
                                children: user?.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/profile/page.js",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: user?.email
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/profile/page.js",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: user?.phone
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/profile/page.js",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/profile/page.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/profile/page.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 p-4 rounded-lg shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-800",
                                children: "Orders"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/profile/page.js",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "View your past orders"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/profile/page.js",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/orders",
                                className: "mt-2 text-blue-500 hover:underline",
                                children: "View Orders"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/profile/page.js",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/profile/page.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 p-4 rounded-lg shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-800",
                                children: "Wishlist"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/profile/page.js",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Check your saved items"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/profile/page.js",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/wishlist",
                                className: "mt-2 text-blue-500 hover:underline",
                                children: "View Wishlist"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/profile/page.js",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/profile/page.js",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 p-4 rounded-lg shadow col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-800",
                                children: "Edit Profile"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/profile/page.js",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Update your information"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/profile/page.js",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/user/profile/manage",
                                className: "mt-2 text-blue-500 hover:underline",
                                children: "Edit Profile"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/profile/page.js",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/profile/page.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/profile/page.js",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/profile/page.js",
        lineNumber: 51,
        columnNumber: 5
    }, this);
};
_s(UserProfile, "oC9QXfke9CNfhF7XOIl79jYD3v0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = UserProfile;
const __TURBOPACK__default__export__ = _c1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_routeprotector$2f$WithAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(UserProfile);
var _c, _c1;
__turbopack_refresh__.register(_c, "UserProfile");
__turbopack_refresh__.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/user/profile/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_6019bf._.js.map