import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import styled from 'styled-components';

const LandingPage = () => (
    <Landing.Wrapper>
        <Landing.Items>
            <Landing.Title>
                <h1>Landing Page</h1>
            </Landing.Title>

        <button>
            <StyledLink to={ROUTES.SIGN_UP}>Sign Up</StyledLink>
        </button>   

        <button>
            <StyledLink to={ROUTES.SIGN_IN}>Sign In</StyledLink>
        </button>
        </Landing.Items>
    </Landing.Wrapper>
);

export default LandingPage;

const Landing = {
    Wrapper: styled.section`
    display: flex;
    justify-content: center;
    `,
    
    Items: styled.div`
    display: flex;
    flex-direction: column;
    `,

    Title: styled.title`
        display: flex;
        align-self: center;
    `,
  };

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
`