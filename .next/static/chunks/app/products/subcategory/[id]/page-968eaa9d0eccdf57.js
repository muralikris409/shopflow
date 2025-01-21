(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[760],{6113:(e,t,r)=>{Promise.resolve().then(r.bind(r,9897))},459:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(5155);r(8173);var s=r(6046);r(2115);let c=e=>{let{product:t}=e,r=(0,s.useRouter)();return(0,a.jsx)("div",{onClick:()=>r.push("product/".concat(t.name,"?id=").concat(t.id)),children:(0,a.jsxs)("div",{className:"relative max-h-30 m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md",children:[(0,a.jsxs)("div",{className:"relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl",children:[(0,a.jsx)("img",{className:"object-cover w-full",src:(null==t?void 0:t.image)||"/_assets/image.png",alt:(null==t?void 0:t.name)||"Placeholder Image"}),t.discountPercentage&&(0,a.jsxs)("span",{className:"absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white",children:[t.discountPercentage,"% OFF"]})]}),(0,a.jsxs)("div",{className:"mt-1 px-5 pb-5",children:[(0,a.jsx)("h5",{className:"text-xl tracking-tight text-slate-900",children:t.name||"Unnamed Product"}),(0,a.jsx)("div",{className:"mt-1 flex items-center justify-between",children:(0,a.jsx)("p",{children:t.actualPrice?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("span",{className:"text-xl font-bold text-slate-900",children:["$",t.offerPrice]}),t.actualPrice&&(0,a.jsxs)("span",{className:"text-sm ml-1 text-slate-900 line-through",children:["$",t.actualPrice]})]}):(0,a.jsx)("span",{className:"text-gray-500",children:"Price not available"})})}),(0,a.jsxs)("div",{className:"flex items-center mb-2",children:[t.rating?Array.from({length:t.rating}).map((e,r)=>(0,a.jsx)("svg",{"aria-hidden":"true",className:"h-4 w-4 ".concat(r<t.rating?"text-yellow-300":"text-gray-300"),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},r)):(0,a.jsx)("span",{className:"text-gray-500",children:"No ratings yet"}),t.rating&&(0,a.jsx)("span",{className:"mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold",children:t.rating})]})]})]})})}},6301:(e,t,r)=>{"use strict";r.d(t,{S:()=>a});let a=r(2651).A.create({baseURL:"http://192.168.0.114:5000"})},9897:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(5155),s=r(2115),c=r(3391),l=r(5610),o=r(8173),n=r.n(o),d=r(459);function i(e){let{id:t}=e,r=(0,c.d4)(e=>e.generic.data.filter),[o,i]=(0,s.useState)([]),[u,g]=(0,s.useState)(null);return(0,s.useEffect)(()=>{(async()=>{try{let e;e=r&&r.selectedCategory?await (0,l.K4)(r):await (0,l.Zu)(t),i(e.data)}catch(e){console.log(JSON.stringify(e)),g("Failed to fetch products. Please try again later.")}})()},[r,t]),(0,a.jsx)(n(),{href:"",className:"container mx-auto p-4",children:u?(0,a.jsx)("p",{className:"text-red-500 text-center",children:u}):(null==o?void 0:o.length)>0?(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:o.map(e=>(0,a.jsx)(n(),{href:"/product/productname?id=".concat(e.id),children:(0,a.jsx)(d.default,{product:e})},e.id))}):(0,a.jsx)("p",{className:"text-gray-500 text-center",children:"No subcategories available"})})}},5610:(e,t,r)=>{"use strict";r.d(t,{K4:()=>s,Lp:()=>o,ZU:()=>i,Zu:()=>c,d$:()=>l,p7:()=>n,yT:()=>d}),r(2115);var a=r(6301);let s=async e=>{console.log(e);try{return(await a.S.get("/products/filteredProducts",{params:{categoryName:null==e?void 0:e.selectedCategory,subCategoryNames:null==e?void 0:e.selectedSubcategories,sort:null==e?void 0:e.sortOption}})).data}catch(e){throw console.error("Error fetching filtered products:",e.message),Error("Unable to fetch filtered products. Please try again later.")}};async function c(e){try{let t=await a.S.get("/products/getProductsByCategory",{params:{subCategoryId:e}});return console.log(t.data),t.data}catch(e){throw console.error("Error fetching products by subcategory:",e.message),Error("Unable to fetch products for the selected subcategory. Please try again later.")}}async function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;try{return(await a.S.get("/products/getAllProducts",{params:{page:e}})).data}catch(e){throw console.error("Error fetching products:",e.message),Error("Unable to fetch products. Please try again later.")}}async function o(){try{return(await a.S.get("/products/getNewArrivals")).data}catch(e){throw console.error("Error fetching flash deals:",e.message),Error("Unable to fetch flash deals. Please try again later.")}}async function n(){try{let e=await a.S.get("/products/Category");return console.log(e.data),e.data}catch(e){throw console.error("Error fetching categories:",e.message),Error("Unable to fetch categories. Please try again later.")}}async function d(e){try{return(await a.S.get("/products/getProductById",{params:{productId:e}})).data}catch(e){throw console.error("Error fetching product by ID:",e.message),Error("Unable to fetch product details. Please try again later.")}}async function i(e){try{return(await a.S.get("/products/getProductBySearch",{params:{query:e}})).data}catch(e){throw console.error("Error fetching searched products:",e.message),Error("Unable to search for products. Please try again later.")}}}},e=>{var t=t=>e(e.s=t);e.O(0,[651,391,28,441,517,358],()=>t(6113)),_N_E=e.O()}]);