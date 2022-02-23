export const MASTERCHEF_ADDRESS = '0x22821C6253D0fd1C009FB61fFA710d6D96f8E43d';
export const CHIPZ_ADDRESS = '0xF5D3cc918Ca1B2d4387a676A40F62c2C04317684';
export const CHIPZ_BNB_ADDRESS = '0xCc11501F6245272FEc7058498a34e96Cb450a479';

export const MASTERCHEF_ABI = [
    {
        inputs: [
            { internalType: 'contract IERC20', name: '_chipz', type: 'address' },
            { internalType: 'address', name: '_stakingWallet', type: 'address' },
            { internalType: 'address', name: '_feeAddress', type: 'address' },
            { internalType: 'uint256', name: '_chipzPerBlock', type: 'uint256' },
            { internalType: 'uint256', name: '_startBlock', type: 'uint256' }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'user', type: 'address' },
            { indexed: true, internalType: 'uint256', name: 'pid', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
        ],
        name: 'Deposit',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'user', type: 'address' },
            { indexed: true, internalType: 'address', name: 'newAddress', type: 'address' }
        ],
        name: 'SetFeeAddress',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'user', type: 'address' },
            { indexed: true, internalType: 'address', name: 'stakingWallet', type: 'address' }
        ],
        name: 'SetStakingWallet',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'user', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'chipzPerBlock', type: 'uint256' }
        ],
        name: 'UpdateEmissionRate',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'user', type: 'address' },
            { indexed: true, internalType: 'uint256', name: 'pid', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
        ],
        name: 'Withdraw',
        type: 'event'
    },
    {
        inputs: [],
        name: 'BONUS_MULTIPLIER',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'uint256', name: '_allocPoint', type: 'uint256' },
            { internalType: 'contract IERC20', name: '_stakingToken', type: 'address' },
            { internalType: 'uint16', name: '_depositFeeBP', type: 'uint16' },
            { internalType: 'bool', name: '_withUpdate', type: 'bool' }
        ],
        name: 'add',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'chipz',
        outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'chipzPerBlock',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'uint256', name: '_pid', type: 'uint256' },
            { internalType: 'uint256', name: '_amount', type: 'uint256' }
        ],
        name: 'deposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'feeAddress',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'uint256', name: '_from', type: 'uint256' },
            { internalType: 'uint256', name: '_to', type: 'uint256' }
        ],
        name: 'getMultiplier',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'pure',
        type: 'function'
    },
    { inputs: [], name: 'massUpdatePools', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'uint256', name: '_pid', type: 'uint256' },
            { internalType: 'address', name: '_user', type: 'address' }
        ],
        name: 'pendingChipz',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
        name: 'poolExistence',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'poolInfo',
        outputs: [
            { internalType: 'contract IERC20', name: 'stakingToken', type: 'address' },
            { internalType: 'uint256', name: 'allocPoint', type: 'uint256' },
            { internalType: 'uint256', name: 'lastRewardBlock', type: 'uint256' },
            { internalType: 'uint256', name: 'accChipzPerShare', type: 'uint256' },
            { internalType: 'uint16', name: 'depositFeeBP', type: 'uint16' }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'poolLength',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
        inputs: [
            { internalType: 'uint256', name: '_pid', type: 'uint256' },
            { internalType: 'uint256', name: '_allocPoint', type: 'uint256' },
            { internalType: 'uint16', name: '_depositFeeBP', type: 'uint16' },
            { internalType: 'bool', name: '_withUpdate', type: 'bool' }
        ],
        name: 'set',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: '_feeAddress', type: 'address' }],
        name: 'setFeeAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: '_stakingWallet', type: 'address' }],
        name: 'setStakingWalletAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'stakingWallet',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'startBlock',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalAllocPoint',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: '_chipzPerBlock', type: 'uint256' }],
        name: 'updateEmissionRate',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: '_pid', type: 'uint256' }],
        name: 'updatePool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'address', name: '', type: 'address' }
        ],
        name: 'userInfo',
        outputs: [
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
            { internalType: 'uint256', name: 'rewardDebt', type: 'uint256' }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'uint256', name: '_pid', type: 'uint256' },
            { internalType: 'uint256', name: '_amount', type: 'uint256' }
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'withdrawToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];

