import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const loadProvider = () => {
      console.log(window.web3);
      console.log(window.ethereum);
    };
    loadProvider();
  }, []);

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
        <p className='card-text'>Account: 0xou934b359345b534b98543549</p>
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
