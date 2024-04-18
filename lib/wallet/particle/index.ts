import type { Wallet, WalletDetailsParams } from '@rainbow-me/rainbowkit'
import { createConnector } from 'wagmi'

import { googleIcon, particleIcon, twitterIcon } from './icon'
import { particleWagmiWallet } from './wallet'

export const particleWallet = (): Wallet => ({
    id: 'particle',
    name: 'Particle Wallet',
    iconUrl: async () => particleIcon,
    iconBackground: '#fff',
    installed: true,
    createConnector: (walletDetails: WalletDetailsParams) =>
        createConnector(
            config =>
                ({
                    ...particleWagmiWallet()(config),
                    ...walletDetails
                }) as any
        )
})

export const particleGoogleWallet = (): Wallet => ({
    id: 'particle_google',
    name: 'Google',
    iconUrl: async () => googleIcon,
    iconBackground: '#fff',
    installed: true,
    createConnector: (walletDetails: WalletDetailsParams) =>
        createConnector(
            config =>
                ({
                    ...particleWagmiWallet({ socialType: 'google' })(config),
                    ...walletDetails
                }) as any
        )
})

export const particleTwitterWallet = (): Wallet => ({
    id: 'particle_twitter',
    name: 'Twitter',
    iconUrl: async () => twitterIcon,
    iconBackground: '#fff',
    installed: true,
    createConnector: (walletDetails: WalletDetailsParams) =>
        createConnector(
            config =>
                ({
                    ...particleWagmiWallet({ socialType: 'twitter' })(config),
                    ...walletDetails
                }) as any
        )
})

//Todo: Add Discord Logo
export const discordWallet = (): Wallet => ({
    id: 'particle_discord',
    name: 'Discord',
    iconUrl: async () => twitterIcon,
    iconBackground: '#fff',
    installed: true,
    createConnector: (walletDetails: WalletDetailsParams) =>
        createConnector(
            config =>
                ({
                    ...particleWagmiWallet({ socialType: 'discord' })(config),
                    ...walletDetails
                }) as any
        )
})
