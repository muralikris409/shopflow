(()=>{var e={};e.id=760,e.ids=[760],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},12412:e=>{"use strict";e.exports=require("assert")},94735:e=>{"use strict";e.exports=require("events")},29021:e=>{"use strict";e.exports=require("fs")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},21820:e=>{"use strict";e.exports=require("os")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},83997:e=>{"use strict";e.exports=require("tty")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},68693:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>p,pages:()=>l,routeModule:()=>c,tree:()=>d});var s=t(70260),o=t(28203),i=t(25155),a=t.n(i),n=t(67292),u={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>n[e]);t.d(r,u);let d=["",{children:["products",{children:["subcategory",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,57375)),"/home/murali/Documents/Cloning task/shopflow/src/app/products/subcategory/[id]/page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,54387)),"/home/murali/Documents/Cloning task/shopflow/src/app/products/layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,78162))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,37043)),"/home/murali/Documents/Cloning task/shopflow/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,26420)),"/home/murali/Documents/Cloning task/shopflow/src/app/not-found.js"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,78162))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["/home/murali/Documents/Cloning task/shopflow/src/app/products/subcategory/[id]/page.js"],p={require:t,loadChunk:()=>Promise.resolve()},c=new s.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/products/subcategory/[id]/page",pathname:"/products/subcategory/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},57071:(e,r,t)=>{Promise.resolve().then(t.bind(t,34825))},16903:(e,r,t)=>{Promise.resolve().then(t.bind(t,66372))},66372:(e,r,t)=>{"use strict";t.d(r,{default:()=>d});var s=t(45512),o=t(58009),i=t(92273);t(3844);var a=t(28531),n=t.n(a),u=t(45891);function d({id:e}){(0,i.d4)(e=>e.generic.data.filter);let[r,t]=(0,o.useState)([]),[a,d]=(0,o.useState)(null);return(0,s.jsx)(n(),{href:"",className:"container mx-auto p-4",children:a?(0,s.jsx)("p",{className:"text-red-500 text-center",children:a}):r?.length>0?(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:r.map(e=>(0,s.jsx)(n(),{href:`/product/productname?id=${e.id}`,children:(0,s.jsx)(u.default,{product:e})},e.id))}):(0,s.jsx)("p",{className:"text-gray-500 text-center",children:"No subcategories available"})})}},34825:(e,r,t)=>{"use strict";t.d(r,{default:()=>s});let s=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/murali/Documents/Cloning task/shopflow/src/app/products/subcategory/[id]/SubCategoryProduct.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/murali/Documents/Cloning task/shopflow/src/app/products/subcategory/[id]/SubCategoryProduct.js","default")},57375:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var s=t(62740);t(76301);var o=t(34825);async function i({params:e}){let{id:r}=await e;return(0,s.jsx)(o.default,{id:r})}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,803,140,705],()=>t(68693));module.exports=s})();