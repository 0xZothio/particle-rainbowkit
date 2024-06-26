import 'next-auth/jwt'

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module 'next-auth/jwt' {
    interface JWT {}
}

declare module 'next-auth' {
    interface Session {
        id: string
    }
}
