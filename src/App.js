import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { commerce } from './lib/commerce'
import { Navbar } from './components';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const titulo = 'MBD Store';

function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <ItemListContainer titulo={titulo} />
          </Route>
          <Route exact path="/detalle" component={ItemDetailContainer} />
        </Switch>


      </div>
    </Router>
  );
}

export default App;
