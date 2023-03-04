import './App.css';
import * as React from 'react';
import HomePage from './component/pages/homePage/homePage-component';
import ShopPage from './component/pages/shop-Page/shopPage.component';
import ResponsiveAppBar from './component/header/header';
import SignIn from "./component/pages/signIn-page/signin";
import SignUp from './component/pages/signup-page/signup';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './component/pages/checkout-page/checkoutPage';

function App({ currentUser }) {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route exact path="/signin"
          render={() => currentUser ?
            <Redirect to="/"></Redirect>
            :
            <SignIn></SignIn>
          }>
        </Route>
        <Route exact path="/signup" render={() => currentUser ?
          <Redirect to='/'></Redirect>
          :
          < SignUp></SignUp>
        }></Route>
      </Switch>
    </div>

  );
}
// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// })
//---use selector & createStructuredSelector -------
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(App);
