import { useEffect, useState } from 'react';
import Web3 from 'web3';
import './App.css';

function App() {
  const [web3Api, setweb3Api] = useState({
    provider: null,
    web3: null,
  });

  const [account, setAccount] = useState(null);

  useEffect(() => {
    const getAccount = async () => {
      const account = await web3Api.web3.eth.getAccounts();
      setAccount(account[0]);
    };
    web3Api.web3 && getAccount();
  }, [web3Api.web3]);
  useEffect(() => {
    const loadProvider = async () => {
      let provider;
      if (window.ethereum) {
        provider = window.ethereum;
      } else if (window.web3) {
        provider = window.web3;
      } else if (!process.env.production) {
        provider = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545');
      }
      try {
        await provider.enable();
      } catch (error) {
        console.log('User is not allowed!');
      }
      setweb3Api({ web3: new Web3(provider), provider: provider });
    };

    loadProvider();
  }, []);
  console.log(web3Api.web3, account);
  const onConnectMetamask = async () => {
    const account = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    console.log(account);
  };

  return (
    <div className='card text-center'>
      <div className='card-header'>Funding</div>
      <div className='card-body'>
        <h5 className='card-title'>Balance: 20 ETH</h5>
        <p className='card-text'>
          Account: {account ? account : 'not connected!'}
        </p>
        <button
          type='button'
          className='btn btn-success'
          onClick={onConnectMetamask}
        >
          connect to MetaMask
        </button>
        &nbsp;
        <button type='button' className='btn btn-success'>
          Transfer
        </button>
        &nbsp;
        <button type='button' className='btn btn-primary'>
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default App;
