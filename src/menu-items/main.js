// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| MAIN MENU ITEMS ||============================== //

const main = {
    id: 'main',
    type: 'group',
    children: [
        {
            id: 'home',
            title: 'Home',
            type: 'item',
            url: '/',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'farms',
            title: 'Farms',
            type: 'item',
            url: '/farms',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'info',
            title: 'Info',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'pancake-swap',
                    title: 'Pancake Swap',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'dextools',
                    title: 'DexTools',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                },
                {
                    id: 'coinmarketcap',
                    title: 'CoinMarketCap',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                },
                {
                    id: 'dexguru',
                    title: 'DexGuru',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                },
                {
                    id: 'bogged',
                    title: 'Bogged',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'more',
            title: 'More',
            type: 'collapse',
            icon: icons.IconPalette,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default main;
