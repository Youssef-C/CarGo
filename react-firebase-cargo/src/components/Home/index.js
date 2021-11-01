import React from 'react';
import styled from 'styled-components';
// import Navigation from '../Navigation';

import CarMap from '../CarMap/index';
import { withAuthorization } from '../Session';

const HomePage = () => (
    <HomeStyle.Wrapper>
        <HomeStyle.Items>
            <h1>Home</h1>
            <CarMap />
        </HomeStyle.Items>
    </HomeStyle.Wrapper>
        
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);


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