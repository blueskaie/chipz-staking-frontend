import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, Button, useMediaQuery } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import useMetaMask from 'hooks/metamask';
import { formatString } from 'utils/formatString';

// assets
import { IconMenu2 } from '@tabler/icons';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle, clickMetamask }) => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const { isActive, account, wrongNetwork, switchNetwork } = useMetaMask();

    const connectBtn = !wrongNetwork ? (
        <Button
            sx={{
                color: 'white',
                fontSize: '15px',
                fontWeight: 600,
                padding: '3px 30px',
                backgroundColor: '#CE2179',
                '&:hover': { backgroundColor: '#BE1169' },
                boxShadow: '0px 8px 0px #8F1754',
                borderRadius: '7px'
            }}
            onClick={clickMetamask}
        >
            Connect
        </Button>
    ) : (
        <Button
            sx={{
                color: 'white',
                fontSize: '15px',
                fontWeight: 600,
                padding: '3px 30px',
                backgroundColor: '#CE2179',
                '&:hover': { backgroundColor: '#BE1169' },
                boxShadow: '0px 8px 0px #8F1754',
                borderRadius: '7px'
            }}
            onClick={switchNetwork}
        >
            WrongNetwork
        </Button>
    );

    return (
        <>
            {/* logo & toggler button */}
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
                {matchDownMd && (
                    <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                        <Avatar
                            variant="rounded"
                            sx={{
                                ...theme.typography.commonAvatar,
                                ...theme.typography.mediumAvatar,
                                transition: 'all .2s ease-in-out',
                                background: theme.palette.secondary.light,
                                color: theme.palette.secondary.dark,
                                '&:hover': {
                                    background: theme.palette.secondary.dark,
                                    color: theme.palette.secondary.light
                                }
                            }}
                            onClick={handleLeftDrawerToggle}
                            color="inherit"
                        >
                            <IconMenu2 stroke={1.5} size="1.3rem" />
                        </Avatar>
                    </ButtonBase>
                )}
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />

            {isActive ? (
                <Button
                    sx={{
                        color: 'white',
                        fontSize: '15px',
                        fontWeight: 600,
                        padding: '3px 30px',
                        backgroundColor: '#CE2179',
                        '&:hover': { backgroundColor: '#BE1169' },
                        boxShadow: '0px 8px 0px #8F1754',
                        borderRadius: '7px'
                    }}
                    onClick={clickMetamask}
                >
                    {formatString(account)}
                </Button>
            ) : (
                connectBtn
            )}
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func,
    clickMetamask: PropTypes.func
};

export default Header;
