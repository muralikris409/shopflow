(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{2801:(e,r,t)=>{Promise.resolve().then(t.bind(t,648))},6046:(e,r,t)=>{"use strict";var o=t(6658);t.o(o,"useRouter")&&t.d(r,{useRouter:function(){return o.useRouter}}),t.o(o,"useSearchParams")&&t.d(r,{useSearchParams:function(){return o.useSearchParams}})},5743:(e,r,t)=>{"use strict";t.d(r,{A:()=>n});var o=t(5155),a=t(6046),s=t(2115),l=t(3391);let n=e=>r=>{let t=(0,a.useRouter)(),n=(0,l.d4)(e=>e.session.user),[d,i]=(0,s.useState)(!0);return((0,s.useEffect)(()=>{void 0!==n&&i(!1)},[n]),(0,s.useEffect)(()=>{d||n||t.push("/auth")},[d,n,t]),d)?(0,o.jsx)("div",{children:"Loading......."}):n?(0,o.jsx)(e,{...r}):null}},6301:(e,r,t)=>{"use strict";t.d(r,{S:()=>o});let o=t(2651).A.create({baseURL:"http://192.168.0.114:5000"})},648:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var o=t(5155),a=t(2115),s=t(6301);let l=async e=>{console.log("orderid:",e);try{return(await s.S.post("/user/order/failedVerify?orderId=".concat(e))).data}catch(e){var r,t;throw console.error("Error fetching user orders:",e),Error((null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(r=t.data)||void 0===r?void 0:r.message)||"Error fetching user orders.")}};var n=t(5071),d=t(6046);let i=e=>{var r,t,s;let{title:i,steps:c,userId:u,orders:m,shippingMethods:h,billingAddress:p,totalBill:g}=e,v=(0,d.useRouter)(),[f,x]=(0,a.useState)(!1),[y,b]=(0,a.useState)(null),[w,N]=(0,a.useState)((null==m?void 0:null===(t=m.orders)||void 0===t?void 0:null===(r=t.order)||void 0===r?void 0:r.items)||(null==m?void 0:null===(s=m.orders)||void 0===s?void 0:s.items)),[j,S]=(0,a.useState)({fullName:"",streetAddress:"",city:"",state:"",zip:"",country:""}),[C,E]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=document.createElement("script");return e.src="https://checkout.razorpay.com/v1/checkout.js",e.onload=()=>{},document.body.appendChild(e),()=>{document.body.removeChild(e)}},[u]);let k=()=>{let{fullName:e,streetAddress:r,city:t,state:o,zip:a,country:s}=j;E(e&&r&&t&&o&&a&&s)},P=e=>{let{name:r,value:t}=e.target;S(e=>({...e,[r]:t}))},A=async(e,r,t,o)=>{console.log(r,t,o);try{return await (0,n.yT)(e,r,t,o)}catch(e){b("Payment verification failed. Please try again."),console.error(JSON.stringify(e))}},I=async()=>{if(!C){b("Please fill all the required fields.");return}x(!0),b(null);try{var e,r;let{razorpayOrder:t,...o}=await (0,n.TU)((null==m?void 0:null===(r=m.orders)||void 0===r?void 0:null===(e=r.order)||void 0===e?void 0:e.id)||(null==m?void 0:m.orders.id)),a={key:"rzp_test_nTbKdtgjeOQLhc",amount:Math.ceil(100*g),currency:null==t?void 0:t.currency,name:"Your Shop",description:"Payment for your order",order_id:null==t?void 0:t.id,handler:async function(e){var r,t,o,a;let{razorpay_payment_id:s,razorpay_signature:n,razorpay_order_id:d}=e,i=await A((null==m?void 0:null===(t=m.orders)||void 0===t?void 0:null===(r=t.order)||void 0===r?void 0:r.id)||(null==m?void 0:m.orders.id),d,s,n);i.success?v.push("/orders/success?dtrcpt=".concat(encodeURIComponent(JSON.stringify(null==i?void 0:i.order)))):(console.log("failed"),await l((null==m?void 0:null===(a=m.orders)||void 0===a?void 0:null===(o=a.order)||void 0===o?void 0:o.id)||(null==m?void 0:m.orders.id)),b("Payment verification failed. Please try again."))},prefill:{name:j.fullName,email:"customer@example.com",contact:"1234567890"},theme:{color:"#F37254"}};new window.Razorpay(a).open()}catch(e){b("Payment process failed. Please try again."),console.error("Payment process failed:",e)}finally{x(!1)}};return(0,o.jsxs)("div",{children:[y&&(0,o.jsx)("div",{className:"bg-red-500 text-white p-4 rounded mb-4",children:y}),(0,o.jsxs)("div",{className:"flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32",children:[(0,o.jsx)("a",{href:"#",className:"text-2xl font-bold text-gray-800",children:i}),(0,o.jsx)("div",{className:"mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base",children:(0,o.jsx)("div",{className:"relative",children:(0,o.jsx)("ul",{className:"relative flex w-full items-center justify-between space-x-2 sm:space-x-4",children:c.map((e,r)=>(0,o.jsxs)("li",{className:"flex items-center space-x-3 text-left sm:space-x-4",children:[(0,o.jsx)("a",{className:"flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ".concat(e.active?"bg-emerald-200 text-emerald-700":"bg-gray-600 text-white"),href:e.href,children:e.icon?(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:e.iconPath})}):e.number}),(0,o.jsx)("span",{className:"font-semibold ".concat(e.active?"text-gray-900":"text-gray-500"),children:e.label})]},r))})})})]}),(0,o.jsxs)("div",{className:"grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 m-10",children:[(0,o.jsxs)("div",{className:"px-4 pt-8",children:[(0,o.jsx)("p",{className:"text-xl font-medium",children:"Order Summary"}),(0,o.jsx)("p",{className:"text-gray-400",children:"Check your items. And select a suitable shipping method."}),(0,o.jsx)("div",{className:"mt-8 space-y-2 max-h-96 overflow-y-scroll rounded-lg border bg-white px-2 py-4 sm:px-6",children:null==w?void 0:w.map((e,r)=>{var t,a,s,l;return(0,o.jsxs)("div",{className:"flex flex-col rounded-lg bg-white sm:flex-row",children:[(0,o.jsx)("img",{className:"m-2 h-24 w-28 rounded-md border object-cover object-center",src:(null===(t=e.product)||void 0===t?void 0:t.image)||"/_assets/image.png",alt:(null===(a=e.product)||void 0===a?void 0:a.name)||"Product Image"}),(0,o.jsxs)("div",{className:"flex w-full flex-col px-4 py-4",children:[(0,o.jsx)("span",{className:"font-semibold",children:(null==e?void 0:e.product.name)||"Product Name"}),(0,o.jsx)("span",{className:"float-right text-gray-400",children:(null===(s=e.product)||void 0===s?void 0:s.description)||"No description available."}),(0,o.jsx)("span",{className:"float-right text-gray-400",children:"Quantity: "+(e.quantity||1)}),(0,o.jsx)("p",{className:"text-lg font-bold",children:"$"+((null===(l=e.product)||void 0===l?void 0:l.offerPrice)||"0.00")})]})]},r)})}),(0,o.jsx)("p",{className:"text-lg p-2",children:"Total Bill: $"+g}),(0,o.jsx)("p",{className:"mt-8 text-lg font-medium",children:"Shipping Methods"}),(0,o.jsx)("form",{className:"mt-5 grid gap-6",children:h.map((e,r)=>(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsx)("input",{className:"peer hidden",id:"radio_".concat(r),type:"radio",name:"radio",defaultChecked:e.defaultChecked}),(0,o.jsx)("span",{className:"peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"}),(0,o.jsxs)("label",{className:"peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4",htmlFor:"radio_".concat(r),children:[(0,o.jsx)("img",{className:"w-14 object-contain",src:e.image,alt:e.name}),(0,o.jsxs)("div",{className:"ml-5",children:[(0,o.jsx)("span",{className:"mt-2 font-semibold",children:e.name}),(0,o.jsx)("p",{className:"text-slate-500 text-sm leading-6",children:e.description})]})]})]},r))})]}),(0,o.jsxs)("div",{className:"mt-10 bg-gray-50 px-4 pt-8 lg:mt-0",children:[(0,o.jsx)("p",{className:"text-xl font-medium",children:"Address Details"}),(0,o.jsx)("p",{className:"text-gray-400",children:"Complete your order by providing your delivery address."}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"full-name",className:"mt-4 mb-2 block text-sm font-medium",children:"Full Name"}),(0,o.jsx)("input",{type:"text",id:"full-name",name:"fullName",className:"w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",placeholder:"John Doe",value:j.fullName,onChange:P,onBlur:k}),(0,o.jsx)("label",{htmlFor:"street-address",className:"mt-4 mb-2 block text-sm font-medium",children:"Street Address"}),(0,o.jsx)("input",{type:"text",id:"street-address",name:"streetAddress",className:"w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",placeholder:"123 Main St",value:j.streetAddress,onChange:P,onBlur:k}),(0,o.jsx)("label",{htmlFor:"city",className:"mt-4 mb-2 block text-sm font-medium",children:"City"}),(0,o.jsx)("input",{type:"text",id:"city",name:"city",className:"w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",placeholder:"Los Angeles",value:j.city,onChange:P,onBlur:k}),(0,o.jsx)("label",{htmlFor:"state",className:"mt-4 mb-2 block text-sm font-medium",children:"State/Province"}),(0,o.jsx)("input",{type:"text",id:"state",name:"state",className:"w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",placeholder:"California",value:j.state,onChange:P,onBlur:k}),(0,o.jsx)("label",{htmlFor:"zip",className:"mt-4 mb-2 block text-sm font-medium",children:"ZIP/Postal Code"}),(0,o.jsx)("input",{type:"text",id:"zip",name:"zip",className:"w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",placeholder:"90001",value:j.zip,onChange:P,onBlur:k}),(0,o.jsx)("label",{htmlFor:"country",className:"mt-4 mb-2 block text-sm font-medium",children:"Country"}),(0,o.jsx)("input",{type:"text",id:"country",name:"country",className:"w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",placeholder:"United States",value:j.country,onChange:P,onBlur:k})]})]})]}),(0,o.jsx)("div",{className:"mt-10 text-center",children:(0,o.jsx)("button",{className:"w-3/4 rounded-lg ".concat(f?"bg-gray-500":"bg-gray-900"," p-4 text-sm font-medium text-white"),disabled:f,onClick:I,children:f?"Processing...":"Proceed to Payment"})})]})};var c=t(5408),u=t(3391),m=t(5743);let h={title:"Order Summary",steps:[{number:1,label:"Cart",active:!0,href:"#",icon:null,iconPath:""},{number:2,label:"Shipping",active:!1,href:"#",icon:null,iconPath:""},{number:3,label:"Payment",active:!1,href:"#",icon:null,iconPath:""}],shippingMethods:[{name:"Standard Shipping",description:"5-7 business days",image:"https://via.placeholder.com/50",defaultChecked:!0},{name:"Express Shipping",description:"2-3 business days",image:"https://via.placeholder.com/50",defaultChecked:!1}],billingAddress:{placeholder:"Enter your address",flag:"https://via.placeholder.com/20",states:["California","Texas","New York"],countries:["USA","Canada","UK"]}},p=(0,m.A)(function(){let[e,r]=(0,a.useState)([]),[t,s]=(0,a.useState)(!0),l=new c.A,n=(0,u.d4)(e=>{var r;return null===(r=e.session.user)||void 0===r?void 0:r.id}),m=JSON.parse((0,d.useSearchParams)().get("data"))||[],p=async()=>{if(n)try{let e=await l.viewCart(n);console.log(e),r(e)}catch(e){console.error("Error fetching products:",e)}finally{s(!1)}};return((0,a.useEffect)(()=>{n&&p()},[n]),t)?(0,o.jsx)("div",{children:"Loading..."}):(0,o.jsx)(i,{title:h.title,steps:h.steps,data:e.items,userId:n,orders:m,totalBill:e.totalAmount,shippingMethods:h.shippingMethods,billingAddress:h.billingAddress})})},5071:(e,r,t)=>{"use strict";t.d(r,{N4:()=>d,TU:()=>l,fS:()=>a,gY:()=>n,yT:()=>s});var o=t(6301);let a=async(e,r)=>{try{return(await o.S.post("/user/order/createOrder",{userId:e,items:r})).data}catch(e){var t,a;throw console.error("Error creating order:",e),Error((null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message)||"Error creating order.")}},s=async(e,r,t,a)=>{console.log("order_id:",e),console.log("razorpayId:",r),console.log("paymentId:",t),console.log("siign:",a);try{return(await o.S.post("/user/order/verify",{},{params:{orderId:e,razorpayId:r,paymentId:t,paymentSignature:a}})).data}catch(e){var s,l;throw console.error("Error verifying payment:",e),Error((null==e?void 0:null===(l=e.response)||void 0===l?void 0:null===(s=l.data)||void 0===s?void 0:s.message)||"Error verifying payment.")}},l=async e=>{console.log("orderid:",e);try{return(await o.S.post("/user/order/checkoutOrder?orderId=".concat(e))).data}catch(e){var r,t;throw console.error("Error fetching user orders:",e),Error((null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(r=t.data)||void 0===r?void 0:r.message)||"Error fetching user orders.")}},n=async e=>{console.log("userId:",e);try{return(await o.S.get("/user/order/getUserOrder?userId=".concat(e))).data}catch(e){var r,t;throw console.error("Error fetching user orders:",e),Error((null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(r=t.data)||void 0===r?void 0:r.message)||"Error fetching user orders.")}},d=async e=>{console.log(e);try{return(await o.S.put("/user/order/cancelOrder?orderId=".concat(e))).data}catch(e){var r,t;throw console.error("Error cancelling order:",e),Error((null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(r=t.data)||void 0===r?void 0:r.message)||"Error cancelling order.")}}},5408:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var o=t(3391),a=t(6301);let s=function(){let e=(0,o.d4)(e=>e.session.token),r="shopflow",t=()=>({Authorization:"Bearer ".concat(e),"Content-Type":"application/json"});this.loadCart=function(){let e=localStorage.getItem(r);return e?JSON.parse(e):[]},this.saveCart=function(e){localStorage.setItem(r,JSON.stringify(e))},this.migrateCart=async function(e){let r=this.loadCart();if(r.length>0){for(let t of r)try{await this.addItemToCart(e,t.productId,t.quantity)}catch(e){console.error("Error migrating cart item:",e)}this.clearCart()}},this.addItemToCart=async function(e,r){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;console.log(e),console.log(r);try{return(await a.S.post("/user/cart/addItemToCart",{},{params:{userId:e,productId:r,quantity:o},headers:t()})).data}catch(e){throw console.error("Error adding item to cart:",e),e.response?e.response.data:Error("Network or server error")}},this.viewCart=async function(e){try{let r=await a.S.get("/user/cart/viewCart",{params:{userId:e},headers:t()});if(200===r.status)return r.data.data||[];throw Error(r.data.message||"Failed to retrieve cart")}catch(e){throw console.error("Error viewing cart:",e),e.response?e.response.data:Error("Network or server error")}},this.deleteFromCart=async function(e,r){try{let o=await a.S.delete("/user/cart/deleteFromCart",{params:{userId:e,productId:r},headers:t()});if(200===o.status)return o.data;throw Error(o.data.message||"Failed to delete item from cart")}catch(e){throw console.error("Error deleting item from cart:",e),e.response?e.response.data:Error("Network or server error")}},this.updateCartCount=async function(e,r,o){try{let s=await a.S.put("/user/cart/cartCount",{},{params:{userId:e,productId:r,operation:o},headers:t()});if(console.log(s.status),200===s.status)return s.data;throw Error(s.data||"Failed to update cart count")}catch(e){throw console.error("Error updating cart count:",e),e}},this.clearCart=function(){localStorage.removeItem(r)}}}},e=>{var r=r=>e(e.s=r);e.O(0,[651,391,441,517,358],()=>r(2801)),_N_E=e.O()}]);