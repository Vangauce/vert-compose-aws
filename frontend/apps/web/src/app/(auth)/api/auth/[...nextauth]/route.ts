import { authOptions } from '@/lib/auth'
import NextAuth from 'next-auth'

const handler = NextAuth(authOptions)

/**
 * Exporta el manejador de solicitudes HTTP GET y POST.
 * 
 * @module /app/apps/web/src/app/(auth)/api/auth/[...nextauth]/route.ts
 * @exports GET - Manejador de solicitudes HTTP GET.
 * @exports POST - Manejador de solicitudes HTTP POST.
 */
export { handler as GET, handler as POST }
