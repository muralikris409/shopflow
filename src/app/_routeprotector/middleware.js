// import { NextResponse } from "next/server";
// import { parse } from "cookie";

// export function middleware(req) {
//   const cookies = parse(req.headers.get("cookie") || "");
//   const session = cookies.shopflow_session;

//   if (!session) {
//     const url = req.nextUrl.clone();
//     url.pathname = "/auth";
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
    
//     "/checkout*", 
//   ],
// };