export const CHIPZ_BNB_ABI = [
    { inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'amount0', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'amount1', type: 'uint256' },
            { indexed: true, internalType: 'address', name: 'to', type: 'address' }
        ],
        name: 'Burn',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'amount0', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'amount1', type: 'uint256' }
        ],
        name: 'Mint',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'amount0In', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'amount1In', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'amount0Out', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'amount1Out', type: 'uint256' },
            { indexed: true, internalType: 'address', name: 'to', type: 'address' }
        ],
        name: 'Swap',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: 'uint112', name: 'reserve0', type: 'uint112' },
            { indexed: false, internalType: 'uint112', name: 'reserve1', type: 'uint112' }
        ],
        name: 'Sync',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'from', type: 'address' },
            { indexed: true, internalType: 'address', name: 'to', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        name: 'Transfer',
        type: 'event'
    },
    {
        constant: true,
        inputs: [],
        name: 'DOMAIN_SEPARATOR',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'MINIMUM_LIQUIDITY',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'PERMIT_TYPEHASH',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'address', name: '', type: 'address' }
        ],
        name: 'allowance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
        name: 'burn',
        outputs: [
            { internalType: 'uint256', name: 'amount0', type: 'uint256' },
            { internalType: 'uint256', name: 'amount1', type: 'uint256' }
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'factory',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'getReserves',
        outputs: [
            { internalType: 'uint112', name: '_reserve0', type: 'uint112' },
            { internalType: 'uint112', name: '_reserve1', type: 'uint112' },
            { internalType: 'uint32', name: '_blockTimestampLast', type: 'uint32' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            { internalType: 'address', name: '_token0', type: 'address' },
            { internalType: 'address', name: '_token1', type: 'address' }
        ],
        name: 'initialize',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'kLast',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
        name: 'mint',
        outputs: [{ internalType: 'uint256', name: 'liquidity', type: 'uint256' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'nonces',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
            { internalType: 'uint256', name: 'deadline', type: 'uint256' },
            { internalType: 'uint8', name: 'v', type: 'uint8' },
            { internalType: 'bytes32', name: 'r', type: 'bytes32' },
            { internalType: 'bytes32', name: 's', type: 'bytes32' }
        ],
        name: 'permit',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'price0CumulativeLast',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'price1CumulativeLast',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
        name: 'skim',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            { internalType: 'uint256', name: 'amount0Out', type: 'uint256' },
            { internalType: 'uint256', name: 'amount1Out', type: 'uint256' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'bytes', name: 'data', type: 'bytes' }
        ],
        name: 'swap',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    { constant: false, inputs: [], name: 'sync', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' },
    {
        constant: true,
        inputs: [],
        name: 'token0',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'token1',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    }
];

export const CHIPZ_ABI = [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    { anonymous: false, inputs: [], name: 'Pause', type: 'event' },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'from', type: 'address' },
            { indexed: true, internalType: 'address', name: 'to', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        name: 'Transfer',
        type: 'event'
    },
    { anonymous: false, inputs: [], name: 'Unpause', type: 'event' },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'addBlacklist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'adminAddress',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'spender', type: 'address' }
        ],
        name: 'allowance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' }
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' }
        ],
        name: 'decreaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'addedValue', type: 'uint256' }
        ],
        name: 'increaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'isBlacklist',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'time', type: 'uint256' }],
        name: 'lock',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'pause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    { inputs: [], name: 'paused', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'removeBlacklist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
        inputs: [{ internalType: 'bool', name: '_cooldownEnabled', type: 'bool' }],
        name: 'setCooldownEnabled',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: '_to', type: 'address' },
            { internalType: 'uint256', name: '_value', type: 'uint256' }
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '_success', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: '_from', type: 'address' },
            { internalType: 'address', name: '_to', type: 'address' },
            { internalType: 'uint256', name: '_value', type: 'uint256' }
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '_success', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    { inputs: [], name: 'unpause', outputs: [], stateMutability: 'nonpayable', type: 'function' }
];
