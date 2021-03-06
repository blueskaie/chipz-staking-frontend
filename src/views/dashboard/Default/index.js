import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography, Button, Box } from '@mui/material';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Web3 from 'web3';
import { formatNumber, getBalanceNumber } from 'utils/formatBalance';
import {
    MASTERCHEF_ABI,
    MASTERCHEF_ADDRESS,
    CHIPZ_BNB_ABI,
    CHIPZ_BNB_ADDRESS,
    CHIPZ_ADDRESS,
    CHIPZ_ABI,
    ERC20ABI
} from '../../../contract/config';
import axios from 'axios';

import { gridSpacing } from 'store/constant';

import logoback from '../../../assets/images/logo_back.png';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    // const [isLoading, setLoading] = useState(true);
    // const theme = useTheme();
    // const useStyles = makeStyles(
    //     theme({
    //         root: {
    //             [theme.breakpoints.between('md', 'lg')]: {
    //                 paddingX: '10px'
    //             }
    //         }
    //     })
    // );
    // const classes = useStyles(theme);
    // useEffect(() => {
    //     setLoading(false);
    // }, []);
    const [earnedBalance, setEarnedBalance] = useState(0);
    const [chipzInWallet, setChipzInWallet] = useState(0);
    const [marketCap, setMarketCap] = useState(0);
    const [circulatingSupply, setCirculatingSupply] = useState(0);
    const [totalMinted, setTotalMinted] = useState(0);
    const isEarned = async () => {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const masterchefContract = new web3.eth.Contract(MASTERCHEF_ABI, MASTERCHEF_ADDRESS);

        const earned = await masterchefContract.methods.pendingChipz(0, account).call();

        return earned;
    };
    useEffect(() => {
        const id = setInterval(async () => {
            const earned = await isEarned();
            const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
            setEarnedBalance(formatNumber(getBalanceNumber(earned), 2));

            const accounts = await web3.eth.getAccounts();
            const account = accounts[0];
            const chipzContract = new web3.eth.Contract(CHIPZ_ABI, CHIPZ_ADDRESS);
            const chipz = await chipzContract.methods.balanceOf(account).call();
            setChipzInWallet(chipz);

            await axios
                .get(
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=chipz&order=market_cap_desc&per_page=100&page=1&sparkline=false
                    `
                )
                .then((res) => {
                    // console.log(res.data);
                    setMarketCap(res.data[0].market_cap);
                    setCirculatingSupply(res.data[0].circulating_supply);
                    setTotalMinted(res.data[0].total_supply);
                });
        }, 1000);
        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} color="#8D91A0">
                <Grid item display="flex" flexDirection="column" paddingX="50px">
                    <Typography sx={{ color: 'white', fontSize: '30px', fontWeight: 600 }}>CHIPZ STAKING PLATFORM</Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Revolutionizing Reward Points</Typography>
                </Grid>
                <Grid
                    item
                    paddingY={8}
                    paddingX="10px"
                    display="flex"
                    flexWrap="wrap"
                    rowGap="40px"
                    columnGap="40px"
                    justifyContent="center"
                >
                    <Grid item flex={1} lg={5} md={5} sm={12} xs={12}>
                        <Grid
                            item
                            borderRadius="16px"
                            bgcolor="#1A2033"
                            boxShadow="0px 40px 60px -50px #000000"
                            padding="30px"
                            height="100%"
                        >
                            <Typography sx={{ color: '#CE2179', fontSize: '23px', fontWeight: 600 }}>Farms & Staking</Typography>
                            <Box padding="15px" display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                                <Box>
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        marginTop={3}
                                        marginBottom={2}
                                    >
                                        <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>CHIPZ to Harvest</Typography>
                                        <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>LOCKED</Typography>
                                    </Box>
                                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>~${earnedBalance}</Typography>
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        marginTop={4}
                                        marginBottom={2}
                                    >
                                        <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>CHIPZ in Wallet</Typography>
                                        <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>LOCKED</Typography>
                                    </Box>
                                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>~${chipzInWallet}</Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="center"
                                    marginTop={4}
                                    marginBottom={2.5}
                                >
                                    <Button
                                        sx={{
                                            color: 'white',
                                            fontSize: '15px',
                                            fontWeight: 600,
                                            padding: '5px 40px',
                                            backgroundColor: '#CE2179',
                                            '&:hover': { backgroundColor: '#BE1169' },
                                            boxShadow: '0px 8px 0px #8F1754',
                                            borderRadius: '7px'
                                        }}
                                    >
                                        Unlock Wallet
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item flex={1} lg={5} md={5} sm={12} xs={12}>
                        <Grid
                            item
                            borderRadius="16px"
                            bgcolor="#1A2033"
                            boxShadow="0px 40px 60px -50px #000000"
                            padding="30px"
                            height="100%"
                        >
                            <Typography sx={{ color: '#CE2179', fontSize: '23px', fontWeight: 600 }}>Announcement</Typography>
                            <TwitterTimelineEmbed
                                options={{
                                    width: '100%',
                                    height: 400
                                }}
                                sourceType="url"
                                url="https://twitter.com/MyChipzio"
                            />
                        </Grid>
                    </Grid>
                    <Grid item flex={1} lg={5} md={5} sm={12}>
                        <Grid
                            item
                            borderRadius="16px"
                            bgcolor="#1A2033"
                            boxShadow="0px 40px 60px -50px #000000"
                            padding="30px"
                            height="100%"
                        >
                            <Typography
                                sx={{
                                    color: '#CE2179',
                                    fontSize: '23px',
                                    fontWeight: 600,
                                    marginBottom: 3
                                }}
                            >
                                CHIPZ Stats
                            </Typography>
                            <Grid item display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" padding="10px">
                                <Grid item display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" gap={3}>
                                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Market Cap</Typography>
                                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Total Minted</Typography>
                                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Total Burned</Typography>
                                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Circulating Supply</Typography>
                                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>New CHPZ/block</Typography>
                                </Grid>
                                <Grid item display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" gap={3}>
                                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>${marketCap || 0}</Typography>
                                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>{totalMinted}</Typography>
                                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>0</Typography>
                                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>
                                        {circulatingSupply || 0}
                                    </Typography>
                                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>0.1</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item flex={1} lg={5} md={5} sm={12}>
                        <Grid
                            item
                            borderRadius="16px"
                            bgcolor="#1A2033"
                            boxShadow="0px 40px 60px -50px #000000"
                            padding="30px"
                            height="100%"
                        >
                            <Typography sx={{ color: '#CE2179', fontSize: '23px', fontWeight: 600 }}>Total Value Locked(TVL)</Typography>
                            <Grid item padding="40px 10px">
                                <Grid
                                    item
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="flex-start"
                                    justifyContent="center"
                                    marginTop="3px"
                                >
                                    {/* <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>$In,fin,ity</Typography>
                                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500, marginTop: 1.5 }}>
                                        Across all Farms and Pools
                                    </Typography> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box zIndex="-1" position="absolute" left="calc(100% - 400px)" top="calc(100% + 100px)">
                <img src={logoback} alt="logo back" style={{ width: '400px' }} />
            </Box>
        </Grid>
    );
};

export default Dashboard;
