// material-ui
import Web3 from 'web3';

import { Typography, Box, Switch, Button, useMediaQuery, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';

import { useEffect, useState } from 'react';

import useMetaMask from 'hooks/metamask';
import { formatNumber, getBalanceNumber } from 'utils/formatBalance';

import farming from '../../assets/images/farm-ethereum.png';
import logoback from '../../assets/images/logo_back.png';
import link from '../../assets/images/link.png';
import {
    MASTERCHEF_ABI,
    MASTERCHEF_ADDRESS,
    CHIPZ_BNB_ABI,
    CHIPZ_BNB_ADDRESS,
    CHIPZ_ADDRESS,
    CHIPZ_ABI,
    ERC20ABI
} from '../../contract/config';
import metamask from '../../assets/images/metamask.png';
import { MaxUint256 } from '@ethersproject/constants';
import axios from 'axios';

// ==============================|| SAMPLE PAGE ||============================== //
const IOSSwitch = styled(Switch)(() => ({
    width: 80,
    height: 40,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        margin: 0,
        padding: 2,
        transform: 'translateX(0px)',
        '&.Mui-checked': {
            '& .MuiSwitch-thumb': {
                backgroundColor: '#CE2179',
                color: '#1A2033',
                border: '1px solid #CE2179'
            },
            color: '#CE2179',
            transform: 'translateX(36px)',
            '& .MuiSwitch-thumb:before': {
                content: "'|||'",
                textAlign: 'center'
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#1A2033',
                border: '1px solid #CE2179'
            }
        }
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#8D91A0',
        color: '#1A2033',
        border: '1px solid #8D91A0',
        borderRadius: 20,
        width: 40,
        height: 36,
        '&:before': {
            content: "'|||'",
            textAlign: 'center',
            position: 'absolute',
            fontSize: '18px',
            borderRadius: 20,
            width: '100%',
            height: '100%',
            left: 0,
            top: 10
        }
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1A2033',
        borderRadius: 20,
        border: '1px solid #CE2179'
    }
}));

const ActiveSwitch = styled(Switch)(() => ({
    width: 210,
    height: 40,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        margin: 0,
        padding: 0,
        transform: 'translateX(0px)',
        '&.Mui-checked': {
            '& .MuiSwitch-thumb': {
                backgroundColor: '#CE2179',
                color: '#FFFFFF',
                border: '1px solid #CE2179'
            },
            color: '#FFFFFF',
            transform: 'translateX(110px)',
            '& .MuiSwitch-thumb:before': {
                content: "'Inactive'",
                textAlign: 'center'
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#1A2033',
                border: '1px solid #CE2179'
            }
        }
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#CE2179',
        border: '1px solid #CE2179',
        borderRadius: 20,
        width: 100,
        height: 40,
        '&:before': {
            content: "'Active'",
            textAlign: 'center',
            position: 'absolute',
            fontSize: '18px',
            borderRadius: 20,
            width: '100%',
            height: '100%',
            left: 0,
            top: 10
        }
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1A2033',
        borderRadius: 20,
        border: '1px solid #CE2179'
    }
}));

const isEnable = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const lpContract = new web3.eth.Contract(CHIPZ_BNB_ABI, CHIPZ_BNB_ADDRESS);
    const chipzContract = new web3.eth.Contract(CHIPZ_ABI, CHIPZ_ADDRESS);

    const allowance = await lpContract.methods.allowance(account, MASTERCHEF_ADDRESS).call();
    const chipzAllowance = await chipzContract.methods.allowance(account, MASTERCHEF_ADDRESS).call();

    const isApproved = account && allowance && allowance > 0 && chipzAllowance && chipzAllowance > 0;

    return isApproved;
};

const isStack = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const masterchefContract = new web3.eth.Contract(MASTERCHEF_ABI, MASTERCHEF_ADDRESS);

    const amount = await masterchefContract.methods.userInfo(0, account).call();

    const isStacked = account && amount[0] && amount[0] > 0;

    return isStacked;
};

const isEarned = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const masterchefContract = new web3.eth.Contract(MASTERCHEF_ABI, MASTERCHEF_ADDRESS);

    const earned = await masterchefContract.methods.pendingChipz(0, account).call();

    return earned;
};

