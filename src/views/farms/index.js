// material-ui
import { Typography, Box, Switch, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import farming from '../../assets/images/farm-ethereum.png';

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
    width: 250,
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
        width: 140,
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

const Farms = () => (
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
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" pt="20px">
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" mr="40px">
                    <IOSSwitch />
                    <Typography pl="10px" color="#8D91A0">
                        Staked Only
                    </Typography>
                </Box>
                <ActiveSwitch />
            </Box>
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
                        <Typography fontSize="16px">CHIPZ Staked</Typography>
                        <Typography fontSize="16px">CHIPZ Earned</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="flex-start" color="white" gap="15px">
                        <Typography fontSize="16px">117,637%</Typography>
                        <Typography fontSize="16px">CHIPZ</Typography>
                        <Typography fontSize="16px">0.5%</Typography>
                        <Typography fontSize="16px">0</Typography>
                        <Typography fontSize="16px">0</Typography>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                    gap="20px"
                    mb="20px"
                >
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
                    >
                        Harvest
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
                            minWidth: '150px',
                            borderRadius: '7px'
                        }}
                    >
                        Unlock Wallet
                    </Button>
                </Box>
            </Box>
        </Box>
    </Box>
);

export default Farms;
