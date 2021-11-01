import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from '../GlobalStyles/globalStyles';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import MessengerPage from '../Messenger';

import * as ROUTES from '../../constants/routes';
import { withAuthenication } from '../Session';
import CarAddPage from '../CarAdd';
import ListView from '../CarMap/ListView';


const App = () => (

          <Router>
            
            <div>
              <GlobalStyle />
              <Navigation />
              <Route exact path={ROUTES.LANDING} component={LandingPage} />
              <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route
                exact
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
              />
              <Route exact path={ROUTES.HOME} component={HomePage} />
              <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route exact path={ROUTES.ADMIN} component={AdminPage} />
              <Route exact path={ROUTES.MESSENGER} component={MessengerPage} />
              <Route exact path={ROUTES.CARADD} component={CarAddPage} />
              <Route exact path={ROUTES.LISTVIEW} component={ListView} />

            </div>
          </Router>
    );

export default withAuthenication(App); 