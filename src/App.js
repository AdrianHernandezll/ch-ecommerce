import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { commerce } from './lib/commerce'
import { Navbar } from './components';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart';


function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
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
  );
}

export default App;
