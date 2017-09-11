import React from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

const App = () => {
  return (
    <div>
      <h2>Loot Check</h2>
      <hr />
      <Wallet />
      <hr />
      <Loot />
    </div>
  )
}

export default App;