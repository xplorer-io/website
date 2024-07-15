import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/login(.*)', '/register(.*)', '/about-us(.*)', '/', '/accolades(.*)', '/blogs(.*)']);

export default clerkMiddleware((auth, request) => {
    if(!isPublicRoute(request)) {
        auth().protect();
    }
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
