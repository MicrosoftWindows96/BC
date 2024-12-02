// src/interfaces/IWallet.ts
import { Transaction, SignedTransaction } from './ITransaction'; // import Transaction and SignedTransaction interfaces from ITransaction.ts

export interface IWallet {
    address: string; // wallet Ethereum address
    privateKey: string; // wallet private key
    publicKey: string; // wallet public key (derived from private key)

    createWallet(): Promise<void>; // create a new wallet
    getBalance(): Promise<bigint>; // get wallet balance
    signTransaction(tx: Transaction): Promise<SignedTransaction>; // sign a transaction with wallet private key
}