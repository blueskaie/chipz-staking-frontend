import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Typography, useMediaQuery, Box, Button } from '@mui/material';

// project imports
import { MENU_OPEN, SET_MENU } from 'store/actions';
import config from 'config';

// assets
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);
    const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

    const itemIcon = item?.icon && <img src={item?.icon} alt="icon" width="23px" />;

    let itemTarget = '_self';
    if (item.target) {
        itemTarget = '_blank';
    }

    let listItemProps = {
        component: forwardRef((props, ref) => <Link ref={ref} {...props} to={`${config.basename}${item.url}`} target={itemTarget} />)
    };
    if (item?.external) {
        listItemProps = { component: 'a', href: item.url, target: '_blank' };
    }

    const itemHandler = (id) => {
        dispatch({ type: MENU_OPEN, id });
        if (matchesSM) dispatch({ type: SET_MENU, opened: false });
    };

    // active menu item on page load
    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === item.id);
        if (currentIndex > -1) {
            dispatch({ type: MENU_OPEN, id: item.id });
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Button
            {...listItemProps}
            disabled={item.disabled}
            sx={{
                mb: 0.5,
                alignItems: 'flex-start',
                backgroundColor:
                    customization.isOpen.findIndex((id) => id === item.id) > -1 ? 'rgba(206, 33, 121, 0.1)' : 'transparent !important',
                color: customization.isOpen.findIndex((id) => id === item.id) > -1 ? 'white' : '#555555',
                py: level > 1 ? 1 : 1.25,
                width: '100%',
                pl: `${level * 24}px`
            }}
            selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
            onClick={() => itemHandler(item.id)}
        >
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" width="100%">
                <Box
                    sx={{
                        my: 'auto',
                        minWidth: !item?.icon ? 18 : 36,
                        marginRight: item?.icon ? '5px' : '0',
                        paddingTop: item?.icon ? '5px' : '0'
                    }}
                >
                    {itemIcon}
                </Box>
                <Typography variant="h4" color={customization.isOpen.findIndex((id) => id === item.id) > -1 ? 'white' : '#555555'}>
                    {item.title}
                </Typography>
            </Box>
        </Button>
    );
};

NavItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number,
    selected: PropTypes.string
};

export default NavItem;
