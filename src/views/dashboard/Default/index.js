import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography, Button, Box } from '@mui/material';

// project imports
// import EarningCard from './EarningCard';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
// import { textAlign } from '@mui/system';
import { gridSpacing } from 'store/constant';

import logoback from '../../../assets/images/logo_back.png';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid spacing={gridSpacing}>
            <Grid item xs={12} color="#8D91A0">
                <Grid item display="flex" flexDirection="column" paddingX="100px">
                    <Typography sx={{ color: 'white', fontSize: '30px', fontWeight: 600 }}>CHIPZ STAKING PLATFORM</Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Revolutionizing Reward Points</Typography>
                </Grid>
                <Grid item paddingY={8} paddingX={10} display="flex" flexWrap="wrap" rowGap="40px" columnGap="40px" justifyContent="center">
                    <Grid item flex={1} lg={5} md={5} sm={12}>
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
                                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                                        <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>~$0.00</Typography>
                                    </Box>
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        marginTop={4}
                                    >
                                        <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>CHIPZ in Wallet</Typography>
                                        <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>LOCKED</Typography>
                                    </Box>
                                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                                        <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>~$0.00</Typography>
                                    </Box>
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
                    <Grid item flex={1} lg={5} md={5} sm={12}>
                        <Grid
                            item
                            borderRadius="16px"
                            bgcolor="#1A2033"
                            boxShadow="0px 40px 60px -50px #000000"
                            padding="30px"
                            height="100%"
                        >
                            <Typography sx={{ color: '#CE2179', fontSize: '23px', fontWeight: 600 }}>Announcement</Typography>
                            <Grid item>
                                <Grid
                                    item
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    marginTop={1}
                                >
                                    <a href="https://medium.com/@mychipzio" rel="noreferrer noopener" target="_blank">
                                        {' '}
                                    </a>
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
                                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>$4,154,399</Typography>
                                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>105,000,000</Typography>
                                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>0</Typography>
                                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>105,000,000</Typography>
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
                                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>$In,fin,ity</Typography>
                                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 500, marginTop: 1.5 }}>
                                        Across all Farms and Pools
                                    </Typography>
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
