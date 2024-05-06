import { GetAccountSession } from '@/utils/lib/session'
import { NextRequest, NextResponse } from 'next/server'


const protectedRoutes = ['/profile']
const publicRoutes = ['/sign-in', '/recipes', '/home', 'welcome']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)

  let token = req.cookies.get('access-token')?.value

  // Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/sign-in', req.nextUrl))
  }
  return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}