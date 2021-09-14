import React from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Item from './components/products/item';

import { Navbar } from './components';
import ItemListContainer from './components/ItemListContainer';

const titulo = 'MBD Store';

function App() {
  return (
    <div>
      <Navbar />
      <span />
      <ItemListContainer titulo={titulo} />
    </div>
  );
}

export default App;
