(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5],{9459:(e,t,r)=>{Promise.resolve().then(r.bind(r,7725))},6046:(e,t,r)=>{"use strict";var a=r(6658);r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},6301:(e,t,r)=>{"use strict";r.d(t,{S:()=>a});let a=r(2651).A.create({baseURL:"http://192.168.0.114:5000"})},7725:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var a=r(5155),s=r(2115),o=r(9689),n=r(5408),i=r(3391),l=r(6046),c=r(5071);let d=()=>{let[e,t]=(0,s.useState)([]),[r,d]=(0,s.useState)(0),[m,h]=(0,s.useState)(null),[g,x]=(0,s.useState)(!1),[y,p]=(0,s.useState)(!0),v=new n.A,f=(0,i.d4)(e=>e.session.user),w=(0,l.useRouter)();(0,s.useEffect)(()=>{(async()=>{p(!0);try{if(f){let e=await v.viewCart(f.id);t(e.items),d(e.totalAmount),console.log(e)}else{let e=(0,o.Xl)();t(e)}}catch(e){h("Failed to load cart. Please try again later.")}finally{p(!1)}})()},[f]);let j=async e=>{try{if(f){await v.updateCartCount(f.id,e,"increase");let r=await v.viewCart(f.id);t(r.items),d(r.totalAmount)}else(0,o.o7)(e),t((0,o.Xl)())}catch(e){h("Failed to update item quantity. Please try again later.")}},N=async e=>{try{if(f){await v.updateCartCount(f.id,e,"decrease");let r=await v.viewCart(f.id);t(r.items),d(r.totalAmount)}else(0,o.CG)(e),t((0,o.Xl)())}catch(e){h("Failed to update item quantity. Please try again later.")}},b=async e=>{try{if(f){await v.deleteFromCart(f.id,e);let r=await v.viewCart(f.id);t(r.items),d(r.totalAmount)}else(0,o.qY)(e),t((0,o.Xl)())}catch(e){h("Failed to remove product from cart. Please try again later.")}},C=(e,t)=>{let r=encodeURIComponent(JSON.stringify({orders:e}));w.push("/checkout?data=".concat(r))},S=async()=>{x(!0);try{console.log(e);let t=null==e?void 0:e.map(e=>({productId:e.productId,quantity:e.quantity})),{order:r}=await (0,c.fS)(f.id,t);console.log("order:",r),C(r)}catch(e){console.error(e),h("Failed to proceed with checkout. Please try again later.")}finally{x(!1)}};return(0,a.jsx)("section",{className:"h-1/3 bg-gray-100 py-12 sm:py-16 lg:py-20",children:(0,a.jsxs)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8",children:[(0,a.jsx)("div",{className:"flex items-center justify-center",children:y?(0,a.jsx)("div",{className:"text-center",children:"Loading..."}):e.length>0?(0,a.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:"Your Cart"}):(0,a.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:"Your Cart is empty"})}),m&&(0,a.jsx)("div",{className:"text-center text-red-500 mt-4",children:m}),(0,a.jsx)("div",{className:"mx-auto mt-8 max-w-2xl md:mt-12",children:(0,a.jsx)("div",{className:"bg-white shadow",children:(0,a.jsxs)("div",{className:"px-4 py-6 sm:px-8 sm:py-10",children:[(0,a.jsx)("div",{className:"flow-root",children:(0,a.jsx)("ul",{className:"-my-8",children:e.map((e,t)=>(0,a.jsx)(u,{totalBill:r,product:f?e.product:e,index:t,totalPrice:null==e?void 0:e.totalPrice,onIncreaseQuantity:j,onDecreaseQuantity:N,onRemoveProduct:b,isLoggedIn:f,quantity:f?e.quantity:null},t))})}),(0,a.jsxs)("div",{className:"mt-6 border-t border-gray-200 pt-6",children:[(0,a.jsxs)("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[(0,a.jsx)("p",{children:"Total"}),(0,a.jsxs)("p",{children:["$",f?r:null==e?void 0:e.totalPrice]})]}),(0,a.jsxs)("div",{className:"mt-6 text-center",children:[(0,a.jsxs)("button",{type:"button",onClick:S,className:"group inline-flex w-full items-center justify-center rounded-md px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow ".concat(g?"bg-gray-400 cursor-not-allowed animate-pulse":"bg-gray-900 hover:bg-gray-800"),disabled:0===e.length||g,children:[g?"Processing...":"Checkout",!g&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"group-hover:ml-8 ml-4 h-6 w-6 transition-all",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]}),0===e.length&&!y&&(0,a.jsx)("p",{className:"mt-4 text-gray-600",children:"Add items to your cart to checkout"})]})]})]})})})]})})};function u(e){var t;let{product:r=[],isLoggedIn:o,index:n,totalPrice:i,totalBill:l,onIncreaseQuantity:c,onDecreaseQuantity:d,onRemoveProduct:u,quantity:m}=e,[h,g]=(0,s.useState)(!1),x=async e=>{g(!0),await c(e),g(!1)},y=async e=>{g(!0),await d(e),g(!1)};return(0,a.jsxs)("li",{className:"flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0",children:[(0,a.jsx)("div",{className:"shrink-0",children:(0,a.jsx)("img",{className:"h-24 w-24 max-w-full rounded-lg object-cover",src:(null==r?void 0:r.image)||"/_assets/image.png",alt:r.name})}),(0,a.jsxs)("div",{className:"relative flex flex-1 flex-col justify-between",children:[(0,a.jsxs)("div",{className:"sm:col-gap-5 sm:grid sm:grid-cols-2",children:[(0,a.jsxs)("div",{className:"pr-8 sm:pr-5",children:[(0,a.jsx)("p",{className:"text-base font-semibold text-gray-900",children:r.name}),(0,a.jsxs)("p",{className:"mx-0 mt-1 mb-0 text-sm text-gray-400",children:["Quantity: ",o?h?"...":m:h?"...":r.quantity]})]}),(0,a.jsxs)("div",{className:"mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end",children:[(0,a.jsxs)("p",{className:"shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right",children:["$",o?i:null===(t=r.totalPrice)||void 0===t?void 0:t.toFixed(2)]}),(0,a.jsx)("div",{className:"sm:order-1",children:(0,a.jsxs)("div",{className:"mx-auto  rounded-md flex h-8 items-stretch text-gray-600 ".concat(h?"border-2 border-blue-500  animate-pulse":""),children:[(0,a.jsx)("button",{onClick:()=>y(r.id),className:"flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white",disabled:h,children:"-"}),(0,a.jsx)("div",{className:"flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition",children:h?"...":o?m:r.quantity}),(0,a.jsx)("button",{onClick:()=>x(r.id),className:"flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white",disabled:h,children:"+"})]})})]})]}),(0,a.jsx)("div",{className:"absolute top-0 right-0 flex sm:bottom-0 sm:top-auto",children:(0,a.jsx)("button",{onClick:()=>u(r.id),type:"button",className:"flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900",children:(0,a.jsx)("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})})]})]},n)}function m(){return(0,a.jsx)("div",{children:(0,a.jsx)(d,{})})}},9689:(e,t,r)=>{"use strict";r.d(t,{Bj:()=>i,CG:()=>d,Xl:()=>u,o7:()=>c,qY:()=>l});let a="shopflow";function s(){let e=localStorage.getItem(a);return e?JSON.parse(e):[]}function o(e){localStorage.setItem(a,JSON.stringify(e))}function n(e,t){return e.findIndex(e=>e.id===t)}function i(e){let t=s(),r=n(t,e.id);-1===r?t.push({...e,quantity:1}):t[r].quantity+=1,o(t)}function l(e){let t=s();o(t=t.filter(t=>t.id!==e))}function c(e){let t=s(),r=n(t,e);-1!==r&&(t[r].quantity+=1,o(t))}function d(e){let t=s(),r=n(t,e);-1!==r&&(t[r].quantity>1?t[r].quantity-=1:l(e),o(t))}function u(){return s()}},5071:(e,t,r)=>{"use strict";r.d(t,{N4:()=>l,TU:()=>n,fS:()=>s,gY:()=>i,yT:()=>o});var a=r(6301);let s=async(e,t)=>{try{return(await a.S.post("/user/order/createOrder",{userId:e,items:t})).data}catch(e){var r,s;throw console.error("Error creating order:",e),Error((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(r=s.data)||void 0===r?void 0:r.message)||"Error creating order.")}},o=async(e,t,r,s)=>{console.log("order_id:",e),console.log("razorpayId:",t),console.log("paymentId:",r),console.log("siign:",s);try{return(await a.S.post("/user/order/verify",{},{params:{orderId:e,razorpayId:t,paymentId:r,paymentSignature:s}})).data}catch(e){var o,n;throw console.error("Error verifying payment:",e),Error((null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(o=n.data)||void 0===o?void 0:o.message)||"Error verifying payment.")}},n=async e=>{console.log("orderid:",e);try{return(await a.S.post("/user/order/checkoutOrder?orderId=".concat(e))).data}catch(e){var t,r;throw console.error("Error fetching user orders:",e),Error((null==e?void 0:null===(r=e.response)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.message)||"Error fetching user orders.")}},i=async e=>{console.log("userId:",e);try{return(await a.S.get("/user/order/getUserOrder?userId=".concat(e))).data}catch(e){var t,r;throw console.error("Error fetching user orders:",e),Error((null==e?void 0:null===(r=e.response)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.message)||"Error fetching user orders.")}},l=async e=>{console.log(e);try{return(await a.S.put("/user/order/cancelOrder?orderId=".concat(e))).data}catch(e){var t,r;throw console.error("Error cancelling order:",e),Error((null==e?void 0:null===(r=e.response)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.message)||"Error cancelling order.")}}},5408:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var a=r(3391),s=r(6301);let o=function(){let e=(0,a.d4)(e=>e.session.token),t="shopflow",r=()=>({Authorization:"Bearer ".concat(e),"Content-Type":"application/json"});this.loadCart=function(){let e=localStorage.getItem(t);return e?JSON.parse(e):[]},this.saveCart=function(e){localStorage.setItem(t,JSON.stringify(e))},this.migrateCart=async function(e){let t=this.loadCart();if(t.length>0){for(let r of t)try{await this.addItemToCart(e,r.productId,r.quantity)}catch(e){console.error("Error migrating cart item:",e)}this.clearCart()}},this.addItemToCart=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;console.log(e),console.log(t);try{return(await s.S.post("/user/cart/addItemToCart",{},{params:{userId:e,productId:t,quantity:a},headers:r()})).data}catch(e){throw console.error("Error adding item to cart:",e),e.response?e.response.data:Error("Network or server error")}},this.viewCart=async function(e){try{let t=await s.S.get("/user/cart/viewCart",{params:{userId:e},headers:r()});if(200===t.status)return t.data.data||[];throw Error(t.data.message||"Failed to retrieve cart")}catch(e){throw console.error("Error viewing cart:",e),e.response?e.response.data:Error("Network or server error")}},this.deleteFromCart=async function(e,t){try{let a=await s.S.delete("/user/cart/deleteFromCart",{params:{userId:e,productId:t},headers:r()});if(200===a.status)return a.data;throw Error(a.data.message||"Failed to delete item from cart")}catch(e){throw console.error("Error deleting item from cart:",e),e.response?e.response.data:Error("Network or server error")}},this.updateCartCount=async function(e,t,a){try{let o=await s.S.put("/user/cart/cartCount",{},{params:{userId:e,productId:t,operation:a},headers:r()});if(console.log(o.status),200===o.status)return o.data;throw Error(o.data||"Failed to update cart count")}catch(e){throw console.error("Error updating cart count:",e),e}},this.clearCart=function(){localStorage.removeItem(t)}}}},e=>{var t=t=>e(e.s=t);e.O(0,[651,391,441,517,358],()=>t(9459)),_N_E=e.O()}]);