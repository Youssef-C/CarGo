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

//Car Add Pages
import CarAddPage from '../CarAdd';
import ConfirmCarModel from '../CarAdd/ConfirmCarModel';
import AddImagesCar from '../CarAdd/AddImagesCar';
import AddPriceCar from '../CarAdd/AddPriceCar';
import RentCarDate from '../CarAdd/RentDateCar';
import ConfirmationCar from '../CarAdd/ConfirmationCar';



import ListView from '../CarMap/ListView';
import CarView from '../Car View/index';
import CarBook from '../CarBook/index';
import OtherUser from '../OtherUser/index';
import Review from '../Review';


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
              <Route exact path={ROUTES.CARVIEW} component={CarView} />
              <Route exact path={ROUTES.CARBOOK} component={CarBook} />
              <Route exact path={ROUTES.OTHERUSER} component={OtherUser} />
              <Route exact path={ROUTES.REVIEW} component={Review} />

              <Route exact path={ROUTES.ADDCARIMAGES} component={AddImagesCar} />
              <Route exact path={ROUTES.ADDPRICECAR} component={AddPriceCar} />
              <Route exact path={ROUTES.RENTDATECAR} component={RentCarDate} />
              <Route exact path={ROUTES.CONFIRMATIONCAR} component={ConfirmationCar} />
              <Route exact path={ROUTES.CONFIRMCARMODEL} component={ConfirmCarModel} />

            </div>
          </Router>
    );

export default withAuthenication(App); 