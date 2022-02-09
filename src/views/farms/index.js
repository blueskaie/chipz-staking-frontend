// material-ui
import { Typography, Box, Switch, Button } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import farming from '../../assets/images/farm-ethereum.png';

// ==============================|| SAMPLE PAGE ||============================== //
const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(({ theme }) => ({
    width: 55,
    height: 30,
    padding: 0,
    border: '1px solid #8D91A0',
    borderRadius: 15,
    '& .MuiSwitch-switchBase': {
        padding: 1,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(25px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: '#1A2033',
                opacity: 1,
                border: 0
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5
            }
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
            backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF' : '#CE2179'
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
        }
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF' : '#CE2179',
        width: 23,
        height: 23
    },
    '& .MuiSwitch-track': {
        borderRadius: 20,
        backgroundColor: '#1A2033',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500
        })
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
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                    <IOSSwitch />
                    <Typography pl="10px" color="#8D91A0">
                        Staked Only
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    borderRadius="30px"
                    bgcolor="#1A2033"
                    border="1px solid #CE2179"
                    ml="50px"
                    sx={{ cursor: 'pointer' }}
                >
                    <Box borderRadius="30px" border="1px solid #CE2179" py="5px" px="30px" bgcolor="#CE2179" color="white">
                        Active
                    </Box>
                    <Box borderRadius="30px" border="1px solid #CE2179" py="5px" px="30px" color="#CE2179">
                        Inactive
                    </Box>
                </Box>
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
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" width="100%" gap="20px">
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
