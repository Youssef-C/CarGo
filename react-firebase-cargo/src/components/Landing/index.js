import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const LandingPage = () => (
    <div>
        <h1>Landing Page</h1>
        <button>
            <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </button>   

        <button>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </button>
    </div>
);
export default LandingPage;