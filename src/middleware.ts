import { type NextRequest, NextResponse } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
  // Skip middleware for public pages (no auth check needed)
  const publicPaths = ['/', '/login', '/signup', '/forgot-password'];
  const isPublicPath = publicPaths.some(path => 
    request.nextUrl.pathname === path || 
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api')
  );

  // For public paths, just continue without Supabase check
  if (isPublicPath) {
    return NextResponse.next();
  }

  // For protected paths (like /dashboard), run the full auth check
  try {
    return await updateSession(request);
  } catch (error) {
    console.error('Middleware error:', error);
    // If Supabase fails, redirect to login
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
