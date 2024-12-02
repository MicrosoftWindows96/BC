// src/interfaces/ITransaction.ts

import { BigNumber } from 'ethers'; // Import required types from ethers library for handling large numbers

export interface Transaction {
   to: string; // Recipient ETH address
   
   value: BigNumber; // Amount of ETH/tokens to send
   
   gasPrice: BigNumber; // Gas price willing to pay (in wei)
   
   gasLimit: BigNumber; // Gas limit for transaction
   
   data?: string; // Transaction data (for contract interactions)
   
   nonce: number; // Transaction nonce (sequential number)
}

export interface SignedTransaction extends Transaction {
   hash: string; // Original transaction hash
   
   // Signature components
   r: string;  // First 32 bytes of signature
   s: string;  // Second 32 bytes
   v: number;  // Recovery value and chain ID
}