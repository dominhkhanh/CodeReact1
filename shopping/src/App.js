import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingAdmin from './components/admin/ShoppingAdmin';
import { Allproducts } from './components/client/AllProducts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/admin/Login';
import Productdetail from './components/client/ProductDetail';
import Home from './components/client/Home';
import Cart from './components/client/Cart';
import Navbarclient from './components/client/NavbarClient';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

function App() {

  const initState = {
    init: 'abc',
    cart: []
  }

  const root_reducer = function (state = initState, action) {
    console.log(state, action);
    if (action.type === 'ADD_TO_CART') {
      const exist_product_index = state.cart.findIndex(product => product.id === action.payload.id)
      let new_cart; //[1,2,3]
      if (exist_product_index < 0) {
        new_cart = [
          ...state.cart,
          {
            ...action.payload,
            id_cart: Date.now()
          }
        ]
      } else {
        // [1,2,3]
        new_cart = [...state.cart];
        new_cart[exist_product_index].quantity = new_cart[exist_product_index].quantity + action.payload.quantity
      }
      return {
        ...state,
        cart: new_cart
      }
    } else if (action.type === 'UPDATE_CART') {
      const exist_product_index = state.cart.findIndex(product => product.id_cart === action.payload.id_cart);
      const new_cart = [...state.cart];
      new_cart[exist_product_index].quantity = action.payload.quantity;
      return {
        ...state,
        cart: new_cart
      }

    } else if (action.type === 'DELETE_CART') {
      console.log(state.cart);
      console.log(action.payload)
      const new_cart = state.cart.filter(product => {
        return product.id_cart !== action.payload
      })
      return {
        ...state,
        cart: new_cart
      }
    } else if (action.type === 'CLEAR_CART') {
      return {
        ...state,
        cart: []
      }
    }
    return state
  }

  const store = createStore(
    root_reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )



  return (
    <Provider store={store}>
      <Router>
        <div>
          {/* SWITCH LOCATION.PATHNAME
              CASE ADMIN: ADMIN
              CASE PRODUCT: PRODUCT
              
            */}
          {/* ADMIN  localhost:3000/admin */}
          {/* QUICK AND DIRTY */}
          <Switch>
            <Route exact path="/">
              <Navbarclient />
              <Home />
            </Route>
            <Route path="/admin/login" component={Login}>
            </Route>
            <Route path="/admin" component={ShoppingAdmin}>
            </Route>
            <Route path="/cart">
              <Navbarclient />
              <Cart />
            </Route>
            {/* <Route path={componentConst.route} component={Productdetail} /> */}
            <Route path="/products/:id">
              <Navbarclient />
              <Productdetail />
            </Route>
            <Route path="/products" >
              <Navbarclient />
              <Allproducts />
            </Route>
            <Route path="/Home">
              <Navbarclient />
              <Home></Home>

            </Route>
          </Switch>
        </div>
      </Router>

    </Provider>

  );
}
// npm i node-sass
export default App;
