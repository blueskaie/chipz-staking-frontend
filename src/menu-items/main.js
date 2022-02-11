// assets
import home from '../assets/images/home.png';
import farms from '../assets/images/farms.png';
import info from '../assets/images/info.png';
import more from '../assets/images/more.png';

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
            icon: home,
            breadcrumbs: false
        },
        {
            id: 'farms',
            title: 'Farms',
            type: 'item',
            url: '/farms',
            icon: farms,
            breadcrumbs: false
        },
        {
            id: 'info',
            title: 'Info',
            type: 'collapse',
            icon: info,
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
            icon: more,
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
