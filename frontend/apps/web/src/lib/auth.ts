import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { ApiError } from '@frontend/types/api'
import { getApiClient } from './api'

/**
 * Decodes a JWT token and returns its payload.
 * @param token - The JWT token to decode.
 * @returns The decoded token payload.
 */
const decodeToken = (
  token: string
): {
  token_type: string
  exp: number
  iat: number
  jti: string
  user_id: number
} => {
  return JSON.parse(atob(token.split('.')[1]))
}

/**
 * Configuration options for NextAuth.
 */
const authOptions: AuthOptions = {
  // Use JWT strategy for session management
  session: {
    strategy: 'jwt'
  },
  // Custom sign-in page
  pages: {
    signIn: '/login'
  },
  callbacks: {
    /**
     * Callback to handle session creation.
     * @param session - The current session object.
     * @param token - The JWT token.
     * @returns The updated session object.
     */
    session: async ({ session, token }) => {
      const access = decodeToken(token.access)
      const refresh = decodeToken(token.refresh)

      // Check if both access and refresh tokens are expired
      if (Date.now() / 1000 > access.exp && Date.now() / 1000 > refresh.exp) {
        return Promise.reject({
          error: new Error('Refresh token expired')
        })
      }

      // Update session with user information and tokens
      session.user = {
        id: access.user_id,
        username: token.username
      }

      session.refreshToken = token.refresh
      session.accessToken = token.access

      return session
    },
    /**
     * Callback to handle JWT token creation and refresh.
     * @param token - The current JWT token.
     * @param user - The user object (if available).
     * @returns The updated JWT token.
     */
    jwt: async ({ token, user }) => {
      // If user is available, merge it with the token
      if (user?.username) {
        return { ...token, ...user }
      }

      // Refresh the access token if it has expired
      if (Date.now() / 1000 > decodeToken(token.access).exp) {
        const apiClient = await getApiClient()
        const res = await apiClient.token.tokenRefreshCreate({
          access: token.access,
          refresh: token.refresh
        })

        token.access = res.access
      }

      return { ...token, ...user }
    }
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'text'
        },
        password: { label: 'Password', type: 'password' }
      },
      /**
       * Authorizes the user with the provided credentials.
       * @param credentials - The user's credentials.
       * @returns The user object if authentication is successful, otherwise null.
       */
      async authorize(credentials) {
        if (credentials === undefined) {
          return null
        }

        try {
          const apiClient = await getApiClient()
          const res = await apiClient.token.tokenCreate({
            username: credentials.username,
            password: credentials.password,
            access: '',
            refresh: ''
          })

          return {
            id: decodeToken(res.access).user_id,
            username: credentials.username,
            access: res.access,
            refresh: res.refresh
          }
        } catch (error) {
          if (error instanceof ApiError) {
            return null
          }
        }

        return null
      }
    })
  ]
}

// Export the authentication options for use in NextAuth configuration
export { authOptions }
