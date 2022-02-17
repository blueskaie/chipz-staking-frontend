import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Link } from '@mui/material';

// project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';

import logo from '../../../../../../assets/images/logo.png';
import telegram from '../../../../../../assets/images/telegram.png';
import discord from '../../../../../../assets/images/discord.png';
// import { typography } from '@mui/system';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
    const theme = useTheme();

    // menu list collapse & items
    const items = item.children?.map((menu) => {
        switch (menu.type) {
            case 'collapse':
                return <NavCollapse key={menu.id} menu={menu} level={1} />;
            case 'item':
                return <NavItem key={menu.id} item={menu} level={1} />;
            default:
                return (
                    <Typography key={menu.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="space-between"
            height="100%"
            justifyContent="space-between"
            paddingTop="32px"
            paddingBottom="10px"
        >
            <Box display="flex" width="100%" flexDirection="column">
                <Box width="100%">
                    <Box
                        subheader={
                            item.title && (
                                <Typography variant="caption" sx={{ ...theme.typography.menuCaption }} display="block" gutterBottom>
                                    {item.title}
                                    {item.caption && (
                                        <Typography
                                            variant="caption"
                                            sx={{ ...theme.typography.subMenuCaption }}
                                            display="block"
                                            gutterBottom
                                        >
                                            {item.caption}
                                        </Typography>
                                    )}
                                </Typography>
                            )
                        }
                        display="flex"
                        flexDirection="column"
                        width="100%"
                    >
                        {items}
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="flex-start"
                    marginY="25px"
                    marginRight="20px"
                    marginLeft="25px"
                    paddingY="32px"
                    component={Link}
                    href="https://www.coingecko.com/en/coins/chipz"
                    sx={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                        '&:hover>img': {
                            transform: 'scale(1.2)',
                            transition: '0.3s ease-in-out'
                        },
                        '>img': {
                            transform: 'scale(1)',
                            transition: '0.3s ease-in-out'
                        }
                    }}
                    underline="none"
                    target="_blank"
                >
                    <img src={logo} alt="logo" width="35px" />
                    <Typography fontSize="20px" color="white">
                        $0.039
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    gap="30px"
                    padding="25px"
                    color="white"
                    fontSize="20px"
                >
                    <img src={telegram} alt="telegram" width="25px" style={{ cursor: 'pointer' }} />
                    <img src={discord} alt="discord" width="25px" style={{ cursor: 'pointer' }} />
                </Box>
                <Typography fontSize="18px" color="rgba(255, 255, 255, 0.25)" fontWeight="800" sx={{ cursor: 'pointer' }}>
                    CHIPZ
                </Typography>
            </Box>
        </Box>
    );
};

NavGroup.propTypes = {
    item: PropTypes.object
};

export default NavGroup;
