import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Header from "./components/partials/Header";
import Home from "./components/pages";
import Products from "./components/pages/products";


function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Header/>
              <div className={"block"}>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/products'} component={Products}/>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
