// src/interfaces/IWallet.ts

import { BigNumber } from 'ethers'; // Import required types from ethers library for handling large numbers
import { Transaction, SignedTransaction } from './ITransaction'; // Import transaction types from ITransaction.ts

export interface IWallet {
    address: string; // Wallet ETH address (0x...)
    privateKey: string; // Private key (secret)
    publicKey: string; // Public key derived from privateKey
    createWallet(): Promise<void>; // Create new wallet (generates keys)
    getBalance(): Promise<BigNumber>; // Query blockchain for current balance
    signTransaction(tx: Transaction): Promise<SignedTransaction>; // Takes unsigned transaction, returns signed with privateKey
}