import { auth } from "@/lib/auth"
 
export default auth((req) => {
console.log("🚀 ~ auth ~ req.url:", req.url)

  // send back to the login page if not logged in
  // if(!req.auth?.user) {
  //   return NextResponse.redirect(new URL("/login", req.url))
  // }
  // req.auth
})

export const config ={
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/"]
}