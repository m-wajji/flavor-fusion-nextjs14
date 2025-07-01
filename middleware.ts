import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


//for protected routes (after sign in routes)
const isProtectedRoute = createRouteMatcher([
  ]);

  export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
  });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};