const counterContractAddress = '0xCD01BEc13cc523327F35599f19ff8A5d8f3041f4';

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

export const calls = [
  {
    to: counterContractAddress as `0x${string}`,
    data: '0xd09de08a', // increment() function selector
  },
];