const isDepositFee = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const masterchefContract = new web3.eth.Contract(MASTERCHEF_ABI, MASTERCHEF_ADDRESS);

    const result = await masterchefContract.methods.poolInfo(0).call();

    return result.depositFeeBP;
    // return depositFee[4];
};

const Farms = () => {
    const [open, setOpen] = useState(false);
    const [approve, setApprove] = useState(false);
    const [stacked, setStaked] = useState(false);
    const [depositFee, setDepositFee] = useState(0);
    const [apr, setApr] = useState(0);
    const [totalLiquidity, setTotalLiquidity] = useState(0);
    const isMobile = useMediaQuery('(max-width:600px)');

    const [showMetamask, setShowMetamask] = useState(false);
    const [stackModal, setStakeModal] = useState(false);
    const [unstackModal, setUnstakeModal] = useState(false);
    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);

    const [stakedBalance, setStakedBalance] = useState(0);
    const [earnedBalance, setEarnedBalance] = useState(0);

    const { connect, isActive } = useMetaMask();

    const enableContract = async () => {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const lpContract = new web3.eth.Contract(CHIPZ_BNB_ABI, CHIPZ_BNB_ADDRESS);
        await lpContract.methods.approve(MASTERCHEF_ADDRESS, MaxUint256).send({ from: account });
        const chipzContract = new web3.eth.Contract(CHIPZ_ABI, CHIPZ_ADDRESS);
        await chipzContract.methods.approve(MASTERCHEF_ADDRESS, MaxUint256).send({ from: account });
    };

    const updateStake = async () => {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const lpContract = new web3.eth.Contract(CHIPZ_BNB_ABI, CHIPZ_BNB_ADDRESS);

        const amount = await lpContract.methods.balanceOf(account).call();
        setBalance(amount);
    };

    const updateUnstake = async () => {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const masterchefContract = new web3.eth.Contract(MASTERCHEF_ABI, MASTERCHEF_ADDRESS);

        const amount = await masterchefContract.methods.userInfo(0, account).call();
        setBalance(amount[0]);
    };

    const showStakeModal = async () => {
        await updateStake();
        setAmount(0);
        setStakeModal(true);
    };

    const showUnstackModal = async () => {
        await updateUnstake();
        setAmount(0);
        setUnstakeModal(true);
    };

    const clickMetamask = () => {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        setShowMetamask(!showMetamask);
    };

    const connectWallet = async () => {
        // Check if MetaMask is installed on user's browser
        await connect();
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        setShowMetamask(!showMetamask);
    };

    const deposit = async () => {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const masterchefContract = new web3.eth.Contract(MASTERCHEF_ABI, MASTERCHEF_ADDRESS);
        setLoading(true);
        await masterchefContract.methods.deposit(0, web3.utils.toWei(amount)).send({ from: account });
        setLoading(false);
        setStakeModal(false);
    };
    const withdraw = async () => {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const masterchefContract = new web3.eth.Contract(MASTERCHEF_ABI, MASTERCHEF_ADDRESS);
        setLoading(true);
        await masterchefContract.methods.withdraw(0, web3.utils.toWei(amount)).send({ from: account });
        setLoading(false);
        setUnstakeModal(false);
    };

    const harvest = async () => {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const masterchefContract = new web3.eth.Contract(MASTERCHEF_ABI, MASTERCHEF_ADDRESS);
        setLoading(true);
        try {
            await masterchefContract.methods.deposit(0, 0).send({ from: account });
        } catch (e) {
            setLoading(false);
        }
        setLoading(false);
    };

    const setMaxBalance = () => {
        setAmount(getBalanceNumber(balance));
    };

    useEffect(async () => {
        const isEnabled = await isEnable();
        setApprove(isEnabled);
        const depositFee = await isDepositFee();
        setDepositFee(depositFee);
    }, [isEnable]);

    useEffect(async () => {
        const isStacked = await isStack();
        setStaked(isStacked);
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const masterchefContract = new web3.eth.Contract(MASTERCHEF_ABI, MASTERCHEF_ADDRESS);
        const amount = await masterchefContract.methods.userInfo(0, account).call();
        setStakedBalance(formatNumber(getBalanceNumber(amount[0]), 2));
    }, [isStack]);

    useEffect(() => {
        const id = setInterval(async () => {
            const earned = await isEarned();
            const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
            setEarnedBalance(formatNumber(getBalanceNumber(earned), 2));
            const poolContract = new web3.eth.Contract(CHIPZ_BNB_ABI, CHIPZ_BNB_ADDRESS);
            const result = await poolContract.methods.getReserves().call();
            const supply = (await poolContract.methods.totalSupply().call()) / Math.pow(10, 18);
            const totalStaked = await poolContract.methods.balanceOf(MASTERCHEF_ADDRESS).call();
            console.log(supply);
            const reserve0 = result[0] / Math.pow(10, 18),
                reserve1 = result[1] / Math.pow(10, 18);
            const tokenresult = await axios.get(`https://api.pancakeswap.info/api/v2/tokens/0x0fABCB70eeDA798F9241F4bb11cceEa7d93B157a`);
            const chipz_price = tokenresult.data.data.price / 1;
            const chipz_bnb = tokenresult.data.data.price_BNB / 1;
            const bnb_price = chipz_price / chipz_bnb;
            const lptoken_price = (2 * Math.sqrt(reserve0 * reserve1) * Math.sqrt(bnb_price * chipz_price)) / supply;
            const totalRewardPricePerYear = chipz_price * Math.pow(10, 16) * 10512000;
            const totalStakingTokenInPool = lptoken_price * totalStaked;
            const apr = (totalRewardPricePerYear / totalStakingTokenInPool) * 100;
            const chipzTokenContract = new web3.eth.Contract(ERC20ABI, CHIPZ_ADDRESS);
            const chipzbalance = (await chipzTokenContract.methods.balanceOf(CHIPZ_BNB_ADDRESS).call()) / Math.pow(10, 18);
            const wbnbContract = new web3.eth.Contract(ERC20ABI, '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd');
            const bnbbalance = (await wbnbContract.methods.balanceOf(CHIPZ_BNB_ADDRESS).call()) / Math.pow(10, 18);
            setTotalLiquidity(chipzbalance * chipz_price + bnb_price * bnbbalance);
            setApr(apr);
            //'https://api.pancakeswap.info/api/v2/tokens/0x0fABCB70eeDA798F9241F4bb11cceEa7d93B157a
        }, 1000);
        return () => {
            clearInterval(id);
        };
    }, []);

    // useEffect(async () => {
    //     const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    //     const accounts = await web3.eth.getAccounts();
    //     const account = accounts[0];
    //     const masterchefContract = new web3.eth.Contract(MASTERCHEF_ABI, MASTERCHEF_ADDRESS);
    //     console.log(masterchefContract);
    //     const poolLength = await masterchefContract.methods.poolLength().call();

    //     // for (i = 1; i < poolLength; i++) {
    //     //     const poolInfo = await masterchefContract.methods.poolInfo(i).call();
    //     // }
    // }, []);

    const mainButton =
        isActive && approve ? (
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" width="100%" gap="20px" mb="20px">
                <Button
                    sx={{
                        color: 'white',
                        fontSize: '15px',
                        fontWeight: 600,
                        padding: '5px 25px',
                        backgroundColor: '#CE2179',
                        '&:hover': { backgroundColor: '#BE1169' },
                        boxShadow: '0px 8px 0px #8F1754',
                        minWidth: '150px',
                        borderRadius: '7px'
                    }}
                    disabled={loading}
                    onClick={() => harvest()}
                >
                    Harvest
                </Button>
                {!stacked ? (
                    <Button
                        sx={{
                            color: 'white',
                            fontSize: '15px',
                            fontWeight: 600,
                            padding: '5px 25px',
                            backgroundColor: '#CE2179',
                            '&:hover': { backgroundColor: '#BE1169' },
                            boxShadow: '0px 8px 0px #8F1754',
                            minWidth: '150px',
                            borderRadius: '7px'
                        }}
                        onClick={() => showStakeModal()}
                    >
                        Stake LP
                    </Button>
                ) : (
                    <Box display="flex" width="150px" justifyContent="space-between">
                        <Button
                            sx={{
                                color: 'white',
                                fontSize: '15px',
                                fontWeight: 600,
                                padding: '5px 25px',
                                backgroundColor: '#CE2179',
                                '&:hover': { backgroundColor: '#BE1169' },
                                boxShadow: '0px 8px 0px #8F1754',
                                borderRadius: '7px',
                                width: '70px'
                            }}
                            onClick={() => showStakeModal()}
                        >
                            +
                        </Button>
                        <Button
                            sx={{
                                color: 'white',
                                fontSize: '15px',
                                fontWeight: 600,
                                padding: '5px 25px',
                                backgroundColor: '#CE2179',
                                '&:hover': { backgroundColor: '#BE1169' },
                                boxShadow: '0px 8px 0px #8F1754',
                                borderRadius: '7px',
                                width: '70px'
                            }}
                            onClick={() => showUnstackModal()}
                        >
                            -
                        </Button>
                    </Box>
                )}
            </Box>
        ) : (
            <Button
                sx={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 600,
                    padding: '5px 25px',
                    backgroundColor: '#CE2179',
                    '&:hover': { backgroundColor: '#BE1169' },
                    boxShadow: '0px 8px 0px #8F1754',
                    minWidth: '150px',
                    borderRadius: '7px',
                    width: '320px',
                    marginBottom: '20px'
                }}
                onClick={() => enableContract()}
            >
                Enable Contract
            </Button>
        );

    return (
        <Box>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h2" color="white">
                        Stake tokens to earn CHPZ
                    </Typography>
                    <Typography variant="h4" color="#CE2179" pt="10px">
                        Deposit fee will be used to buy back CHPZ
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" pt="20px">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" mr="10px">
                        <IOSSwitch />
                        <Typography pl="10px" color="#8D91A0">
                            Staked Only
                        </Typography>
                    </Box>
                    <ActiveSwitch />
                </Box>
                <Box display="flex" flexWrap="wrap" rowGap="40px" columnGap="40px" justifyContent="center">
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        bgcolor="#1A2033"
                        p="15px"
                        borderRadius="16px"
                        rowGap="25px"
                        mt="50px"
                        boxShadow="0px 40px 60px -50px #000000"
                    >
                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" width="100%">
                            <img src={farming} alt="farming" style={{ width: '45px' }} />
                            <Box display="flex" flexDirection="row" alignItems="center" color="white" fontSize="20px">
                                <Box>CHPZ-BNB LP</Box>
                                <Box
                                    width="60px"
                                    height="20px"
                                    borderRadius="15px"
                                    border="1px solid #0085FF"
                                    textAlign="center"
                                    p="1px 5px"
                                    ml="10px"
                                >
                                    <span style={{ margin: '5px' }}>0.2X</span>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" width="100%" px="30px">
                            <Box display="flex" flexDirection="column" alignItems="flex-start" color="#8D91A0" gap="15px">
                                <Typography fontSize="16px">APR:</Typography>
                                <Typography fontSize="16px">Earn:</Typography>
                                <Typography fontSize="16px">Deposit Fee:</Typography>
                                <Typography fontSize="16px">CHIPZ-BNB Staked:</Typography>
                                <Typography fontSize="16px">CHIPZ Earned:</Typography>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="flex-start" color="white" gap="15px">
                                <Typography fontSize="16px">{Math.round(apr * 1000) / 1000}%</Typography>
                                <Typography fontSize="16px">CHIPZ</Typography>
                                <Typography fontSize="16px">{depositFee / 100}%</Typography>
                                <Typography fontSize="16px">{stakedBalance ? stakedBalance : '_'}</Typography>
                                <Typography fontSize="16px">{earnedBalance ? earnedBalance : '_'}</Typography>
                            </Box>
                        </Box>
                        {isActive ? (
                            mainButton
                        ) : (
                            <Button
                                sx={{
                                    color: 'white',
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    padding: '5px 25px',
                                    backgroundColor: '#CE2179',
                                    '&:hover': { backgroundColor: '#BE1169' },
                                    boxShadow: '0px 8px 0px #8F1754',
                                    minWidth: '150px',
                                    borderRadius: '7px',
                                    width: '320px',
                                    marginBottom: '20px'
                                }}
                                onClick={() => clickMetamask()}
                            >
                                Connect Wallet
                            </Button>
                        )}
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="center"
                            width="100%"
                            py="10px"
                            px="30px"
                            color="#8D91A0"
                            borderTop="1px solid rgba(255, 255, 255, 0.25)"
                        >
                            {open && (
                                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" width="100%">
                                    <Box width="100%">
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            justifyContent="center"
                                            marginBottom="10px"
                                            sx={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                setOpen(!open);
                                            }}
                                        >
                                            <Typography marginRight="5px">Hide</Typography>
                                            <IconChevronUp stroke={2} size="1.5rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                        </Box>
                                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                                            <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                                                <Typography>Deposit</Typography>
                                                <Typography marginTop="10px">Total Liquidity</Typography>
                                            </Box>
                                            <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                                                <Box display="flex" flexDirection="row" alignItems="center">
                                                    <Typography color="white" marginRight="5px">
                                                        CHPZ-BNB LP
                                                    </Typography>
                                                    <img src={link} alt="link" width="10px" />
                                                </Box>
                                                <Typography marginTop="10px" color="white">
                                                    ${Math.round(totalLiquidity)}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box marginTop="15px" width="100%" textAlign="center">
                                            <Typography color="#CE2179">View on BscScan</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            )}
                            {!open && (
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="center"
                                    onClick={() => {
                                        setOpen(!open);
                                    }}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    <Typography marginRight="5px">Show</Typography>
                                    <IconChevronDown stroke={2} size="1.5rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box zIndex="-1" position="absolute" left="calc(100% - 400px)" top="calc(100vh - 400px)">
                <img src={logoback} alt="logo back" style={{ width: '400px' }} />
            </Box>
            {showMetamask && (
                <Box
                    position="fixed"
                    zIndex="10"
                    width="100%"
                    height="100%"
                    left="0px"
                    top="0px"
                    bgcolor="rgba(17, 21, 34, 0.49)"
                    style={{ backdropFilter: 'blur(28px)' }}
                >
                    <Box
                        position="absolute"
                        left="0px"
                        top="0px"
                        width="100%"
                        height="100%"
                        onClick={() => {
                            setShowMetamask(false);
                            document.getElementsByTagName('body')[0].style.overflow = 'auto';
                        }}
                    />
                    <Box
                        display="flex"
                        position="relative"
                        flexDirection="column"
                        p="10px"
                        borderRadius="12px"
                        border="2px solid #CE2179"
                        alignItems="center"
                        boxShadow="0px 2px 5px rgba(0, 0, 0, 0.1)"
                        bgcolor="#111522"
                        width={isMobile ? '90%' : '500px'}
                        minWidth="275px"
                        top="50%"
                        left="50%"
                        zIndex="11"
                        style={{ transform: 'translate(-50%, -50%)' }}
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="space-between"
                            borderBottom="1px solid rgba(255, 255, 255, 0.25)"
                            sx={{
                                color: 'white',
                                fontSize: '30px',
                                fontWeight: 600,
                                width: '100%'
                            }}
                        >
                            <Typography fontSize="16px" fontWeight="400">
                                Connect to a Wallet
                            </Typography>

                            <Button
                                onClick={() => {
                                    setShowMetamask(false);
                                    document.getElementsByTagName('body')[0].style.overflow = 'auto';
                                }}
                            >
                                <Typography fontSize="16px" fontWeight="400" color="white">
                                    X
                                </Typography>
                            </Button>
                        </Box>
                        <Button
                            sx={{
                                color: 'white',
                                padding: '10px 40px',
                                backgroundColor: '#CE2179',
                                '&:hover': { backgroundColor: '#BE1169' },
                                boxShadow: '0px 8px 0px #8F1754',
                                borderRadius: '7px',
                                width: '250px',
                                marginY: '30px'
                            }}
                            onClick={() => connectWallet()}
                        >
                            <Typography fontSize="18px" fontWeight="600" mr="20px">
                                Metamask
                            </Typography>
                            <img src={metamask} alt="metamask" style={{ width: '32px' }} />
                        </Button>
                    </Box>
                </Box>
            )}
            {stackModal && (
                <Box
                    position="fixed"
                    zIndex="10"
                    width="100%"
                    height="100%"
                    left="0px"
                    top="0px"
                    bgcolor="rgba(17, 21, 34, 0.49)"
                    style={{ backdropFilter: 'blur(28px)' }}
                >
                    <Box
                        position="absolute"
                        left="0px"
                        top="0px"
                        width="100%"
                        height="100%"
                        onClick={() => {
                            setStakeModal(false);
                            document.getElementsByTagName('body')[0].style.overflow = 'auto';
                        }}
                    />
                    <Box
                        display="flex"
                        position="relative"
                        flexDirection="column"
                        p="10px"
                        borderRadius="12px"
                        border="2px solid #CE2179"
                        alignItems="center"
                        boxShadow="0px 2px 5px rgba(0, 0, 0, 0.1)"
                        bgcolor="#111522"
                        width={isMobile ? '90%' : '400px'}
                        minWidth="275px"
                        top="50%"
                        left="50%"
                        zIndex="11"
                        style={{ transform: 'translate(-50%, -50%)' }}
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="space-between"
                            borderBottom="1px solid rgba(255, 255, 255, 0.25)"
                            sx={{
                                color: 'white',
                                fontSize: '30px',
                                fontWeight: 600,
                                width: '100%'
                            }}
                        >
                            <Typography fontSize="16px" fontWeight="400">
                                Stake LP tokens
                            </Typography>

                            <Button
                                onClick={() => {
                                    setStakeModal(false);
                                    document.getElementsByTagName('body')[0].style.overflow = 'auto';
                                }}
                            >
                                <Typography fontSize="16px" fontWeight="400" color="white">
                                    X
                                </Typography>
                            </Button>
                        </Box>
                        <Box
                            padding="10px"
                            mt="24px"
                            sx={{
                                color: 'white',
                                fontSize: '16px',
                                borderRadius: '10px',
                                width: '100%',
                                height: '100px',
                                background: '#1A2033',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around'
                            }}
                        >
                            <Box display="flex" justifyContent="space-between">
                                <Box>Stake</Box>
                                <Box>Balance: {getBalanceNumber(balance)}</Box>
                            </Box>
                            <Box display="flex" mt="12px" justifyContent="space-between">
                                <Box
                                    component="input"
                                    sx={{
                                        color: 'white',
                                        backgroundColor: 'transparent',
                                        boxShadow: 'none',
                                        outline: 'none',
                                        border: 'none'
                                    }}
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                                <Box>
                                    <Button
                                        sx={{
                                            color: 'white',
                                            backgroundColor: '#CE2179',
                                            '&:hover': { backgroundColor: '#BE1169' },
                                            borderRadius: '15px'
                                        }}
                                        onClick={() => setMaxBalance()}
                                    >
                                        Max
                                    </Button>
                                    <Box component="span">CHIPZ-BNB LP</Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="space-between" gap="24px" width="100%">
                            <Button
                                sx={{
                                    color: 'white',
                                    padding: '10px 40px',
                                    backgroundColor: '#CE2179',
                                    '&:hover': { backgroundColor: '#BE1169' },
                                    boxShadow: '0px 8px 0px #8F1754',
                                    borderRadius: '7px',
                                    width: '100%',
                                    marginY: '30px'
                                }}
                                onClick={() => setStakeModal(false)}
                            >
                                <Typography fontSize="18px" fontWeight="600" mr="20px">
                                    Cancel
                                </Typography>
                            </Button>
                            <Button
                                sx={{
                                    color: 'white',
                                    padding: '10px 40px',
                                    backgroundColor: '#CE2179',
                                    '&:hover': { backgroundColor: '#BE1169' },
                                    boxShadow: '0px 8px 0px #8F1754',
                                    borderRadius: '7px',
                                    width: '100%',
                                    marginY: '30px'
                                }}
                                onClick={() => deposit()}
                                disabled={loading}
                            >
                                <Typography fontSize="18px" fontWeight="600" mr="20px">
                                    Confirm
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            )}
            {unstackModal && (
                <Box
                    position="fixed"
                    zIndex="10"
                    width="100%"
                    height="100%"
                    left="0px"
                    top="0px"
                    bgcolor="rgba(17, 21, 34, 0.49)"
                    style={{ backdropFilter: 'blur(28px)' }}
                >
                    <Box
                        position="absolute"
                        left="0px"
                        top="0px"
                        width="100%"
                        height="100%"
                        onClick={() => {
                            setUnstakeModal(false);
                            document.getElementsByTagName('body')[0].style.overflow = 'auto';
                        }}
                    />
                    <Box
                        display="flex"
                        position="relative"
                        flexDirection="column"
                        p="10px"
                        borderRadius="12px"
                        border="2px solid #CE2179"
                        alignItems="center"
                        boxShadow="0px 2px 5px rgba(0, 0, 0, 0.1)"
                        bgcolor="#111522"
                        width={isMobile ? '90%' : '400px'}
                        minWidth="275px"
                        top="50%"
                        left="50%"
                        zIndex="11"
                        style={{ transform: 'translate(-50%, -50%)' }}
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="space-between"
                            borderBottom="1px solid rgba(255, 255, 255, 0.25)"
                            sx={{
                                color: 'white',
                                fontSize: '30px',
                                fontWeight: 600,
                                width: '100%'
                            }}
                        >
                            <Typography fontSize="16px" fontWeight="400">
                                Unstake LP tokens
                            </Typography>

                            <Button
                                onClick={() => {
                                    setUnstakeModal(false);
                                    document.getElementsByTagName('body')[0].style.overflow = 'auto';
                                }}
                            >
                                <Typography fontSize="16px" fontWeight="400" color="white">
                                    X
                                </Typography>
                            </Button>
                        </Box>
                        <Box
                            padding="10px"
                            mt="24px"
                            sx={{
                                color: 'white',
                                fontSize: '16px',
                                borderRadius: '10px',
                                width: '100%',
                                height: '100px',
                                background: '#1A2033',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around'
                            }}
                        >
                            <Box display="flex" justifyContent="space-between">
                                <Box>Unstake</Box>
                                <Box>Balance: {getBalanceNumber(balance)}</Box>
                            </Box>
                            <Box display="flex" mt="12px" justifyContent="space-between">
                                <Box
                                    component="input"
                                    sx={{
                                        color: 'white',
                                        backgroundColor: 'transparent',
                                        boxShadow: 'none',
                                        outline: 'none',
                                        border: 'none'
                                    }}
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                                <Box>
                                    <Button
                                        sx={{
                                            color: 'white',
                                            backgroundColor: '#CE2179',
                                            '&:hover': { backgroundColor: '#BE1169' },
                                            borderRadius: '15px'
                                        }}
                                        onClick={() => setMaxBalance()}
                                    >
                                        Max
                                    </Button>
                                    <Box component="span">CHIPZ-BNB LP</Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="space-between" gap="24px" width="100%">
                            <Button
                                sx={{
                                    color: 'white',
                                    padding: '10px 40px',
                                    backgroundColor: '#CE2179',
                                    '&:hover': { backgroundColor: '#BE1169' },
                                    boxShadow: '0px 8px 0px #8F1754',
                                    borderRadius: '7px',
                                    width: '100%',
                                    marginY: '30px'
                                }}
                                onClick={() => setUnstakeModal(false)}
                            >
                                <Typography fontSize="18px" fontWeight="600" mr="20px">
                                    Cancel
                                </Typography>
                            </Button>
                            <Button
                                sx={{
                                    color: 'white',
                                    padding: '10px 40px',
                                    backgroundColor: '#CE2179',
                                    '&:hover': { backgroundColor: '#BE1169' },
                                    boxShadow: '0px 8px 0px #8F1754',
                                    borderRadius: '7px',
                                    width: '100%',
                                    marginY: '30px'
                                }}
                                onClick={() => withdraw()}
                                disabled={loading}
                            >
                                <Typography fontSize="18px" fontWeight="600" mr="20px">
                                    Confirm
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default Farms;
