import ReactDOM from 'react-dom';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// project imports
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import { MetaMaskProvider } from './hooks/metamask';

// style + assets
import 'assets/scss/style.scss';

function getLibrary(provider, connector) {
    return new Web3(provider);
}

// ==============================|| REACT DOM RENDER  ||============================== //

ReactDOM.render(
    <Provider store={store}>
        <Web3ReactProvider getLibrary={getLibrary}>
            <BrowserRouter>
                <MetaMaskProvider>
                    <App />
                </MetaMaskProvider>
            </BrowserRouter>
        </Web3ReactProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
