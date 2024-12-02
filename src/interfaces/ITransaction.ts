// src/interfaces/ITransaction.ts

export interface Transaction {
   to: string; // recipient address
   value: bigint; // amount to send
   gasPrice: bigint; // gas price
   gasLimit: bigint; // gas limit
   data?: string; // tx data (for contract calls)
   nonce: number; // tx nonce (sequential number)
}

export interface SignedTransaction extends Transaction {
   hash: string; // original tx hash
   r: string; // first 32 bytes of signature
   s: string; // second 32 bytes of signature
   v: number; // recovery value and chain ID
}