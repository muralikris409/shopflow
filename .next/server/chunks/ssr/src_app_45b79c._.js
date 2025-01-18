module.exports = {

"[project]/src/app/service/ProductService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getFlashDeals),
    "getCategory": (()=>getCategory),
    "getFilteredProducts": (()=>getFilteredProducts),
    "getProductByID": (()=>getProductByID),
    "getProducts": (()=>getProducts),
    "getSearchedProduct": (()=>getSearchedProduct),
    "subCategoryProducts": (()=>subCategoryProducts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/axios.js [app-ssr] (ecmascript)");
;
;
const getFilteredProducts = async (filters)=>{
    console.log(filters);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/products/filteredProducts', {
            params: {
                categoryName: filters?.selectedCategory,
                subCategoryNames: filters?.selectedSubcategories,
                sort: filters?.sortOption
            }
        });
        return response.data;
    } catch (err) {
        console.error("Error fetching filtered products:", err.message);
        throw new Error("Unable to fetch filtered products. Please try again later.");
    }
};
async function subCategoryProducts(id) {
    console.log(id);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get("/products/getProductsByCategory", {
            params: {
                subCategoryId: id
            }
        });
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.error("Error fetching products by subcategory:", err.message);
        throw new Error("Unable to fetch products for the selected subcategory. Please try again later.");
    }
}
async function getProducts(page = 1) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get("/products/getAllProducts", {
            params: {
                page: page
            }
        });
        return response.data;
    } catch (err) {
        console.error("Error fetching products:", err.message);
        throw new Error("Unable to fetch products. Please try again later.");
    }
}
async function getFlashDeals() {
    try {
        const flashdeal = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get("/products/flashDealProducts");
        return flashdeal.data;
    } catch (err) {
        console.error("Error fetching flash deals:", err.message);
        throw new Error("Unable to fetch flash deals. Please try again later.");
    }
}
async function getCategory() {
    try {
        const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get("/products/Category");
        console.log(categories.data);
        return categories.data;
    } catch (err) {
        console.error("Error fetching categories:", err.message);
        throw new Error("Unable to fetch categories. Please try again later.");
    }
}
async function getProductByID(id) {
    try {
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get("/products/getProductById", {
            params: {
                productId: id
            }
        });
        return product.data;
    } catch (err) {
        console.error("Error fetching product by ID:", err.message);
        throw new Error("Unable to fetch product details. Please try again later.");
    }
}
async function getSearchedProduct(query) {
    try {
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get("/products/getProductBySearch", {
            params: {
                query: query
            }
        });
        return products.data;
    } catch (err) {
        console.error("Error fetching searched products:", err.message);
        throw new Error("Unable to search for products. Please try again later.");
    }
}
}}),
"[project]/src/app/service/GuestCartService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addProduct": (()=>addProduct),
    "clearCart": (()=>clearCart),
    "decreaseQuantity": (()=>decreaseQuantity),
    "findProductIndex": (()=>findProductIndex),
    "getCart": (()=>getCart),
    "increaseQuantity": (()=>increaseQuantity),
    "loadCart": (()=>loadCart),
    "removeProduct": (()=>removeProduct),
    "saveCart": (()=>saveCart)
});
"use client";
const cartKey = 'shopflow';
function loadCart() {
    const storedCart = localStorage.getItem(cartKey);
    return storedCart ? JSON.parse(storedCart) : [];
}
function saveCart(cart) {
    localStorage.setItem(cartKey, JSON.stringify(cart));
}
function findProductIndex(cart, productId) {
    return cart.findIndex((item)=>item.id === productId);
}
function addProduct(product) {
    const cart = loadCart();
    const productIndex = findProductIndex(cart, product.id);
    if (productIndex === -1) {
        cart.push({
            ...product,
            quantity: 1
        });
    } else {
        cart[productIndex].quantity += 1;
    }
    saveCart(cart);
}
function removeProduct(productId) {
    let cart = loadCart();
    cart = cart.filter((item)=>item.id !== productId);
    saveCart(cart);
}
function increaseQuantity(productId) {
    const cart = loadCart();
    const productIndex = findProductIndex(cart, productId);
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
        saveCart(cart);
    }
}
function decreaseQuantity(productId) {
    const cart = loadCart();
    const productIndex = findProductIndex(cart, productId);
    if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
            cart[productIndex].quantity -= 1;
        } else {
            removeProduct(productId);
        }
        saveCart(cart);
    }
}
function getCart() {
    return loadCart();
}
function clearCart() {
    localStorage.removeItem(cartKey);
}
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
"[project]/src/app/product/[name]/ProductView.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/app/product/[name]/ProductView.js'

JSX attributes must only be assigned a non-empty expression`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/src/app/product/[name]/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$ProductService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/service/ProductService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$product$2f5b$name$5d2f$ProductView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/product/[name]/ProductView.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Page() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const id = searchParams.get("id");
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (id) {
            async function loadProduct() {
                try {
                    const product = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$ProductService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductByID"])(id);
                    setProduct(product.data);
                } catch (error) {
                    console.error('Error fetching product:', error);
                } finally{
                    setLoading(false);
                }
            }
            loadProduct();
        }
    }, [
        id
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/product/[name]/page.js",
            lineNumber: 30,
            columnNumber: 12
        }, this);
    }
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Product not found"
        }, void 0, false, {
            fileName: "[project]/src/app/product/[name]/page.js",
            lineNumber: 34,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$product$2f5b$name$5d2f$ProductView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        product: product
    }, void 0, false, {
        fileName: "[project]/src/app/product/[name]/page.js",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/product/[name]/page.js [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_app_45b79c._.js.map