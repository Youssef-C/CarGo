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

        <Landing.Subtitle>
            <p>Text to describe the service</p>
        </Landing.Subtitle>
        
        </Landing.Items>
    </Landing.Wrapper>
);

export default LandingPage;

const Landing = {
    Wrapper: styled.section`
    display: flex;
    justify-content: center;
    margin: 230px 0px 0px 0px;
    `,
    
    Items: styled.div`
    display: flex;
    flex-direction: column;
    max-width: 255px;
    `,

    Title: styled.title`
        display: flex;
        align-self: center;
        margin: 20px;
    `,

    Subtitle: styled.p`
    display: flex;
    align-self: center;
    margin: 20px;
    font-size: 18px;
    `,
  };

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
`