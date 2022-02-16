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
                    url: 'https://pancakeswap.finance/info/token/0x0fABCB70eeDA798F9241F4bb11cceEa7d93B157a',
                    breadcrumbs: false,
                    external: true
                },
                {
                    id: 'dextools',
                    title: 'DexTools',
                    type: 'item',
                    url: 'https://www.dextools.io/app/bsc/pair-explorer/0x2e734b4162b2f91d0583442dae272909493a4e8b',
                    breadcrumbs: false,
                    external: true
                },
                {
                    id: 'coinmarketcap',
                    title: 'CoinMarketCap',
                    type: 'item',
                    url: 'https://coinmarketcap.com/currencies/chipz/',
                    breadcrumbs: false,
                    external: true
                },
                {
                    id: 'dexguru',
                    title: 'DexGuru',
                    type: 'item',
                    url: 'https://dex.guru/token/0x0fabcb70eeda798f9241f4bb11cceea7d93b157a-bsc',
                    breadcrumbs: false,
                    external: true
                },
                {
                    id: 'bogged',
                    title: 'Bogged',
                    type: 'item',
                    url: 'https://charts.bogged.finance/?token=0x0fABCB70eeDA798F9241F4bb11cceEa7d93B157a',
                    breadcrumbs: false,
                    external: true
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
                    id: 'road-map',
                    title: 'Roadmap',
                    type: 'item',
                    url: 'https://mychipz.io/',
                    breadcrumbs: false,
                    external: true
                },
                {
                    id: 'white-paper',
                    title: 'Whitepaper',
                    type: 'item',
                    url: 'https://mychipz.io/wp-content/uploads/2021/07/CHPZ-technical-whitepaper.pdf',
                    breadcrumbs: false,
                    external: true
                },
                {
                    id: 'view-media-kit',
                    title: 'VIEW MEDIA KIT',
                    type: 'item',
                    url: 'https://mychipz.io/media-kit-2/',
                    breadcrumbs: false,
                    external: true
                }
            ]
        }
    ]
};

export default main;
