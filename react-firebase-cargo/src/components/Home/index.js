import React from 'react';
import styled from 'styled-components';
// import Navigation from '../Navigation';

import { withAuthorization } from '../Session';

const HomePage = () => (
    <HomeStyle.Wrapper>
        <HomeStyle.Items>
            <h1>Home</h1>
            <p>The Home Page is accessible by every signed in user.</p>
        </HomeStyle.Items>
    </HomeStyle.Wrapper>
        
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);

// <Navigation />


const HomeStyle = {
    Wrapper: styled.div`
    display: flex;
    justify-content: center;
    `,
    
    Items: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `,

    Title: styled.title`
        display: flex;
        align-self: center;
    `,
  };