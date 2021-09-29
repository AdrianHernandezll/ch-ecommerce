import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from './components';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/CartContext';



function App() {


  return (
    <CartContextProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" >
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:idCategory" component={ItemListContainer} />
            <Route exact path='/item/:id' component={ItemDetailContainer} />

            <Route exact path="/Cart" component={Cart} />
          </Switch>


        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;
