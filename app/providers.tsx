'use client'

import { AuthCoreContextProvider } from '@particle-network/auth-core-modal'
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { WagmiProvider } from 'wagmi'

import config from '@/lib/wallet'

import AuthenticationProvider from './authentication'

interface Props {
    children: React.ReactNode
}

const Providers: React.FC<Props> = ({ children }) => {
    const options = {
        projectId: process.env.NEXT_PUBLIC_PARTICLE_ID as string,
        clientKey: process.env.NEXT_PUBLIC_PARTICLE_KEY as string,
        appId: process.env.NEXT_PUBLIC_PARTICLE_APP_ID as string,
        customStyle: {
            zIndex: 2147483650 // must greater than 2147483646
        }
    }

    const queryClient = new QueryClient()

    return (
        <AuthCoreContextProvider options={options}>
            <WagmiProvider config={config}>
                <SessionProvider>
                    <RainbowKitSiweNextAuthProvider>
                        <QueryClientProvider client={queryClient}>
                            <RainbowKitProvider theme={darkTheme()}>
                                <AuthenticationProvider>{children}</AuthenticationProvider>
                            </RainbowKitProvider>
                        </QueryClientProvider>
                    </RainbowKitSiweNextAuthProvider>
                </SessionProvider>
            </WagmiProvider>
        </AuthCoreContextProvider>
    )
}
export default Providers
