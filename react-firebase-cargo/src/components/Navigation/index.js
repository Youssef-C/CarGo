import React from 'react'; 
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigaton = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigatonAuth /> : <NavigatonAuth /> 
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigatonAuth = () => (
    <div>
        
        <ul>


            <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>

            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>

            <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            
            <li>
                <SignOutButton />
            </li>

            <li>
                <Link to={ROUTES.ADMIN}>Admin</Link>
            </li>

            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>

        </ul>
    </div>
);

export default Navigaton; 