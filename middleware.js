// import { NextResponse } from "next/server";
// default middleware
// export function middleware(request) {
//     console.log(request);
//     NextResponse.redirect(new URL("/about", request.url)); // the idea that to protect the pages in matche below
// }

import { auth } from "./app/_lib/auth";

// auth middleware

export const middleware = auth;

export const config = { // without it, the page will have infinite redirect
    matcher: ["/account", "/cabins"], // to specify which route(s) will middle ware work with
}

