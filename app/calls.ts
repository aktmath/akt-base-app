// app/calls.ts

const counterContractAddress = '0xCD01BEc13cc523327F35599f19ff8A5d8f3041f4';

// Base Sepolia'da increment fonksiyonunu çağırmak için ABI
const counterContractAbi = [
  {
    type: 'function',
    name: 'increment',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'number',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
] as const;

// Transaction bileşeni için çağrılar
export const calls = [
  {
    to: counterContractAddress as `0x${string}`,
    abi: counterContractAbi,
    functionName: 'increment',
    args: [],
  },
];
