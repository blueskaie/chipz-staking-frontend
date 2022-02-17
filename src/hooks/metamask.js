import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { injected } from '../components/wallet/connectors';
import { useWeb3React } from '@web3-react/core';

import config from 'config';

export const MetaMaskContext = React.createContext(null);

export const MetaMaskProvider = ({ children }) => {
    const { activate, account, library, connector, active, deactivate, chainId } = useWeb3React();

    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [wrongNetwork, setWrongNetwork] = useState(false);
    let isNetworkRequest = false;

    const switchNetwork = async () => {
        // eslint-disable-next-line no-undef
        setWrongNetwork(false);
        const chainId = `0x${BigInt(config.CHAIN_ID).toString(16)}`;
        if (isNetworkRequest) {
            return;
        }
        isNetworkRequest = true;
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [config.CHAIN_ID]
            });
        } catch (switchError) {
            // console.log('Switch Network Error', switchError);
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === -32602) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId,
                                chainName: config.CHAIN_NAME,
                                nativeCurrency: {
                                    name: config.CHAIN_NAME,
                                    symbol: 'BNB', // 2-6 characters long
                                    decimals: 18
                                },
                                blockExplorerUrls: [config.CHAIN_EXPLORER],
                                rpcUrls: [config.RPC_URL]
                            }
                        ]
                    });
                } catch (addError) {
                    // handle "add" error
                    // console.log('Add Network Error', addError);
                }
                // handle other "switch" errors
            }
        }
        isNetworkRequest = false;
    };

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('chainChanged', () => {
                if (window.ethereum.chainId === `0x${BigInt(config.CHAIN_ID).toString(16)}`) return;
                // switchNetwork();
                setWrongNetwork(true);
            });
            window.ethereum.on('accountsChanged', () => {
                if (window.ethereum.chainId === `0x${BigInt(config.CHAIN_ID).toString(16)}`) return;
                // switchNetwork();
                setWrongNetwork(true);
            });
        }
    });

    // Connect to MetaMask wallet
    const connect = async () => {
        console.log('Connecting to MetaMask Wallet');
        localStorage.setItem('isConnected', true);
        try {
            switchNetwork();
            await activate(injected);
        } catch (error) {
            console.log('Error on connecting: ', error);
        }
    };

    // Disconnect from Metamask wallet
    const disconnect = async () => {
        console.log('Deactivating...');
        localStorage.removeItem('isConnected');
        try {
            await deactivate();
        } catch (error) {
            console.log('Error on disconnecting: ', error);
        }
    };

    console.log(localStorage.getItem('isConnected'));
    // Init Loading
    useEffect(() => {
        if (localStorage == null || localStorage.getItem('isConnected') !== 'true') {
            return;
        }
        connect().then((val) => {
            setIsLoading(false);
        });
    }, []);

    const handleIsActive = useCallback(() => {
        setIsActive(active);
    }, [active]);

    useEffect(() => {
        handleIsActive();
    }, [handleIsActive]);

    const values = useMemo(
        () => ({
            isActive,
            wrongNetwork,
            account,
            isLoading,
            connect,
            disconnect,
            switchNetwork
        }),
        [isActive, isLoading]
    );

    return <MetaMaskContext.Provider value={values}>{children}</MetaMaskContext.Provider>;
};

export default function useMetaMask() {
    const context = React.useContext(MetaMaskContext);

    if (context === undefined) {
        throw new Error('useMetaMask hook must be used with a MetaMaskProvider component');
    }

    return context;
}
