import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Store from "./pages/Store"
import Cart from './pages/Cart';

 const Content = () => {
    return(
        <Switch>
            <Route exct path="/cart" component={ Cart } />
            <Route exact path="/" component={ Store  } />
        </Switch>
    )
}

export default Content;